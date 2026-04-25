import { ReactElement } from 'react'

type CTASection = {
  title: string
  buttonText: string
  buttonLink: string
}

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