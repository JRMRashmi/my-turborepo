import { ReactElement } from 'react'
import { client } from '../lib/sanity.client'
import { homePageQuery } from '../lib/queries'

import Hero from '../components/sections/Hero'
import Container from '../components/common/Container'

import { Page } from '../types/page'
import { Section } from '../types/section'

export default async function HomePage(): Promise<ReactElement> {
  const data: Page = await client.fetch(homePageQuery)

  return (
    <main className="min-h-screen">

      {/* Title */}
      <Container>
        <h1 className="py-6 text-4xl font-bold text-gray-900">
          {data.title}
        </h1>
      </Container>

      {/* Sections */}
      <div className="space-y-16">
        {data.sections.map((section: Section) => {
          switch (section._type) {
            case 'hero':
              return (
                <Container key={section._key}>
                  <Hero section={section} />
                </Container>
              )

            default:
              return null
          }
        })}
      </div>

    </main>
  )
}