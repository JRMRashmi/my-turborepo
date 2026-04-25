import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}}),
    defineField({name: 'seo', type: 'seo'}),
    defineField({
      name: 'sections',
      type: 'array',
      of: [{type: 'hero'}, {type: 'cta'}, {type: 'richText'}]
    })
  ]
})