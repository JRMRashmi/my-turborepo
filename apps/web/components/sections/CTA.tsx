import { ReactElement } from 'react'
import { CTASection } from '../../types/section'

type CTAProps = {
  section: CTASection
}

export default function CTA({ section }: CTAProps): ReactElement {
  return (
    <section className="rounded-2xl bg-blue-600 px-8 py-12 text-center text-white shadow-lg">
      <h3 className="text-3xl font-bold">{section.title}</h3>

      <a href={section.buttonLink} className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-colors duration-300 hover:bg-gray-100">
        {section.buttonText}
      </a>
    </section>




  )
}