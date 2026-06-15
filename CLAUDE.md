# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

**Pre-development.** No code has been written yet. The repo contains only planning documents (CLAUDE.md, tech-spec.md, design-tokens.json, content-brief.md, SITEMAP.md). The Next.js project must be initialized from scratch.

## Development Commands

Once the Next.js project is initialized:

```bash
# Install dependencies
npm install

# Development server
npm run dev          # starts at http://localhost:3000

# Build & check
npm run build        # production build (catches type errors)
npm run lint         # ESLint
npm run start        # serve production build locally

# Sanity CMS Studio (once configured)
# Studio runs at /studio or as separate app
```

## Tech Stack

- **Framework:** Next.js 15+ (App Router) with TypeScript and React 19
- **CMS:** Sanity.io (Studio v3, free tier)
- **Styling:** Tailwind CSS v4 + custom CSS for glassmorphism effects
- **Animation:** Framer Motion (scroll reveals, page transitions, hover states)
- **3D/WebGL:** React Three Fiber + Three.js (hero backgrounds, lazy-loaded on mobile)
- **Forms:** React Hook Form + Resend (transactional email)
- **Donations:** Feathr (primary donation & fundraising platform)
- **Petitions:** Action Network JS embeds
- **Analytics:** Plausible (privacy-respecting, no cookies)
- **Hosting:** Vercel (free Hobby tier)

## Architecture

The app uses Next.js App Router with a route group `(site)` for all public pages. Server Components by default; Client Components only where interactivity is required (forms, 3D, animations).

**Key architectural decisions:**
- All pages sit on deep-space dark backgrounds (`#00001A` → `#050530`). NO white/light sections. Contrast comes from glass panel opacity variations and content hierarchy.
- Glassmorphism card system with three variants: default (space-blue), navy-tinted, maroon-tinted. All defined as custom CSS classes in `styles/globals.css`.
- React Three Fiber heroes are dynamically imported with `ssr: false` for performance.
- Forms submit via Next.js API routes → Resend for email + Action Network API for list-building.
- Content comes from Sanity CMS. Schemas: `post`, `event`, `program`, `teamMember`, `partner`, `quote`, `siteSettings`.

**Target file structure:** See Section 13 below for the full directory layout.

## Critical Content & Design Rules

- **Terminology:** Always "criminal legal system" (never "justice system"). Always "formerly incarcerated" or "returning citizens" (never "ex-cons"/"felons"). Never use "equity."
- **No Lorem Ipsum** in any deliverable. Use real content from `content-brief.md`.
- **No stock prison imagery** (bars, handcuffs, etc.). Use abstract 3D visuals or real documentary photography.
- **WCAG 2.1 AA** minimum. Glass card text must have sufficient contrast (4.5:1 normal, 3:1 large). All animations respect `prefers-reduced-motion`.
- **PAS framework** (Problem → Agitate → Solution) on all program and advocacy pages.
- **Prose paragraphs**, not bullet-point walls, for page content. Pull quotes break up long text.
- Every page has a prominent quote block within the first 2-3 sections.

## Planning Documents Reference

| File | Purpose |
|---|---|
| `CLAUDE.md` (this file) | Full project spec — identity, design system, page specs, integrations |
| `tech-spec.md` | Detailed technical architecture, all dependencies with versions, env vars, Sanity schemas |
| `design-tokens.json` | Machine-readable design tokens (colors, typography, spacing, glassmorphism, animations) |
| `content-brief.md` | Page-by-page writing guide with actual copy, quotes, and content structure |
| `SITEMAP.md` | Navigation structure, page inventory with priorities, SEO metadata per page |

## Fonts (Google Fonts, self-hosted via next/font/google)

- **Space Grotesk** (400-800): Display/headings
- **Plus Jakarta Sans** (400-600): Body copy
- **DM Serif Display** (400 italic): Pull quotes
- **JetBrains Mono** (400): Stats/data

---

## Full Project Specification

> Everything below is the authoritative context document for the Praxis Initiative website rebuild. All design decisions, architectural choices, content strategy, and integration requirements are defined here.

---

## 1. PROJECT IDENTITY

**Organization:** Praxis Initiative
**Mission:** Transforming Arizona's criminal legal system through lived experience, evidence-based reform, legislative advocacy, independent prison oversight, and direct programming for returning citizens — led by and for directly impacted people.
**Executive Director:** John Fabricius (formerly incarcerated 2003–2018; paralegal; prisoner rights advocate)
**Previous Name:** Arizonans for Transparency and Accountability in Corrections (ATAC)
**Location:** Phoenix, Arizona
**Contact Email:** [to be confirmed by client]
**Website Domain:** praxisinitiative.org
**Repository:** [to be set up — GitHub recommended]

**Core Identity Statement:** Praxis Initiative is the only organization in Arizona operating independently of government that is dedicated to prison oversight AND led entirely by formerly incarcerated people. This is not incidental — it is the organization's central authority and legitimacy claim. Every design and content decision must honor that truth.

