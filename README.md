# Recipel 🍽️

A premium, animated recipe landing page built with Next.js 14, Framer Motion, and Apple iOS 26-style liquid glass effects.

## ✨ Features

- **Massive Hero Title** - Large-scale RECIPEL title with scroll-triggered shrink animation
- **iOS 26 Liquid Glass Navbar** - Authentic Apple-style liquid glass navbar with SVG displacement effects and backdrop blur
- **3D Parallax Recipe Cards** - Interactive recipe cards with enhanced tilt effects (±20° rotation)
- **Image Overlay Design** - Recipe descriptions elegantly overlaid on images with seamless gradient fades
- **Shared Layout Animations** - Smooth card-to-detail transitions with Framer Motion's layout animations
- **Interactive Ingredients** - Animated checkboxes with strikethrough effects
- **Staggered Entrance Animations** - Premium spring-based animations throughout
- **Responsive Design** - Mobile-first approach with Tailwind CSS

## 🎨 Design Highlights

- **Color Palette**: Cream (#FDFCF0), Burnt Orange (#E67E22), Charcoal (#2C3E50)
- **Typography**: Inter font family for modern, clean text
- **Animation Physics**: Consistent spring animations (stiffness: 100, damping: 20)
- **Glass Effect**: Liquid glass with brightness: 98, blur: 25, backdrop-blur-xl

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jonvikboi/recipe-website.git
cd recipe-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript
- **Image Optimization**: next/image

## 🏗️ Project Structure

```
recipel/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx            # Root layout with Inter font
│   └── page.tsx              # Main page orchestrating components
├── components/
│   ├── Hero.tsx              # Hero section with massive title & stats
│   ├── Navbar.tsx            # iOS 26 liquid glass navbar
│   ├── RecipeCard.tsx        # 3D parallax recipe cards
│   ├── RecipeGrid.tsx        # Responsive recipe grid
│   ├── RecipeDetail.tsx      # Full-screen recipe modal
│   └── GlassSurface.tsx      # Liquid glass effect component
├── lib/
│   ├── recipes.ts            # Recipe data & TypeScript interfaces
│   └── animation-config.ts   # Centralized animation configuration
└── public/
    └── images/               # Generated recipe images
```

## 🎯 Key Components

### Hero
- Massive "RECIPEL" title with scroll-based scale & position transforms
- Elegant stats display (6 Premium Recipes, 5 Cuisines, 100% Chef Curated)
- Staggered fade animations

### Navbar
- Apple iOS 26 liquid glass effect using SVG displacement maps
- Brightness: 98, opacity: 0.75, backgroundOpacity: 0.15
- Backdrop blur: 25px + CSS backdrop-blur-xl
- Appears on scroll with fade-in animation

### Recipe Cards
- Enhanced 3D tilt: ±20° rotation based on mouse position
- Image overlay design with gradient fade (from-black/80 to transparent)
- Recipe title and description on image
- Compact meta bar with cook time, servings, ingredients

### Recipe Detail
- Shared layout animation with layoutId
- Interactive ingredient checkboxes
- Numbered step-by-step instructions
- Full-screen modal with backdrop overlay

## 🔧 Configuration

### Animation Settings
All animations use consistent spring physics defined in `lib/animation-config.ts`:
- Type: spring
- Stiffness: 100
- Damping: 20

### Tailwind Theme
Custom colors, Inter font family, and animation utilities configured in `tailwind.config.ts`.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with ❤️ using modern web technologies and design inspiration from Apple's iOS 26.

---

**Live Demo**: [Visit the site](https://github.com/jonvikboi/recipe-website)
