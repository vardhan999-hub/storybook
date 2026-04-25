# 🎨 Storybook Design System — Component Driven Development

A production-grade **UI component design system** built using **React**, **Storybook 8**, and **CSS Modules**, focused on reusability, isolation, and visual consistency across a product.

🔗 **Live Demo:** https://storybook-og4i.vercel.app/?path=/docs/design-system-button--docs


📂 **GitHub Repository:** https://github.com/vardhan999-hub/storybook

---

## 📌 Overview

This design system demonstrates how large companies like **Spotify, Airbnb, and Google** build UI components — in complete isolation from the main application using **Storybook**.

Instead of dropping components directly into a page and hoping they look right, every component is built, tested visually, and documented here before it ever touches production code. This is called **Component Driven Development**.

### 🚀 Key Highlights

* Components built and tested in complete isolation
* Full dark and light mode support via CSS custom properties
* Live args controls to toggle variants, sizes, and states in real time
* Auto-generated documentation for every component
* Deployed as a standalone static design system on Vercel

---

## ✨ Features

* 🔘 **Button** — 4 variants (Primary, Secondary, Ghost, Danger), 3 sizes, Disabled state
* 📝 **Input** — 4 states (Default, Error, Success, Disabled) with helper text
* 🛍️ **ProductCard** — Vertical and horizontal layouts, discount badges, star ratings, wishlist action
* 🌗 **Dark / Light Mode** — Full theme switching via CSS variables
* 🎛️ **Storybook Controls** — Live prop editing from the control panel
* 📖 **Auto Docs** — Component documentation with props table generated automatically
* 🚀 **Deployed** — Static build published to Vercel

---

## 🛠 Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | UI components |
| Storybook 8 | Component isolation and documentation |
| CSS Modules | Scoped component styling |
| Babel | JSX transformation |
| Webpack 5 | Module bundling |
| Vercel | Static deployment |

---

## 📂 Project Structure

```
storybook-design-system/
│
├── .storybook/
│   ├── main.js              ← Storybook config, webpack, addons
│   └── preview.js           ← Global decorators, backgrounds, theme toggle
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   ├── Button.module.css
│   │   │   └── Button.stories.jsx
│   │   │
│   │   ├── Input/
│   │   │   ├── Input.jsx
│   │   │   ├── Input.module.css
│   │   │   └── Input.stories.jsx
│   │   │
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductCard.module.css
│   │   │   └── ProductCard.stories.jsx
│   │   │
│   │   └── index.js         ← Central export for clean imports
│   │
│   └── styles/
│       └── globals.css      ← Design tokens and CSS variables
│
├── .babelrc
├── vercel.json
├── package.json
├── README.md
└── Prompts.md
```

---

## 🧩 Components

### 🔘 Button

| Prop | Type | Default |
| --- | --- | --- |
| `variant` | `primary` \| `secondary` \| `ghost` \| `danger` | `primary` |
| `size` | `small` \| `medium` \| `large` | `medium` |
| `label` | `string` | `"Button"` |
| `disabled` | `boolean` | `false` |
| `onClick` | `function` | — |

### 📝 Input

| Prop | Type | Default |
| --- | --- | --- |
| `label` | `string` | — |
| `placeholder` | `string` | `"Type something..."` |
| `type` | `text` \| `email` \| `password` \| `number` | `text` |
| `state` | `default` \| `error` \| `success` | `default` |
| `helperText` | `string` | — |
| `disabled` | `boolean` | `false` |

### 🛍️ ProductCard

| Prop | Type | Default |
| --- | --- | --- |
| `name` | `string` | — |
| `price` | `number` | — |
| `originalPrice` | `number` | — |
| `category` | `string` | — |
| `badge` | `string` | — |
| `rating` | `number` (0–5) | `0` |
| `layout` | `vertical` \| `horizontal` | `vertical` |
| `onAddToCart` | `function` | — |

---

## 🌗 Dark / Light Mode

All components use **CSS custom properties** defined in `globals.css`. Switching themes requires zero component-level changes — the entire system responds instantly when the background toggle is switched in Storybook's toolbar.

```css
/* Light */
:root {
  --color-bg: #F5F0E8;
  --color-accent: #C8401A;
  --color-text: #1A1208;
}

/* Dark */
[data-theme="dark"] {
  --color-bg: #0D0D0D;
  --color-accent: #E8622A;
  --color-text: #F0EAD6;
}
```

---

## 🎯 Requirements Covered

### ✅ Level 1 — Basic Storybook Setup
* Storybook installed and running on `localhost:6006`
* Stories created for Button, Input, and ProductCard
* Components viewable in isolation without running the main app

### ✅ Level 2 — Variants and Dark Mode
* Args configured for all components — toggle variants, sizes, and states from the Controls panel
* Background toggle for Light and Dark mode
* Custom Theme toolbar for global theme switching

### ✅ Level 3 — Deployment
* Built as a static web app using `npm run build-storybook`
* Deployed to Vercel as a standalone public URL
* Live design system accessible without running any local server

---

## 🚀 Running the Project

### Install dependencies
```bash
npm install --legacy-peer-deps
```

### Run Storybook locally
```bash
npm run storybook
```
Opens at `http://localhost:6006`

### Build for deployment
```bash
npm run build-storybook
```
Outputs to `storybook-static/`

### Deploy to Vercel
```bash
vercel storybook-static/
```

---

## 🎨 Design Decisions

The system uses a **neo-brutalist editorial** aesthetic:

* **Playfair Display** for headings — characterful serif with personality
* **DM Mono** for labels and badges — technical and precise
* **DM Sans** for body copy — clean and readable
* Hard offset box shadows (`4px 4px 0px`) instead of soft blurs
* Warm cream (`#F5F0E8`) background instead of generic white
* Terracotta accent (`#C8401A`) for primary actions

---

## 👨‍💻 Author

**Tadigadapa Harshavardhan**
https://github.com/vardhan999-hub
