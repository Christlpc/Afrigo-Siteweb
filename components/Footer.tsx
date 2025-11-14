"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: "À propos", href: "#" },
      { label: "Carrières", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Blog", href: "#" },
    ],
    services: [
      { label: "Pour Passagers", href: "#" },
      { label: "Pour Chauffeurs", href: "/chauffeurs" },
      { label: "Pour Entreprises", href: "#" },
      { label: "Partenariats", href: "#" },
    ],
    support: [
      { label: "Centre d'aide", href: "#" },
      { label: "Sécurité", href: "#" },
      { label: "Conditions d'utilisation", href: "#" },
      { label: "Confidentialité", href: "#" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6" data-aos="fade-up">
            <Image
              src="/images/Afrigo_logo.png"
              alt="Afrigo Logo"
              width={150}
              height={50}
              className="object-contain hover-scale transition-transform"
            />
            <p className="text-gray-300 max-w-sm leading-relaxed text-lg">
              La première application de VTC au Congo. Transport fiable, 
              rapide et sécurisé pour tous vos déplacements.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 group hover:text-accent-400 transition-colors">
                <MapPin className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
                <span>Brazzaville, République du Congo</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group hover:text-accent-400 transition-colors">
                <Phone className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
                <span>+242 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 group hover:text-accent-400 transition-colors">
                <Mail className="w-5 h-5 text-accent-400 group-hover:scale-110 transition-transform" />
                <span>contact@afrigo.cg</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="w-12 h-12 rounded-xl glass border border-white/20 hover:border-accent/50 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 shadow-premium hover:shadow-glow"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-xl mb-6 text-accent-400">Entreprise</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-all duration-300 relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-bold text-xl mb-6 text-accent-400">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 relative group inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-accent-400 transition-all duration-300 relative group inline-block"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="font-bold text-xl mb-6 text-accent-400">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-accent-400 transition-all duration-300 relative group inline-block"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8" data-aos="fade-up">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Afrigo. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-accent-400 transition-all duration-300 relative group">
                Mentions légales
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#" className="hover:text-accent-400 transition-all duration-300 relative group">
                Politique de confidentialité
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#" className="hover:text-accent-400 transition-all duration-300 relative group">
                Cookies
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-400 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

