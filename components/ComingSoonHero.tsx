"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRight, Calendar, Bell } from "lucide-react"
import { SparklesIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function ComingSoonHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-700 to-primary-900 pt-24 md:pt-20">
      {/* Premium Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,122,58,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(45,122,58,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/20 to-primary-900/40" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
            data-aos="fade-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full border border-accent/30 shadow-glow mt-4"
            >
              <SparklesIcon className="w-5 h-5 text-accent-300 animate-pulse" />
              <span className="text-accent-200 font-semibold text-sm">Bientôt disponible au Congo</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-shadow-lg"
            >
              <span className="block text-white">Afrigo</span>
              <span className="block text-accent-400 bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                Votre Transport Africain
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-gray-200 font-normal">
                Arrive bientôt
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-lg leading-relaxed"
            >
              La première application de VTC au Congo. 
              Des trajets fiables, rapides et sécurisés pour tous vos déplacements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
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
                <Bell className="mr-2" />
                Être notifié
              </Button>
            </motion.div>

            {/* Premium Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              {[
                { value: "0+", label: "Pré-inscriptions" },
                { value: "0+", label: "Chauffeurs" },
                { value: "0+", label: "Villes" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-400 bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[500px] md:h-[600px] relative"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-3xl" />
            <div className="relative h-full w-full">
              <Image
                src="/images/Afrigo-Taxi.png"
                alt="Afrigo Taxi"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Premium Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2 glass backdrop-blur-sm"
        >
          <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}


