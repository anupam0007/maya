# Maya — Portfolio Website

A premium, dark-themed portfolio for **Anupam Gowda**, a Bengaluru-based
freelance web developer. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, React Three Fiber / drei, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** for styling and design tokens
- **React Three Fiber** + **@react-three/drei** for the interactive 3D hero
  scene and ambient background shapes
- **Framer Motion** for scroll reveals, the mobile menu, and project card
  3D tilt
- **lucide-react** for icons
- **Prisma** + **PostgreSQL** for content storage (Hero/About copy,
  Contact details, Skills, and Projects)
- **jose** + **bcryptjs** for the admin login session

## Project Structure

```
app/
  layout.tsx          Root layout, fonts, global SEO/OG metadata
  page.tsx            Fetches content from the database and assembles
                       all page sections
  globals.css         Tailwind layers + global styles (glass, gradients)
  icon.tsx            Generated favicon (no external file needed)
  opengraph-image.tsx Generated Open Graph image
  admin/
    login/page.tsx    Admin login form
    layout.tsx        Admin shell (header + logout)
    page.tsx          Dashboard: edit Hero/About, Contact, Skills, Projects
  api/
    auth/             Login / logout routes (sets httpOnly session cookie)
    content/          CRUD routes for hero, about, contact, skills, projects

middleware.ts         Protects /admin/* routes, redirects to /admin/login

prisma/
  schema.prisma       Postgres models for site content
  seed.ts             Seeds the database with the current site content

components/
  admin/              Forms and managers used by the admin dashboard
  Logo.tsx            Inline SVG "Maya" monogram + wordmark
  Navbar.tsx          Sticky nav, smooth-scroll links, mobile menu
  Hero.tsx            Hero copy + CTAs, hosts the 3D scene
  About.tsx           Bio section
  Skills.tsx          Animated grid of skills/tech
  Projects.tsx        Project data + layout
  ProjectCard.tsx      3D mouse-tilt project card
  Process.tsx         Discover → Design → Build → Deploy strip
  Contact.tsx         Contact CTAs + lightweight contact form
  Footer.tsx          Footer with contact details and project links
  ScrollReveal.tsx    Shared scroll-in animation wrapper
  three/
    HeroScene.tsx          R3F scene: floating, mouse-parallax shapes
    HeroSceneWrapper.tsx   Lazy-loads HeroScene, static fallback for
                           reduced motion / load
    AmbientShape.tsx       Lazy wrapper for background accent shape
    AmbientShapeScene.tsx  Background wireframe torus knot

hooks/
  useReducedMotion.ts  Detects `prefers-reduced-motion`
```

## Getting Started

1. Copy `.env.example` to `.env` and fill in the values (see
   [Admin Panel & Database Setup](#admin-panel--database-setup) below).
2. Install dependencies and apply the database schema:

   ```bash
   npm install
   npm run db:migrate
   npm run db:seed
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000), and the admin panel at
[http://localhost:3000/admin/login](http://localhost:3000/admin/login).

## Build

```bash
npm run build
npm run start
```

## Admin Panel & Database Setup

The site's Hero/About copy, Contact details, Skills, and Projects are stored
in PostgreSQL and editable from a password-protected `/admin` dashboard.

### 1. Create a Vercel Postgres database

1. In your [Vercel dashboard](https://vercel.com/dashboard), open (or create)
   the project for this repo, go to the **Storage** tab, and create a new
   **Postgres** database (powered by Neon). Connect it to the project.
2. Open the database's **`.env.local`** tab and copy:
   - `POSTGRES_PRISMA_URL` → use as `DATABASE_URL`
   - `POSTGRES_URL_NON_POOLING` → use as `DATABASE_URL_UNPOOLED`

### 2. Configure environment variables

Copy `.env.example` to `.env` and fill in:

- `DATABASE_URL` / `DATABASE_URL_UNPOOLED` — the connection strings from
  step 1.
- `JWT_SECRET` — a long random string used to sign admin session cookies.
  Generate one with:
  ```bash
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  ```
- `ADMIN_EMAIL` — the email address used to log in to `/admin`.
- `ADMIN_PASSWORD_HASH` — a bcrypt hash of your admin password. Generate
  one with:
  ```bash
  node -e "console.log(require('bcryptjs').hashSync('your-password', 10))"
  ```

In Vercel, set `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD_HASH` under
**Project Settings → Environment Variables** (the `DATABASE_URL*` variables
are added automatically when you connect the Postgres database).

### 3. Apply the schema and seed initial content

```bash
npm run db:migrate   # creates tables (development)
npm run db:deploy    # applies migrations (production)
npm run db:seed      # populates the current site content as a starting point
```

### 4. Log in

Visit `/admin/login`, sign in with `ADMIN_EMAIL` / your chosen password, and
edit Hero & About text, Contact details, Skills, and Projects. Changes save
immediately and appear on the live site right away.

## Deploying to Vercel

1. Push this repository to GitHub (or any Git provider).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Add a Vercel Postgres database to the project (Storage tab) — this sets
   `DATABASE_URL` and `DATABASE_URL_UNPOOLED` automatically.
4. Add `JWT_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD_HASH` as environment
   variables (see above).
5. Deploy. After the first deploy, run `npm run db:deploy && npm run db:seed`
   locally with the production `DATABASE_URL*` values (or via `vercel env
   pull` + the Vercel CLI) to create tables and seed initial content.

The site uses Next.js's built-in font optimization, generated favicon/OG
images, and `next/image` with `remotePatterns` configured for the two
project screenshot domains, so it builds and deploys with no extra setup
beyond the database configuration above.

## Accessibility & Performance Notes

- The 3D hero scene is lazy-loaded on the client and replaced with a static
  gradient glow when `prefers-reduced-motion: reduce` is set, while it loads,
  or if it fails to load.
- All interactive elements are keyboard-navigable with visible focus states.
- Images use `next/image` for optimized loading and proper `alt` text.
- Contact actions (email, phone, WhatsApp) work without any backend.

## Contact

- Email: anupamgowda1999@gmail.com
- Phone / WhatsApp: +91 72042 15343
- Location: Bengaluru, India
