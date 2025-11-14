"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Scene3D } from "@/components/3d/Scene3D"
import { Route3D } from "@/components/3d/Route3D"
import { Smartphone, Download as DownloadIcon } from "lucide-react"
import Image from "next/image"

export function Download() {
  return (
    <section id="telecharger" className="py-20 bg-gradient-to-br from-primary via-primary-700 to-primary-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(45,122,58,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(45,122,58,0.15),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - 3D Route */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-[500px] order-2 lg:order-1"
          >
            <Scene3D>
              <Route3D />
            </Scene3D>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30"
            >
              <Smartphone className="w-5 h-5 text-accent-300" />
              <span className="text-accent-200 font-medium">Disponible sur iOS et Android</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Téléchargez Afrigo
              <span className="block text-accent-400">Commencez Maintenant</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-200"
            >
              Rejoignez des milliers d&apos;utilisateurs qui font confiance à Afrigo 
              pour leurs déplacements quotidiens au Congo.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="xl"
                variant="accent"
                className="group bg-accent hover:bg-accent-600"
              >
                <DownloadIcon className="mr-2 group-hover:animate-bounce" />
                Google Play
              </Button>
              <Button
                size="xl"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <DownloadIcon className="mr-2" />
                App Store
              </Button>
            </motion.div>

            {/* QR Code placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-8"
            >
              <p className="text-sm text-gray-300 mb-3">Scannez pour télécharger</p>
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <div className="text-primary text-xs text-center p-4">
                  QR Code
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}




