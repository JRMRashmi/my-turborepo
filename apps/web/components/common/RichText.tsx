import { ReactElement } from 'react'

import { RichTextSection } from '../../types/section'


type RichTextProps = {
  section: RichTextSection
}
export default function RichText({ section }: RichTextProps): ReactElement {
  return (
    <section>
      <p>{section.content?.[0]?.children?.[0]?.text}</p>
    </section>
  )
}