interface VideoItem {
  id: string
  embedUrl: string
  title: string
}

// IDs e embeds derivados dos links fornecidos
const items: VideoItem[] = [
  {
    id: '1134430311',
    embedUrl: 'https://player.vimeo.com/video/1134430311?title=0&byline=0&portrait=0',
    title: 'Vídeo 1'
  },
  {
    id: '1134430826',
    embedUrl: 'https://player.vimeo.com/video/1134430826?title=0&byline=0&portrait=0',
    title: 'Vídeo 2'
  },
]

export default function PortfolioPreview() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="container py-16 md:py-24">
        <div className="text-center space-y-3 mb-10">
          <h2 className="section-title">Trabalhos <span className="text-gradient">Recentes</span></h2>
          <p className="section-subtitle">Veja alguns dos nossos projetos e o resultado profissional que entregamos</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <article key={it.id} className="rounded-xl border border-border shadow-card overflow-hidden">
              <div className="relative aspect-[9/16]">
                <iframe
                  src={it.embedUrl}
                  title={it.title}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}