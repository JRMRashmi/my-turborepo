import { ReactElement } from 'react'
import { urlFor } from '../../lib/image'

type HeroSection={
    heading:string
    subheading:string
    image?:any
}

type HeroProps = {
  section: HeroSection
}

export default function Hero({ section }: HeroProps): ReactElement {
  return (
    <section>
      <h2>{section.heading}</h2>

      {section.image && (
        <img
          src={urlFor(section.image).width(800).url()}
          alt={section.heading}
        />
      )}

      <p>{section.subheading}</p>
    </section>
  )
}