# Being IITian - Codebase Index

**Project Type:** Next.js 16 EdTech Platform  
**Last Updated:** November 6, 2025  
**Version:** 0.1.0

---

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Directory Structure](#directory-structure)
- [Core Components](#core-components)
- [Pages & Routes](#pages--routes)
- [Styling & Design System](#styling--design-system)
- [Configuration Files](#configuration-files)
- [Dependencies](#dependencies)
- [Development Workflow](#development-workflow)

---

## 🎯 Project Overview

**Being IITian** is a modern educational technology platform built for IIT-JEE aspirants. The platform provides:
- Personalized learning tracking
- Curated educational content
- Strategy building tools
- Safe learning community
- Premium courses with expert instructors
- Mentor network across India

### Tech Stack
- **Framework:** Next.js 16.0.1 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 4.x
- **UI Libraries:** React 19.2.0
- **Font:** Geist Sans & Geist Mono (via next/font)
- **Build Tool:** Turbopack (Next.js dev)

---

## 🏗️ Architecture

### Application Structure
```
Next.js App Router Architecture
├── Server Components (Default)
├── Client Components (marked with 'use client')
├── Route Handlers (API routes in app/api/)
└── Layouts (Nested layouts with RootLayout)
```

### Design Patterns
1. **Component-Based Architecture** - Reusable UI components
2. **Server-First Rendering** - Optimized for performance
3. **Progressive Enhancement** - Client-side interactivity where needed
4. **Responsive Design** - Mobile-first approach

---

## 📁 Directory Structure

```
biit/
├── .github/
│   └── copilot-instructions.md       # GitHub Copilot setup instructions
├── .vscode/
│   └── tasks.json                    # VS Code task configurations
├── public/                            # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── layout.tsx                # Root layout (Navbar + Footer wrapper)
│   │   ├── page.tsx                  # Homepage / Landing page
│   │   ├── globals.css               # Global styles & Tailwind imports
│   │   ├── favicon.ico               # Site favicon
│   │   ├── about/
│   │   │   └── page.tsx              # About Us page
│   │   ├── contact/
│   │   │   └── page.tsx              # Contact page
│   │   └── courses/
│   │       └── page.tsx              # Courses listing page
│   └── components/                   # Reusable React components
│       ├── Navbar.tsx                # Navigation bar component
│       ├── Footer.tsx                # Footer component
│       └── CourseCard.tsx            # Course card component
├── .gitignore                        # Git ignore rules
├── demo.html                         # HTML demo/prototype file
├── eslint.config.mjs                 # ESLint configuration
├── next-env.d.ts                     # Next.js TypeScript declarations
├── next.config.ts                    # Next.js configuration
├── package.json                      # Project dependencies
├── package-lock.json                 # Locked dependency versions
├── postcss.config.mjs                # PostCSS configuration
├── README.md                         # Project documentation
└── tsconfig.json                     # TypeScript configuration
```

---

## 🧩 Core Components

### 1. **Navbar Component** (`src/components/Navbar.tsx`)
**Type:** Client Component (`'use client'`)

**Features:**
- Fixed positioning with scroll-based behavior
- Auto-hide on scroll down, show on scroll up
- Dark/Light theme toggle with localStorage persistence
- Responsive mobile menu
- Premium glass morphism design
- Animated transitions and hover effects

**State Management:**
- `isMenuOpen` - Mobile menu visibility
- `scrolled` - Scroll position tracking
- `hidden` - Navbar visibility
- `lastScrollY` - Previous scroll position
- `isDarkMode` - Theme state

**Key Sections:**
- Logo with gradient icon
- Center navigation links (About, Courses, Resources, Products)
- Search button
- Theme toggle
- CTA button ("Get Started")
- Mobile hamburger menu

**Styling Approach:**
- Tailwind CSS utilities
- Conditional classes based on scroll state
- Custom animations (fadeInUp)
- Glass morphism with backdrop-blur
- Gradient accents matching hero section

---

### 2. **Footer Component** (`src/components/Footer.tsx`)
**Type:** Server Component (default)

**Structure:**
```tsx
Footer
├── About Section (2 columns)
│   ├── Brand name
│   └── Description text
├── Quick Links Section
│   ├── Home
│   ├── Courses
│   ├── About Us
│   └── Contact
├── Contact Info Section
│   ├── Email
│   ├── Phone
│   └── Location
└── Copyright Section
```

**Styling:**
- Dark background (gray-900)
- White text with gray-400 accents
- 4-column grid on desktop
- Responsive stacking on mobile
- Hover transitions on links

---

### 3. **CourseCard Component** (`src/components/CourseCard.tsx`)
**Type:** Server Component (default)

**Props Interface:**
```typescript
interface CourseCardProps {
  title: string;
  description: string;
  instructor: string;
  instructorInitials: string;
  lectures: number;
  rating: number;
  gradientFrom: string;      // CSS color
  gradientTo: string;        // CSS color
  accentColor: string;       // CSS color
  hoverColor: string;        // CSS color
}
```

**Features:**
- Premium card design with hover effects
- Gradient background customization
- Rating display with stars
- Lecture count indicator
- Discount badge
- Instructor avatar
- "Enrol Now" CTA button
- Glow and shine effects on hover

**Layout:**
- Fixed width: 400px
- Height: 582px
- Rounded corners (2xl)
- Border with custom accent color
- Dark gradient background
- Shadow effects

---

## 📄 Pages & Routes

### 1. **Homepage** (`src/app/page.tsx`)
**Route:** `/`  
**Type:** Client Component (`'use client'`)

**Sections:**
1. **Hero Section**
   - Large gradient background with animations
   - Main heading: "Master Your Path to IIT Success"
   - Dual login buttons (Student / Mentor)
   - Premium animated background effects

2. **What We Offer Section**
   - 4 feature cards (grid layout):
     - Personalised Tracking
     - Prep Curated Content
     - Strategy Builder
     - Your Safe Space
   - "Book a 1-on-1 Session" CTA banner

3. **Premium Courses Section**
   - Horizontal scrollable course carousel
   - Navigation arrows (left/right)
   - 8+ course cards with different subjects
   - Pagination dots

4. **Core Circle Section**
   - Team member showcase
   - Large profile card with bio
   - Member carousel navigation
   - 6 team members total
   - Social media links (LinkedIn, Facebook)

5. **India's Brightest Minds Section**
   - Interactive India map
   - City-based mentor listings
   - 10 cities with mentors
   - Two-column layout (list + map)
   - Mentor detail cards

6. **Watch Recorded Lectures Section**
   - Video carousel
   - 7 video thumbnails
   - Navigation arrows

7. **Mobile App CTA Section**
   - App download promotion
   - App Store and Google Play buttons
   - Phone mockup images

**State Management:**
- `coursesScrollRef` - Course carousel scroll reference
- `canScrollLeft/Right` - Scroll button states
- `currentMember` - Active team member index
- `selectedCity` - Active city on map
- `selectedMentorIndex` - Active mentor in list

**Data Structures:**
- `coreMembers[]` - Array of 6 team members
- `mentorsByCity{}` - Object mapping cities to mentor arrays

---

### 2. **About Page** (`src/app/about/page.tsx`)
**Route:** `/about`  
**Status:** Basic placeholder page

---

### 3. **Courses Page** (`src/app/courses/page.tsx`)
**Route:** `/courses`  
**Status:** Basic placeholder page

---

### 4. **Contact Page** (`src/app/contact/page.tsx`)
**Route:** `/contact`  
**Status:** Basic placeholder page

---

### 5. **Root Layout** (`src/app/layout.tsx`)
**Purpose:** Global layout wrapper for all pages

**Structure:**
```tsx
<html>
  <body>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </body>
</html>
```

**Features:**
- Font configuration (Geist Sans & Mono)
- Global metadata (title, description)
- Flex column layout (min-height screen)
- Navbar and Footer on all pages
- Suppresses hydration warnings

**Metadata:**
- Title: "Being Iitian - Premier IIT-JEE Coaching Platform"
- Description: "Expert coaching and resources for IIT-JEE aspirants..."

---

## 🎨 Styling & Design System

### Color Palette
```css
/* Primary Colors */
--primary-dark: #031023;      /* Hero backgrounds, cards */
--primary-blue: #1E82E9;      /* CTAs, interactive elements */
--light-blue: #C7E7F9;        /* Backgrounds, accents */
--secondary-blue: #86B8F3;    /* Dividers, icons */
--dark-blue: #10549E;         /* Borders, dividers */

/* Neutrals */
--white: #FFFFFF;
--light-text: #FCFCFC;
--slate-700: rgb(51, 65, 85);
--slate-900: rgb(15, 23, 42);

/* Gradients */
Hero Gradient: from-[#E8F4FD] via-[#D4EBFC] to-[#C7E7F9]
Button Gradient: from-[#1E82E9] via-[#2B95FF] to-[#1d7dd4]
```

### Typography
```css
/* Font Family */
font-family: Geist Sans, Inter, system-ui, sans-serif;

/* Font Sizes */
Display 1: 90px / 100px line-height
H1: 72px / 84px line-height
H2: 60px / 78px line-height
H3: 26px / tight line-height
H4: 24px / 32px line-height
Paragraph: 18px / 24px line-height
Small: 15px / relaxed line-height
```

### Spacing System
- Base unit: 4px (0.25rem)
- Common gaps: 8px, 12px, 16px, 24px, 32px, 60px
- Section padding: py-16, py-24, py-32
- Container max-width: 1320px - 1440px

### Border Radius
- Small: 8px (rounded-lg)
- Medium: 16px (rounded-2xl)
- Large: 32px (rounded-[32px])
- Extra Large: 36px (rounded-[36px])

### Shadows
```css
/* Card Shadows */
shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25)

/* Custom Shadows */
shadow-[0_8px_32px_rgba(59,130,246,0.25)]
shadow-[0_20px_60px_rgba(30,130,233,0.15)]
```

### Animations
```css
/* Custom Animations */
@keyframes fadeIn
@keyframes fadeInUp
@keyframes blob
@keyframes pulse
@keyframes gradient
@keyframes wave

/* Animation Delays */
animation-delay-2000: 2s
animation-delay-4000: 4s
animation-delay-6000: 6s
```

### Dark Mode
- Enabled via `dark:` Tailwind prefix
- Uses system preferences or localStorage
- Toggle in Navbar component
- Color adjustments for all components

---

## ⚙️ Configuration Files

### 1. **next.config.ts**
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options here
};

export default nextConfig;
```

### 2. **tailwind.config.ts** (Inferred from Tailwind 4)
- Uses PostCSS for processing
- Custom color extensions
- Animation extensions
- Custom utilities

### 3. **tsconfig.json**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]  // Path aliases
    },
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

### 4. **eslint.config.mjs**
- Next.js specific ESLint rules
- TypeScript support
- React hooks rules

### 5. **postcss.config.mjs**
```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
};
```

### 6. **package.json Scripts**
```json
{
  "scripts": {
    "dev": "next dev",        // Development server
    "build": "next build",    // Production build
    "start": "next start",    // Production server
    "lint": "eslint"          // Linting
  }
}
```

---

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "next": "16.0.1"
}
```

### Development Dependencies
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "16.0.1",
  "babel-plugin-react-compiler": "1.0.0"
}
```

### Version Compatibility
- Node.js: 20+ recommended
- npm: 9+ recommended
- React: 19.x (latest)
- Next.js: 16.x (latest with App Router)

---

## 🔧 Development Workflow

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Development Server
- Default port: http://localhost:3000
- Hot Module Replacement (HMR) enabled
- Fast Refresh for React components
- Turbopack for faster builds

### File Organization Best Practices
1. **Components** - Place reusable components in `src/components/`
2. **Pages** - Use App Router structure in `src/app/`
3. **Styles** - Global styles in `src/app/globals.css`
4. **Assets** - Static files in `public/`
5. **Types** - TypeScript types co-located with components

### Naming Conventions
- **Components:** PascalCase (e.g., `Navbar.tsx`)
- **Files:** kebab-case for non-components (e.g., `globals.css`)
- **Pages:** lowercase with `page.tsx` convention
- **Routes:** Folder-based routing (e.g., `/about/page.tsx`)

### Code Style
- Use TypeScript for type safety
- Prefer Server Components unless interactivity needed
- Use `'use client'` directive only when necessary
- Follow ESLint rules
- Use Tailwind CSS for styling
- Keep components focused and reusable

### State Management
- **Local State:** useState for component-level state
- **Refs:** useRef for DOM references and scroll tracking
- **Effects:** useEffect for side effects (scroll listeners, theme)
- **Context:** Not currently used (consider for global state)

### Performance Optimization
- Server Components by default (faster initial load)
- Client Components only where needed
- Image optimization with next/image (not yet implemented)
- Font optimization with next/font (implemented)
- Code splitting automatic with App Router

---

## 🚀 Deployment

### Recommended Platform: Vercel
1. Push code to GitHub
2. Import repository to Vercel
3. Auto-detected as Next.js project
4. Deploy with one click

### Environment Variables
- None currently required
- Add `.env.local` for local secrets
- Configure in Vercel dashboard for production

### Build Output
- Static HTML where possible
- Dynamic routes server-rendered
- API routes as serverless functions
- Assets optimized and cached

---

## 📝 Additional Notes

### Future Enhancements
1. **Pages to Complete:**
   - About Us (content needed)
   - Courses (filtering, search)
   - Contact (form implementation)
   
2. **Features to Add:**
   - User authentication (Student/Mentor login)
   - Payment integration for courses
   - Video player integration
   - Real mentor booking system
   - Interactive map with real data
   - Search functionality
   - Blog section
   
3. **Performance:**
   - Implement next/image for all images
   - Add loading states
   - Optimize animations
   - Code splitting for large sections
   
4. **SEO:**
   - Add proper meta tags per page
   - Implement structured data
   - Sitemap generation
   - Robots.txt

### Known Issues
- None currently documented

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2017+ JavaScript features
- CSS Grid and Flexbox required

---

## 📞 Support & Contact

For questions or issues:
- Email: info@beingiitian.com
- Documentation: README.md
- GitHub: (repository URL)

---

**Last Indexed:** November 6, 2025  
**Indexer:** GitHub Copilot  
**Version:** 1.0.0
