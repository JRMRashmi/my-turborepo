import { Slug, SEO } from './common'
import { Section } from './section'

export type Page = {
  _id: string
  _type: 'page'
  title: string
  slug: Slug
  seo?: SEO
  sections: Section[]
}