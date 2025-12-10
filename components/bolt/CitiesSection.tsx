"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CitiesSection() {
    return (
        <section className="section-bolt section-bolt-dark">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px]"
                    >
                        <Image
                            src="/images/afrigo_lifestyle_city_1765388339654.png"
                            alt="Villes africaines"
                            fill
                            className="object-cover rounded-3xl"
                        />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-white"
                    >
                        <h2 className="heading-bolt-lg mb-6">
                            Des villes pour les habitants, pas pour les voitures.
                        </h2>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Nous créons des villes pour les habitants en offrant de meilleures
                            alternatives à toutes les utilisations d&apos;une voiture individuelle.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Transport avec chauffeur fiable",
                                "Livraison de repas et courses",
                                "Solutions pour entreprises",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-bolt-green rounded-full" />
                                    <span className="text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-2 text-bolt-green font-semibold hover:gap-4 transition-all">
                            Notre mission
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
