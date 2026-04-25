import { ReactElement } from 'react'
import { client } from '../lib/sanity.client'
import { homePageQuery } from '../lib/queries'

import Hero from '../components/sections/Hero'
import RichText from '../components/common/RichText'
import CTA from '../components/sections/CTA'

import { Page } from '../types/page'
import { Section } from '../types/section'

export default async function HomePage(): Promise<ReactElement> {
  const data: Page = await client.fetch(homePageQuery)

  return (
    <main>
      <h1>{data.title}</h1>

      {data.sections.map((section: Section) => {
        switch (section._type) {
          case 'hero':
            return <Hero key={section._key} section={section} />

          case 'richText':
            return <RichText key={section._key} section={section} />

          case 'cta':
            return <CTA key={section._key} section={section} />

          default:
            return null
        }
      })}
    </main>
  )
}