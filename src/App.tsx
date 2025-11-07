import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectCard from './components/ProjectCard'
import Services from './components/Services'
import PortfolioPreview from './components/PortfolioPreview'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Services />
        <PortfolioPreview />

        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}