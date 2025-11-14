# ⚡ Démarrage Rapide - Afrigo Website

## Installation en 3 étapes

### 1️⃣ Installer les dépendances
```bash
npm install
```

### 2️⃣ Lancer le serveur
```bash
npm run dev
```

### 3️⃣ Ouvrir dans le navigateur
```
http://localhost:3000
```

## 🎉 C'est tout !

Le site est maintenant fonctionnel avec :
- ✨ Animations 3D interactives
- 📱 Design responsive
- 🎨 Interface premium
- ⚡ Performance optimisée

## 🛠️ Commandes Utiles

```bash
# Développement
npm run dev          # Lance le serveur de développement

# Production
npm run build        # Compile pour la production
npm start            # Lance en mode production

# Code Quality
npm run lint         # Vérifie le code avec ESLint
```

## 📱 Tester sur Mobile

1. Trouvez votre IP locale :
   ```bash
   # Windows
   ipconfig
   
   # Mac/Linux
   ifconfig
   ```

2. Ouvrez sur votre téléphone :
   ```
   http://[VOTRE_IP]:3000
   ```

## 🎨 Personnalisation Rapide

### Changer les couleurs

Éditez `tailwind.config.ts` :

```typescript
primary: {
  DEFAULT: "#1a3a52",  // Votre couleur principale
  // ...
},
accent: {
  DEFAULT: "#2d7a3a",  // Votre couleur d'accent
  // ...
}
```

### Modifier le contenu

Les principaux fichiers à éditer :
- `components/Hero.tsx` - Section d'accueil
- `components/Features.tsx` - Fonctionnalités
- `components/Footer.tsx` - Pied de page

### Changer le logo

Remplacez `public/logo.png` par votre logo.

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installation de Vercel CLI
npm i -g vercel

# Déploiement
vercel
```

### Netlify
```bash
# Build
npm run build

# Le dossier .next/ contient le site
```

### Autre hébergeur
```bash
# Build optimisé
npm run build

# Export statique (optionnel)
npm run export
```

## ⚠️ Résolution de Problèmes

### Port 3000 déjà utilisé ?
```bash
npm run dev -- -p 3001
```

### Erreurs d'installation ?
```bash
# Nettoyage complet
rm -rf node_modules package-lock.json
npm install
```

### Erreurs TypeScript ?
```bash
# Réinstaller les types
npm install --save-dev @types/node @types/react @types/react-dom
```

## 📚 Documentation Complète

- [README.md](./README.md) - Documentation générale
- [INSTALLATION.md](./INSTALLATION.md) - Guide d'installation détaillé
- [STRUCTURE.md](./STRUCTURE.md) - Architecture du projet

## 🆘 Support

En cas de problème :
1. Vérifiez que Node.js est installé : `node --version`
2. Vérifiez que npm fonctionne : `npm --version`
3. Consultez les logs d'erreur dans le terminal
4. Relisez [INSTALLATION.md](./INSTALLATION.md)

---

**Bon développement ! 🚗✨**




