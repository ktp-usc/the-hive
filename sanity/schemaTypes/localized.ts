import { defineField, defineType } from "sanity";

export const localizedString = defineType({
    name: "localizedString",
    title: "Localized string",
    type: "object",
    fields: [
        defineField({ name: "en", title: "English", type: "string" }),
        defineField({ name: "es", title: "Spanish", type: "string" }),
    ],
});

export const localizedText = defineType({
    name: "localizedText",
    title: "Localized text",
    type: "object",
    fields: [
        defineField({ name: "en", title: "English", type: "text" }),
        defineField({ name: "es", title: "Spanish", type: "text" }),
    ],
});