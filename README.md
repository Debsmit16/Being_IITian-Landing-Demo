# Being Iitian - Premier IIT-JEE Coaching Platform

A modern edtech platform built with Next.js, TypeScript, and Tailwind CSS, designed specifically for IIT-JEE aspirants.

## 🎯 Project Overview

**Being Iitian** is an educational technology platform that provides comprehensive coaching and resources for students preparing for IIT-JEE examinations. The platform offers:

- **Personalized Tracking** - Monitor your progress and identify areas for improvement
- **Curated Content** - Access expert-designed study materials and video lectures
- **Strategy Builder** - Create custom study plans and schedules
- **Safe Space** - A supportive community for JEE aspirants

## ✨ Features

- 🎨 Modern, responsive design based on custom Figma specifications
- 🔐 Dual login system (Students & Mentors)
- 📚 Premium course catalog with ratings and reviews
- 👥 Core team showcase
- 🎯 Feature-rich landing page
- ⚡ Built with Next.js 16 for optimal performance
- 🎨 Styled with Tailwind CSS 4
- 📱 Fully responsive mobile-first design

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd biit
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via next/font
- **Linting**: ESLint

## 📂 Project Structure

```
biit/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx      # Root layout with Navbar & Footer
│   │   ├── page.tsx        # Homepage (landing page)
│   │   ├── globals.css     # Global styles
│   │   ├── about/          # About page
│   │   ├── courses/        # Courses page
│   │   └── contact/        # Contact page
│   └── components/         # Reusable React components
│       ├── Navbar.tsx      # Navigation bar
│       └── Footer.tsx      # Footer component
├── public/                 # Static assets
├── .github/               # GitHub configuration
│   └── copilot-instructions.md
└── package.json           # Project dependencies

```

## 🎨 Design System

### Color Palette

- **Primary Dark**: `#031023` - Hero backgrounds, cards
- **Primary Blue**: `#1E82E9` - CTAs, interactive elements
- **Light Blue**: `#C7E7F9` - Backgrounds, accents
- **Secondary Blue**: `#86B8F3` - Dividers, icons
- **Dark Blue**: `#10549E` - Borders, dividers
- **White**: `#FFFFFF` - Text on dark backgrounds
- **Light Text**: `#FCFCFC` - Secondary text

### Typography

- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular & semibold weights
- **Display 1**: 72px / 84px line height
- **H1**: 60px / 78px line height
- **H4**: 24px / 32px line height
- **Paragraph**: 18px / 24px line height

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is through [Vercel](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📝 Development Notes

- The landing page design is based on a custom Figma file
- All colors and spacing follow the exact specifications from the design
- Components are built with accessibility in mind
- The project uses the latest Next.js App Router architecture

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to Being Iitian.

## 📧 Contact

For any queries, reach out to: info@beingiitian.com

---

Built with ❤️ for JEE Aspirants
