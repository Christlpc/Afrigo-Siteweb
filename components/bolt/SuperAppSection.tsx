"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const stats = [
    { value: "2+", label: "Villes au Congo" },
    { value: "0+", label: "Chauffeurs partenaires" },
    { value: "0+", label: "Utilisateurs" },
]

export function SuperAppSection() {
    return (
        <section className="section-afrigo bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-2 bg-afrigo-accent/10 text-afrigo-accent rounded-full text-sm font-semibold mb-6">
                            Première au Congo
                        </span>

                        <h2 className="heading-afrigo-lg text-afrigo-primary mb-6">
                            Afrigo est la première application VTC au Congo.
                        </h2>

                        <p className="text-afrigo-body mb-8">
                            Nous révolutionnons le transport au Congo en offrant de meilleures
                            alternatives pour tous vos déplacements : transport avec chauffeur,
                            livraison de repas et solutions entreprises.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-bold text-afrigo-accent mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="inline-flex items-center gap-2 text-afrigo-primary font-semibold hover:gap-4 transition-all border-b-2 border-afrigo-primary pb-1">
                            Notre mission
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-afrigo-accent/20 to-transparent rounded-3xl blur-3xl" />
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
