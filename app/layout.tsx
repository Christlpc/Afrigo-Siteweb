import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import AOSInit from "@/components/AOSInit"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Afrigo - Votre Transport Africain | Bientôt Disponible",
  description: "La première application de VTC au Congo. Transport fiable, rapide et sécurisé. Rejoignez-nous dès maintenant !",
  keywords: ["VTC", "Congo", "Transport", "Taxi", "Afrigo", "Brazzaville", "Pointe-Noire"],
  openGraph: {
    title: "Afrigo - Votre Transport Africain",
    description: "La première application de VTC au Congo",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className={`${inter.className} antialiased`}>
        <AOSInit />
        {children}
      </body>
    </html>
  )
}




