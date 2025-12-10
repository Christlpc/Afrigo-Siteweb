import { Navbar } from "@/components/Navbar"
import { ComingSoonHero } from "@/components/ComingSoonHero"
import {
  NewWaySection,
  PricingSection,
  FirstAppSection,
  DriverEarningsSection,
  AppDownloadSection
} from "@/components/sections"
import { ComingSoonCTA } from "@/components/ComingSoonCTA"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ComingSoonHero />
      <NewWaySection />
      <PricingSection />
      <FirstAppSection />
      <DriverEarningsSection />
      <AppDownloadSection />
      <ComingSoonCTA />
      <Footer />
    </main>
  )
}
