"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BoltHero() {
    return (
        <section className="relative min-h-screen bg-afrigo-primary pt-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)`
                }} />
            </div>

            <div className="container mx-auto px-4 pt-16 md:pt-24 pb-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <h1 className="heading-afrigo-xl mb-6">
                            Afrigo, votre nouvelle façon de vous déplacer
                        </h1>

                        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg leading-relaxed">
                            La liberté d&apos;aller n&apos;importe où au Congo sans payer pour le
                            stationnement, le carburant ou l&apos;entretien.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/chauffeurs">
                                <Button className="bg-afrigo-accent text-white hover:bg-afrigo-accent-dark rounded-full px-8 py-6 text-lg font-semibold">
                                    Générez des revenus avec Afrigo
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                        </div>

                        {/* Store Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center gap-3 transition-colors border border-white/20">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="text-left text-white">
                                    <div className="text-xs opacity-80">Bientôt sur</div>
                                    <div className="font-semibold">App Store</div>
                                </div>
                            </button>

                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 flex items-center gap-3 transition-colors border border-white/20">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5S3 21.33 3 20.5zm4.5-17v17l9-8.5-9-8.5zm11 8.5l-5.5-5v10l5.5-5z" />
                                </svg>
                                <div className="text-left text-white">
                                    <div className="text-xs opacity-80">Bientôt sur</div>
                                    <div className="font-semibold">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px]"
                    >
                        <Image
                            src="/images/afrigo_lifestyle_city_1765388339654.png"
                            alt="Afrigo Transport"
                            fill
                            className="object-contain rounded-3xl"
                            priority
                        />
                    </motion.div>
                </div>
            </div>

            {/* Wave Bottom */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
                </svg>
            </div>
        </section>
    )
}
