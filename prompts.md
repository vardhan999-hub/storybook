# Prompts.md — Week 12 Storybook Design System

**Project:** Storybook Design System
**Week:** 12
**Track:** Frontend (Component Driven Development)
**Name:** Tadigadapa Harshavardhan

---

## 📌 Overview

This file documents how I used AI as a learning guide while building this project.

I came into Week 12 never having used Storybook before. My approach was to ask AI to explain concepts first, then go implement them myself. When something broke, I debugged it myself first, and only asked AI for help when I was stuck for more than 20-30 minutes.

Every bug in this project — and there were many — taught me something real about how webpack, Babel, and Storybook actually work under the hood.

---

## 🔹 Prompt 1 — Understanding What Storybook Actually Is

**What I asked:**
> "What is Storybook and why do big companies use it instead of just building components inside the app directly?"

**What clicked for me:**
I always wondered why companies have separate "design system" links. Turns out when you have 50 engineers working on the same codebase, you can't have everyone building their own version of a button. Storybook is the solution — one place where components live, are tested visually, and are documented. Before this, I thought it was just a fancy UI thing. Now I understand it's actually about team consistency and reliability.

**What I built after understanding this:**
Set up the folder structure — `.storybook/`, `src/components/Button/`, `Input/`, `ProductCard/` — and made sure each component had its own isolated folder before writing a single line of component code.

---

## 🔹 Prompt 2 — Understanding Stories and the CSF Format

**What I asked:**
> "What is a Story in Storybook? What is CSF format and how do args work?"

**What clicked for me:**
A Story is just an exported object that describes one specific state of your component. CSF stands for Component Story Format — it's the standard way to write them. The `args` are basically the props you pass to the component for that specific story. The magic is that Storybook reads those args and automatically builds the Controls panel, so you can change props without touching code.

**What I built after understanding this:**
Wrote my first Button stories — Primary, Secondary, Ghost, Danger, Disabled. Then added argTypes to control which values appear as dropdowns vs radio buttons in the Controls panel.

---

## 🔹 Prompt 3 — CSS Modules and Design Tokens

**What I asked:**
> "How do I set up dark and light mode using CSS variables so all my components switch themes without changing component code?"

**What clicked for me:**
The key insight was using `data-theme` attributes on a wrapper element combined with CSS custom properties. When the attribute changes, every element inside automatically reads the new variable values. I had tried doing dark mode with class toggles before but it always got messy. The CSS variable approach is clean because the component itself doesn't know or care about the theme — it just reads variables.

**What I built after understanding this:**
Created `globals.css` with all design tokens defined twice — once under `:root` for light mode, once under `[data-theme="dark"]`. Then wired the Storybook decorator in `preview.js` to apply the attribute based on the toolbar toggle.

---

## 🔹 Prompt 4 — Debugging the webpack JSX Error

**What I asked:**
> "Storybook is throwing 'Module parse failed: Unexpected token' on JSX in my stories files. I'm using @storybook/react-webpack5. What's happening?"

**What I understood after researching:**
This one took me a while. The error meant webpack was trying to process JSX files but had no loader configured to transform them. When I was using `@storybook/nextjs`, Next.js handled this automatically behind the scenes. But when I switched to `@storybook/react-webpack5`, I had to configure Babel myself. The fix was adding a `.babelrc` with `@babel/preset-react` and using `webpackFinal` in `main.js` to register the babel-loader rule.

**What I actually did to fix it:**
Spent about 40 minutes reading webpack docs and Storybook GitHub issues before I understood what was missing. Then wrote the `webpackFinal` function in `main.js` myself and added `.babelrc`. This was the most educational bug of the whole project.

---

## 🔹 Prompt 5 — ProductCard Component Design

**What I asked:**
> "How should I structure a ProductCard component that supports both vertical and horizontal layouts, discount badge, star rating, and a wishlist button?"

