export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container h-16 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Coquin Edits</p>
        <div className="text-sm text-muted-foreground">Feito com React & Tailwind</div>
      </div>
    </footer>
  )
}