**The Central Quote (Glenn Martin — use on homepage and anchor all derivative quotes to this):**
> *"Those closest to the problem are closest to the solution."*
> — Glenn Martin, JustLeadershipUSA

---

## 2. MAJOR LEGISLATIVE VICTORY — MUST FEATURE PROMINENTLY

**SB 1507 — Independent Correctional Oversight Office**
- Signed into law by Governor Katie Hobbs, June 28, 2025
- Passed the Senate 26–3 on final read; House 46–10
- Establishes the Independent Correctional Oversight Office (ICOO)
- Charges the body with: monitoring confinement conditions; compliance with state/federal law; disseminating information about inmate rights; accepting and investigating complaints; establishing a reporting system; submitting annual reports to the Legislature
- Funding status: Currently unfunded (budget amendment stripped initial $1.5M appropriation); office authorized to seek legislative appropriations, federal grants, and private sources
- This was a **six-year campaign** by Praxis (then ATAC) — the site must contextualize this victory AND the ongoing funding fight
- Coalition partners on SB 1507: Dream.org, FAMM, Justice Action Network, ACLU Smart Justice, Arnold Ventures, CPAC Nolan Center, Bipartisan Policy Center

---

## 3. TECH STACK DECISION

### Framework: **Next.js 15+ (App Router)**
**Rationale:** Best ecosystem for content-heavy nonprofit sites with dynamic features. Server Actions handle forms natively. React Three Fiber integrates for 3D. Framer Motion for animation. Strong SEO via metadata API. Vercel deployment is free for nonprofits and seamlessly integrated.

### CMS: **Sanity.io (free tier → Studio v3)**
**Rationale:** Non-technical editors can update content, news, events, team bios, and program pages without touching code. Free tier is sufficient for this scale. Sanity Studio deploys alongside the Next.js app. Structured content means AI can assist with future editing.

### Styling: **Tailwind CSS v4 + Custom CSS for Glassmorphism**
All glassmorphism effects, 3D transforms, and advanced visual effects should use custom CSS classes defined in a global stylesheet. Tailwind handles layout, spacing, and responsive breakpoints.

### Animation: **Framer Motion**
All page transitions, scroll-triggered reveals, hero animations, and interactive hover states use Framer Motion. No GSAP license required.

### 3D / WebGL: **React Three Fiber + Three.js**
Used for: hero section background (animated geometry / particle field), program page visual accents, and any interactive 3D elements. Keep performance-optimized — lazy-load on mobile.

### Forms & Email: **React Hook Form + Resend (email API)**
- Contact form, volunteer signup, newsletter signup all use React Hook Form for validation
- Resend.com handles transactional email (free tier: 3,000 emails/month) — better deliverability than SMTP
- Form submissions also pipe to Action Network via their API for list-building

### Petitions: **Action Network embed**
Embed Action Network petition forms using their JavaScript embed code. Wrap in a Next.js Client Component. All petition CTAs on the Take Action page.

### Donations: **Feathr (primary) + Stripe (backup)**
- Feathr embed for the Donate page (recurring and one-time)
- Stripe for custom donation flows if needed later

### Hosting: **Vercel**
- Free Hobby tier covers the site comfortably (100GB bandwidth/mo)
- Apply for Vercel's nonprofit/open source program for Pro features if needed
- Custom domain: praxisinitiative.org pointed via DNS

### Analytics: **Plausible Analytics** (privacy-respecting, GDPR-compliant, lightweight)

### Maps/Events: **Google Maps embed** for event locations

### Image Optimization: **Next.js Image component** + Cloudinary (free tier) for uploaded assets

---

## 4. DESIGN SYSTEM

### 4.1 Core Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#000080` | Primary brand, hero backgrounds, CTA buttons |
| `--color-maroon` | `#800000` | Secondary brand, accent headings, hover states |
| `--color-space` | `#00001A` | Deep background base — near-black with blue undertone |
| `--color-midnight` | `#050530` | Section backgrounds, dark panels |
| `--color-electric` | `#00D4FF` | Cyan accent — contrast on navy, data highlights, borders |
| `--color-gold` | `#C9A227` | Honor/justice accent — quote marks, award callouts |
| `--color-crimson-bright` | `#FF4444` | Alert accent, urgent CTAs, impact numbers |
| `--color-white` | `#FFFFFF` | Body text on dark, card surfaces |
| `--color-frost` | `rgba(255,255,255,0.06)` | Glass card backgrounds |
| `--color-glass-border` | `rgba(255,255,255,0.12)` | Glass card borders |
| `--color-glass-highlight` | `rgba(0,212,255,0.08)` | Glass card top highlight |

### 4.2 Typography

| Token | Font | Weight | Usage |
|---|---|---|---|
| `--font-display` | Space Grotesk | 700/800 | H1, hero headlines |
| `--font-heading` | Space Grotesk | 600/700 | H2–H4, section titles |
| `--font-body` | Plus Jakarta Sans | 400/500 | Body copy, descriptions |
| `--font-quote` | DM Serif Display | 400 italic | Pull quotes, testimonials |
| `--font-mono` | JetBrains Mono | 400 | Stats, data, code |
| `--font-label` | Space Grotesk | 500 | Labels, captions, tags |

