# Praxis Initiative — Technical Specification
## Version 1.0 | March 2026

> This document defines the complete technical architecture for the Praxis Initiative website rebuild. It is the authoritative reference for all engineering decisions, dependency choices, hosting configuration, integrations, and development conventions.

---

## 1. FRAMEWORK DECISION & RATIONALE

### Chosen Stack: Next.js 15 (App Router) + Sanity CMS + Vercel

**Why Next.js 15:**
Next.js 15 with the App Router provides the best balance of developer experience, performance, and capability for a nonprofit site of this scope. Server Components reduce client-side JavaScript to a minimum while enabling dynamic content. Server Actions handle form submissions without custom API routes for simple cases. The ecosystem — Framer Motion, React Three Fiber, Sanity, React Hook Form — is mature, well-documented, and free of licensing costs.

**Why not Astro:** Astro excels at fully static, content-only sites. The Praxis Initiative site requires dynamic form handling (volunteer signup, contact, newsletter), real-time donation embeds, petition embeds from Action Network, and potentially authenticated states in the future. The interactive complexity tips the balance toward Next.js.

**Why not SvelteKit:** Smaller ecosystem, fewer nonprofit-specific integrations, less developer tooling for the 3D and animation stack required.

**Why Sanity CMS:** Sanity offers a generous free tier (3 users, unlimited documents, 10GB assets), an excellent React-based Studio, strong Next.js integration via `next-sanity`, and real-time collaborative editing. It is the most appropriate CMS for a small nonprofit where non-technical staff must edit content. Alternatives considered: Contentful (more expensive), Payload CMS (self-hosted complexity), WordPress (wrong paradigm for this stack).

**Why Vercel:** Seamless Next.js deployment, edge network (fast globally), preview deployments for every PR, built-in analytics, and a free Hobby tier with generous limits. Apply for Vercel's pro plan via the nonprofit/open source program once the organization qualifies.

---

## 2. FULL DEPENDENCY LIST

### Core
```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "typescript": "^5.4.0"
}
```

### Styling
```json
{
  "tailwindcss": "^4.0.0",
  "@tailwindcss/typography": "^0.5.0",
  "postcss": "^8.4.0",
  "autoprefixer": "^10.4.0"
}
```

### Animation & 3D
```json
{
  "framer-motion": "^11.0.0",
  "@react-three/fiber": "^8.0.0",
  "@react-three/drei": "^9.0.0",
  "three": "^0.163.0",
  "@types/three": "^0.163.0"
}
```

### CMS
```json
{
  "next-sanity": "^9.0.0",
  "@sanity/client": "^6.0.0",
  "@sanity/image-url": "^1.0.0",
  "sanity": "^3.0.0"
}
```

### Forms & Email
```json
{
  "react-hook-form": "^7.51.0",
  "@hookform/resolvers": "^3.3.0",
  "zod": "^3.22.0",
  "resend": "^3.0.0"
}
```

### Analytics & Performance
```json
{
  "@vercel/analytics": "^1.3.0",
  "@vercel/speed-insights": "^1.0.0"
}
```

### Icons & Assets
```json
{
  "lucide-react": "^0.370.0",
  "@heroicons/react": "^2.1.0"
}
```

### Fonts (via next/font/google — no package install required)
- Space Grotesk (400, 500, 600, 700, 800)
- Plus Jakarta Sans (400, 500, 600)
- DM Serif Display (400 italic)
- JetBrains Mono (400)

### Dev Dependencies
```json
{
  "@types/node": "^20.0.0",
  "@types/react": "^19.0.0",
  "eslint": "^9.0.0",
  "eslint-config-next": "^15.0.0",
  "prettier": "^3.2.0",
  "prettier-plugin-tailwindcss": "^0.6.0"
}
```

---

## 3. PROJECT INITIALIZATION

