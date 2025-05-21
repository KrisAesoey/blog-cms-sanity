import { defineField, defineType } from 'sanity'

export const richImageListType = defineType({
  name: 'richImageList',
  title: 'Rich Image List',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'richImage',
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      richImages: 'items',
    },
    prepare: ({ richImages }) => ({
      title: richImages
        ? `${richImages.length} rich image${richImages.length === 1 ? '' : 's'}`
        : 'empty',
    }),
  },
})
