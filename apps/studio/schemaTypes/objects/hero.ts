import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({name: 'heading', type: 'string'}),
    defineField({name: 'subheading', type: 'text'}),
    defineField({name: 'image', type: 'image'}),

     // ✅ Rich text
    defineField({
      name: 'richText',
      title: 'Content',
      type: 'richText'
    }),

    // ✅ Use CTA schema here
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'cta' // 👈 reuse your existing schema
    })
  ]
})