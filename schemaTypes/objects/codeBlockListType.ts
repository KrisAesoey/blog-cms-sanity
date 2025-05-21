import { defineField, defineType, validation } from 'sanity'

export const codeBlockListType = defineType({
  name: 'codeBlockList',
  title: 'Code Blocks',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        defineField({
          name: 'codeBlock',
          title: 'Code block',
          type: 'code',
        }),
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      items: 'items',
    },
    prepare({ items }) {
      const itemCount = items?.length || 0
      return {
        title: `Code Blocks (${itemCount} item${itemCount === 1 ? '' : 's'})`,
      }
    },
  },
})
