"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const pricingFeatures = [
    "Prix affiché avant la réservation",
    "Pas de frais cachés ni de surprises",
    "Tarifs compétitifs et transparents",
    "Paiement mobile ou en espèces",
]

export function PricingSection() {
    return (
        <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contenu texte */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-600 rounded-full text-sm font-semibold mb-4">
                                Tarifs transparents
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                                Des tarifs justes,
                                <span className="block text-accent">sans surprise</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Avec Afrigo, vous connaissez le prix exact de votre course
                                avant même de monter dans le véhicule.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {pricingFeatures.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-gray-700"
                                >
                                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image mockup téléphone */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                        <Image
                            src="/images/afrigo_phone_mockup_1765388380102.png"
                            alt="Application Afrigo"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
