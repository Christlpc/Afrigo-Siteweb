# 📁 Structure du Projet Afrigo Website

## Vue d'ensemble

Ce projet est un site web moderne et premium pour Afrigo, la première application de VTC au Congo. Il utilise les dernières technologies web pour offrir une expérience utilisateur exceptionnelle avec des animations 3D immersives.

## 🎨 Design & Charte Graphique

### Couleurs
- **Bleu Marine (Primary)** : `#1a3a52` - Couleur principale pour les titres et éléments importants
- **Vert (Accent)** : `#2d7a3a` - Couleur d'accent pour les CTA et éléments interactifs
- **Blanc** : `#ffffff` - Texte sur fond sombre
- **Gris** : Différentes nuances pour le texte secondaire

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Titres** : Bold, grandes tailles (4xl-7xl)
- **Corps de texte** : Regular/Medium, tailles moyennes (base-xl)

## 📂 Architecture des Fichiers

```
afrigo-website/
│
├── 📁 app/                          # Application Next.js (App Router)
│   ├── layout.tsx                   # Layout racine avec métadonnées SEO
│   ├── page.tsx                     # Page d'accueil principale
│   └── globals.css                  # Styles globaux Tailwind
│
├── 📁 components/                   # Composants React réutilisables
│   │
│   ├── 📁 3d/                       # Composants 3D React Three Fiber
│   │   ├── Car3D.tsx               # Voiture 3D animée (Hero section)
│   │   ├── Phone3D.tsx             # Téléphone 3D (How It Works)
│   │   ├── Route3D.tsx             # Route animée (Download section)
│   │   └── Scene3D.tsx             # Conteneur Canvas 3D réutilisable
│   │
│   ├── 📁 ui/                       # Composants UI shadcn
│   │   ├── button.tsx              # Boutons avec variantes
│   │   └── card.tsx                # Cartes pour les features
│   │
│   ├── Navbar.tsx                   # Navigation principale avec menu mobile
│   ├── Hero.tsx                     # Section héro avec voiture 3D
│   ├── Features.tsx                 # Grille de fonctionnalités
│   ├── HowItWorks.tsx              # Guide en 4 étapes
│   ├── Download.tsx                 # Section téléchargement avec route 3D
│   └── Footer.tsx                   # Footer avec liens et réseaux sociaux
│
├── 📁 lib/                          # Utilitaires et helpers
│   └── utils.ts                     # Fonction cn() pour merge classes
│
├── 📁 public/                       # Assets statiques
│   └── logo.png                     # Logo Afrigo
│
├── 📄 Configuration Files
│   ├── package.json                 # Dépendances npm
│   ├── tsconfig.json               # Configuration TypeScript
│   ├── tailwind.config.ts          # Config Tailwind avec couleurs custom
│   ├── postcss.config.js           # Configuration PostCSS
│   ├── next.config.js              # Configuration Next.js
│   ├── .eslintrc.json              # Configuration ESLint
│   └── .gitignore                  # Fichiers ignorés par Git
│
└── 📄 Documentation
    ├── README.md                    # Documentation principale
    ├── INSTALLATION.md             # Guide d'installation
    └── STRUCTURE.md                # Ce fichier
```

## 🎯 Sections du Site Web

### 1. Hero Section (`components/Hero.tsx`)
**Objectif** : Première impression impactante

**Contenu** :
- Titre accrocheur "Votre Transport Africain"
- Sous-titre descriptif
- 2 CTA principaux (Télécharger, En savoir plus)
- Statistiques (Utilisateurs, Chauffeurs, Courses)
- Animation 3D de voiture interactive
- Indicateur de scroll animé

**Technologies** :
- Framer Motion pour les animations d'apparition
- React Three Fiber pour la voiture 3D
- Gradient de fond avec effets radiaux

### 2. Features Section (`components/Features.tsx`)
**Objectif** : Présenter les avantages d'Afrigo

**Contenu** :
- 6 features en grille responsive
- Icônes colorées (Lucide React)
- Cartes avec hover effects

**Features listées** :
1. ⏱️ Rapide & Fiable
2. 🛡️ Sécurisé
3. 💵 Prix Transparents
4. 📍 Suivi en Temps Réel
5. ⭐ Service Premium
6. ⚡ Réservation Instantanée

### 3. How It Works Section (`components/HowItWorks.tsx`)
**Objectif** : Expliquer le processus de réservation

**Contenu** :
- 4 étapes numérotées
- Animation 3D de téléphone
- Layout en 2 colonnes (steps + 3D)

**Étapes** :
1. 📱 Téléchargez l'app
2. 📍 Indiquez votre destination
3. 🚗 Un chauffeur arrive
4. ✅ Profitez du trajet

### 4. Download Section (`components/Download.tsx`)
**Objectif** : Inciter au téléchargement

**Contenu** :
- Animation 3D de route ascendante
- Boutons Google Play & App Store
- QR code placeholder
- Fond dégradé premium

### 5. Footer (`components/Footer.tsx`)
**Objectif** : Navigation et informations complémentaires

