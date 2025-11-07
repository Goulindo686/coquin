export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-border backdrop-blur bg-background/80">
      <div className="container h-14 flex items-center justify-between">
        <a href="#" className="font-bold tracking-tight">MOTO EDITS</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#projects" className="hover:text-foreground transition-smooth">Projetos</a>
          <a href="https://wa.me/5532984232018" target="_blank" rel="noreferrer" className="btn-primary shadow-glow">WhatsApp</a>
        </nav>
      </div>
    </header>
  )
}