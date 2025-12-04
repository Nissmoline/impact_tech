import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Testimonial Content',
      type: 'text',
      rows: 5,
      validation: Rule => Rule.required().min(20).max(500),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Image',
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
      description: 'Optional. Will show initials if not provided.',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      initialValue: 5,
      validation: Rule => Rule.required().min(1).max(5),
      options: {
        list: [
          {title: '⭐', value: 1},
          {title: '⭐⭐', value: 2},
          {title: '⭐⭐⭐', value: 3},
          {title: '⭐⭐⭐⭐', value: 4},
          {title: '⭐⭐⭐⭐⭐', value: 5},
        ],
      },
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
      title: 'name',
      subtitle: 'company',
      media: 'avatar',
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
  ],
})
