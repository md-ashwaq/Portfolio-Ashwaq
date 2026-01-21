# Mohammed Ashwaq — Portfolio (Next.js 16)

Modern, high-performance portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**.  
Dark “enterprise/IDE” theme with Java-orange accents.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-ff4d8d)](https://www.framer.com/motion/)

## Features

- **Responsive**: mobile → desktop
- **SEO-ready**: metadata + Open Graph
- **Modular data**: add skills/projects/certificates easily
- **Resume download**: navbar button (PDF in `public/`)
- **Certificates gallery**: preview **PDF / PNG / JPG**
- **Contact form**: validation + friendly UX
- **Custom favicon**: “AM” icon (no external image needed)

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide Icons**

## Quickstart

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  icon.tsx
  apple-icon.tsx
  manifest.ts
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  TechStack.tsx
  Projects.tsx
  Certificates.tsx
  Experience.tsx
  Contact.tsx
  Footer.tsx
data/
  skills.ts
  projects.ts
  experience.ts
  certificates.ts
types/
  index.ts
public/
  Ashwaq_Resume-01.pdf
  certificates/
```

## Content updates (DRY data files)

- **Skills**: `data/skills.ts`
- **Projects**: `data/projects.ts`
- **Experience**: `data/experience.ts`
- **Certificates**: `data/certificates.ts`

## Resume

Put your resume PDF here:

- `public/Ashwaq_Resume-01.pdf`

## Certificates (PDF / JPG / PNG)

1. Put files here:
   - `public/certificates/`
2. Ensure `data/certificates.ts` matches the exact filenames.

## Author

**Mohammed Ashwaq**
- **Email**: `md.ashwaq.2609@gmail.com`
- **LinkedIn**: `https://www.linkedin.com/in/ashwaq-masumbaigari-646201225/`
- **GitHub**: `https://github.com/md-ashwaq`
