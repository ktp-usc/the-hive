const CALENDAR_TIME_ZONE = "America/New_York";

export const calendarEmbedUrl =
  "https://calendar.google.com/calendar/embed?src=hello%40thehivecc.org&ctz=America%2FNew_York";

export const calendarDirectUrl =
  "https://calendar.google.com/calendar/u/0?cid=aGVsbG9AdGhlaGl2ZWNjLm9yZw";

const calendarFeedUrl =
  "https://calendar.google.com/calendar/ical/hello%40thehivecc.org/public/basic.ics";

type ParsedDateValue = {
  value: Date;
  allDay: boolean;
};

type ParsedEvent = {
  uid: string;
  title: string;
  start: ParsedDateValue;
  end: ParsedDateValue | null;
};

export type UpcomingCalendarEvent = {
  id: string;
  title: string;
  start: string;
  end: string | null;
  allDay: boolean;
  href: string;
  titleIsPrivate: boolean;
};

function unfoldLines(icsText: string) {
  return icsText
    .replace(/\r\n/g, "\n")
    .split("\n")
    .reduce<string[]>((lines, line) => {
      if ((line.startsWith(" ") || line.startsWith("\t")) && lines.length > 0) {
        lines[lines.length - 1] += line.slice(1);
        return lines;
      }

      lines.push(line);
      return lines;
    }, []);
}

function getPartsInTimeZone(date: Date, timeZone: string) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const parts = formatter.formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === "year")?.value ?? "0"),
    month: Number(parts.find((part) => part.type === "month")?.value ?? "0"),
    day: Number(parts.find((part) => part.type === "day")?.value ?? "0"),
    hour: Number(parts.find((part) => part.type === "hour")?.value ?? "0"),
    minute: Number(parts.find((part) => part.type === "minute")?.value ?? "0"),
    second: Number(parts.find((part) => part.type === "second")?.value ?? "0"),
  };
}

function getTimeZoneOffsetMs(date: Date, timeZone: string) {
  const parts = getPartsInTimeZone(date, timeZone);
  const asUtc = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  );

  return asUtc - date.getTime();
}

function timeZoneDateToUtc(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  second: number,
  timeZone: string
) {
  let timestamp = Date.UTC(year, month - 1, day, hour, minute, second);

  for (let index = 0; index < 2; index += 1) {
    const offset = getTimeZoneOffsetMs(new Date(timestamp), timeZone);
    timestamp -= offset;
  }

  return new Date(timestamp);
}

function parseIcsDate(rawValue: string, isAllDay: boolean) {
  if (isAllDay) {
    const year = Number(rawValue.slice(0, 4));
    const month = Number(rawValue.slice(4, 6));
    const day = Number(rawValue.slice(6, 8));

    return {
      value: new Date(Date.UTC(year, month - 1, day)),
      allDay: true,
    };
  }

  const normalized = rawValue.replace("Z", "");
  const year = Number(normalized.slice(0, 4));
  const month = Number(normalized.slice(4, 6));
  const day = Number(normalized.slice(6, 8));
  const hour = Number(normalized.slice(9, 11));
  const minute = Number(normalized.slice(11, 13));
  const second = Number(normalized.slice(13, 15) || "0");

  return {
    value: rawValue.endsWith("Z")
      ? new Date(Date.UTC(year, month - 1, day, hour, minute, second))
      : timeZoneDateToUtc(year, month, day, hour, minute, second, CALENDAR_TIME_ZONE),
    allDay: false,
  };
}

function parseEvent(lines: string[]) {
  const fields = new Map<string, { params: string[]; value: string }[]>();

  for (const line of lines) {
    const separatorIndex = line.indexOf(":");

    if (separatorIndex === -1) {
      continue;
    }

    const keyChunk = line.slice(0, separatorIndex);
    const value = line.slice(separatorIndex + 1);
    const [key, ...params] = keyChunk.split(";");
    const entries = fields.get(key) ?? [];

    entries.push({ params, value });
    fields.set(key, entries);
  }

  const uid = fields.get("UID")?.[0]?.value;
  const startField = fields.get("DTSTART")?.[0];

  if (!uid || !startField) {
    return null;
  }

  const endField = fields.get("DTEND")?.[0] ?? null;
  const startIsAllDay = startField.params.some((param) => param === "VALUE=DATE");
  const endIsAllDay =
    endField?.params.some((param) => param === "VALUE=DATE") ?? false;

  return {
    uid,
    title: fields.get("SUMMARY")?.[0]?.value?.trim() || "Busy",
    start: parseIcsDate(startField.value, startIsAllDay),
    end: endField ? parseIcsDate(endField.value, endIsAllDay) : null,
  } satisfies ParsedEvent;
}

function createCalendarDayLink(date: Date) {
  const parts = getPartsInTimeZone(date, CALENDAR_TIME_ZONE);

  return `https://calendar.google.com/calendar/u/0/r/day/${parts.year}/${parts.month}/${parts.day}?cid=aGVsbG9AdGhlaGl2ZWNjLm9yZw`;
}

export async function getUpcomingCalendarEvents(limit = 4) {
  const response = await fetch(calendarFeedUrl, {
    next: { revalidate: 900 },
  });

  if (!response.ok) {
    throw new Error(`Calendar feed request failed with status ${response.status}.`);
  }

  const icsText = await response.text();
  const lines = unfoldLines(icsText);
  const events: ParsedEvent[] = [];
  let activeEventLines: string[] | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      activeEventLines = [];
      continue;
    }

    if (line === "END:VEVENT") {
      if (activeEventLines) {
        const parsedEvent = parseEvent(activeEventLines);

        if (parsedEvent) {
          events.push(parsedEvent);
        }
      }

      activeEventLines = null;
      continue;
    }

    if (activeEventLines) {
      activeEventLines.push(line);
    }
  }

  const now = new Date();

  const upcomingEvents = events
    .filter((event) => {
      const effectiveEnd = event.end?.value ?? event.start.value;

      return effectiveEnd.getTime() >= now.getTime();
    })
    .sort((left, right) => left.start.value.getTime() - right.start.value.getTime())
    .map((event) => ({
      id: `${event.uid}-${event.start.value.toISOString()}`,
      title: event.title,
      start: event.start.value.toISOString(),
      end: event.end?.value.toISOString() ?? null,
      allDay: event.start.allDay,
      href: createCalendarDayLink(event.start.value),
      titleIsPrivate: event.title.trim().toLowerCase() === "busy",
    }));

  return Array.from(
    new Map(upcomingEvents.map((event) => [event.id, event])).values()
  ).slice(0, limit);
}
