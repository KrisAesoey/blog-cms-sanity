import {defineField, defineType} from 'sanity'

export const codeBlocksType = defineType({
  name: 'codeBlocks',
  title: 'Code Blocks',
  type: 'object',
  fields: [
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [defineField({name: 'codeBlock', title: 'Code block', type: 'code'})],
    },
  ],
})
