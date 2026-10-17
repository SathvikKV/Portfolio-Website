# Sathvik Vadavatha – Portfolio Website

This is the source code for my personal portfolio website, built with **Next.js**, **Tailwind CSS**, and **ShadCN UI**. It serves as a digital portfolio to showcase my background, work experience, technical skills, and selected projects in data science, AI, and engineering.

## Live Site

[Visit Portfolio](https://sathvik-vadavatha-portfolio.vercel.app/)

## Features

- **Editorial, paper-and-ink design:** warm paper background, Fraunces serif display type, terracotta and moss accents, hairline rules and a fixed paper grain.
- **Live topographic hero:** contour lines traced with marching squares over drifting simplex noise; the terrain rises under the cursor.
- **Inertial carousels:** a custom drag/flick/trackpad/keyboard carousel engine (`components/site/track.tsx`) with momentum, rubber-band edges, snapping and image parallax, used for projects, notebooks and case-study galleries.
- **Experience ledger:** expanding entries with key numbers set in clay.
- **Smooth scrolling** with Lenis; masked word-by-word heading reveals with Framer Motion.
- **Case study pages:** overview, screenshot plates, problems & approach, stack and next entry.
- Contact form via [Formspree](https://formspree.io). Respects `prefers-reduced-motion`; responsive down to 360px.

## Tech Stack

- **Framework:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS with custom design tokens (`app/globals.css`)
- **Motion:** Framer Motion, Lenis, simplex-noise
- **Hosting:** Vercel

## Where things live

```yaml
lib/data.ts         # projects (domain, headline metric, gallery) and blog posts
lib/profile.ts      # bio, hero stats, experience, education, skills, lab notebooks
components/site/    # all page sections and shared primitives (track, reveal, plate, topo-field)
app/                # home, /projects/[slug], /blog
public/img          # screenshots, logos and icons
```

## Getting Started

To run locally:

Clone the repository:

```bash
git clone https://github.com/SathvikKV/Portfolio-Website.git
cd Portfolio-Website
```
   
Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```
Open http://localhost:3000 to view in your browser.

Notes:

The chatbot UI code (`components/ChatbotWidget.tsx`, RAG-based assistant backed by `backend/`) is implemented but not mounted.

License
This project is open for review but not intended for public reuse. All content is original and based on personal experience and projects.

Contact
For inquiries, collaborations, or opportunities, feel free to reach out:

Email: vadavatha.s@northeastern.edu

Location: Boston, MA

LinkedIn: Sathvik Vadavatha
