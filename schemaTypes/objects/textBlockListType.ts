import { defineField, defineType } from 'sanity'

export const textBlockListType = defineType({
  name: 'textBlockList',
  title: 'Text Blocks',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'textBlock' }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      textBlocks: 'items',
    },
    prepare: ({ textBlocks }) => ({
      title: textBlocks
        ? `${textBlocks.length} text block${textBlocks.length === 1 ? '' : 's'}`
        : 'empty',
    }),
  },
})
