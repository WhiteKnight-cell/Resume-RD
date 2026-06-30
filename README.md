# Ryan Donayre - Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, Tailwind CSS v4, and Framer Motion. Dark-themed with cyber-inspired visuals and smooth animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Fonts:** Inter + JetBrains Mono (Google Fonts)

## Features

- Responsive design (mobile-first, tablet, desktop)
- Dark theme with glassmorphism and gradients
- Animated particle background
- Typing animation in hero section
- Scroll-triggered reveal animations
- Sticky navigation with active section highlighting
- Mobile hamburger menu
- Filterable project gallery
- Animated skill progress bars
- Education timeline
- Contact form with validation
- Loading screen
- Scroll progress indicator
- Back-to-top button
- SEO optimized

## Sections

1. Hero - Typing animation, CTA buttons, floating tech icons
2. About - Biography, areas of interest
3. Education - Timeline layout
4. Skills - Categorized with animated progress bars
5. Projects - Filterable cards with GitHub links
6. Certifications - Elegant card display
7. Experience - Academic & freelance work
8. Contact - Form with validation + social links
9. Footer - Social icons, copyright

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Resume-RD

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Customization

All personal data is centralized in `src/data/portfolio.ts`. Edit this file to update:

- Personal information
- Education history
- Skills and proficiency levels
- Projects
- Certifications
- Experience
- Achievements
- Organizations

### Adding a profile photo

Replace the placeholder in `src/components/Hero.tsx` - look for the avatar div and add an `<Image>` tag pointing to your photo in `public/images/`.

### Changing theme colors

Edit the CSS variables in `src/app/globals.css` under the `@theme` block.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + Tailwind theme
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Main page assembling all sections
├── components/
│   ├── Navbar.tsx           # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with typing animation
│   ├── About.tsx            # About section
│   ├── Education.tsx        # Education timeline
│   ├── Skills.tsx           # Skills with categories + progress bars
│   ├── Projects.tsx         # Filterable project gallery
│   ├── Certifications.tsx   # Certification cards
│   ├── Experience.tsx       # Experience section
│   ├── Contact.tsx          # Contact form with validation
│   ├── Footer.tsx           # Footer with social links
│   └── ui/
│       ├── AnimatedSection.tsx   # Scroll reveal wrapper
│       ├── BackToTop.tsx         # Back-to-top button
│       ├── LoadingScreen.tsx     # Initial loading animation
│       ├── ParticlesBackground.tsx # Animated particle canvas
│       └── ScrollProgress.tsx    # Reading progress bar
└── data/
    └── portfolio.ts         # All portfolio data
```

## Deployment

### Vercel (Recommended)

```bash
npx vercel
```

### Static Export

```bash
npm run build
# Output in `out/` directory - deploy to any static host
```

## Future Enhancements

- [ ] Add light/dark theme toggle
- [ ] Add blog section
- [ ] Add more project screenshots
- [ ] Add real contact form backend (e.g., Formspree, EmailJS)
- [ ] Add i18n support
- [ ] Add custom 404 page
- [ ] Add more micro-interactions and transitions
- [ ] Implement proper image gallery for projects
- [ ] Add testimonial section
- [ ] Integrate with headless CMS for dynamic content

## License

MIT
