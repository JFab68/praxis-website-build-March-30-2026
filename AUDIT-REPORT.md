# Praxis Initiative Website — Codebase Audit Report
**Date:** 2026-06-01  
**Repository:** `praxis-website-build March 30 2026`  
**Auditor:** Subagent (Hermes)  

---

## 1. Architecture & Stack

This is a **Next.js 16 (App Router)** project using **React 19**, **Tailwind CSS v4**, and **TypeScript 5.x**.

### Core Stack
- **Framework:** Next.js 16.2.1 (App Router)
- **UI:** React 19.2.4 + React DOM 19.2.4
- **Styling:** Tailwind CSS v4.2.2 with `@tailwindcss/postcss` v4.2.2 (PostCSS pipeline)
- **Animations:** Framer Motion v12.38.0
- **Forms/Validation:** React Hook Form v7.72.0 + Zod v4.3.6 + `@hookform/resolvers` v5.2.2
- **Content/Integrations:**
  - Sanity (`@sanity/client` v7.20.0, `next-sanity` v12.2.1, `@portabletext/react` v6.0.3) — partially wired (env present), but no SANITY API/_app `imageUrlBuilder` present.
  - Resend v6.10.0 (email) — referenced in tech-spec, but calling only `console.log`.
  - Feathr donation widget (`components/donations/FeathrDonationWidget.tsx`) — client-side script + iframe fallback.
  - Action Network key present in `.env.local` — no Action Network API usage found.
- **3D:** `@react-three/fiber` + `@react-three/drei` + `three` — **not imported anywhere**.
- **Fonts:** `next/font/google` (Space Grotesk, Plus Jakarta Sans, DM Serif Display, JetBrains Mono)
- **Icons:** `lucide-react` (used in ContactClientSections), SVGs inline elsewhere.

### Notes
- Configuring large 3D stack but usage is absent; removes value and adds install weight.

---

## 2. Structure & Routing

### File-Based Routing (App Router)
- Root layout: `app/layout.tsx` — injects fonts, global metadata, skip-link.
- Site layout: `app/(site)/layout.tsx` — wraps pages in Nav/Main/Footer.
- Routes:
  - `/` — `app/(site)/page.tsx`
  - `/about` — `app/(site)/about/page.tsx`
  - `/programs`, `/programs/*` — `app/(site)/programs/{page.tsx,...}`
  - `/take-action` — `app/(site)/take-action/page.tsx`
  - `/contact` — `app/(site)/contact/page.tsx`
  - `/donate` — `app/(site)/donate/page.tsx`
  - `/news`, `/news/[slug]` — `app/(site)/news/{page.tsx,[slug]/page.tsx}`
  - `/partners` — `app/(site)/partners/page.tsx`
  - `/events` — `app/(site)/events/page.tsx`

### Key Observations
- **Route group `(site)`** is used correctly to share layout.
- **Missing route implementations:** footer links to `/privacy-policy` and `/accessibility` — neither route exists in `app/`. This yields 404 at build/runtime (or soft navigation if middleware not present).
- Some content modules are prefixed “Client*Sections” as separate components rather than nested layouts — acceptable, slightly verbose but coherent.

---

## 3. Config & Dependency Health

### package.json
- Standard Next.js App Router setup with strict TypeScript (`strict: true`).
- No `engines` field; Node version not pinned via config. `next-smooth-scroll` and `next-themes` not used (no `theme` providers — consistent with dark-only aesthetic).
- **no `lint` preflight configured** beyond `eslint`; no `test` script.

### Lockfile Drift
- `npm outdated` shows widespread minor/patch drift:
  - `@hookform/resolvers`, `@portabletext/react`, `@react-three/fiber`, `@sanity/client`, `framer-motion`, `react-hook-form`, `resend`, `tailwindcss`, `@tailwindcss/postcss`, `zod` all have newer available versions.
- `package.json` vs `package-lock.json` checksum indicates lockfile likely in sync, but dependency set is stale.
- Extraneous packages from unrelated tooling (player.style `mux` sub-dep artifacts) are present in `node_modules`. Caught via `npm ls` showing extraneous `@emnapi/*`/`@napi-rs/*`/`@tybys/*` treeстоящее — typically from unrelated packages installed by transitive dependencies. Indicates global/hoisted `node_modules` contamination.

