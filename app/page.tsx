import { Navbar } from "@/components/Navbar"
import { ComingSoonHero } from "@/components/ComingSoonHero"
import { ComingSoonFeatures } from "@/components/ComingSoonFeatures"
import { ComingSoonCTA } from "@/components/ComingSoonCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComingSoonHero />
      <ComingSoonFeatures />
      <ComingSoonCTA />
      <Footer />
    </main>
  )
}



