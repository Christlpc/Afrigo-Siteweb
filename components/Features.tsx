"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Clock, Shield, DollarSign, MapPin, Star, Zap } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Rapide & Fiable",
    description: "Trouvez un chauffeur en moins de 2 minutes, 24h/24 et 7j/7",
    color: "text-blue-500",
  },
  {
    icon: Shield,
    title: "Sécurisé",
    description: "Chauffeurs vérifiés et assurés pour votre tranquillité d'esprit",
    color: "text-green-500",
  },
  {
    icon: DollarSign,
    title: "Prix Transparents",
    description: "Connaissez le prix avant de réserver, sans surprises",
    color: "text-yellow-500",
  },
  {
    icon: MapPin,
    title: "Suivi en Temps Réel",
    description: "Suivez votre chauffeur en direct sur la carte",
    color: "text-purple-500",
  },
  {
    icon: Star,
    title: "Service Premium",
    description: "Des chauffeurs professionnels et des véhicules confortables",
    color: "text-orange-500",
  },
  {
    icon: Zap,
    title: "Réservation Instantanée",
    description: "Réservez en quelques clics depuis votre smartphone",
    color: "text-pink-500",
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pourquoi Choisir Afrigo ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une expérience de transport moderne, adaptée aux besoins des Congolais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-2xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}




