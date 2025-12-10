"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Car, Pizza, Truck, Building2 } from "lucide-react"

const services = [
    {
        id: "trajets",
        name: "Trajets",
        icon: Car,
        title: "Des trajets fiables à petit prix",
        description: "Commandez un trajet en quelques secondes et arrivez à destination en toute sérénité. Des chauffeurs vérifiés, des véhicules propres et confortables.",
        image: "/images/afrigo_lifestyle_city_1765388339654.png",
        color: "bg-afrigo-accent",
    },
    {
        id: "livraison",
        name: "Livraison",
        icon: Pizza,
        title: "Vos repas livrés rapidement",
        description: "Commandez vos plats préférés et recevez-les chauds à votre porte. Large choix de restaurants partenaires.",
        image: "/images/afrigo_passengers_1765388400350.png",
        color: "bg-orange-500",
    },
    {
        id: "colis",
        name: "Colis",
        icon: Truck,
        title: "Envoyez des colis facilement",
        description: "Envoyez des colis à travers la ville rapidement et en toute sécurité. Suivi en temps réel de votre livraison.",
        image: "/images/afrigo_phone_mockup_1765388380102.png",
        color: "bg-purple-500",
    },
    {
        id: "entreprises",
        name: "Entreprises",
        icon: Building2,
        title: "Solutions pour entreprises",
        description: "Gérez les déplacements professionnels de votre équipe avec des outils de reporting et de facturation centralisée.",
        image: "/images/afrigo_driver_happy_1765388354916.png",
        color: "bg-black",
    },
]

export function ServicesSection() {
    const [activeService, setActiveService] = useState(services[0])

    return (
        <section id="services" className="section-afrigo bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="heading-afrigo-lg text-black mb-4">Nos services</h2>
                    <p className="text-afrigo-body max-w-2xl mx-auto">
                        Les produits et fonctionnalités varient selon les villes.
                        Certains services peuvent ne pas être disponibles dans votre zone.
                    </p>
                </motion.div>

                {/* Service Cards Grid - Beautiful Style */}
                <div className="grid grid-cols-12 gap-4 max-w-[1200px] mx-auto">
                    {/* Top row - 3 cards */}
                    {services.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="col-span-12 sm:col-span-4"
                        >
                            <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
                                <Image
                                    src={service.image}
                                    alt={service.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs text-white/60 uppercase font-bold tracking-wider">
                                            {service.name}
                                        </p>
                                        <h4 className="text-white font-medium text-lg mt-1">
                                            {service.title}
                                        </h4>
                                    </div>
                                    <div className={`w-10 h-10 ${service.color} rounded-xl flex items-center justify-center`}>
                                        <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom row - 2 larger cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-12 sm:col-span-5"
                    >
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src={services[3].image}
                                alt={services[3].name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs text-white/60 uppercase font-bold tracking-wider">
                                        BUSINESS SOLUTIONS
                                    </p>
                                    <h4 className="text-white font-medium text-2xl mt-1">
                                        {services[3].title}
                                    </h4>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white/80 text-sm">Solutions B2B</p>
                                        <p className="text-white/60 text-xs">Gérez votre flotte</p>
                                    </div>
                                    <button className="bg-afrigo-accent text-white text-sm px-4 py-2 rounded-full hover:bg-afrigo-accent-dark transition-colors">
                                        En savoir plus
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-12 sm:col-span-7"
                    >
                        <div className="relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer">
                            <Image
                                src="/images/afrigo_driver_happy_1765388354916.png"
                                alt="Chauffeur Afrigo"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs text-white/60 uppercase font-bold tracking-wider">
                                        NOUVELLE OFFRE
                                    </p>
                                    <h4 className="text-white/90 font-medium text-xl mt-1">
                                        Devenez chauffeur partenaire
                                    </h4>
                                </div>
                                <div className="flex items-center justify-between bg-black/40 -mx-6 -mb-6 px-6 py-4 backdrop-blur-sm border-t border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-afrigo-accent flex items-center justify-center">
                                            <Car className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white/80 text-sm">Générez des revenus</p>
                                            <p className="text-white/60 text-xs">Inscription gratuite</p>
                                        </div>
                                    </div>
                                    <button className="bg-white text-black text-sm px-4 py-2 rounded-full hover:bg-gray-100 transition-colors font-medium">
                                        S&apos;inscrire
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