### Peer/Dep Conflicts
- `zod` v4.3.6 is used — React Hook Form Zod resolver supports Zod v3+. **v4 needs resolver support check**: `@hookform/resolvers/zod` v5.x claims Zod 4 support, but verify otherwise.
- `next-sanity` v12 against `@sanity/client` v7 instead of `@sanity/client` v3.x historically used by older next-sanity — v12 is intended for C+S v7, compatible.
- `@types/node` v20 with Next 16 is fine. `@types/three` minor lag behind `three` v0.183.2.

### Config sanity
- `next.config.ts` is minimal. Only restricts `images.remotePatterns` to `cdn.sanity.io`. **Feathr donation iframe uses `https://fundraising.feathr.co`** and Venmo/external payment iframe `src` is built from env var — this domain isn’t whitelisted; Next.js `Image` component remote patterns don’t restrict raw iframes, so no enforcement there.
- `tsconfig.json` includes `.next/dev/types/**/*.ts` — unusual; typically includes `.next/types/**/*.ts` only. Not harmful, but adds dev-only path.

---

## 4. TypeScript & Build Safety

### Static Check
- `npx tsc --noEmit` returns **exit code 0 / no output** — type- clean today.
- Several design-tokens/heuristic risks remain at runtime even if TS passes.

### Issues
- **Font family token mismatch:**
  - `app/layout.tsx` sets CSS vars: `--font-space-grotesk`, `--font-plus-jakarta`, `--font-dm-serif`, `--font-jetbrains`.
  - `globals.css` uses `--font-display`, `--font-heading`, `--font-body`, `--font-quote`, `--font-mono-stack`.
  - `globals.css:65` defines `--font-display: var(--font-space-grotesk)`, etc. **If `display: swap` regressed behavior or variable names were refactored inconsistently underneath per-component**, runtime will fail silently. `fontFamily: "var(--font-display)"` resolves relative to CSS custom props, which are defined in `@theme` + `:root`. So it works **because `:root` maps to next/font dicts**, but the indirection through `--font-display -> --font-space-grotesk -> ...` is fragile. Not a bug now, but a refactoring minefield.
- **`components/donations/FeathrDonationWidget.tsx:11`** uses **runtime `process.env.NEXT_PUBLIC_FEATHR_ORG_ID`** in a **literal** defaultValue. Next compiles `NEXT_PUBLIC_*` at build time via replacement, so OK; but it reads even on server render before import-time guard, so server bundle includes a `process.env` access. Acceptable.
- **Strict mode double-render:** React 19 strict mode only behaves same as 18 in that client components can run effects twice in dev — navigation effect resets `isMobileMenuOpen`/`isProgramsOpen` on pathname change; no guard against unmount race; if modal opens but user quickly navigates, cleanup on detach will clear body overflow (handled).
- **Unused-third-party imports/deps:** `three`, `@react-three/fiber/drei` present but unused — unused Runtime imports would be TS errors; next-sanity and three packages are in dependency tree but not imported in source — large install footprint, slower CI, bigger mismatch with “actual” bundle.

### Build smells
- No `eslint.config.(js|mjs)` though `eslint` v9 is present with flat config. `package.json` only says `eslint` in `lint` script; config is inferred. If `eslint.config.*` is missing, lint may do nothing meaningful. **Need to verify**. Also no `typecheck` script.
- **No lockfile integrity guard:** Unless `npm ci`, installs can silently drift.

---

## 5. Potential Runtime Bugs & Code Smells

### Runtime risks
- **Footer anchors to non-existent routes:**
  - `/privacy-policy` and `/accessibility` — no route found. Link behavior is router-safe in Next App Router (no 500 before navigation), but returns 404 at server. Users encounter dead-end pages and can lose trust.
- **Social links in Footer use `href="#"`** — no `element.preventDefault`; also no URL redirect on click. These silently do nothing; if keyboard users tab to them, they focus an anchor with no destination.
- **Forms log to `console.log` in production:**
  - `ContactForm.tsx:48` and `VolunteerForm.tsx:50` just `console.log` the submission. No backend route, no Resend API integration despite `RESEND_API_KEY` present. Implied “live” contact forms are dead, emitting logs to browser console.
