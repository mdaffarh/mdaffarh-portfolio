import { defineField, defineType } from "sanity"

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "demoUrl",
      title: "Demo/Deployed URL",
      type: "url",
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      description: "Project start date (Month and Year)",
      options: {
        dateFormat: "MMMM YYYY",
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      description: "Project end date (Month and Year). Leave empty if ongoing",
      options: {
        dateFormat: "MMMM YYYY",
      },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first (optional, will auto-sort by date if not set)",
      validation: Rule => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: "title",
      role: "role",
      media: "image",
    },
    prepare(selection) {
      const { title, role, media } = selection
      return {
        title,
        subtitle: role,
        media,
      }
    },
  },
})
