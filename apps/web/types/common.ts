export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export type Slug = {
  current: string
}

export type SEO = {
  metaTitle?: string
  metaDescription?: string
}

export type ArrayItem<T> = T & {
  _key: string
}