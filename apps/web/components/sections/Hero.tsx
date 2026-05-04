import { ReactElement } from 'react'
import { urlFor } from '../../lib/image'

import { HeroSection } from '../../types/section'

type HeroProps = {
  section: HeroSection
}


export default function Hero({ section }: HeroProps): ReactElement {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          {section.heading}
        </h2>

        {section.subheading && (
          <p className="mt-4 text-lg text-gray-600">
            {section.subheading}
          </p>
        )}
      </div>

      {section.image && (
        <img
          src={urlFor(section.image).width(800).url()}
          alt={section.heading}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      )}

    </section>
  )
}