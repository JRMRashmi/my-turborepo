import { SanityImage, ArrayItem } from './common'
import type { RichText } from '../../studio/sanity.types'

export type HeroSection = {
  _key: string
  _type: 'hero'
  heading: string
  subheading?: string
  image?: SanityImage

  richText?: RichText | null

  cta?: {
    title?: string
    buttonText?: string
    buttonLink?: string
  }
}

export type RichTextSection = ArrayItem<RichText>

export type CTASection = {
  _key: string
  _type: 'cta'
  title: string
  buttonText: string
  buttonLink: string
}

export type Section =
  | HeroSection
  | RichTextSection
  | CTASection