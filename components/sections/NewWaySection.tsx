"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function NewWaySection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Image de fond pleine largeur */}
            <div className="absolute inset-0">
                <Image
                    src="/images/afrigo_lifestyle_city_1765388339654.png"
                    alt="Transport Afrigo dans la ville"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-2 bg-accent/20 text-accent-300 rounded-full text-sm font-semibold backdrop-blur-sm">
                            Nouvelle façon de voyager
                        </span>

                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            Ici, votre nouvelle façon
                            <span className="block text-accent-400">de vous déplacer</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-lg">
                            Avec Afrigo, commandez un trajet en quelques secondes.
                            Rapide, fiable et toujours au meilleur prix.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
