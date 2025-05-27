export default {
    name: "calendarEvent",
    title: "Calendar Event",
    type: "document",
    fields: [
        {
            name: "index",
            title: "Index",
            type: "number",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "date",
            title: "Date",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "time",
            title: "Time",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "location",
            title: "Location",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
}