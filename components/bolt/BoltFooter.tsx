"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
    services: {
        title: "Services",
        links: [
            { name: "Trajets", href: "#" },
            { name: "Livraison", href: "#" },
            { name: "Entreprises", href: "#" },
        ],
    },
    partenaires: {
        title: "Partenaires",
        links: [
            { name: "Devenir chauffeur", href: "/chauffeurs" },
            { name: "Devenir livreur", href: "#" },
            { name: "Restaurants partenaires", href: "#" },
        ],
    },
    entreprise: {
        title: "Entreprise",
        links: [
            { name: "À propos", href: "#" },
            { name: "Carrières", href: "#" },
            { name: "Presse", href: "#" },
        ],
    },
    support: {
        title: "Support",
        links: [
            { name: "Centre d'aide", href: "#" },
            { name: "Sécurité", href: "#" },
            { name: "Contact", href: "#" },
        ],
    },
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
]

export function BoltFooter() {
    return (
        <footer className="bg-bolt-dark text-white py-16">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                    {/* Logo */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/images/Afrigo_logo.png"
                                alt="Afrigo"
                                width={120}
                                height={40}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            La première application de VTC au Congo. Transport fiable, rapide et sécurisé.
                        </p>
                    </div>

                    {/* Links */}
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title}>
                            <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-bolt-green transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <hr className="border-gray-800 mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Afrigo. Tous droits réservés.
                    </p>

                    {/* Legal Links */}
                    <div className="flex flex-wrap gap-6 text-sm">
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            Politique de confidentialité
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            Conditions d&apos;utilisation
                        </Link>
                        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                            Cookies
                        </Link>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-bolt-green transition-colors"
                            >
                                <social.icon className="w-5 h-5" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
