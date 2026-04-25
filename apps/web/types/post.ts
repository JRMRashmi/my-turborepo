import { Slug, SEO, SanityImage } from './common'

export type Post = {
  _id: string
  _type: 'post'
  title: string
  slug: Slug
  excerpt?: string
  featuredImage?: SanityImage
  seo?: SEO
}