import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'buttonText', type: 'string'}),
    defineField({name: 'buttonLink', type: 'string'})
  ]
})