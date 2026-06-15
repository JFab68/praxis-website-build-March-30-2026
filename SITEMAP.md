# Praxis Initiative — Site Map
## Version 1.0 | March 2026

---

## Navigation Structure

```
PRIMARY NAV
├── Home (/)
├── About (/about)
├── Programs (/programs)
│   ├── Independent Prison Oversight (/programs/independent-oversight)
│   ├── Systemic Reform & Harm Reduction (/programs/criminal-legal-reform)
│   ├── Returning Citizens Empowerment (/programs/returning-citizens)
│   └── Arts in Prison — Think Motion (/programs/arts-in-prison)
├── Take Action (/take-action)
├── News (/news)
│   └── [Article] (/news/[slug])
├── Events (/events)
├── Partners (/partners)
└── [CTA Button] Donate (/donate)

SECONDARY (footer + utility)
├── Contact (/contact)
├── Privacy Policy (/privacy-policy)
└── Accessibility (/accessibility)
```

---

## Page Inventory

### TIER 1 — Critical Path Pages

| URL | Title | Key Goal | Key CTA |
|---|---|---|---|
| `/` | Home | First impression, mission clarity, drive action | Donate / Learn More |
| `/about` | About Us | Build trust, tell the story, establish authority | Get Involved / Donate |
| `/programs` | Our Programs | Orient visitor to all 4 programs | Explore each program |
| `/programs/independent-oversight` | Independent Prison Oversight | Explain SB 1507, the ICOO, the ongoing fight | Petition / Donate to fund ICOO |
| `/programs/criminal-legal-reform` | Systemic Reform & Harm Reduction | Criminal legal + drug policy program | Petition / Donate |
| `/programs/returning-citizens` | Returning Citizens Empowerment | Funder-facing, funding priority | Donate / Partner |
| `/programs/arts-in-prison` | Arts in Prison — Think Motion | Program awareness | Donate / Volunteer |
| `/take-action` | Take Action | Engagement hub: petitions, volunteer, share | Sign petition / Volunteer |
| `/donate` | Donate | Conversion page | Donate now |

### TIER 2 — High Priority Pages

| URL | Title | Key Goal | Key CTA |
|---|---|---|---|
| `/news` | News & Research | Content authority, SEO, engagement | Read / Subscribe |
| `/news/[slug]` | Individual article | Deep reading, share, credibility | Subscribe / Donate |
| `/events` | Events | Community engagement | RSVP |
| `/partners` | Friends & Partners | Credibility, coalition display | Partner with us |
| `/contact` | Contact Us | Direct communication | Send message |

### TIER 3 — Required Utility Pages

| URL | Title | Notes |
|---|---|---|
| `/privacy-policy` | Privacy Policy | Required for GDPR, California privacy laws, and donation processor compliance |
| `/accessibility` | Accessibility Statement | WCAG 2.1 AA commitment |

---

## URL Conventions

- All lowercase
- Hyphen-separated words
- No trailing slash (except root `/`)
- No query strings in canonical URLs
- CMS-generated slugs must match these patterns

## 301 Redirects Required (from old sites)

The following known URLs from praxisnow.org and praxisinitiative.org should 301 redirect to new equivalents:

| Old URL | New URL |
|---|---|
| `praxisnow.org/home/` | `praxisinitiative.org/` |
| `praxisnow.org/home-2-2-2/` | `praxisinitiative.org/programs` |
| `praxisnow.org/home-2-2-2/criminal-legal-system-reform/` | `praxisinitiative.org/programs/criminal-legal-reform` |
| `praxisnow.org/home-2-2/` | `praxisinitiative.org/take-action` |
| `praxisnow.org/home-3/` | `praxisinitiative.org/partners` |
| `praxisnow.org/home-2-2-2-2/` | `praxisinitiative.org/contact` |
| `praxisinitiative.org/the-arizona-state-legislature-2025-and-beyond/` | `praxisinitiative.org/news/arizona-state-legislature-2025-and-beyond` |
| `praxisinitiative.org/access-to-courts-for-arizona-state-inmates-a-comprehensive-analysis-of-impediments-and-challenges/` | `praxisinitiative.org/news/access-to-courts-for-arizona-state-inmates` |
| `praxisinitiative.org/the-legacy-of-mass-incarceration-in-arizona-policies-impacts-and-paths-forward/` | `praxisinitiative.org/news/mass-incarceration-legacy-arizona` |
| `praxisinitiative.org/analysis-of-lewis-prison-lock-issues-and-information-flow-failures/` | `praxisinitiative.org/news/lewis-prison-lock-disaster-oversight` |

## Sitemap XML

Generate dynamically via `app/sitemap.ts` in Next.js. Include:
- All static pages (priority 1.0 for home, 0.9 for programs/donate, 0.8 for others)
- All Sanity-sourced news posts (priority 0.7)
- All Sanity-sourced events (priority 0.7)
- Exclude: `/privacy-policy`, `/accessibility`, `/studio`
- `changefreq`: `weekly` for home/news, `monthly` for static pages
- Include `lastmod` from Sanity `_updatedAt` for dynamic pages

## robots.txt

```
User-agent: *
Allow: /
Disallow: /studio/
Disallow: /api/

Sitemap: https://praxisinitiative.org/sitemap.xml
```