**Contenu** :
- Logo Afrigo
- Description courte
- Informations de contact (adresse, téléphone, email)
- Liens sociaux (Facebook, Twitter, Instagram, LinkedIn)
- 3 colonnes de liens (Entreprise, Services, Support)
- Mentions légales

### 6. Navbar (`components/Navbar.tsx`)
**Objectif** : Navigation principale

**Contenu** :
- Logo cliquable
- Liens de navigation (Accueil, Fonctionnalités, Comment ça marche, Télécharger)
- Bouton CTA "Télécharger l'app"
- Menu mobile responsive
- Effet de scroll (background change)

## 🎨 Composants 3D

### Car3D (`components/3d/Car3D.tsx`)
- Voiture composée de cubes et sphères
- Animation de rotation Y douce
- Animation de lévitation verticale
- 4 roues qui tournent
- Couleurs : Bleu marine (carrosserie) + Vert (roues)

### Phone3D (`components/3d/Phone3D.tsx`)
- Smartphone 3D avec bordures arrondies
- Écran vert émissif
- Encoche de caméra
- Animations de rotation et lévitation

### Route3D (`components/3d/Route3D.tsx`)
- Route verte ascendante inclinée
- Lignes pointillées blanches
- Flèche au sommet
- Rotation continue

### Scene3D (`components/3d/Scene3D.tsx`)
- Conteneur Canvas réutilisable
- Caméra perspective
- Contrôles orbitaux avec auto-rotation
- Éclairages multiples (ambiant, directionnel, spot)
- Environnement "city"

## 🎭 Animations

### Framer Motion
- **Fade in** : Apparition progressive des sections
- **Slide in** : Entrée depuis les côtés
- **Stagger** : Animations séquentielles pour les listes
- **Hover effects** : Scale et transformations sur hover
- **Scroll animations** : Déclenchées à l'apparition dans le viewport

### Three.js / R3F
- **Rotation continue** : Auto-rotation des modèles 3D
- **Lévitation** : Mouvement vertical sinusoïdal
- **Rotation des roues** : Animation de roulement

## 🎨 Styles & Tailwind

### Classes personnalisées
- `bg-gradient-to-br` : Gradients diagonaux
- `backdrop-blur-md` : Effets de flou pour glassmorphism
- `hover:shadow-xl` : Ombres au hover
- `animate-float` : Animation de flottement custom

### Responsive Design
- Mobile First approach
- Breakpoints : `sm`, `md`, `lg`, `xl`, `2xl`
- Grilles flexibles avec `grid` et `flex`
- Menu mobile avec AnimatePresence

## 🚀 Performance

### Optimisations
- **Code splitting** : Automatic avec Next.js
- **Image optimization** : Component Next/Image
- **Lazy loading** : Suspense pour les composants 3D
- **Tree shaking** : Imports optimisés
- **CSS-in-JS minimisé** : Tailwind purge

### SEO
- Métadonnées dans `layout.tsx`
- Balises sémantiques HTML5
- Titles et descriptions optimisés
- Structure de heading appropriée (h1, h2, h3)

## 🔧 Technologies Utilisées

### Core
- **Next.js 14** : Framework React avec App Router
- **React 18** : Bibliothèque UI
- **TypeScript** : Type safety

### Styling
- **Tailwind CSS** : Utility-first CSS
- **tailwindcss-animate** : Animations pré-construites
- **class-variance-authority** : Variantes de composants
- **clsx + tailwind-merge** : Merge de classes conditionnelles

### 3D & Animations
- **React Three Fiber** : React renderer pour Three.js
- **@react-three/drei** : Helpers pour R3F
- **Three.js** : Bibliothèque 3D
- **Framer Motion** : Animations React

### UI Components
- **shadcn/ui** : Composants UI accessibles
- **Radix UI** : Primitives UI headless
- **Lucide React** : Icônes modernes

## 🎯 Prochaines Améliorations Possibles

1. **Backend Integration**
   - API pour statistiques réelles
   - Formulaire de contact fonctionnel
   - Newsletter signup

2. **Plus de Contenu**
   - Page "À propos"
   - Blog intégré
   - Témoignages clients
   - FAQ section

3. **Fonctionnalités Avancées**
   - Mode sombre (dark mode)
   - Multi-langue (FR/EN)
   - Animations plus complexes
   - Vidéos d'illustration

4. **Analytics**
   - Google Analytics
   - Hotjar heatmaps
   - Conversion tracking

5. **PWA**
   - Service Worker
   - Offline support
   - Install prompt

## 📊 Métriques de Qualité

- ✅ **Responsive** : 100% mobile-friendly
- ✅ **Accessible** : Composants Radix UI accessibles
- ✅ **Performance** : Optimisé avec Next.js
- ✅ **SEO** : Métadonnées complètes
- ✅ **Modern** : Technologies récentes
- ✅ **Maintenable** : Code TypeScript typé

---

**Note** : Ce document est un guide de référence pour comprendre l'architecture et les choix techniques du projet Afrigo Website.




