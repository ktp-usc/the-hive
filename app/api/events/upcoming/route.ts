import { NextResponse } from "next/server";

import { getUpcomingCalendarEvents } from "@/lib/calendar";

export const revalidate = 900;

export async function GET() {
  try {
    const events = await getUpcomingCalendarEvents();

    return NextResponse.json({ events });
  } catch (error) {
    console.error("Unable to load upcoming calendar events.", error);

    return NextResponse.json(
      { events: [], error: "Unable to load upcoming events right now." },
      { status: 500 }
    );
  }
}
