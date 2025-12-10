"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Apple, Smartphone } from "lucide-react"

export function AppDownloadSection() {
    return (
        <section className="py-24 md:py-32 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(45,122,58,0.25),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(45,122,58,0.2),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Contenu */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <div>
                            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-300 rounded-full text-sm font-semibold backdrop-blur-sm mb-4">
                                Téléchargez l&apos;application
                            </span>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                                Bientôt disponible
                                <span className="block text-accent-400">sur votre smartphone</span>
                            </h2>

                            <p className="text-xl text-gray-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
                                Inscrivez-vous dès maintenant pour être notifié du lancement
                                et profiter des offres exclusives réservées aux premiers utilisateurs.
                            </p>
                        </div>

                        {/* Store buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                size="xl"
                                className="bg-white text-primary hover:bg-gray-100 gap-3 hover-lift"
                            >
                                <Apple className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-xs opacity-70">Bientôt sur</div>
                                    <div className="font-bold">App Store</div>
                                </div>
                            </Button>

                            <Button
                                size="xl"
                                className="bg-white text-primary hover:bg-gray-100 gap-3 hover-lift"
                            >
                                <Smartphone className="w-6 h-6" />
                                <div className="text-left">
                                    <div className="text-xs opacity-70">Bientôt sur</div>
                                    <div className="font-bold">Google Play</div>
                                </div>
                            </Button>
                        </div>

                        {/* Notification signup */}
                        <div className="pt-4">
                            <Button
                                size="xl"
                                variant="accent"
                                className="group shadow-glow hover:shadow-glow-lg"
                            >
                                <Download className="mr-2" />
                                Être notifié du lancement
                            </Button>
                        </div>
                    </motion.div>

                    {/* Phone mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] md:h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent rounded-3xl blur-3xl" />
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
