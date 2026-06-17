# Sharjeel Ayubi — Portfolio

A premium, single-page portfolio for a Senior iOS Engineer & Tech Lead. Built with
**Vite + React 18 + TypeScript + Tailwind CSS**, fully data-driven, accessible, SEO-ready,
and deployable to GitHub Pages with zero configuration changes.

---

## Quick start

```bash
npm install      # install dependencies
npm run dev      # local dev server at http://localhost:5173
npm run build    # type-check + production build into dist/
npm run preview  # preview the production build locally
```

Requires **Node 18+** (Node 20 recommended; the deploy workflow uses Node 20).

---

## Project structure

```
app/
├─ .github/workflows/deploy.yml   # CI: builds and deploys to GitHub Pages on push to main
├─ public/                        # static assets copied verbatim into the build
│  ├─ favicon.svg                 # SA monogram on aurora tile
│  ├─ og-image.png                # 1200×630 social-share preview
│  ├─ resume.pdf                  # PLACEHOLDER — replace with your real resume
│  ├─ robots.txt                  # crawler rules (+ sitemap pointer)
│  └─ sitemap.xml                 # single-page sitemap
├─ src/
│  ├─ data/                       # ← EDIT THESE FILES to update content
│  │  ├─ types.ts                 # TypeScript interfaces for all content
│  │  ├─ profile.ts               # name, title, pitch, links, stats
│  │  ├─ skills.ts                # skill groups + technical-expertise items
│  │  ├─ experience.ts            # work timeline + leadership points
│  │  └─ projects.ts              # featured project cards
│  ├─ components/
│  │  ├─ ui/                      # reusable primitives (Section, Tag)
│  │  └─ *.tsx                    # one component per page section
│  ├─ hooks/useReveal.ts          # scroll-reveal (IntersectionObserver, reduced-motion aware)
│  ├─ index.css                   # Tailwind layers + design-system component classes
│  ├─ App.tsx                     # composes the sections in order
│  └─ main.tsx                    # React entry point
├─ index.html                     # SEO meta, Open Graph, JSON-LD Person schema
├─ tailwind.config.ts             # design tokens (colors, fonts, animations)
└─ vite.config.ts                 # base: "./" for relative asset paths
```

Section order (in `App.tsx`): Navbar → Hero → About → Skills → Experience → Projects →
Technical Expertise → Leadership → Testimonials → Resume → Contact → Footer.

---

## Deploy to GitHub Pages

The included GitHub Actions workflow does everything; you never build or push `dist/` by hand.

1. Create a repo and push this `app/` folder's contents to the **`main`** branch.
   - For a personal site at `https://<username>.github.io/`, name the repo `<username>.github.io`.
   - For a project site at `https://<username>.github.io/<repo>/`, any repo name works — relative
     asset paths (`base: "./"`) mean **no config change is needed either way**.
2. In the repo, go to **Settings → Pages → Build and deployment → Source** and choose
   **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab). The site builds and
   goes live in ~1–2 minutes. Every later push redeploys automatically.

### Replace the placeholder URLs

Search the project for `USERNAME` and replace it with your real handle/domain in:
`index.html` (canonical + Open Graph URLs), `public/robots.txt`, `public/sitemap.xml`, and
`src/data/profile.ts` (`linkedin`, `github`). Using a custom domain? Add a `public/CNAME` file
containing your domain and set it under Settings → Pages.

---

## Customization guide

All content lives in `src/data/` — you rarely need to touch component code.

**Update headline / contact / stats** → `src/data/profile.ts`
Edit name, title, tagline, pitch, location, email, `linkedin`, `github`, and the `stats` array.

**Add or edit a project** → `src/data/projects.ts`
Append an object to the `projects` array. Each item is typed by the `Project` interface in
`types.ts`, so your editor will flag any missing field. Use `appStoreUrl` / `repoUrl` / `caseStudyUrl`
(optional — buttons only render when a URL is present), and `imagePath` for a screenshot.

**Update the experience timeline** → `src/data/experience.ts`
Edit the `experience` array (newest first). `leadership` holds the points shown in the
Leadership section.

**Edit skills** → `src/data/skills.ts`
`skillGroups` drives the grouped Skills section; `techExpertise` drives the Technical Expertise
highlights.

**Replace the resume** → drop your real PDF at `public/resume.pdf` (keep the filename), then
rebuild. The Download and View buttons pick it up automatically.

**Add testimonials** → `src/components/Testimonials.tsx` ships with clearly marked placeholders
(no fabricated quotes). Replace them with real, attributed quotes when you have them.

**Adjust the look** → design tokens (colors, fonts, the aurora gradient, animations) live in
`tailwind.config.ts`; reusable component classes live in `src/index.css`.

---

## Notes

- **No analytics or trackers** are included by default.
- **Accessibility**: semantic landmarks, skip link, keyboard-navigable nav, `aria` labels, and
  `prefers-reduced-motion` support are built in.
- **Standalone version**: a separate zero-build single-file `index.html` is provided alongside
  this project for instant preview or no-toolchain hosting.
