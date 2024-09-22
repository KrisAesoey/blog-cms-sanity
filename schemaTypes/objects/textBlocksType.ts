import {defineField, defineType} from 'sanity'

export const textBlocksType = defineType({
  name: 'textBlocks',
  title: 'Text Blocks',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineType({
          name: 'textBlock',
          title: 'Text Block',
          type: 'object',
          fields: [
            defineField({
              name: 'content',
              title: 'Content',
              type: 'array',
              of: [{type: 'block'}],
            }),
          ],
        }),
      ],
    }),
  ],
})
