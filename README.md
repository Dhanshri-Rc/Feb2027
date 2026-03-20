# SIARE WCBESD 2027 — Conference Website

**February 2027 World Conference on Business, Entrepreneurship, and Sustainable Economic Development**  
Organised under the SIARE Conference Series (June–March)

---

## Tech Stack

| Tool | Version |
|------|---------|
| React | 18.x |
| Vite | 5.x |
| CSS | Custom Properties (no UI framework) |

---

## Getting Started

### Prerequisites
- Node.js **18+**
- npm **9+**

### Installation

```bash
# 1. Unzip the project
unzip conference-website.zip
cd conference-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The site will open at **http://localhost:3000**

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server (hot reload) |
| `npm run build` | Build for production → `dist/` |
| `npm run preview` | Preview production build locally |

---

## Project Structure

```
conference-website/
├── index.html          ← HTML entry point
├── package.json        ← Dependencies & scripts
├── vite.config.js      ← Vite configuration
├── README.md           ← This file
│
├── public/             ← Static assets (favicons, images)
│
└── src/
    ├── main.jsx        ← React entry point
    ├── App.jsx         ← Full conference website component
    └── styles.css      ← Global stylesheet (CSS custom properties)
```

---

## Features

- ✅ Sticky navigation with **IntersectionObserver** active link highlighting
- ✅ Smooth scroll on all nav links (offset for sticky bar)
- ✅ Mobile responsive with hamburger menu
- ✅ Interactive track accordion cards
- ✅ Tabbed submission guidelines panel
- ✅ Registration fee table
- ✅ Animated-style timeline for important dates
- ✅ Full committee & contact sections
- ✅ CSS custom properties for easy theming
- ✅ No external UI framework dependencies

---

## Deployment

### Vercel

```bash
npm run build
# Then connect GitHub repo to Vercel — zero config required
```

### Netlify

```bash
npm run build
# Drag & drop the dist/ folder to Netlify, or connect via Git
# Build command: npm run build
# Publish directory: dist
```

### Manual / VPS

```bash
npm run build
# Upload the dist/ folder to your web server
```

---

## Customisation

All conference content lives in the `data` object at the top of `src/App.jsx`.  
Design tokens (colours, fonts) are in `src/styles.css` under `:root { ... }`.

---

## Contact

For conference enquiries: **secretariat@siare-wcbesd2027.org**  
Website: **www.siare-wcbesd2027.org**
