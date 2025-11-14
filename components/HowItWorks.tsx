"use client"

import { motion } from "framer-motion"
import { Smartphone, MapPin, Car, CheckCircle } from "lucide-react"
import { Scene3D } from "@/components/3d/Scene3D"
import { Phone3D } from "@/components/3d/Phone3D"

const steps = [
  {
    icon: Smartphone,
    title: "Téléchargez l'app",
    description: "Installez Afrigo depuis Google Play ou App Store",
    step: "01",
  },
  {
    icon: MapPin,
    title: "Indiquez votre destination",
    description: "Entrez où vous voulez aller et voyez le prix instantanément",
    step: "02",
  },
  {
    icon: Car,
    title: "Un chauffeur arrive",
    description: "Suivez votre chauffeur en temps réel jusqu'à votre position",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Profitez du trajet",
    description: "Détendez-vous et arrivez à destination en toute sécurité",
    step: "04",
  },
]

export function HowItWorks() {
  return (
    <section id="comment-ca-marche" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Comment Ça Marche ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            4 étapes simples pour vous déplacer facilement
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-5xl font-bold text-accent/20">{step.step}</span>
                    <h3 className="text-2xl font-bold text-primary">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Phone */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[500px] lg:h-[600px]"
          >
            <Scene3D>
              <Phone3D />
            </Scene3D>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




