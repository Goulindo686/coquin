import type { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  id?: string
  title: string
  subtitle?: string
}

export default function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="border-b border-border">
      <div className="container py-16 md:py-20 space-y-6">
        <div className="space-y-2">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}