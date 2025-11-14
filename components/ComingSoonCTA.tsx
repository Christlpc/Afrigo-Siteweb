"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { SparklesIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function ComingSoonCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-700 to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(45,122,58,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(45,122,58,0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          className="text-center text-white max-w-4xl mx-auto space-y-10"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-accent/30 shadow-glow mb-4">
            <SparklesIcon className="w-5 h-5 text-accent-300 animate-pulse" />
            <span className="text-accent-200 font-semibold text-sm">Rejoignez-nous dès maintenant</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-shadow-lg">
            Prêt à Rejoindre Afrigo ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant pour être parmi les premiers à profiter 
            de notre service de transport au Congo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/chauffeurs">
              <Button
                size="xl"
                variant="accent"
                className="group w-full sm:w-auto shadow-glow hover:shadow-glow-lg hover-lift transition-all duration-300"
              >
                Devenir Chauffeur
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              size="xl"
              variant="outline"
              className="glass border-white/30 text-white hover:bg-white/20 w-full sm:w-auto hover-lift"
            >
              <Download className="mr-2" />
              Être notifié du lancement
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


