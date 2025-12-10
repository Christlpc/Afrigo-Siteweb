"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Car, ShoppingBag, Bike, Building2, Pizza, Truck } from "lucide-react"

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
        color: "bg-afrigo-primary",
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
                    <h2 className="heading-afrigo-lg text-afrigo-primary mb-4">Nos services</h2>
                    <p className="text-afrigo-body max-w-2xl mx-auto">
                        Les produits et fonctionnalités varient selon les villes.
                        Certains services peuvent ne pas être disponibles dans votre zone.
                    </p>
                </motion.div>

                {/* Service Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            onClick={() => setActiveService(service)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeService.id === service.id
                                    ? "bg-afrigo-primary text-white"
                                    : "bg-afrigo-gray text-afrigo-primary hover:bg-gray-200"
                                }`}
                        >
                            <service.icon className="w-5 h-5" />
                            {service.name}
                        </button>
                    ))}
                </div>

                {/* Service Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-12 items-center"
                    >
                        {/* Text */}
                        <div className="order-2 lg:order-1">
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${activeService.color} text-white text-sm font-medium mb-4`}>
                                <activeService.icon className="w-4 h-4" />
                                {activeService.name}
                            </div>
                            <h3 className="heading-afrigo-md text-afrigo-primary mb-4">
                                {activeService.title}
                            </h3>
                            <p className="text-afrigo-body mb-6">
                                {activeService.description}
                            </p>
                            <button className="btn-afrigo btn-afrigo-primary">
                                En savoir plus
                            </button>
                        </div>

                        {/* Image */}
                        <div className="order-1 lg:order-2 relative h-[300px] md:h-[400px]">
                            <Image
                                src={activeService.image}
                                alt={activeService.title}
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}
