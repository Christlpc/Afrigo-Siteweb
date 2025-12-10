"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function DownloadSection() {
    return (
        <section className="section-afrigo section-afrigo-accent relative overflow-hidden">
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)`
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <h2 className="heading-afrigo-lg mb-6">
                            Téléchargez nos applis
                        </h2>

                        <p className="text-xl text-white/90 mb-4">
                            <strong>Tous vos déplacements au meilleur prix.</strong>
                        </p>
                        <p className="text-lg text-white/80 mb-8">
                            Téléchargez l&apos;application Afrigo et profitez de trajets
                            fiables et abordables dans tout le Congo.
                        </p>

                        {/* QR Code & Store Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            {/* QR Code */}
                            <div className="bg-white p-4 rounded-2xl">
                                <div className="w-32 h-32 bg-afrigo-primary rounded-lg flex items-center justify-center">
                                    <span className="text-white text-xs text-center px-2">QR Code<br />Bientôt</span>
                                </div>
                                <p className="text-afrigo-primary text-sm font-medium mt-2 text-center">
                                    Scanner pour télécharger
                                </p>
                            </div>

                            {/* Store Buttons */}
                            <div className="flex flex-col gap-3">
                                <button className="bg-afrigo-primary hover:bg-afrigo-primary-dark text-white rounded-xl px-6 py-4 flex items-center gap-4 transition-colors">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-80">Bientôt sur</div>
                                        <div className="font-bold text-lg">App Store</div>
                                    </div>
                                </button>

                                <button className="bg-afrigo-primary hover:bg-afrigo-primary-dark text-white rounded-xl px-6 py-4 flex items-center gap-4 transition-colors">
                                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                                    </svg>
                                    <div className="text-left">
                                        <div className="text-xs opacity-80">Bientôt sur</div>
                                        <div className="font-bold text-lg">Google Play</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] md:h-[500px]"
                    >
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
