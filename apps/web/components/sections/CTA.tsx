import { ReactElement } from 'react'
import { CTASection } from '../../types/section'

type CTAProps = {
  section: CTASection
}

export default function CTA({ section }: CTAProps): ReactElement {
  return (
    <section>
      <h3>{section.title}</h3>

      <a href={section.buttonLink}>
        {section.buttonText}
      </a>
    </section>
  )
}