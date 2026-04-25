# 🎨 Storybook Design System — Week 12

A production-grade component design system built with **React**, **Next.js**, and **Storybook 8**. Designed with a bold **neo-brutalist editorial** aesthetic: hard shadows, raw typography, and unapologetic colour.

---

## 📁 Project Structure

```
your-project/
│
├── .storybook/
│   ├── main.js          ← Storybook framework + addon config
│   └── preview.js       ← Global decorators, backgrounds, dark/light theme
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
│   │   └── index.js     ← Central export: import { Button, Input, ProductCard } from '@/components'
│   │
│   └── styles/
│       └── globals.css  ← Design tokens (CSS variables for light + dark mode)
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run Storybook (development)
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to view your component library.

### 3. Run Next.js app (optional)
```bash
npm run dev
```

---

## 📦 Build & Deploy (Level 3)

### Build Storybook as static site
```bash
npm run build-storybook
```
This outputs a standalone static folder at `storybook-static/`.

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy the static build
vercel storybook-static/
```

### Deploy to Chromatic (recommended for teams)
```bash
# Install Chromatic
npm install --save-dev chromatic

# Publish
npx chromatic --project-token=YOUR_TOKEN
```

---

## 🧩 Components

### `<Button />`
| Prop       | Type                                       | Default     |
|------------|--------------------------------------------|-------------|
| `variant`  | `primary` \| `secondary` \| `ghost` \| `danger` | `primary`   |
| `size`     | `small` \| `medium` \| `large`            | `medium`    |
| `label`    | `string`                                   | `"Button"`  |
| `disabled` | `boolean`                                  | `false`     |
| `onClick`  | `function`                                 | —           |

### `<Input />`
| Prop         | Type                                | Default            |
|--------------|-------------------------------------|--------------------|
| `label`      | `string`                            | —                  |
| `placeholder`| `string`                            | `"Type something"` |
| `type`       | `text` \| `email` \| `password` \| `number` | `text`     |
| `state`      | `default` \| `error` \| `success`  | `default`          |
| `helperText` | `string`                            | —                  |
| `disabled`   | `boolean`                           | `false`            |

### `<ProductCard />`
| Prop            | Type                      | Default       |
|-----------------|---------------------------|---------------|
| `name`          | `string`                  | —             |
| `price`         | `number`                  | —             |
| `originalPrice` | `number`                  | —             |
| `category`      | `string`                  | —             |
| `description`   | `string`                  | —             |
| `imageSrc`      | `string` (URL)            | —             |
| `badge`         | `string`                  | —             |
| `rating`        | `number` (0–5)            | `0`           |
| `reviewCount`   | `number`                  | `0`           |
| `layout`        | `vertical` \| `horizontal`| `vertical`    |
| `onAddToCart`   | `function`                | —             |
| `onWishlist`    | `function`                | —             |

---

## 🌗 Dark / Light Mode

Toggle from the **Backgrounds** panel in Storybook (`⊕` icon in the toolbar) or the custom **Theme** toolbar toggle. All components use CSS variables and respond automatically.

---

## 🎨 Design Tokens

All design tokens live in `src/styles/globals.css` as CSS custom properties:

```css
--color-accent       /* Primary brand red-orange */
--color-text         /* Main text */
--color-bg           /* Page background */
--color-surface      /* Card/input background */
--font-display       /* Playfair Display — headings */
--font-body          /* DM Sans — body copy */
--font-mono          /* DM Mono — labels, badges */
--shadow-sm/md/lg    /* Hard drop shadows */
```

---

## 🛠 Tech Stack

- **React 18** + **Next.js 14**
- **Storybook 8** with `@storybook/nextjs` framework
- **CSS Modules** for scoped component styles
- **Google Fonts** — Playfair Display, DM Sans, DM Mono

---

## 📤 Submitting

Submit the **live Storybook URL** (Vercel or Chromatic) along with your GitHub repo link.
