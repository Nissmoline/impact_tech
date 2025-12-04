import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Web Application', value: 'Web Application'},
          {title: 'Website', value: 'Website'},
          {title: 'Mobile App', value: 'Mobile App'},
          {title: 'SaaS', value: 'SaaS'},
          {title: 'E-commerce', value: 'E-commerce'},
          {title: 'Portfolio', value: 'Portfolio'},
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of technologies/frameworks used',
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'live',
      title: 'Live Demo URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
      order: 'order',
    },
    prepare(selection) {
      const {title, subtitle, media, order} = selection
      return {
        title: `${order}. ${title}`,
        subtitle: subtitle,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
      ],
    },
  ],
})
