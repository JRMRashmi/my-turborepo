import { ReactElement } from 'react'

type RichTextSection = {
  content: any[]
}

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