```bash
# Initialize Next.js 15 with TypeScript and App Router
npx create-next-app@latest praxis-initiative \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*"

cd praxis-initiative

# Install animation and 3D
npm install framer-motion @react-three/fiber @react-three/drei three @types/three

# Install Sanity
npm install next-sanity @sanity/client @sanity/image-url sanity

# Install forms and email
npm install react-hook-form @hookform/resolvers zod resend

# Install icons
npm install lucide-react

# Install analytics
npm install @vercel/analytics @vercel/speed-insights

# Initialize Sanity project (follow prompts)
npm create sanity@latest -- --project praxis-initiative --dataset production
```

---

## 4. NEXT.JS CONFIGURATION

### `next.config.ts`
```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },
  // Enable experimental features for performance
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
```

---

## 5. TAILWIND CONFIGURATION

### `tailwind.config.ts`
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#000080',
        maroon: '#800000',
        space: '#00001A',
        midnight: '#050530',
        void: '#0A0020',
        electric: '#00D4FF',
        gold: '#C9A227',
        crimson: '#FF4444',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
        quote: ['var(--font-dm-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      backdropBlur: {
        'glass': '20px',
        'glass-lg': '30px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-marquee': 'scroll-marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
```

---

## 6. GLOBAL STYLES

### `src/app/globals.css`
```css
@import "tailwindcss";

/* ===========================
   CSS CUSTOM PROPERTIES
   =========================== */
:root {
  /* Brand Colors */
  --color-navy: #000080;
  --color-maroon: #800000;

  /* Background Palette */
  --color-space: #00001A;
  --color-midnight: #050530;
  --color-void: #0A0020;

  /* Accent Colors */
  --color-electric: #00D4FF;
  --color-gold: #C9A227;
  --color-crimson: #FF4444;

  /* Text */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #C0C0D0;
  --color-text-muted: #8080A0;

  /* Glass System */
  --glass-bg: rgba(5, 5, 48, 0.60);
  --glass-bg-navy: rgba(0, 0, 128, 0.15);
  --glass-bg-maroon: rgba(128, 0, 0, 0.15);
  --glass-border: rgba(255, 255, 255, 0.12);
  --glass-border-top: rgba(0, 212, 255, 0.20);
  --glass-blur: blur(20px) saturate(180%);
  --glass-shadow: 0 8px 32px rgba(0, 0, 128, 0.40);
  --glass-shadow-hover: 0 16px 48px rgba(0, 0, 128, 0.55);

  /* Typography */
  --font-display: var(--font-space-grotesk), system-ui, sans-serif;
  --font-body: var(--font-plus-jakarta), system-ui, sans-serif;
  --font-quote: var(--font-dm-serif), Georgia, serif;
  --font-mono: var(--font-jetbrains), monospace;

  /* Layout */
  --section-max-width: 1280px;
  --section-padding-x: clamp(16px, 4vw, 80px);
  --section-padding-y: clamp(60px, 8vw, 140px);
}

/* ===========================
   BASE STYLES
   =========================== */
html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(135deg, #00001A 0%, #050530 40%, #0A0020 80%, #000010 100%);
  background-attachment: fixed;
  color: var(--color-text-primary);
  font-family: var(--font-body);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* ===========================
   GLASSMORPHISM COMPONENTS
   =========================== */
.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  border-top-color: var(--glass-border-top);
  box-shadow: var(--glass-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.glass:hover,
.glass-hover:hover {
  box-shadow: var(--glass-shadow-hover),
    0 0 0 1px rgba(0, 212, 255, 0.20),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  border-top-color: rgba(0, 212, 255, 0.35);
}

.glass-navy {
  background: rgba(0, 0, 128, 0.15);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(0, 0, 128, 0.30);
  border-top-color: rgba(0, 212, 255, 0.15);
  box-shadow: 0 8px 32px rgba(0, 0, 128, 0.30);
}

.glass-maroon {
  background: rgba(128, 0, 0, 0.15);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(128, 0, 0, 0.30);
  border-top-color: rgba(201, 162, 39, 0.20);
  box-shadow: 0 8px 32px rgba(128, 0, 0, 0.25);
}

.glass-electric {
  background: rgba(0, 212, 255, 0.08);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid rgba(0, 212, 255, 0.20);
  box-shadow: 0 8px 32px rgba(0, 212, 255, 0.15);
}

/* ===========================
   TYPOGRAPHY UTILITIES
   =========================== */
.text-gradient-electric {
  background: linear-gradient(135deg, #00D4FF 0%, #7FE9FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-gold {
  background: linear-gradient(135deg, #C9A227 0%, #E8C97A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.text-gradient-navy-electric {
  background: linear-gradient(135deg, #6666FF 0%, #00D4FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ===========================
   SECTION LAYOUT
   =========================== */
.section {
  width: 100%;
  padding: var(--section-padding-y) var(--section-padding-x);
}

.section-inner {
  max-width: var(--section-max-width);
  margin: 0 auto;
}

/* ===========================
   ELECTRIC GLOW EFFECTS
   =========================== */
.glow-electric {
  box-shadow: 0 0 20px rgba(0, 212, 255, 0.40), 0 0 60px rgba(0, 212, 255, 0.15);
}

.glow-gold {
  box-shadow: 0 0 20px rgba(201, 162, 39, 0.40), 0 0 60px rgba(201, 162, 39, 0.15);
}

.glow-navy {
  box-shadow: 0 0 30px rgba(0, 0, 255, 0.35), 0 0 80px rgba(0, 0, 128, 0.20);
}

/* ===========================
   ACCESSIBILITY
   =========================== */
.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  background: var(--color-electric);
  color: #000;
  padding: 8px 16px;
  z-index: 9999;
  font-weight: 600;
}

.skip-link:focus {
  top: 0;
}

*:focus-visible {
  outline: 2px solid var(--color-electric);
  outline-offset: 3px;
  border-radius: 4px;
}

/* ===========================
   REDUCED MOTION
   =========================== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ===========================
   SCROLLBAR (Webkit)
   =========================== */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #00001A;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 128, 0.6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 212, 255, 0.4);
}
```

---

## 7. ROOT LAYOUT WITH FONTS

### `src/app/layout.tsx`
```typescript
import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://praxisinitiative.org'),
  title: {
    default: 'Praxis Initiative | Criminal Legal Reform & Prison Oversight Arizona',
    template: '%s | Praxis Initiative',
  },
  description: 'Praxis Initiative transforms Arizona\'s criminal legal system through lived-experience leadership, independent prison oversight, harm reduction, and returning citizen empowerment programs.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://praxisinitiative.org',
    siteName: 'Praxis Initiative',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@praxisinitiative', // update with actual handle
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
```

---

## 8. SANITY SCHEMA DEFINITIONS

### Post Schema (`sanity/schemas/post.ts`)
```typescript
import { defineType, defineField } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'News & Research',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'excerpt', type: 'text', rows: 3 }),
    defineField({ name: 'featuredImage', type: 'image', options: { hotspot: true }, fields: [
      defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: Rule => Rule.required() })
    ]}),
    defineField({ name: 'category', type: 'string', options: {
      list: ['News', 'Research', 'Press Coverage', 'Legislation', 'Op-Ed']
    }}),
    defineField({ name: 'publishedAt', type: 'datetime', validation: Rule => Rule.required() }),
    defineField({ name: 'body', type: 'array', of: [{ type: 'block' }, { type: 'image' }] }),
    defineField({ name: 'seoTitle', type: 'string' }),
    defineField({ name: 'seoDescription', type: 'text', rows: 2 }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'featuredImage' }
  }
})
```

### Event Schema (`sanity/schemas/event.ts`)
```typescript
export const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'date', type: 'datetime', validation: Rule => Rule.required() }),
    defineField({ name: 'endDate', type: 'datetime' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'isVirtual', type: 'boolean' }),
    defineField({ name: 'virtualLink', type: 'url' }),
    defineField({ name: 'description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'rsvpLink', type: 'url' }),
    defineField({ name: 'featuredImage', type: 'image', options: { hotspot: true } }),
  ]
})
```

### Team Member Schema (`sanity/schemas/teamMember.ts`)
```typescript
export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'photo', type: 'image', options: { hotspot: true }, fields: [
      defineField({ name: 'alt', type: 'string', validation: Rule => Rule.required() })
    ]}),
    defineField({ name: 'bio', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'order', type: 'number' }),
    defineField({ name: 'isLeadership', type: 'boolean' }),
    defineField({ name: 'linkedIn', type: 'url' }),
  ],
  orderings: [{ title: 'Order', by: [{ field: 'order', direction: 'asc' }] }]
})
```

### Partner Schema (`sanity/schemas/partner.ts`)
```typescript
export const partner = defineType({
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'logo', type: 'image', options: { hotspot: true }, fields: [
      defineField({ name: 'alt', type: 'string', validation: Rule => Rule.required() })
    ]}),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'url', type: 'url' }),
    defineField({ name: 'isSB1507Coalition', type: 'boolean', title: 'SB 1507 Coalition Partner?' }),
    defineField({ name: 'order', type: 'number' }),
  ]
})
```

---

## 9. API ROUTES

### Contact Form (`src/app/api/contact/route.ts`)
```typescript
import { Resend } from 'resend'
import { z } from 'zod'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  inquiryType: z.string(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from: 'Website Contact <noreply@praxisinitiative.org>',
      to: ['info@praxisinitiative.org'], // update with actual inbox
      replyTo: data.email,
      subject: `[${data.inquiryType}] ${data.subject}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nType: ${data.inquiryType}\n\n${data.message}`,
    })

    // Confirmation to sender
    await resend.emails.send({
      from: 'Praxis Initiative <hello@praxisinitiative.org>',
      to: [data.email],
      subject: 'We received your message — Praxis Initiative',
      text: `Hi ${data.name},\n\nThank you for reaching out to Praxis Initiative. We'll respond within 2 business days.\n\nIn the meantime, visit us at praxisinitiative.org for the latest news and ways to get involved.\n\nIn solidarity,\nThe Praxis Initiative Team`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
```

---

## 10. ENVIRONMENT VARIABLES

### `.env.local` (never commit — add to .gitignore)
```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token

# Resend
RESEND_API_KEY=re_your_key_here

# Action Network
ACTION_NETWORK_API_KEY=your_key_here

# ButterGive
NEXT_PUBLIC_BUTTERGIVE_ORG_ID=your_org_id

# Plausible Analytics
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=praxisinitiative.org

# Site URL
NEXT_PUBLIC_SITE_URL=https://praxisinitiative.org
```

### `.env.example` (commit this)
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=
RESEND_API_KEY=
ACTION_NETWORK_API_KEY=
NEXT_PUBLIC_BUTTERGIVE_ORG_ID=
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=praxisinitiative.org
NEXT_PUBLIC_SITE_URL=https://praxisinitiative.org
```

---

## 11. VERCEL DEPLOYMENT

### Steps
1. Push code to GitHub (create private repo)
2. Connect GitHub repo to Vercel at vercel.com/new
3. Set all environment variables in Vercel dashboard (Settings → Environment Variables)
4. Configure custom domain: praxisinitiative.org
5. Add DNS records at domain registrar:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`
6. Configure email DNS (Resend provides these — SPF, DKIM, DMARC)
7. Enable automatic deployments on `main` branch

### Preview Deployments
Every pull request automatically gets a preview URL (e.g., `praxis-initiative-git-feature-xyz.vercel.app`). Use these for client review before merging to main.

### Production Branch
`main` → auto-deploys to praxisinitiative.org

---

## 12. IMAGE MANAGEMENT

### Strategy
- All organizational photos uploaded to Sanity Studio (CDN delivery via cdn.sanity.io)
- All images in Next.js use the `<Image>` component with:
  - `sizes` prop for responsive loading
  - `loading="lazy"` (default for non-hero)
  - `priority={true}` for above-the-fold images only
  - Always provide `alt` prop — no empty alt on content images
- Hero background images or 3D canvases use React Three Fiber — no large image files for hero sections
- Partner logos: white/light SVG variants recommended (client must provide SVG format)
- Minimum upload resolution: 2000px on the longest edge
- Sanity handles automatic WebP conversion and responsive image generation

---

## 13. 3D HERO COMPONENT SPEC

### `src/components/three/HeroCanvas.tsx`

**Architecture:**
- Dynamically imported with `next/dynamic` and `ssr: false`
- Canvas fills parent container (100vw × 100vh for hero)
- Renders one of two effects (configurable per page):
  - **Particle Field:** 2000 points (500 on mobile) floating in 3D space, slow drift, mouse parallax
  - **Wireframe Geometry:** Slowly rotating icosahedron, wireframe, navy + electric emission

**Performance Rules:**
- Check `window.matchMedia('(prefers-reduced-motion: reduce)')` — if true, skip animation, show static gradient only
- Mobile particle count cap: 500
- Pause animation when tab is backgrounded (Page Visibility API)
- Disconnect ResizeObserver and cancel animation frame on unmount

**Lighting:**
- AmbientLight: intensity 0.3, color #000080
- DirectionalLight: intensity 1.0, color #00D4FF, position [5, 5, 5]
- PointLight: intensity 0.5, color #800000, position [-5, -3, -5]

---

## 14. ACTION NETWORK EMBED PATTERN

### Client Component wrapper:
```typescript
'use client'

import { useEffect } from 'react'

interface ActionNetworkEmbedProps {
  embedCode: string  // The AN embed HTML string from Admin
  title: string
}

export function ActionNetworkEmbed({ embedCode, title }: ActionNetworkEmbedProps) {
  useEffect(() => {
    // Re-initialize Action Network scripts after Next.js client navigation
    const scripts = document.querySelectorAll('[src*="actionnetwork.org"]')
    scripts.forEach(script => {
      const newScript = document.createElement('script')
      newScript.src = (script as HTMLScriptElement).src
      document.body.appendChild(newScript)
    })
  }, [])

  return (
    <div
      className="glass rounded-2xl p-8"
      aria-label={`Petition: ${title}`}
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  )
}
```

*Note: Store embedCode strings in Sanity CMS or as environment variables — do not hardcode in source.*

---

## 15. PERFORMANCE & SEO CHECKLIST

### Pre-Launch Checks
- [ ] Run Lighthouse on all 9 Tier 1 pages — all scores ≥90 performance, ≥95 accessibility
- [ ] Validate JSON-LD structured data at schema.org validator
- [ ] Test all forms end-to-end (send real emails through Resend)
- [ ] Verify Action Network petition embeds load on Take Action page
- [ ] Verify ButterGive donation widget loads on Donate page
- [ ] Test on iPhone SE (375px), iPhone 14 Pro, iPad, 1280px desktop, 1920px desktop
- [ ] Test on Chrome, Safari, Firefox, Edge
- [ ] Keyboard navigation: tab through every page without mouse
- [ ] Screen reader test (VoiceOver or NVDA) on homepage and programs page
- [ ] Verify `prefers-reduced-motion` disables all animations
- [ ] Submit sitemap.xml to Google Search Console after DNS cutover
- [ ] Set up 301 redirects for all old URLs (see SITEMAP.md)
- [ ] Verify robots.txt is accessible at praxisinitiative.org/robots.txt
- [ ] Test page speed on mobile 3G (simulate in Chrome DevTools)

---

## 16. SECURITY

- CSP headers configured in `next.config.ts` (allow Sanity CDN, Action Network, ButterGive, Plausible)
- All API routes validate input with Zod before processing
- Environment variables never exposed to client (no `NEXT_PUBLIC_` prefix on secret keys)
- No user authentication required — this is a public marketing/advocacy site
- HTTPS enforced via Vercel (automatic TLS)
- Sanitize any HTML from CMS using `isomorphic-dompurify` if rendering raw HTML from Sanity

---

## 17. MAINTENANCE NOTES

- **Sanity CMS:** All news, events, team members, partners, and site settings are managed in Sanity Studio at `/studio`. No code changes required for content updates.
- **Petition updates:** Action Network embed codes updated in Sanity CMS (no code deploy).
- **Donate page:** ButterGive widget configured in ButterGive admin — no code changes.
- **Annual dependency audit:** Run `npm audit` quarterly. Update Next.js and Sanity with each major release.
- **Domain renewal:** praxisinitiative.org — set to auto-renew. Do not let this lapse.
