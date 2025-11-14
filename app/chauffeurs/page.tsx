"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { ArrowLeft, CheckCircle } from "lucide-react"
import {
  CurrencyDollarIcon,
  ClockIcon,
  ShieldCheckIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"

export default function ChauffeursPage() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    ville: "",
    vehicule: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log("Formulaire soumis:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const benefits = [
    {
      icon: CurrencyDollarIcon,
      title: "Générez des revenus",
      description: "Rejoignez une communauté de chauffeurs qui génèrent des revenus avec Afrigo",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: ClockIcon,
      title: "Horaires flexibles",
      description: "Vous décidez quand et à quelle fréquence vous conduisez",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ShieldCheckIcon,
      title: "Sécurité garantie",
      description: "Assurance complète et support 24/7 pour votre tranquillité",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPinIcon,
      title: "Grande demande",
      description: "Recevez de nombreuses demandes de trajets de nos utilisateurs",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary-700 to-primary-900 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full text-center shadow-premium-lg border border-gray-100"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-accent to-accent-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow animate-pulse-glow"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-shadow-premium">
              Pré-inscription réussie !
            </h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Merci pour votre intérêt ! Nous vous contacterons très bientôt pour 
              finaliser votre inscription en tant que chauffeur Afrigo.
            </p>
          <Link href="/">
            <Button 
              variant="accent" 
              size="lg" 
              className="w-full shadow-glow hover:shadow-glow-lg hover-lift transition-all duration-300"
            >
              Retour à l&apos;accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="glass bg-white/95 backdrop-blur-xl border-b border-gray-100/50 sticky top-0 z-50 shadow-premium">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover-scale transition-transform">
              <Image
                src="/images/Afrigo_logo.png"
                alt="Afrigo Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm" className="hover-lift">
                <ArrowLeft className="mr-2" />
                Retour
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-700 to-primary-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,122,58,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center space-y-8"
            data-aos="fade-up"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              Générez des revenus avec Afrigo
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Rejoignez une communauté de chauffeurs qui génèrent des revenus 
              en offrant des trajets fiables et sécurisés au Congo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                <Card className="h-full border-0 shadow-premium hover:shadow-premium-lg hover-lift transition-all duration-300 relative">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div
              data-aos="fade-up"
            >
              <Card className="shadow-premium-lg border-0 overflow-hidden">
                <CardHeader className="text-center bg-gradient-to-br from-primary/5 to-accent/5 pb-8">
                  <CardTitle className="text-3xl md:text-4xl font-bold text-primary mb-3 text-shadow-premium">
                    Pré-inscription Chauffeur
                  </CardTitle>
                  <Separator className="my-4" />
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    Remplissez ce formulaire pour être parmi les premiers chauffeurs Afrigo
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="prenom" className="text-base font-semibold">Prénom *</Label>
                        <Input
                          id="prenom"
                          name="prenom"
                          type="text"
                          required
                          value={formData.prenom}
                          onChange={handleChange}
                          className="h-12 focus-premium transition-all duration-300"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="nom" className="text-base font-semibold">Nom *</Label>
                        <Input
                          id="nom"
                          name="nom"
                          type="text"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="h-12 focus-premium transition-all duration-300"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="h-12 focus-premium transition-all duration-300"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone" className="text-base font-semibold">Téléphone *</Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        required
                        value={formData.telephone}
                        onChange={handleChange}
                        placeholder="+242 XX XXX XXXX"
                        className="h-12 focus-premium transition-all duration-300"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="ville" className="text-base font-semibold">Ville *</Label>
                        <Select
                          required
                          value={formData.ville}
                          onValueChange={(value) => setFormData({ ...formData, ville: value })}
                        >
                          <SelectTrigger id="ville" className="h-12">
                            <SelectValue placeholder="Sélectionnez une ville" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brazzaville">Brazzaville</SelectItem>
                            <SelectItem value="pointe-noire">Pointe-Noire</SelectItem>
                            <SelectItem value="dolisie">Dolisie</SelectItem>
                            <SelectItem value="nkayi">Nkayi</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="vehicule" className="text-base font-semibold">Type de véhicule *</Label>
                        <Select
                          required
                          value={formData.vehicule}
                          onValueChange={(value) => setFormData({ ...formData, vehicule: value })}
                        >
                          <SelectTrigger id="vehicule" className="h-12">
                            <SelectValue placeholder="Sélectionnez un type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="berline">Berline</SelectItem>
                            <SelectItem value="suv">SUV</SelectItem>
                            <SelectItem value="van">Van</SelectItem>
                            <SelectItem value="moto">Moto</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="xl"
                      className="w-full shadow-glow hover:shadow-glow-lg hover-lift transition-all duration-300"
                    >
                      Soumettre ma pré-inscription
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d&apos;être contacté 
                      par l&apos;équipe Afrigo concernant votre pré-inscription.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


