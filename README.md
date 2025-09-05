# AcZone Portfolio

Un portfolio personnel moderne et responsive créé avec Next.js 15, TypeScript et Tailwind CSS. Inspiré du design de l'image fournie avec un fond bleu, une section centrale sombre, et une interface utilisateur épurée.

## 🚀 Fonctionnalités

- **Design Responsive** : Optimisé pour tous les appareils (mobile, tablette, desktop)
- **Interface Moderne** : Design inspiré de l'image avec sidebar, navigation claire et animations subtiles
- **Pages Complètes** :
  - Accueil avec section Hero
  - À Propos avec compétences et parcours
  - Projets avec galerie et détails
  - Contact avec formulaire fonctionnel
- **Composants Réutilisables** : Architecture modulaire avec composants UI personnalisés
- **Animations** : Transitions fluides et effets hover
- **Accessibilité** : Navigation clavier, contraste optimisé, alt text pour images
- **Performance** : Optimisé avec Next.js 15 et Tailwind CSS

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 15 avec App Router
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Polices** : Inter et Poppins (Google Fonts)
- **Icônes** : SVG personnalisées
- **Animations** : CSS et Tailwind

## 📁 Structure du Projet

```
src/
├── app/                    # Pages Next.js
│   ├── about/             # Page À Propos
│   ├── projects/          # Page Projets
│   ├── contact/           # Page Contact
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants UI de base
│   ├── layout/           # Composants de layout
│   ├── sections/         # Sections de pages
│   └── forms/            # Formulaires
├── data/                 # Données statiques
├── hooks/                # Hooks personnalisés
├── lib/                  # Utilitaires et fonctions
├── types/                # Types TypeScript
└── styles/               # Styles globaux
```

## 🚀 Installation et Démarrage

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd cg-discord-portfolio
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- **Primary** : Bleu (#3b82f6)
- **Dark** : Tons de gris foncé
- **Accents** : Bleu clair pour les éléments interactifs

### Contenu
- **Données** : Modifiez les fichiers dans `src/data/`
- **Images** : Ajoutez vos images dans `public/images/`
- **Informations personnelles** : Mettez à jour `src/data/hero.ts`

### Styles
- **CSS Global** : `src/app/globals.css`
- **Composants** : Styles dans chaque composant avec Tailwind
- **Animations** : Classes personnalisées dans globals.css

## 📱 Responsive Design

Le portfolio s'adapte automatiquement à toutes les tailles d'écran :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px
- **Desktop** : > 1024px

## 🔧 Scripts Disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Construit l'application pour la production
npm run start        # Démarre le serveur de production
npm run lint         # Lance ESLint
```

## 📄 Pages

### Accueil (`/`)
- Section Hero avec présentation
- Design inspiré de l'image fournie
- Boutons d'action (CV, Contact)

### À Propos (`/about`)
- Présentation personnelle
- Compétences par catégorie
- Statistiques et valeurs

### Projets (`/projects`)
- Galerie de projets
- Projets en vedette
- Filtres par catégorie
- Liens vers code source et démo

### Contact (`/contact`)
- Formulaire de contact fonctionnel
- Informations de contact
- Liens vers réseaux sociaux

## 🎯 Fonctionnalités Avancées

- **Navigation Sidebar** : Menu latéral avec navigation verticale
- **Animations** : Transitions fluides et effets hover
- **Formulaire Contact** : API route pour l'envoi d'emails
- **Types TypeScript** : Typage complet pour une meilleure DX
- **Hooks Personnalisés** : useLocalStorage, useIntersectionObserver
- **Composants Modulaires** : Architecture réutilisable

## 🚀 Déploiement

Le projet est prêt pour le déploiement sur :
- **Vercel** (recommandé)
- **Netlify**
- **AWS**
- **Tout hébergeur supportant Node.js**

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Contact

- **Email** : acZone@email.com
- **Portfolio** : [Votre URL de portfolio]
- **LinkedIn** : [Votre profil LinkedIn]

---

Créé avec ❤️ par AcZone
