import { ReactElement } from 'react'
import { urlFor } from '../../lib/image'
import { HeroSection } from '../../types/section'

// OPTIONAL (recommended for proper rich text rendering)
import { PortableText } from '@portabletext/react'

type HeroProps = {
  section: HeroSection
}

export default function Hero({ section }: HeroProps): ReactElement {
  return (
    <section className="grid md:grid-cols-2 items-stretch min-h-[500px] rounded-2xl overflow-hidden">

  {/* LEFT SIDE (FULL HEIGHT CARD) */}
  <div className="relative bg-indigo-800 text-white p-10 flex flex-col justify-center h-full">

    <h2 className="text-3xl font-bold mb-4">
      {section.heading}
    </h2>

    {section.subheading && (
      <p className="text-gray-200 mb-4">
        {section.subheading}
      </p>
    )}

    {/* ✅ Use PortableText (clean way) */}
    {section.richText?.content && (
      <div className="text-sm text-gray-200 mb-6">
        <PortableText value={section.richText.content} />
      </div>
    )}

    {/* CTA */}
    {section.cta?.buttonText && (
      <a
        href={section.cta.buttonLink || '#'}
        className="inline-block bg-yellow-400 text-black px-4 py-2 rounded font-semibold w-fit"
      >
        {section.cta.buttonText}
      </a>
    )}

    {/* Arrow */}
    <div className="absolute top-1/2 -right-4 w-8 h-8 bg-indigo-800 rotate-45 -translate-y-1/2"></div>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="h-full">
    <img
      src={urlFor(section.image).width(900).url()}
      alt={section.heading}
      className="w-full h-[500px] object-cover"
    />
  </div>

</section>
  )
}