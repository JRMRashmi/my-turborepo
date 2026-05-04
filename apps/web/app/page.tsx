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

   console.log("SANITY DATA:", data) // 👈 ADD HERE

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="mb-10 text-4xl font-bold tracking-tight text-gray-900">
          {data.title}
        </h1>

        <div className="space-y-16">
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
        </div>
      </div>
    </main>
  )
}