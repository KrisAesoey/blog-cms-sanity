import { defineField, defineType } from 'sanity'

export const richImageType = defineType({
  name: 'richImage',
  title: 'Rich Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'string',
    }),
  ],
})
