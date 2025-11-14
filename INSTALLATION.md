# 🚀 Guide d'Installation - Afrigo Website

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** (version 18.x ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
- **npm** ou **yarn** (npm est installé avec Node.js)

## Installation

### Étape 1 : Installer les dépendances

Ouvrez un terminal dans le dossier du projet et exécutez :

```bash
npm install
```

Ou si vous utilisez yarn :

```bash
yarn install
```

Cette commande va installer toutes les dépendances nécessaires :
- Next.js
- React
- Tailwind CSS
- shadcn/ui
- React Three Fiber
- Framer Motion
- Et toutes les autres dépendances

### Étape 2 : Lancer le serveur de développement

Une fois les dépendances installées, lancez le serveur de développement :

```bash
npm run dev
```

Ou avec yarn :

```bash
yarn dev
```

### Étape 3 : Ouvrir le site dans votre navigateur

Le site sera accessible à l'adresse :

```
http://localhost:3000
```

Ouvrez cette adresse dans votre navigateur web préféré (Chrome, Firefox, Edge, etc.).

## 🎨 Développement

Le serveur de développement supporte le **hot reload** - toute modification que vous apportez aux fichiers sera automatiquement reflétée dans le navigateur sans besoin de recharger la page.

### Fichiers principaux à modifier :

- `app/page.tsx` - Page d'accueil principale
- `components/` - Tous les composants du site
- `tailwind.config.ts` - Configuration des couleurs et du design
- `app/globals.css` - Styles globaux

## 📦 Build pour la production

Pour créer une version optimisée du site pour la production :

```bash
npm run build
```

Puis pour lancer la version de production :

```bash
npm start
```

## 🛠️ Commandes disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement |
| `npm run build` | Compile le projet pour la production |
| `npm start` | Lance le serveur en mode production |
| `npm run lint` | Vérifie le code avec ESLint |

## ⚠️ Dépannage

### Problème : "Module not found"

**Solution :** Supprimez le dossier `node_modules` et le fichier `package-lock.json`, puis réinstallez :

```bash
rm -rf node_modules package-lock.json
npm install
```

Sur Windows PowerShell :

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Problème : Port 3000 déjà utilisé

**Solution :** Vous pouvez changer le port en lançant :

```bash
npm run dev -- -p 3001
```

### Problème : Erreurs TypeScript

**Solution :** Assurez-vous d'avoir la bonne version de TypeScript :

```bash
npm install typescript@latest --save-dev
```

## 📱 Tester sur mobile

Pour tester le site sur votre téléphone :

1. Assurez-vous que votre ordinateur et téléphone sont sur le même réseau WiFi
2. Trouvez l'adresse IP locale de votre ordinateur :
   - Windows : `ipconfig`
   - Mac/Linux : `ifconfig`
3. Sur votre téléphone, ouvrez : `http://[VOTRE_IP]:3000`

Exemple : `http://192.168.1.100:3000`

## 🎯 Prochaines étapes

Une fois le site lancé, vous pourrez :
- ✅ Voir toutes les animations 3D
- ✅ Tester la navigation
- ✅ Vérifier la responsivité sur différents appareils
- ✅ Personnaliser les couleurs et le contenu

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)

## 🆘 Besoin d'aide ?

Si vous rencontrez des problèmes, vérifiez :
1. Que Node.js est bien installé : `node --version`
2. Que npm fonctionne : `npm --version`
3. Que vous êtes dans le bon dossier du projet
4. Que toutes les dépendances sont installées

Bonne chance avec votre projet Afrigo ! 🚗✨




