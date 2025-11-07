export default function Services() {
  const items = [
    { icon: '🎬', title: 'Edição Profissional', description: 'Cortes dinâmicos, transições suaves e efeitos cinematográficos para destacar suas manobras.' },
    { icon: '✨', title: 'Color Grading Premium', description: 'Tratamento de cor com visual profissional e impactante.' },
    { icon: '⚡', title: 'Efeitos Especiais', description: 'Motion graphics, slow motion estratégico e efeitos que amplificam a adrenalina.' },
    { icon: '📈', title: 'Otimizado para Redes', description: 'Formato e duração ideal para Instagram, TikTok e YouTube. Pronto para viralizar.' },
  ]

  return (
    <section className="border-b border-border">
      <div className="container py-16 md:py-24">
        <div className="text-center space-y-3 mb-10">
          <h2 className="section-title">
            Serviços que <span className="text-gradient">Elevam seu Conteúdo</span>
          </h2>
          <p className="section-subtitle">Edição especializada para motociclistas que querem se destacar nas redes sociais</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <article key={s.title} className="rounded-xl border border-border gradient-card p-6 shadow-card">
              <div className="w-10 h-10 rounded-md bg-accent text-accent-foreground flex items-center justify-center mb-4">
                <span className="text-xl">{s.icon}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}