**Import from Google Fonts:**
```
Space Grotesk: 400, 500, 600, 700, 800
Plus Jakarta Sans: 400, 500, 600
DM Serif Display: 400 italic
JetBrains Mono: 400
```

### 4.3 Glassmorphism System

All glass cards and panels use this base pattern:

```css
.glass-card {
  background: rgba(5, 5, 48, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-top: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 128, 0.4),
    0 0 0 1px rgba(0, 0, 128, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.glass-card-navy {
  background: rgba(0, 0, 128, 0.15);
  /* same backdrop-filter */
  border: 1px solid rgba(0, 0, 128, 0.3);
  border-top: 1px solid rgba(0, 212, 255, 0.15);
}

.glass-card-maroon {
  background: rgba(128, 0, 0, 0.15);
  border: 1px solid rgba(128, 0, 0, 0.3);
  border-top: 1px solid rgba(201, 162, 39, 0.2);
}
```

**IMPORTANT:** Never use white glass cards on white/light backgrounds. All glass effects must have sufficient contrast against their backdrop. Minimum contrast ratio 4.5:1 for text (WCAG AA). All glass panels sit on dark space/midnight backgrounds.

### 4.4 3D & Animation Principles

- **Hero sections:** Animated particle field or abstract geometry using React Three Fiber. Suggest: floating polyhedra / low-poly mesh with navy/electric color scheme that slowly rotates and responds to mouse movement.
- **Scroll animations:** Elements fade and slide up on scroll using Framer Motion's `whileInView` with `once: true`. Stagger children for lists/cards.
- **Hover states on cards:** Slight lift (`translateY(-4px)`) + glow (`box-shadow` pulse on `--color-electric` or `--color-gold`) + glass border brightens.
- **Page transitions:** Fade + slight upward movement between pages using Next.js App Router layout transitions with Framer Motion.
- **Quote sections:** Large quote text animates in word-by-word or line-by-line on scroll.
- **Stats counters:** Numbers count up from 0 when scrolled into view.
- **3D tilt cards:** Program cards use CSS perspective tilt on mouse move (vanilla JS or Framer Motion).

### 4.5 Spacing Scale (Tailwind custom)

Use Tailwind's default scale. Key breakpoints:
- Mobile: 375px–767px
- Tablet: 768px–1023px
- Desktop: 1024px–1439px
- Wide: 1440px+

### 4.6 Border Radius

- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-full` for primary CTAs, `rounded-xl` for secondary
- Badges/tags: `rounded-full`
- Hero shapes: Large radii (40px–80px) or organic blob shapes via SVG clip-paths

### 4.7 Background Treatment

All pages use a deep space background gradient:
```css
body {
  background: linear-gradient(135deg, #00001A 0%, #050530 40%, #0A0020 80%, #000010 100%);
  min-height: 100vh;
}
```

Section alternation uses opacity variations of the glass panels — NOT alternating white/light sections. Contrast comes from content hierarchy, accent color usage, and visual weight — not background color switching.

---

## 5. SITE ARCHITECTURE & NAVIGATION

### Primary Navigation (top, sticky on scroll)

```
Logo (left) | Home | About | Programs | Take Action | News | Partners | Events | Donate (CTA button, navy/electric)
```

On mobile: Hamburger → Full-screen overlay menu with animated entrance.

### Footer Navigation

```
Column 1: Logo + Mission tagline + Social links
Column 2: Programs (links to all 4 program pages)
Column 3: Organization (About, Team, History, Partners)
Column 4: Engage (Take Action, Donate, Events, Contact, Newsletter signup)
Column 5: Contact (address, email, phone, social)
Bottom bar: Copyright | Privacy Policy | Accessibility Statement
```

### 5.1 Page Roster

| Route | Page Name | Priority |
|---|---|---|
| `/` | Home | Critical |
| `/about` | About Us | Critical |
| `/programs` | Programs Overview | Critical |
| `/programs/independent-oversight` | Independent Prison Oversight | Critical |
| `/programs/criminal-legal-reform` | Criminal Legal System Reform & Drug Policy | Critical |
| `/programs/returning-citizens` | Returning Citizens Training Programs | Critical |
| `/programs/arts-in-prison` | Arts in Prison / Think Motion | Critical |
| `/take-action` | Take Action | Critical |
| `/news` | News & Research | High |
| `/news/[slug]` | Individual news/blog post | High |
| `/events` | Events | High |
| `/partners` | Friends & Partners | High |
| `/donate` | Donate | Critical |
| `/contact` | Contact Us | High |
| `/privacy-policy` | Privacy Policy | Medium |
| `/accessibility` | Accessibility Statement | Medium |

---

## 6. PAGE-BY-PAGE SPECIFICATIONS

### 6.1 HOME PAGE (`/`)

**Purpose:** Establish identity, authority, urgency, and invitation. Communicate the organization's unique position — led by those most impacted — within the first 10 seconds of a visit.

**Sections (in order):**

1. **Hero**
   - Full-viewport animated background (React Three Fiber: floating geometric mesh in navy/electric palette)
   - Headline (H1): "Justice Demanded From Within" or "Transforming Arizona's Criminal Legal System — From the Inside Out"
   - Sub-headline: Mission statement in 1–2 sentences
   - Two CTAs: [Learn More About Us] [Donate Now]
   - Scroll indicator (animated chevron)

2. **Central Quote Block**
   - Glenn Martin quote: *"Those closest to the problem are closest to the solution."*
   - Large, typographically prominent, centered, gold accent
   - Attribution line below

3. **SB 1507 Victory Banner**
   - Glass card with maroon/gold accent
   - Headline: "Six Years. One Law. The Fight Continues."
   - Brief: Senate Bill 1507 signed into law June 28, 2025 — establishing the Independent Correctional Oversight Office
   - CTA: [Read the Full Story] → links to news post

4. **Who We Are (Brief)**
   - 2–3 paragraph intro to Praxis Initiative
   - Emphasis on formerly incarcerated leadership
   - Photo of John Fabricius or team
   - CTA: [Our Full Story] → /about

5. **Impact Stats Bar**
   - Animated counters: 6 years of advocacy | SB 1507 signed | Coalition of X partners | X lives impacted
   - Dark glass panel, horizontal layout

6. **Programs Overview (4 cards)**
   - Interactive 3D tilt glass cards for each of the 4 programs
   - Icon, title, 2-sentence description, [Learn More] link
   - Staggered scroll reveal

7. **Featured Quote (page-specific)**
   - Different quote from Glenn Martin central quote — issue-specific
   - Suggestion: *"Mass incarceration is a human rights crisis hiding in plain sight."* (paraphrase — verify attribution before publishing)

8. **Take Action CTA Section**
   - Full-width, high-contrast section
   - Headline: "Your Voice Matters. Use It."
   - Three cards: [Sign a Petition] [Volunteer] [Donate]

9. **News Teaser (latest 3 posts)**
   - Card grid with featured image, headline, date, excerpt
   - CTA: [All News & Research]

10. **Partners Marquee**
    - Scrolling logo bar: Dream.org, FAMM, Justice Action Network, ACLU Smart Justice, Arnold Ventures, CPAC Nolan Center, etc.
    - Glass panel background, logos in white/light treatment

11. **Footer**

---

### 6.2 ABOUT US PAGE (`/about`)

**Page Quote (below hero):**
> *"We don't study the problem from the outside. We lived it. That's why we can solve it."*
> — John Fabricius, Executive Director

**Sections:**
1. Hero — "About Praxis Initiative" with animated background
2. Quote block (above)
3. Mission & Vision — substantive prose, not bullets. Explain the philosophy of praxis (Greek: theory + action), the name's meaning, the organization's founding story
4. Our Story — narrative timeline: ATAC founding → SB 1507 victory → Rebrand to Praxis Initiative → Current mission expansion. Use a visual timeline component with glass styling.
5. Our Leadership — Team section. Lead with John Fabricius (bio, photo, title). Include Dr. Susan Bendix (Think Motion/Arts in Prison). Add other team/board members as provided by client.
6. Why Lived Experience Matters — prose section making the case for directly impacted leadership. Pull in relevant research/data. This is a funder-facing section.
7. Our Values — 4–6 core values presented as glass cards with icons (e.g., Accountability, Dignity, Evidence, Community, Courage, Transparency)
8. CTA → Donate / Get Involved

---

### 6.3 PROGRAMS OVERVIEW (`/programs`)

**Page Quote:**
> *"Reform without the people most affected is policy without purpose."*

**Sections:**
1. Hero — "Our Programs" with brief intro (2 sentences)
2. Quote block
3. Four program cards — full-width, detailed, visually differentiated by accent color. Each card: icon + title + 2–3 paragraph description + key outcomes/goals + [Explore This Program] link
4. Cross-program principles section — prose explaining how all programs connect to the central theory of change

---

### 6.4 PROGRAM: INDEPENDENT PRISON OVERSIGHT (`/programs/independent-oversight`)

**Program Name:** Independent Prison Oversight
**Page Quote:**
> *"Sunlight is the best disinfectant. Prisons that operate in the dark cannot be reformed."*

**Sections:**
1. Hero — title, brief mission statement
2. Quote block
3. The Problem — substantive prose. Use Problem-Agitate-Solution (PAS) framework:
   - **Problem:** Arizona's prison system has operated without independent external oversight for decades. ADCRR reports to the governor — there is no independent body to verify conditions, investigate deaths, or enforce compliance.
   - **Agitate:** This vacuum has allowed unconstitutional conditions, preventable deaths, and systemic abuses to continue unchecked. The human toll is documented. The political will has repeatedly failed.
   - **Solution:** SB 1507 established the Independent Correctional Oversight Office — a landmark victory. But the office is currently unfunded. The fight moves from passage to implementation and funding.
4. SB 1507 Deep Dive — history of the bill, what it does, who voted for it, what the funding gap means, what happens next
5. Our Advocacy History — six-year campaign timeline (visual component)
6. What You Can Do — petition embed (Action Network), email officials, donate to fund the ICOO
7. Partners & Coalition — logos + brief descriptions
8. Research & Reports — links to published research documents

---

### 6.5 PROGRAM: CRIMINAL LEGAL SYSTEM REFORM & DRUG POLICY (`/programs/criminal-legal-reform`)

**Program Name (recommended):** "Systemic Reform & Harm Reduction"
*(This encompasses: criminal legal system reform + drug policy + overdose awareness)*

**Page Quote:**
> *"We cannot punish our way out of addiction. We cannot incarcerate our way to safety."*

**Sections:**
1. Hero
2. Quote block
3. Two-part program overview:
   - **Criminal Legal System Reform:** Sentencing reform, mass incarceration critique, Truth-in-Sentencing analysis, legislative advocacy
   - **Harm Reduction & Drug Policy:** Evidence-based drug policy, overdose prevention, community naloxone training, overdose awareness, addressing the War on Drugs' impact on incarceration rates
4. The Arizona Context — data on AZ incarceration rates, drug offense sentencing, overdose death statistics
5. Personal context: John Fabricius's brother Shawn died of overdose in 2008. This program is personal. (Use with permission — confirm with client.)
6. Policy Positions — clear, evidence-based statements on sentencing reform, mandatory minimums, drug decriminalization, harm reduction
7. Take Action — petition embeds, advocacy tools
8. Research & Reports

---

### 6.6 PROGRAM: RETURNING CITIZENS TRAINING PROGRAMS (`/programs/returning-citizens`)

**Program Name:** "Returning Citizens Empowerment Programs"
*(This is a FUNDING-PRIORITY page — must be exceptionally strong)*

**Page Quote:**
> *"Coming home is not the end of the sentence. It's the beginning of a system that keeps punishing."*

**Sub-Programs (display prominently):**

**Sub-Program A: Digital Literacy & Access for Returning Citizens**
- Description: Provides returning citizens with foundational and intermediate digital skills, device access, and connectivity support to navigate employment, benefits, housing, healthcare, and civic participation in the digital age.
- Special Focus: **50+ Cohort** — A dedicated track for returning citizens aged 50 and over. This population faces compounded barriers: they often left society before smartphones were ubiquitous, and return to a world where nearly every essential service is digital-first. The 50+ cohort receives accessibility-focused training, peer mentorship, and individualized pacing.
- Outcomes: Employment applications, telehealth access, government benefits navigation, digital civic participation

**Sub-Program B: Core Civics & Advocacy Training for Returning Citizens**
- Description: Transforms lived experience into civic power. Participants learn how government works, how policy is made, how to tell their story effectively, and how to become advocates for systemic change. Curriculum covers: branches of government, the legislative process, storytelling for advocacy, meeting with legislators, media engagement, and reentry leadership.
- Outcomes: Trained advocates, legislative testimonials, community leadership development
- Connection to broader mission: Graduates of this program become the pipeline for Praxis Initiative's legislative advocacy work

**Sections:**
1. Hero — "Returning Citizens Empowerment Programs"
2. Quote block
3. The Problem — PAS framework focused on reentry barriers (digital exclusion, civic disenfranchisement, systemic obstacles)
4. The 50+ Digital Divide — specific section on the 50-and-over cohort. **This section should be written with funders in mind.** Include: statistics on age demographics of incarceration, digital access gap data, case for specialized programming, anticipated outcomes, funding ask framing.
5. Sub-Program A detail section (Digital Literacy & Access)
6. Sub-Program B detail section (Core Civics & Advocacy Training)
7. Impact & Outcomes — metrics, testimonials (when available), anticipated reach
8. Funding Case — brief, direct funding pitch. Be transparent: this program is in development and actively seeking grant funding.
9. Get Involved — volunteer as instructor, donate, partner

---

### 6.7 PROGRAM: ARTS IN PRISON / THINK MOTION (`/programs/arts-in-prison`)

**Program Name:** "Arts in Prison — Think Motion"

**Page Quote:**
> *"Art doesn't just pass time inside. It transforms the person doing time."*

**Sections:**
1. Hero
2. Quote block
3. About Think Motion — Dr. Susan Bendix's program. Therapeutic movement, visual arts, music, dance workshops delivered inside correctional facilities.
4. Why Arts in Prison? — evidence-based case: research on recidivism reduction, disciplinary incident reduction, trauma recovery, cognitive development
5. What Participants Experience — narrative, vivid, human-centered description
6. Dr. Bendix bio (with photo if available)
7. Program Reach — facilities, participants, frequency
8. Get Involved / Support

---

### 6.8 TAKE ACTION (`/take-action`)

**Page Quote:**
> *"Silence in the face of injustice is complicity. Here is where you speak."*

**Sections:**
1. Hero
2. Quote block
3. **Active Petitions** — embed Action Network petition forms using JS embed code. Each petition gets: title, brief description (PAS framing), the embed, share buttons
4. **Contact Your Legislators** — guide to contacting AZ state legislators. Include tool or links to find representatives by zip code.
5. **Volunteer** — volunteer interest form (React Hook Form → Resend → staff inbox + Action Network list)
6. **Share Our Work** — social share tools, embed-ready graphics
7. **Newsletter Signup** — Action Network embed

---

### 6.9 NEWS & RESEARCH (`/news`)

**Sections:**
1. Hero — "News & Research"
2. Featured article (hero card, full width)
3. Filter/search bar — filter by: All | News | Research | Press Coverage | Legislation
4. Article grid — 9 cards per page, paginated
5. Newsletter signup CTA at bottom

**Existing content to migrate:**
- "The Arizona State Legislature: 2025 And Beyond"
- "Access To Courts For Arizona State Inmates: A Comprehensive Analysis"
- "Arizona's Mass Incarceration Crisis: The Evolution Of Sentencing"
- "Independent Oversight Could Have Stopped The Lewis Prison Lock Disaster"
- "Our Fifth Year in the Fight for Independent Oversight of the ADCRR"

---

### 6.10 EVENTS (`/events`)

**Sections:**
1. Hero — "Events"
2. Upcoming events (card grid) — each card: date, title, location/virtual, brief description, RSVP link
3. Past events archive
4. Google Maps embed for in-person events
5. Newsletter signup for event announcements

---

### 6.11 FRIENDS & PARTNERS (`/partners`)

**Page Quote:**
> *"The arc of justice is long, but it bends faster when we pull together."*

**Sections:**
1. Hero
2. Quote block
3. Partner grid — logo cards with partner name, brief description, link to their site
4. Coalition partners section (SB 1507 coalition specifically)
5. Interested in partnering? → contact form

**Known Partners to include:**
- Dream.org
- FAMM (Families Against Mandatory Minimums)
- Justice Action Network
- ACLU Smart Justice
- Arnold Ventures
- CPAC Nolan Center
- Bipartisan Policy Center
- [Additional to be provided by client]

---

### 6.12 DONATE (`/donate`)

**Sections:**
1. Hero — "Support the Work"
2. Quote: *"Every dollar you give is a person who gets to come home."* (or similar — confirm with client)
3. **Why Donate** — PAS framing: The system is broken. Praxis is fixing it. Your donation makes this possible.
4. **Funding Priorities** (glass cards):
   - Fund the ICOO (Independent Correctional Oversight Office implementation)
   - Digital Literacy Program (50+ returning citizens)
   - Civics & Advocacy Training
   - Arts in Prison / Think Motion
   - General Operating Support
5. **Feathr embed** — recurring and one-time donation widget
6. **Other ways to give** — stock, planned giving, corporate matching
7. **Transparency pledge** — how funds are used, financial accountability statement
8. Footer

---

### 6.13 CONTACT (`/contact`)

**Sections:**
1. Hero — "Contact Us"
2. Contact form (React Hook Form → Resend): Name, Email, Subject (dropdown), Message
3. Direct contact info: email, phone, mailing address
4. Social links
5. General inquiries / media inquiries / partnership inquiries (three tracks)
6. Map embed (if office address is public)

---

## 7. CONTENT RULES

### 7.1 Tone of Voice
- **Direct.** Do not hedge. Do not over-qualify.
- **Urgent.** People are suffering. This work matters right now.
- **Human.** Use real names, real stories (with permission), real data.
- **Expert.** Praxis is not an outsider critiquing — it is an insider building. Write from authority.
- **Bipartisan.** Prison oversight, harm reduction, and reentry support have broad coalition support. Do not frame these as partisan issues.
- **Hopeful.** The arc bends. SB 1507 proves it.

### 7.2 Formatting Rules
- NO bullet point walls. Write in prose paragraphs.
- Use pull quotes liberally — break up long text with typographically prominent quotes.
- Every page must have at least one prominent quote block placed within the first 2–3 sections (ideally directly below the hero).
- Statistics should be displayed as large-type highlighted figures (e.g., bold 46-10 vote with label below), not buried in body text.
- Use PAS (Problem → Agitate → Solution) framework for all program and advocacy pages.

### 7.3 Images
- Client will provide organizational photos
- Photography style: documentary, real people, real moments inside facilities or advocacy settings
- No stock photos of prisons, bars, handcuffs, or stereotypical criminal justice imagery
- Hero images: When possible, use abstract 3D visuals from React Three Fiber rather than photographic heroes, or full-bleed photography of people/community
- All images must have descriptive alt text

### 7.4 Quotes Bank (seed — to be expanded)

| Quote | Attribution | Page |
|---|---|---|
| "Those closest to the problem are closest to the solution." | Glenn Martin, JustLeadershipUSA | Homepage (anchor quote — use on all pages derivatively) |
| "We don't study the problem from the outside. We lived it. That's why we can solve it." | John Fabricius, Executive Director | About |
| "Six years. One law. The fight continues." | Praxis Initiative | Homepage / Oversight |
| "Art doesn't just pass time inside. It transforms the person doing time." | [Confirm attribution] | Arts in Prison |
| "Coming home is not the end of the sentence." | [Confirm attribution] | Returning Citizens |
| "We cannot punish our way out of addiction." | [Confirm attribution] | Criminal Legal Reform |
| "Sunlight is the best disinfectant." | Louis Brandeis (original) / adapt | Oversight |
| "Silence in the face of injustice is complicity." | [Confirm attribution] | Take Action |

---

## 8. SEO REQUIREMENTS

### Meta & Structured Data
- Every page must have: unique `<title>`, unique `<meta description>`, Open Graph tags (og:title, og:description, og:image), Twitter Card tags
- Use Next.js `generateMetadata()` for all pages
- Implement JSON-LD structured data: `Organization`, `WebSite`, `BreadcrumbList`, `Article` (for news posts), `Event`

### Core Keywords
- `Arizona prison oversight`
- `Independent Correctional Oversight Office Arizona`
- `SB 1507 Arizona`
- `Praxis Initiative`
- `criminal legal reform Arizona`
- `returning citizens programs Arizona`
- `Arts in prison Arizona`
- `Think Motion program`
- `John Fabricius`
- `formerly incarcerated advocacy Arizona`
- `ADCRR oversight`
- `drug policy reform Arizona`
- `overdose prevention Arizona`

### URL Structure
All URLs lowercase, hyphen-separated, no trailing slashes except root. Match slugs to Sanity CMS document slugs.

---

## 9. ACCESSIBILITY

- WCAG 2.1 AA minimum compliance required on all pages
- Keyboard navigable: all interactive elements must be focusable and operable via keyboard
- ARIA labels on all icon-only buttons and non-obvious interactive elements
- Skip navigation link at page top
- All images have descriptive alt text (managed in Sanity CMS)
- Color contrast: minimum 4.5:1 for normal text, 3:1 for large text
- Glass cards: ensure text overlaid on glass has sufficient contrast — add semi-opaque text background if needed
- Reduced motion: all animations must respect `prefers-reduced-motion` media query

---

## 10. PERFORMANCE TARGETS

| Metric | Target |
|---|---|
| Lighthouse Performance | ≥90 |
| Lighthouse Accessibility | ≥95 |
| Lighthouse SEO | ≥95 |
| First Contentful Paint | <1.5s |
| Largest Contentful Paint | <2.5s |
| Cumulative Layout Shift | <0.1 |
| Total Blocking Time | <200ms |

- Lazy-load all images using Next.js `<Image>` with `loading="lazy"`
- Lazy-load React Three Fiber hero only after hydration (`dynamic()` with `ssr: false`)
- Minimize JavaScript bundle: use Server Components by default, mark Client Components only where necessary
- Self-host Google Fonts using `next/font/google`

---

## 11. INTEGRATIONS REFERENCE

### Action Network
- Petition embeds: Use Action Network's standard JS embed snippet inside Next.js Client Components
- Newsletter signup: Action Network embedded signup form or API endpoint
- Docs: https://actionnetwork.org/docs

### Feathr
- Embed Feathr donation widget on `/donate` page
- Configure recurring giving options via Feathr fundraising tools

### Resend (Email)
- API key stored in `.env.local` as `RESEND_API_KEY`
- From address: `hello@praxisinitiative.org` (configure DNS records)
- Templates: Contact form confirmation, volunteer signup confirmation, newsletter welcome

### Sanity CMS
- Studio at `/studio` (or separate Sanity-hosted studio)
- Schemas to create: `post` (news), `event`, `program`, `teamMember`, `partner`, `quote`, `siteSettings`
- Image assets go to Sanity CDN (cdn.sanity.io)

### Google Analytics / Plausible
- Plausible script in `<head>` via Next.js Script component with `strategy="afterInteractive"`
- No cookies, GDPR-compliant

---

## 12. ENVIRONMENT VARIABLES

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Resend
RESEND_API_KEY=

# Action Network
ACTION_NETWORK_API_KEY=

# Feathr (donation & fundraising platform)
NEXT_PUBLIC_FEATHR_ORG_ID=

# Plausible
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=praxisinitiative.org

# Site
NEXT_PUBLIC_SITE_URL=https://praxisinitiative.org
```

---

## 13. FILE STRUCTURE

```
praxis-initiative/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                    # Home
│   │   ├── about/page.tsx
│   │   ├── programs/
│   │   │   ├── page.tsx                # Programs overview
│   │   │   ├── independent-oversight/page.tsx
│   │   │   ├── criminal-legal-reform/page.tsx
│   │   │   ├── returning-citizens/page.tsx
│   │   │   └── arts-in-prison/page.tsx
│   │   ├── take-action/page.tsx
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── events/page.tsx
│   │   ├── partners/page.tsx
│   │   ├── donate/page.tsx
│   │   ├── contact/page.tsx
│   │   └── layout.tsx                  # Site shell: nav + footer
│   ├── api/
│   │   ├── contact/route.ts            # Contact form → Resend
│   │   ├── volunteer/route.ts          # Volunteer form → Resend + Action Network
│   │   └── newsletter/route.ts         # Newsletter → Action Network
│   └── layout.tsx                      # Root layout: fonts, global styles
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── GlassCard.tsx
│   │   ├── QuoteBlock.tsx
│   │   ├── StatCounter.tsx
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   └── SectionHeader.tsx
│   ├── three/
│   │   ├── HeroCanvas.tsx              # React Three Fiber hero background
│   │   └── ParticleField.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProgramCards.tsx
│   │   ├── ImpactStats.tsx
│   │   ├── NewsGrid.tsx
│   │   ├── PartnersMarquee.tsx
│   │   └── CTASection.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       ├── VolunteerForm.tsx
│       └── NewsletterForm.tsx
├── lib/
│   ├── sanity/
│   │   ├── client.ts
│   │   ├── queries.ts
│   │   └── schemas/
│   ├── resend.ts
│   └── utils.ts
├── styles/
│   └── globals.css                     # Glassmorphism classes, CSS variables
├── public/
│   ├── images/
│   │   ├── logos/
│   │   └── team/
│   └── fonts/                          # If self-hosting fonts
├── sanity/                             # Sanity Studio
│   ├── schemas/
│   └── sanity.config.ts
├── .env.local
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 14. DEVELOPMENT PHASES

### Phase 1 — Foundation (Week 1–2)
- [ ] Initialize Next.js 15 project with TypeScript, Tailwind CSS v4, App Router
- [ ] Install dependencies: Framer Motion, React Three Fiber, Three.js, React Hook Form, Sanity
- [ ] Set up global styles: CSS variables, glassmorphism classes, typography imports
- [ ] Build Navigation component (desktop + mobile)
- [ ] Build Footer component
- [ ] Set up Sanity project and schemas

### Phase 2 — Core Pages (Week 2–4)
- [ ] Homepage (all sections)
- [ ] About page
- [ ] Programs overview page
- [ ] All 4 program detail pages

### Phase 3 — Action & Engagement Pages (Week 4–5)
- [ ] Take Action page (petition embeds)
- [ ] Donate page (Feathr embed)
- [ ] Contact page (form + Resend)
- [ ] Events page

### Phase 4 — Content & News (Week 5–6)
- [ ] News index + individual post pages
- [ ] Migrate existing articles from praxisnow.org and praxisinitiative.org
- [ ] Partners page
- [ ] Sanity CMS population

### Phase 5 — Polish & Launch (Week 6–8)
- [ ] SEO audit and metadata implementation
- [ ] Accessibility audit (axe-core or Lighthouse)
- [ ] Performance optimization
- [ ] Cross-browser and mobile QA
- [ ] DNS cutover from old host to Vercel
- [ ] 301 redirects from old URLs

---

## 15. CONTENT TO MIGRATE FROM EXISTING SITES

### From praxisinitiative.org (current):
- "The Arizona State Legislature: 2025 And Beyond"
- "Access To Courts For Arizona State Inmates: A Comprehensive Analysis"
- "Arizona's Mass Incarceration Crisis: The Evolution Of Sentencing"
- "Independent Oversight Could Have Stopped The Lewis Prison Lock Disaster"

### From praxisnow.org (older site):
- All program descriptions
- About/history content
- Partners list
- Any research documents or PDFs
- Team/leadership bios

---

## 16. CLIENT DELIVERABLES NEEDED

Before development can be completed, the following assets must be provided by the client:

- [ ] Praxis Initiative logo files (SVG preferred, also PNG at 2x and 3x)
- [ ] All photography and image assets (high resolution, minimum 2000px wide)
- [ ] Team headshots (John Fabricius, Dr. Susan Bendix, board members, staff)
- [ ] Contact information (email, phone, mailing address)
- [ ] Social media profile URLs (Twitter/X, LinkedIn, Facebook, Instagram)
- [ ] Feathr organization ID / widget embed code
- [ ] Action Network API key and petition IDs to embed
- [ ] Resend API key (after account setup at resend.com)
- [ ] Domain registrar access (for DNS changes)
- [ ] Partner logos and approved partner descriptions
- [ ] Current donor/funder list (for donor recognition if applicable)
- [ ] Any existing brand guidelines document
- [ ] Quotes approved for use (with proper attributions confirmed)
- [ ] Testimonials and participant stories (with consent)

---

## 17. NOTES FOR AI AGENTS

- This is a mission-driven nonprofit site. Every line of code and content serves real people who have been harmed by an unjust system. Build with that weight in mind.
- Never use placeholder text (Lorem Ipsum) in any final deliverable.
- Never use generic stock photography language in alt text — write real descriptions.
- All content must pass a factual accuracy standard — if a statistic is cited, it must be verifiable.
- The glassmorphism aesthetic must NOT result in inaccessible contrast. Always check text-on-glass contrast ratios.
- The 3D hero effects must degrade gracefully on mobile and for users with `prefers-reduced-motion`.
- Prioritize semantic HTML. Use heading hierarchy correctly. Use landmarks (main, nav, aside, footer, section).
- When in doubt about content, consult the client (John Fabricius) rather than inventing.
- The 50+ returning citizens digital literacy program is a **funding priority** — give it exceptional treatment and depth on the Returning Citizens page.
