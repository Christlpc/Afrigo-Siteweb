"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Smartphone, Shield, MapPin } from "lucide-react"

const features = [
    {
        icon: Smartphone,
        title: "Réservation en 2 clics",
        description: "Interface simple et rapide",
    },
    {
        icon: Shield,
        title: "100% Sécurisé",
        description: "Trajets suivis en temps réel",
    },
    {
        icon: MapPin,
        title: "Partout au Congo",
        description: "Brazzaville, Pointe-Noire et plus",
    },
]

export function FirstAppSection() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(45,122,58,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(45,122,58,0.15),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px] order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-3xl" />
                        <Image
                            src="/images/afrigo_phone_mockup_1765388380102.png"
                            alt="Application Afrigo"
                            fill
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    {/* Contenu */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-300 rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
                                Première au Congo
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Afrigo est la première
                                <span className="block text-accent-400">application VTC</span>
                                <span className="block">au Congo</span>
                            </h2>

                            <p className="text-xl text-gray-200 leading-relaxed">
                                Nous révolutionnons le transport au Congo avec une technologie
                                moderne et un service de qualité premium.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-3 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass p-6 rounded-2xl border border-white/10"
                                >
                                    <feature.icon className="w-8 h-8 text-accent-400 mb-3" />
                                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-sm text-gray-300">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
