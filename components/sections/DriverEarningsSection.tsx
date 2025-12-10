"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Clock, Calendar, Users } from "lucide-react"
import Link from "next/link"

const benefits = [
    {
        icon: DollarSign,
        value: "500K+",
        label: "Revenus potentiels/mois",
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: Clock,
        value: "24/7",
        label: "Flexibilité totale",
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Calendar,
        value: "0",
        label: "Frais d'inscription",
        color: "from-purple-500 to-pink-500",
    },
    {
        icon: Users,
        value: "1000+",
        label: "Clients prêts à réserver",
        color: "from-orange-500 to-red-500",
    },
]

export function DriverEarningsSection() {
    return (
        <section className="py-24 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contenu */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent/10 text-accent-600 rounded-full text-sm font-semibold mb-4">
                                Chauffeurs partenaires
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                                Générez des revenus
                                <span className="block text-accent">avec Afrigo</span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Rejoignez la première plateforme VTC au Congo.
                                Conduisez quand vous voulez, gagnez ce que vous méritez.
                            </p>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-premium hover:shadow-premium-lg transition-shadow"
                                >
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4`}>
                                        <benefit.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="text-3xl font-bold text-primary">{benefit.value}</div>
                                    <div className="text-sm text-gray-600">{benefit.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="/chauffeurs">
                            <Button
                                size="xl"
                                variant="accent"
                                className="group shadow-glow hover:shadow-glow-lg hover-lift"
                            >
                                Devenir chauffeur partenaire
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl" />
                        <Image
                            src="/images/afrigo_driver_happy_1765388354916.png"
                            alt="Chauffeur Afrigo"
                            fill
                            className="object-cover rounded-3xl shadow-premium-lg"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
