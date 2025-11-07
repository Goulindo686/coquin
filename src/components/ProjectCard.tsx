interface Props {
  title: string
  description: string
  tags?: string[]
}

export default function ProjectCard({ title, description, tags = [] }: Props) {
  return (
    <article className="rounded-lg border border-border gradient-card p-4 shadow-card">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{description}</p>
      {tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <li key={t} className="text-xs px-2 py-1 rounded-full border border-border text-foreground/80">
              {t}
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}