**What clicked for me:**
The layout switching pattern — using a `layout` prop that maps to a CSS class — is how most professional component libraries handle responsive or orientation-variant components. Instead of building two separate components, one component with a prop is cleaner and easier to maintain.

**What I built after understanding this:**
Built the ProductCard with all props — `name`, `price`, `originalPrice`, `category`, `badge`, `rating`, `reviewCount`, `layout`. The discount percentage is calculated automatically inside the component from `originalPrice` and `price`. I also built the star rating by generating an array of 5 elements and comparing against the rating prop.

---

## 🔹 Prompt 6 — Deploying to Vercel as a Static Site

**What I asked:**
> "Vercel keeps treating my project as a Next.js app even though I'm deploying a Storybook static build. How do I fix this?"

**What I understood:**
Vercel auto-detects frameworks by scanning `package.json`. Since I had `next` as a dependency, it assumed Next.js and tried to run `next build`. The fix had two parts — setting `vercel.json` with the correct build command and output directory, AND changing the Framework Preset in the Vercel dashboard from "Next.js" to "Other". Both were needed. Just the `vercel.json` alone wasn't enough because Vercel's dashboard setting overrides the file.

**What I did:**
Created `vercel.json` with `buildCommand`, `outputDirectory`, and `installCommand`. Then manually changed the preset in Vercel's project settings. This took several failed deployments to figure out — each one taught me something about how Vercel's build pipeline works.

---

## 🔹 Prompt 7 — Writing Good Stories for Documentation

**What I asked:**
> "What makes a good Storybook story? How do I write stories that are actually useful for other developers?"

**What clicked for me:**
A good story answers a question a developer would have. "What does this look like when disabled?" — write a Disabled story. "What does a form look like with all input states?" — write a FormGroup story. The goal is that another developer should be able to open Storybook and understand the entire component without reading the source code.

**What I built after understanding this:**
Added showcase stories — AllVariants for Button, FormGroup for Input, ProductGrid for ProductCard. These are the most useful stories because they show context, not just isolated states. I also wrote `description` strings in the story parameters so the Docs page actually explains each story.

---

## 🔹 Prompt 8 — Understanding the Storybook Decorator Pattern

**What I asked:**
> "What is a Storybook decorator and how do I use one to apply global CSS and theme switching to every story?"

**What clicked for me:**
A decorator is a wrapper that gets applied to every story automatically. It's like a layout component that wraps every single story render. I used this to apply `data-theme` attribute based on the toolbar selection, and to import `globals.css` once globally instead of in every story file. Without this, I would have had to manually add theme logic to every single story.

**What I built after understanding this:**
Wrote the decorator in `preview.js` that reads `context.globals.theme` and applies it as a `data-theme` attribute on a wrapper div. This is what makes the dark/light toggle actually work across all three components simultaneously.

---

## 🔧 Things I Figured Out Completely on My Own

* The `{.storybook,public,src` folder that got created by mistake — deleted it
* Why `rmdir /s /q` doesn't work in PowerShell — had to use `Remove-Item -Recurse -Force`
* That GitHub's web uploader blocks dotfiles — had to create `.storybook/main.js` using the "Create new file" interface and typing the path with a slash to create the folder
* That `@storybook/addon-onboarding` was causing version conflicts and removing it fixed the mismatch warnings
* The difference between the `vercel.json` build config and the Vercel dashboard preset — both need to match

---

## 🎯 Honest Reflection

This was the hardest week technically. Setting up Storybook from scratch without the official CLI doing everything automatically forced me to understand what's actually happening — webpack loaders, Babel presets, peer dependencies, framework presets. 

Every error I hit (and there were at least 8 distinct ones) made me read documentation I would have skipped otherwise. By the time Storybook was running, I actually understood why it was running.

The deployment part taught me more about Vercel's internals than I expected. I assumed `vercel.json` would be enough — it wasn't. The dashboard preset overrides everything.

If I had to do this again, I'd use `@storybook/react-webpack5` from the start instead of `@storybook/nextjs`, and I'd create the `public` folder and `.babelrc` before running a single command.