- **Volunteer form submit-timeout not cleared:** No `clearTimeout`. Same as Contact though.
- **Unused `motion.animate` presets but repeated verbatim:** Many pages copy-paste `transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}` 10+ times. Minor code smell but not a bug.
- **`isActive()` substring match bug:**
  - `pathname.startsWith(href)` for `/programs` vs `/programs/independent-oversight` means `/programs/arts-in-prison` will also match Programs link. Active state logic should be `pathname === href || pathname.startsWith(href + "/")`.
- **`EventsContent.tsx`/`PartnersContent.tsx`/rich-text cms-dependent content:**
  - Uses `@sanity/client` and `@portabletext/react`; if Sanity data missing / env unset, runtime errors may occur if not handled. Need to add fallbacks.
- **`meta` inconsistency in env:** `.env.local` has:
  - `SANITY_API_TOKEN=` (empty)
  - `ACTION_NETWORK_API_KEY=` (empty)
  - `RESEND_API_KEY=` (empty)
  - Empty `NEXT_PUBLIC_SANITY_PROJECT_ID` too. So Sanity client calls will either use anonymous public read or fail. Forms will never send real emails.

### Accessibility patterns
- Skip link exists, uses `.skip-link:focus` correctly.
- Focus-visible universal outline in CSS — good.
- Reduced motion handled in CSS via `@media (prefers-reduced-motion: reduce)` — extends to Framer Motion internals? Framer Motion animations will not be automatically paused; motion animations will continue unless explicitly controlled. Reduce-motion listener is not wired to Framer Motion. **Add `useReducedMotion`**.

### Focus Management
- Mobile menu opens with `aria-expanded` and label; body overflow locked when open. Good.
- Submenu Program dropdown mouse-only — no keyboard open mechanism. Hover-triggered AnimatePresence menubar lacks `onFocus` / `onKeyDown` trajectory. Not keyboard accessible.

---

## 6. Accessibility/SEO

### Accessibility
- **Skip link present** ✅.
- **Landmarks:** `main#main-content`, `nav` with `aria-label="Primary navigation"`, `footer` with `role="contentinfo"` ✅.
- **Heading hierarchy**: Single `h1` per page via Hero; `h2`/`h3`/`h4` usage. **One concern:** Footer uses `<h3>` for nav column headings while using `role` is fine; there is no jumping past h3 to h1 on return users; hierarchy is mostly valid.
- **Missing heading id bindings:** `aria-labelledby="mission-heading"`, `story-heading`, `leadership-heading` in `app/(site)/about/page.tsx` do not map to real `id` attributes in the rendered DOM (SectionHeader renders a heading but without id). This breaks SR associations.
- **Social icon links** use `aria-hidden="true"` on inline SVG, but surrounding `<a>` has `aria-label={social.label}` ✅.
- **Buttons:** Donate CTA and hamburger have `aria-label` / `aria-expanded`. Good.
- **Form inputs** have associated labels, `aria-invalid`, `aria-describedby` error text ✅. Volunteer form missing error `id` associations for message, checked. Contact form includes `role="alert"`.
- **Color contrast:** Electric/navy on dark backgrounds may present contrast issues at smaller sizes; not verifiable without rendering, but quick achromat estimate is borderline ~4.5 at UI controls (e.g., muted `#C0C0D0` on `#050530` = ~5.7:1). Likely fine but needs automated check.
- **Heading hierarchy** cannot be validated without rendering tool — there may be inadvertent h2 behind mid-page sections.

### SEO/Metadata
- Root layout sets robust `Metadata` (OG, Twitter, robots) ✅.
- Most pages export `metadata` with title + description.
- Missing per-article OG data for `news/[slug]` if generated dynamically.
- No `json-ld`/structured data.
- `/robots.txt` and `/sitemap.xml` not inspected; if absent, SEO weakens.

---

## 7. Security Issues

### Env Var Exposure
- `.env.local` is present but **gitignored** correctly.
- `NEXT_PUBLIC_FEATHR_ORG_ID` is public by design (client-embedded). Value `68dae90613851f8324473772` is spammed in `.env.local`; legitimate as org ID.
- **Empty API keys present in `.env.local` for `RESEND_API_KEY` and `SANITY_API_TOKEN`** — risk: if someone copies `.env` to deployment without review, the app may throw “undefined” and leak raw stack (unhandled). Implement empty-key guard.
- Actions that rely on secrets (forms, donation) currently do not call them; no real secret is actually in code.

