"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Car, Bike, Store, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const earnOptions = [
    {
        icon: Car,
        title: "Conduisez et générez des revenus",
        description: "Inscrivez-vous en tant que chauffeur et commencez à gagner de l'argent dès aujourd'hui.",
        image: "/images/afrigo_driver_happy_1765388354916.png",
        link: "/chauffeurs",
        color: "bg-afrigo-accent",
    },
    {
        icon: Bike,
        title: "Livrez et gagnez",
        description: "Devenez livreur partenaire et générez des revenus à chaque livraison.",
        image: "/images/afrigo_lifestyle_city_1765388339654.png",
        link: "#",
        color: "bg-orange-500",
    },
    {
        icon: Store,
        title: "Vendez sur Afrigo",
        description: "Augmentez vos ventes et atteignez de nouveaux clients avec notre plateforme.",
        image: "/images/afrigo_passengers_1765388400350.png",
        link: "#",
        color: "bg-purple-500",
    },
    {
        icon: Building2,
        title: "Gérez votre flotte",
        description: "Développez votre activité de transport avec nos outils de gestion de flotte.",
        image: "/images/afrigo_phone_mockup_1765388380102.png",
        link: "#",
        color: "bg-afrigo-primary",
    },
]

export function EarnSection() {
    return (
        <section className="section-afrigo section-afrigo-gray">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="heading-afrigo-lg text-afrigo-primary mb-4">
                        Générez des revenus avec Afrigo
                    </h2>
                    <p className="text-afrigo-body max-w-2xl mx-auto">
                        Rejoignez une communauté de partenaires qui génèrent des revenus avec Afrigo.
                        Pour les chauffeurs, les livreurs, les commerçants et les gestionnaires de flotte.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {earnOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={option.link} className="block group">
                                <div className="card-afrigo h-full">
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={option.image}
                                            alt={option.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-4 left-4 ${option.color} p-2 rounded-xl`}>
                                            <option.icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-afrigo-primary mb-2 group-hover:text-afrigo-accent transition-colors">
                                            {option.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-4">
                                            {option.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-afrigo-accent font-medium text-sm group-hover:gap-3 transition-all">
                                            En savoir plus
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
