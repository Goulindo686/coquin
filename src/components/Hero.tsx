export default function Hero() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('https://i.imgur.com/cJmZkH7.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)'
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      {/* Sombreamento forte à esquerda para destacar os textos */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)'
        }}
      />
      <div className="relative container py-20 md:py-28">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Transforme Seus <span className="text-gradient">Rolês de Moto</span>
            <br /> em Conteúdo Épico
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Edição profissional de vídeos para motociclistas que querem bombar nas redes sociais.
            Especialistas em grau, wheeling e manobras radicais.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5532984232018"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-accent transition-smooth shadow-glow"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-foreground/20">💬</span>
              Quero Meu Vídeo Pro
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-foreground hover:bg-muted/20 transition-smooth"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-border">▶</span>
              Ver Trabalhos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center animate-pulse">
          <div className="w-2 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}