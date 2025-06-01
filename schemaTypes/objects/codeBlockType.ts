import { defineField, defineType } from 'sanity'

export const codeBlockType = defineType({
  name: 'codeBlock',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'filename',
      title: 'Filename',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'code',
    }),
  ],
})
