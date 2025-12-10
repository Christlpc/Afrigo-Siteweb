import {
  BoltNavbar,
  BoltHero,
  ServicesSection,
  CitiesSection,
  SuperAppSection,
  EarnSection,
  DownloadSection,
  BoltFooter,
} from "@/components/bolt"

export default function Home() {
  return (
    <main className="min-h-screen">
      <BoltNavbar />
      <BoltHero />
      <ServicesSection />
      <CitiesSection />
      <SuperAppSection />
      <EarnSection />
      <DownloadSection />
      <BoltFooter />
    </main>
  )
}
