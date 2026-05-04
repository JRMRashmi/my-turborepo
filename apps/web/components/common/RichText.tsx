import { ReactElement } from 'react'

import { RichTextSection } from '../../types/section'


type RichTextProps = {
  section: RichTextSection
}
export default function RichText({ section }: RichTextProps): ReactElement {
  return (
    <section className="prose prose-lg max-w-none text-gray-700">
      {section.content?.map((block) => (
        <p key={block._key}>{block.children?.map((c) => c.text).join(' ')}</p>
      ))}
    </section>
  )
}