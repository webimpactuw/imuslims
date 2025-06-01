export default {
    name: "poster",
    title: "Poster",
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
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
            options: {
                hotspot: true,
            },
        }
    ],
}