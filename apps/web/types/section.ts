import { SanityImage } from './common'

export type HeroSection = {
  _key: string
  _type: 'hero'
  heading: string
  subheading?: string
  image?: SanityImage
}

export type RichTextSection = {
  _key: string
  _type: 'richText'
  content: any[]
}

export type CTASection = {
  _key: string
  _type: 'cta'
  title: string
  buttonText: string
}

export type Section =
  | HeroSection
  | RichTextSection
  | CTASection