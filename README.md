
# FameTonic Demo

A Next.js implementation of the FameTonic homepage design using Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=flat-square)](https://netzet-fame-tonic-demo.vercel.app/)
[![GitHub](https://img.shields.io/badge/repo-public-blue?style=flat-square)](https://github.com/rahadkc/netzet-fame-tonic-demo)

## Features

✅ Pixel-perfect implementation of provided Figma design  
✅ Fully responsive layout  
✅ Clean component structure  
✅ ESLint + Prettier configured for code consistency  
✅ TypeScript support  

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- TypeScript
- ESLint + Prettier (auto-format on save)

## Setup

1. Clone the repository:
    ```bash
    git clone git@github.com:rahadkc/netzet-fame-tonic-demo.git
    cd netzet-fame-tonic-demo
    ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```


## Implementation Details

- **Design**: Followed Figma specifications precisely (no added animations or effects)
- **Responsiveness**: Tailwind breakpoints (sm, md, lg, xl) used for all responsive behavior

## Requirements Checklist

- [x] Next.js project setup
- [x] Pixel-perfect homepage implementation
- [x] Responsive design
- [x] Placeholder buttons/links (no actions)
- [x] Public GitHub repository
- [x] Live demo deployment
- [x] Tailwind CSS for styling

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Notes

- All design assets are placed in `/public`
- Configuration files:
  - `tailwind.config.ts` - Custom Tailwind setup
  - `eslint.config.mjs` - ESLint rules
  - `prettier.config.mjs` - Code formatting rules by script


## Project Structure


```
├── README.md
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prettier.config.mjs
├── public/
├── src
│   ├── app
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── Header
│   │   │   ├── IconBurger.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── index.tsx
│   │   ├── LandingContent
│   │   │   ├── HeroInfoSection.tsx
│   │   │   ├── PhoneMockup.tsx
│   │   │   └── index.tsx
│   │   ├── Layout
│   │   ├── PromoBanner.tsx
│   │   └── Wrapper.tsx
│   ├── hooks
│   │   └── useToggle.tsx
│   └── utils
│       └── fonts.ts
└── tsconfig.json
```
