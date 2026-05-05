import { ReactNode, ReactElement } from 'react'

export default function Container({
  children,
}: {
  children: ReactNode
}): ReactElement {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
      {children}
    </div>
  )
}