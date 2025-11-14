"use client"

import { Clock, Shield, DollarSign, MapPin, Star, Zap } from "lucide-react"
import { 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  MapPinIcon,
  StarIcon,
  BoltIcon
} from "@heroicons/react/24/outline"

const features = [
  {
    icon: ClockIcon,
    iconLucide: Clock,
    title: "Rapide & Fiable",
    description: "Trouvez un chauffeur en moins de 2 minutes, 24h/24 et 7j/7",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShieldCheckIcon,
    iconLucide: Shield,
    title: "Sécurisé",
    description: "Chauffeurs vérifiés et assurés pour votre tranquillité d'esprit",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CurrencyDollarIcon,
    iconLucide: DollarSign,
    title: "Prix Transparents",
    description: "Connaissez le prix avant de réserver, sans surprises",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: MapPinIcon,
    iconLucide: MapPin,
    title: "Suivi en Temps Réel",
    description: "Suivez votre chauffeur en direct sur la carte",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: StarIcon,
    iconLucide: Star,
    title: "Service Premium",
    description: "Des chauffeurs professionnels et des véhicules confortables",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: BoltIcon,
    iconLucide: Zap,
    title: "Réservation Instantanée",
    description: "Réservez en quelques clics depuis votre smartphone",
    gradient: "from-pink-500 to-rose-500",
  },
]

export function ComingSoonFeatures() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-20"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 text-shadow-premium">
            Pourquoi Choisir Afrigo ?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expérience de transport moderne, adaptée aux besoins des Congolais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              <div className="relative p-8 rounded-3xl bg-white border border-gray-100 hover-lift shadow-premium hover:shadow-premium-lg transition-all duration-300">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-300 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


