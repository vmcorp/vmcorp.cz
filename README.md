# Velvethy & Mikes Corporation Website

Modern, high-performance corporate website for Velvethy & Mikes Corporation - an elite AI consulting firm specializing in strategic technology transformation.

## 🚀 Features

- **SEO Optimized**: Built with Astro for optimal performance and SEO (no virtual DOM)
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Modern Design**: Clean, professional aesthetic with gradient accents and smooth animations
- **Fast Loading**: Static site generation with minimal JavaScript
- **Accessible**: WCAG compliant with semantic HTML
- **Type-Safe**: Built with TypeScript for reliability

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) - Static Site Generator
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- **Icons**: [Lucide Icons](https://lucide.dev) - Modern SVG icon library
- **TypeScript**: Type-safe development

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🔧 Development

```bash
# Start development server
npm run dev

# Development server will be available at http://localhost:4321
```

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navigation header with mobile menu
│   │   ├── Footer.astro     # Site footer
│   │   └── ServiceCard.astro # Reusable service card component
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro      # Home page
│   │   ├── services.astro   # Services page
│   │   ├── about.astro      # About page
│   │   └── contact.astro    # Contact page with form
│   └── styles/
│       └── global.css       # Global styles and custom animations
├── astro.config.mjs         # Astro configuration
├── package.json
└── tsconfig.json
```

## 🎨 Design Features

- **Color Scheme**: Dark theme with cyan/blue gradient accents
- **Typography**: Clean, professional sans-serif fonts
- **Animations**: Subtle hover effects and scroll animations
- **Components**: Reusable, maintainable component architecture

## 📄 Pages

### Home (`/`)
- Hero section with animated background
- Services overview grid
- Value proposition highlights
- Call-to-action sections

### Services (`/services`)
- Detailed service descriptions
- Technology stack showcase
- Process methodology
- Key capabilities for each service

### About (`/about`)
- Company mission and values
- Founder profiles (David Velvethy & Jan Mikes)
- Company statistics
- Legal information

### Contact (`/contact`)
- Contact form (static, ready for backend integration)
- Office location and details
- Business hours
- Map placeholder

## 🔌 Contact Form Integration

The contact form is currently static. To integrate with a backend:

1. Update the form handler in `src/pages/contact.astro`
2. Add your backend endpoint URL
3. Configure form submission logic
4. Add validation and error handling

Popular options:
- Netlify Forms
- Vercel Edge Functions
- Formspree
- Custom API endpoint

## 🌐 Deployment

This site can be deployed to any static hosting platform:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Manual Build
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📊 Performance

- **Lighthouse Score**: Optimized for 100/100
- **Core Web Vitals**: Excellent
- **Bundle Size**: Minimal JavaScript
- **Load Time**: Sub-second on modern connections

## 🔍 SEO Features

- Semantic HTML5 structure
- Open Graph meta tags
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation (via Astro)
- Fast page loads
- Mobile-responsive

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📝 License

Copyright © 2025 Velvethy & Mikes Corporation. All rights reserved.

## 👥 Company Information

**Velvethy & Mikes Corporation**
- IČ: 28994124
- DIČ: CZ28994124
- Address: Francouzska 299/98, Vrsovice, 101 00 Prague 10, Czech Republic

## 🤝 Contributing

This is a private corporate website. For inquiries, please contact us through the website.

---

Built with ❤️ using [Astro](https://astro.build)