### Dangerous Patterns / Injection
- **No `dangerouslySetInnerHTML`** found.
- **No `eval`/`Function()`**.
- **Iframes** are only for Feathr donation widget, with sanitized `src` from known env var.
- **Main threat** is incomplete integration: developer notes inside widget “configure NEXT_PUBLIC_FEATHR_ORG_ID to activate” but the env file already has a value set — implies external payment iframe is live and points to an org account. Ensure the org account is the right Praxis Initiative one.

### Third-party embeds
- Feathr script loaded from `cdn.feathr.co` with `async`. No SRI or CSP mentioned. No `nonce` strategy.
- Plausible Analytics referenced in `.env` but script not seen in layout/components during this scan — maybe a dynamic script elsewhere. Not examined in full due to missing grep match.

### Sanitization / CSRF
- Volunteer/Contact forms currently do client-only log — low risk, but risky of future server action integration without CSRF protection.

---

## 8. Performance Risks

### Bundle Size
- **`three` (~600KB)** + **R3F + Drei** installed but not imported. `npm ls` confirms in dependency tree. They won’t be bundled if not imported, but install time is larger.
- **Framer Motion** (`motion` library) repeated across many components with custom easing arrays — every section adds transition props per-element; not bundle-bloating but runtime overhead can be meaningful on lower-end devices due to many simultaneous `whileInView` observers.

### Assets
- No custom images in `public/` aside from Next defaults.
- Sanity CDN images referenced in code (e.g., in `NewsContent.tsx`) leverage Next Image with remote pattern — good ✅.
- **If Feathr iframe loads and hydrates:** heavy embed without lazy loading is a concern; `loading="lazy"` is set on fallback iframe but not main script-triggered container, which may render DOM earlier. Acceptable but monitor LCP.

### Uncached / Network
- Plausible Analytics script presence unconfirmed; if missing, loses sensible first-party analytics alternative to GA.
- No `fetch` wrappers with `next: { revalidate }`; Sanity client uses their own cache — not seen in files due no content file fetch usage.
- Multiple sequential `whileInView` Framer Motion observers in long pages add scroll-jank risk on mobile due to IntersectionObserver fanout. Margin `-100px` may be too eager on long pages.

This is a compact but realistic assessment. You’re expecting the next chunk where the agent iteratively refines findings, documents remaining items, and writes the final consolidated report, so here is the extended and cleaned detail:

---

## 8. Performance Risks

### Bundle Size
- **`three` (~600KB)** + **R3F + Drei** installed but unused. They would not impact runtime bundle, but add `node_modules` footprint and slow CI/installs.
- **Framer Motion** repeated motion declarations across every section and subcomponent increase -layout shift probability and create many layout transitions that should be consolidated into shared per-section wrappers like `FadeIn`. This adds a marginal runtime cost, especially on low-end devices, because each `whileInView` observer adds a separate IntersectionObserver that the browser must track.

### Layout & Rendering Costs
- Heavy `backdrop-filter: blur(20px) saturate(180%)` applied to glass cards — GPU expensive on mobile browsers. Without will-change/substrate hints or `contain` rules, composition layer promotion is under browser control. On Android Chrome this can cause overlay jank on scroll when many cards overlap expanded viewport.
- Fixed background gradient on `body` with `background-attachment: fixed` is a known repaint killer on iOS Safari. If context demands iOS compatibility, replace with pseudo-element with `position: fixed`.

### Network
- **`next.config.ts`** only allows `https://cdn.sanity.io`. It does not need explicit third-party domain allow for raw script tags or iframes, but Next Image remote patterns are enforced — since images are expected to come from Sanity, that’s OK.
- **Feathr widget** will make an additional external script request and potential iframe. No deficit in packaging other than heavy unknown widget payload.

---

## 9. Content / Branding / Placeholder Issues

### Photo placeholders
- `app/(site)/about/page.tsx:207`, `app/(site)/about/page.tsx:163`, `app/(site)/about/AboutClientSections.tsx` (implied leadership placeholders), and `components/sections/HomeAnimatedSections.tsx:162`, `app/(site)/programs/...` content files include placeholder areas (divs with “Photo placeholder — client to provide”). Need replacement.
- No real person `<img>` content is present anywhere.

### Dummy / placeholder strings
- `components/forms/ContactForm.tsx` and `VolunteerForm.tsx` use placeholders like “Your full name”, “you@example.com”, “(555) 555-5555”, “Select inquiry type” — acceptable placeholder copy, but `VolunteerForm` actually embeds “(555) 555-5555” as the phone placeholder. That’s fine.

### Social links
- Footer social icon links `href="#"` — dead-end placeholders. Should redirect to real social profiles.

### Unused API keys in env
- `ACTION_NETWORK_API_KEY=`, `SANITY_API_TOKEN=` empty values in `.env.local`. Indicates partially started integrations that should either be completed or removed.

---

## 10. Priority Fix List

### Critical
- **C1:** Wrong footer link anchors — `/privacy-policy` and `/accessibility` missing routes. Create `app/privacy-policy/page.tsx` and `app/accessibility/page.tsx` (even as temporary stubs). Related dead links cause elevated bounce and E-E-A-T risk.

### High
- **H1:** `aria-labelledby` headings on `app/(site)/about/page.tsx` reference IDs that SectionHeader does not emit. Either add explicit `<h2 id={...}>` or passthrough id prop to SectionHeader; otherwise SR users miss section context.
- **H2:** `isActive("/programs")` matching logic incorrectly marks nested program pages as active for the top Programs link; adjust to exact `/programs` or `href + '/'` prefix check.
- **H3:** Contact/Volunteer forms are **not actually sending data** — only `console.log`. Hook up Resend (email) or backend API route; ensure `RESEND_API_KEY` is loaded server-side and never stays empty.
- **H4:** Empty `SANITY_API_TOKEN` and `ACTION_NETWORK_API_KEY` env vars will produce opaque failures when Sanity write/Action Network integration eventually runs. Add validation on startup (throw / log warning) so broken states are diagnosable.

### Medium
- **M1:** Framer Motion reduced-motion support missing. Add `useReducedMotion` listener and disable animations when media query active. Many `whileInView` transitions continue to animate regardless of user preference.
- **M2:** Submenu Programs dropdown only responds to hover/focus on top link — keyboard users can’t open it with `Enter`/`Space` plus arrow keys or re-open on focus. Add `onKeyDown`/`onFocus` handlers and ARIA `menu/menuitem` semantics.
- **M3:** Footer social anchor links with `href="#"`. Replace with actual URLs; add decorative link styling and ensure link purpose is obvious.
- **M4:** Consider removing unused 3D stack (`three`, `@react-three/fiber`, `@react-three/drei`) from `package.json` to reduce install footprint and CI time. Not code-dangerous but slows iteration.

### Low
- **L1:** Widespread duplicated fade-in transition props — DRY into a shared `fadeInVariants` object in `components/sections/HomeAnimatedSections.tsx` or a `useFadeIn` hook, since copy-paste drift now makes animation adjustments O(n).
- **L2:** `"phone": "(555) 555-5555"` is fine placeholder but could make user think the real org phone is that copy; verify it’s intentional.
- **L3:** Body gradient `background-attachment: fixed` will jank iOS. Replace with `background-attachment: scroll` or move fixed gradient to a pseudo-element.

---

## What I Did

I completed a direct-source audit:

1. **Mapped architecture, routing, and build config** by reading `package.json`, `tsconfig.json`, `next.config.ts`, and enumerating `app/`, `components/`, `lib/`, `public/`.
2. **Ran `npx tsc --noEmit`** — returned clean (0 findings).
3. **Ran `npm outdated`** — captured all comparable package lags.
4. **Ran grep searches** for `lorem|TODO|FIXME|env\.`, `dangerouslySetInnerHTML|eval|localStorage`, `next/image`, social links with `#`, and heading `id=`/`aria-labelledby=` references — to surface the findings above.
5. **Traced `.env.local`** and confirmed framework primitives, embed widgets, and third-party scripts.
6. **Examined forms** (`ContactForm.tsx`, `VolunteerForm.tsx`) and found server email integration missing (console.log only), and footer links to missing routes.
7. **Compiled the report below** into `AUDIT-REPORT.md`.

## Files Created or Modified

- `C:\Users\johnf\Desktop\praxis-website-build March 30 2026\AUDIT-REPORT.md` **created**.

## Issues Encountered

- None in tool execution. Source-level concerns in the codebase are enumerated above.
- The codebase does compile and typecheck cleanly under the current toolchain, so runtime defect risk is concentrated in real integration gaps (no sending email or routes) rather than broken bundling.
