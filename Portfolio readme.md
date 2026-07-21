# 📁 Portfolio-Nevin100 — Complete Codebase README

> **Owner:** Nevin Bali — Full Stack Software Engineer  
> **Stack:** React 18 + Vite + Tailwind CSS + Framer Motion + React Router DOM  
> **Live Portfolio:** [nevinbali.me](https://nevinbali.me)

---

## 📂 Folder Structure

```
Portfolio-Nevin100/
├── .eslintrc.cjs                  # ESLint configuration
├── .gitignore                     # Git ignore rules
├── index.html                     # HTML entry point
├── package.json                   # Project dependencies & scripts
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── vite.config.js                 # Vite bundler configuration
├── README.md                      # Original README
│
└── src/
    ├── App.jsx                    # Root app component with routing
    ├── index.css                  # Global CSS with Tailwind directives
    ├── main.jsx                   # React DOM entry point
    │
    ├── assets/
    │   ├── NevinLogo.png          # Logo image (PNG)
    │   ├── NevinLogo.svg          # Logo image (SVG)
    │   ├── NevinProfile.jpg       # Hero profile photo
    │   ├── Profile.jpg            # Alternate profile photo
    │   ├── about.jpg              # About section image
    │   ├── dep-inspector.jpg      # dep-inspector CLI project image
    │   │
    │   ├── Open/                  # Community / Open Source images
    │   │   ├── image1.jpg
    │   │   ├── image-2.jpg
    │   │   ├── image-3.jpg
    │   │   ├── image-4.jpg
    │   │   └── image-5.jpg
    │   │
    │   └── projects/              # Project screenshot images
    │       ├── project-1.jpg / project-1.png
    │       ├── project-2.jpg
    │       ├── project-3.jpg
    │       ├── project-4.jpg
    │       ├── project-5.jpg
    │       ├── project-6.jpg
    │       ├── project-7.jpg
    │       ├── project11.jpg
    │       ├── project12.jpg
    │       ├── project13.png
    │       ├── sparkImage.jpg
    │       ├── 2.png – 9.png      # Additional project screenshots
    │
    ├── components/
    │   ├── Navbar.jsx             # Fixed top navigation with mobile menu
    │   ├── Hero.jsx               # Landing/hero section
    │   ├── About.jsx              # About me section
    │   ├── Technologies.jsx       # Tech stack grid section
    │   ├── Experience.jsx         # Career timeline section
    │   ├── Projects.jsx           # Projects showcase with search
    │   ├── Community.jsx          # Open source & community contributions
    │   ├── Connect.jsx            # Contact form + social links (active)
    │   ├── Activities.jsx         # Legacy open source component (redirected)
    │   └── Contacts.jsx           # Legacy contacts component (redirected)
    │
    └── utils/
        ├── Loader.jsx             # Full-screen animated loader
        └── index.js               # All data exports (hero, experience, projects, etc.)
```

---

## 🗂️ Root Config Files

### `.eslintrc.cjs`

```javascript
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
```

---

### `.gitignore`

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Environment variables
.env
README_DETAILED.md
```

---

### `index.html`

```html
<!doctype html>
<html lang="en">
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <link rel="icon" type="image/svg+xml" href="./src/assets/NevinLogo.svg" />
  <title>Nevin Bali</title>
</head>

  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

### `package.json`

```json
{
  "name": "my-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "framer-motion": "^11.3.19",
    "lucide-react": "^0.518.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-icons": "^5.2.1",
    "react-router-dom": "^7.6.2"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "vite": "^7.3.1"
  }
}
```

---

### `postcss.config.js`

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---

### `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
```

---

## ⚛️ Source Files (`src/`)

### `src/main.jsx`

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { StrictMode } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);
```

---

### `src/index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playwrite+NG+Modern:wght@100..400&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  font-family: "Inter",sans-serif;
}
```

---

### `src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

import Navbar from "./components/Navbar.jsx";
import Loader from "./utils/Loader.jsx";

const Hero = lazy(() => import("./components/Hero.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Technologies = lazy(() => import("./components/Technologies.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Community = lazy(() => import("./components/Community.jsx"));
const Connect = lazy(() => import("./components/Connect.jsx"));

const App = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setShowLoader(false);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <Router>
      {showLoader && <Loader />}

      <div className="text-neutral-300 overflow-x-hidden antialiased scroll-smooth min-h-screen">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
        </div>

        <div className="container mx-auto p-6 sm:p-8 min-h-screen">
          <Navbar />

          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/technologies" element={<Technologies />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/community" element={<Community />} />
              {/* kept for old bookmarks/links */}
              <Route path="/activities" element={<Community />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/connect" element={<Connect />} />
              {/* kept for old bookmarks/links */}
              <Route path="/contacts" element={<Connect />} />
              <Route path="*" element={<Hero />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
};

export default App;
```

---

## 🧩 Components (`src/components/`)

### `src/components/Navbar.jsx`

```jsx
import { useState, useEffect } from "react";
import logo from "../assets/NevinLogo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Technologies", "Experience", "Community", "Projects", "Connect"];

const socialIcons = [
  { href: "https://www.linkedin.com/in/nevinbali1012/", label: "LinkedIn", icon: <FaLinkedin />, color: "hover:text-blue-400" },
  { href: "https://github.com/Nevin100", label: "GitHub", icon: <FaGithub />, color: "hover:text-gray-300" },
  { href: "mailto:nevinbali10@mail.com", label: "Email", icon: <FaEnvelope />, color: "hover:text-red-400" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 md:px-8 py-5 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 
          bg-neutral-900/40 backdrop-blur-xl border border-white/10 
          ${scrolled
            ? "shadow-[0_10px_30px_-10px_rgba(236,72,153,0.3),0_10px_30px_-10px_rgba(168,85,247,0.3)] border-purple-500/20"
            : "shadow-none"
          }`}
        role="navigation"
      >
        <Link to="/" className="flex items-center group">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={logo}
            alt="Nevin Logo"
            className="w-10 md:w-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[13px] font-bold uppercase tracking-[0.15em]">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <li key={item} className="relative">
                  <Link
                    to={path}
                    className={`transition-colors duration-300 ${isActive ? "text-purple-400" : "text-neutral-300 hover:text-white"}`}
                  >
                    {item}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="h-5 w-[1px] bg-white/10 mx-2" />

          <div className="flex gap-4">
            {socialIcons.map(({ href, label, icon, color }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-neutral-400 transition-colors ${color}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-2xl text-purple-400"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute inset-x-4 mt-3 p-8 bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest ${pathname === `/${item.toLowerCase()}` ? "text-purple-400" : "text-neutral-300"}`}
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-8 text-2xl mt-4">
                {socialIcons.map(({ href, label, icon, color }) => (
                  <a key={label} href={href} className={color}>{icon}</a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
```

---

### `src/components/Hero.jsx`

```jsx
import { HERO_CONTENT } from "../utils";
import profilePIC from "../assets/NevinProfile.jpg";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

function Hero() {
  return (
    <>
      <Helmet>
        <title>Nevin Bali | Full Stack Engineer • GenAI • Cloud & DevOps</title>
        <meta name="description" content="Nevin Bali is a Full Stack Software Engineer specializing in React, Next.js, GenAI, and cloud-native systems." />
      </Helmet>

      <section
        id="home"
        className="relative min-h-[90vh] flex items-center border-b border-neutral-900 
                   px-6 sm:px-12 lg:px-24 py-20 overflow-hidden bg-[#0a0a0a]"
      >
        {/* Advanced Ambient Glows */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-sky-500/10 blur-[150px] rounded-full animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* TEXT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-purple-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              Available for Opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white"
            >
              NEVIN<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400"> BALI</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-400"
            >
              I build <span className="text-white">scalable</span> & <span className="text-white">AI-driven</span> systems.
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 max-w-xl text-neutral-400 text-lg leading-relaxed font-medium"
            >
              {HERO_CONTENT}
            </motion.p>            
          </div>

          {/* IMAGE CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            {/* Image Glow Backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-sky-500/30 blur-[80px] rounded-full scale-75 animate-pulse" />
            
            <div className="relative group">
              <img
                src={profilePIC}
                alt="Nevin Bali Profile"
                className="w-72 sm:w-84 md:w-96 lg:w-[30rem] rounded-[3rem] object-cover border-2 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 p-6 bg-neutral-900/80 backdrop-blur-xl border border-neutral-800 rounded-3xl hidden sm:block shadow-2xl">
                <div className="text-3xl font-black text-white">2+</div>
                <div className="text-neutral-500 text-xs font-bold uppercase tracking-widest">Years Experience</div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Hero;
```

---

### `src/components/About.jsx`

```jsx
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { ExternalLink, GraduationCap, MapPin, Code2, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";

const PROOF_STATS = [
  { label: "GitHub", value: "@Nevin100", Icon: FaGithub, color: "text-zinc-300" },
  { label: "LeetCode", value: "50-Day Streak", Icon: SiLeetcode, color: "text-orange-400" },
  { label: "HackerRank", value: "@opopopopop100000", Icon: SiHackerrank, color: "text-emerald-400" },
  { label: "LeetCode", value: "@Nevin_100", Icon: SiLeetcode, color: "text-yellow-400" },
];

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - left) / width) * 100,
      y: ((e.clientY - top) / height) * 100,
    });
  };

  return (
    <>
      <Helmet>
        <title>About | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Nevin Bali is a Full Stack Software Engineer specializing in Next.js, GenAI, and cloud architectures." />
      </Helmet>

      <section
        id="about"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative min-h-screen py-24 overflow-hidden bg-[#0a0a0a]"
      >
        <div className="absolute inset-0 z-0 opacity-20"
             style={{ backgroundImage: `radial-gradient(#27272a 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-2xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-purple-500/5"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.15), transparent 40%)`
              }}
            />

            <div className="relative mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[1px] w-12 bg-purple-500" />
                <span className="text-purple-400 font-bold tracking-[0.2em] text-xs uppercase">The Story So Far</span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-6">
                ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">ME.</span>
              </h2>

              <div className="flex flex-wrap gap-4 text-zinc-500 font-medium">
                <span className="flex items-center gap-2"><Code2 size={16} className="text-purple-500" /> Full Stack</span>
                <span className="flex items-center gap-2"><Sparkles size={16} className="text-pink-500" /> GenAI Specialist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 self-center" />
                <span>SaaS Builder</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16">
              <div className="space-y-8 text-lg text-zinc-400 leading-relaxed font-medium">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left">
                  I&apos;m <strong className="text-white">Nevin Bali</strong>, a Software Engineer who thrives at the intersection of complex code and seamless user experiences.
                  Specializing in <strong>Next.js, TypeScript, and FastAPI</strong>, I build systems that aren&apos;t just functional, but scalable for real-world traffic.
                </p>

                <p>
                  As an <strong className="text-purple-400">SDE Intern</strong>, I&apos;ve had the privilege of owning entire production lifecycles.
                  From architecting admin dashboards to integrating secure payment gateways, I focus on building infrastructure that stands the test of live environments.
                </p>

                <p>
                  My recent obsession? <strong className="text-sky-400">GenAI</strong>. I&apos;ve been shipping products powered by
                  <strong> Groq (Llama v3)</strong>, bridging the gap between raw LLM capabilities and practical, automated tools for modern businesses.
                </p>

                <div className="pt-2">
                  <Link
                    to="https://drive.google.com/file/d/1rOcRvvVAzD3ijvVV9Erhy9030TwhFNzy/view?usp=sharing"
                    target="_blank"
                    className="group flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-2xl font-bold transition-all hover:bg-gradient-to-r hover:from-purple-400 hover:to-violet-400 hover:text-white"
                  >
                    View Full Resume
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Side Stats/Cards */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-start gap-5"
                >
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Education</h4>
                    <p className="text-zinc-400 text-sm leading-snug mt-1">
                      B.Tech – Computer Science<br />
                      MSIT, New Delhi (2023–2027) · CGPA 9.7
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/5 flex items-start gap-5"
                >
                  <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">Location</h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      New Delhi, India<br />
                      Remote • Full-time • Freelance
                    </p>
                  </div>
                </motion.div>

                {/* Proof of Work */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-3xl bg-white/5 border border-white/5"
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Proof of Work</h4>
                      <p className="text-zinc-400 text-sm mt-1">Consistency across code &amp; practice</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {PROOF_STATS.map(({ label, value, Icon, color }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-950/40 border border-white/5">
                        <Icon className={`text-lg shrink-0 ${color}`} />
                        <span className="flex flex-col leading-tight">
                          <span className="text-[11px] text-zinc-500">{label}</span>
                          <span className="text-xs font-semibold text-zinc-200">{value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
```

---

### `src/components/Technologies.jsx`

```jsx
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3,
  SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiFramer,
  SiNodedotjs, SiExpress, SiFastapi, SiSocketdotio,
  SiMongodb, SiPostgresql, SiPrisma, SiMysql, SiFirebase,
  SiDocker, SiGit, SiGithub, SiRabbitmq,
  SiAmazonaws, SiVercel, SiGoogle,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

const defaultSections = [
  {
    key: "languages",
    title: "Languages",
    accent: "#f5a623",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    key: "frontend",
    title: "Frontend",
    accent: "#a855f7",
    items: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    key: "backend",
    title: "Backend",
    accent: "#38bdf8",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "Socket.IO", "Microservices"],
  },
  {
    key: "databases",
    title: "Databases & ORMs",
    accent: "#34d399",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase", "Prisma", "Upstash (Redis)"],
  },
  {
    key: "devops",
    title: "DevOps",
    accent: "#fb923c",
    items: ["Git", "Docker", "GitHub Actions (CI/CD)", "Linux", "Shell Scripting", "Nginx", "RabbitMQ"],
  },
  {
    key: "cloud",
    title: "Cloud",
    accent: "#22d3ee",
    items: ["AWS EC2", "AWS S3", "AWS ECR / ECS", "AWS RDS", "AWS DynamoDB", "AWS Lambda", "Vercel", "Render"],
  },
  {
    key: "auth",
    title: "Auth & Security",
    accent: "#fb7185",
    items: ["JWT Auth", "NextAuth.js", "Google OAuth", "Bcrypt.js", "Cookie Sessions"],
  },
];

const iconMap = {
  "c++": SiCplusplus, python: SiPython, javascript: SiJavascript,
  typescript: SiTypescript, java: FaJava, html: SiHtml5, css: SiCss3,
  react: SiReact, next: SiNextdotjs, tailwind: SiTailwindcss, redux: SiRedux,
  framer: SiFramer,
  node: SiNodedotjs, express: SiExpress, fastapi: SiFastapi,
  "socket.io": SiSocketdotio,
  mongodb: SiMongodb, postgresql: SiPostgresql, mysql: SiMysql,
  firebase: SiFirebase, prisma: SiPrisma,
  git: SiGit, docker: SiDocker, "github actions": SiGithub, rabbitmq: SiRabbitmq,
  aws: SiAmazonaws, vercel: SiVercel,
  "google oauth": SiGoogle, oauth: SiGoogle,
};

const getIcon = (techName) => {
  const key = techName.toLowerCase().trim();
  if (iconMap[key]) return iconMap[key];
  const found = Object.keys(iconMap).find((k) => key.includes(k));
  return found ? iconMap[found] : HiOutlineCodeBracketSquare;
};

export default function Technologies({ sections }) {
  const data = sections || defaultSections;

  return (
    <>
      <Helmet>
        <title>Technologies & Skills | Nevin Bali</title>
      </Helmet>

      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
            >
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">STACK</span>
            </motion.h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-neutral-400 max-w-2xl mx-auto mb-20 text-sm md:text-base"
          >
            Full-stack SDE building with Next.js, Node.js, PostgreSQL and Docker —
            shipping production Microservices in Node.js, DevOps pipelines and AI-integrated backends.
          </motion.p>

          <style>{`
            .tech-card:hover { border-color: color-mix(in srgb, var(--accent) 40%, transparent); }
          `}</style>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((section, i) => (
              <motion.div
                key={section.key || i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="tech-card group flex flex-col p-8 rounded-[2rem] bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-xl hover:bg-neutral-900/50 transition-all duration-500 shadow-2xl"
                style={{ "--accent": section.accent }}
              >
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span
                    className="w-1.5 h-6 rounded-full"
                    style={{ backgroundColor: section.accent }}
                  />
                  {section.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {section.items.map((tech, idx) => {
                    const Icon = getIcon(tech);
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="flex items-center gap-3 px-4 py-2.5 bg-neutral-800/40 border border-neutral-700/30 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-800/80 transition-all cursor-default"
                      >
                        <Icon
                          className="text-xl transition-colors"
                          style={{ color: section.accent }}
                        />
                        <span className="text-sm md:text-base font-semibold tracking-tight">{tech}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <p className="text-neutral-500 text-sm md:text-base font-medium max-w-2xl mx-auto border-t border-neutral-900 pt-8">
              Currently deep-diving into <span className="text-orange-400">DevOps pipelines</span>,{" "}
              <span className="text-sky-400">cloud architectures on AWS</span>, and{" "}
              <span className="text-pink-400">Node.js microservices</span> for scalable, production-grade systems.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
```

---

### `src/components/Experience.jsx`

```jsx
import { EXPERIENCES } from "../utils";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { FiBriefcase, FiCalendar } from "react-icons/fi";

function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Professional experience of Nevin Bali." />
      </Helmet>

      <section
        id="experience"
        className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] border-b border-neutral-900"
      >
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tight text-white inline-block"
          >
            CAREER <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">MILESTONES</span>
          </motion.h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-purple-500/50 via-neutral-800 to-transparent" />

          <div className="space-y-16">
            {EXPERIENCES.map((experience, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center justify-between w-full ${
                  index % 2 === 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] lg:left-1/2 transform lg:-translate-x-1/2 w-5 h-5 bg-[#0a0a0a] border-4 border-purple-500 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                {/* Date Label (Desktop Only) */}
                <div className="hidden lg:block w-[45%] text-right px-6">
                   <div className={`flex items-center gap-2 text-neutral-500 font-bold uppercase tracking-widest text-sm ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                     {index % 2 !== 0 && <span>{experience.Duration}</span>}
                     <FiCalendar className="text-purple-400" />
                     {index % 2 === 0 && <span>{experience.Duration}</span>}
                   </div>
                </div>

                {/* Experience Card */}
                <div className="w-full lg:w-[45%] bg-neutral-900/40 border border-neutral-800 p-8 rounded-3xl backdrop-blur-sm hover:border-neutral-700 transition-colors shadow-2xl ml-6 lg:ml-0">
                  {/* Mobile Date Label */}
                  <div className="flex lg:hidden items-center gap-2 text-neutral-500 font-bold text-xs mb-4 uppercase tracking-tighter">
                    <FiCalendar className="text-purple-400" /> {experience.Duration}
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
                      <FiBriefcase size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
                        {experience.role}
                      </h3>
                      <p className="text-lg font-medium bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent mt-1">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-neutral-400 leading-relaxed text-sm md:text-base mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neutral-800 text-neutral-400 text-[11px] font-bold uppercase tracking-wider rounded-md border border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
```

---

### `src/components/Projects.jsx`

```jsx
/* eslint-disable react/prop-types */
import { PROJECTS } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { FiGithub, FiSearch, FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { GraduationCap } from "lucide-react";
import { Helmet } from "react-helmet-async";

function ProjectCard({ project, index, expandedIndex, toggleExpand, big }) {
  return (
    <motion.div
      layout
      key={project.title}
      className={`group relative flex flex-col bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300 ${big ? "md:col-span-1" : ""}`}
    >
      <div className={`relative ${big ? "h-56" : "h-52"} overflow-hidden cursor-pointer`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-sky-600/20">
            <GraduationCap className="text-6xl text-purple-300/60" size={56} />
          </div>
        )}

        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
        >
          <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Live Preview <FiExternalLink />
          </div>
        </a>

        {project.featuredTag && (
          <div className="absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/90 text-white shadow-lg">
            {project.featuredTag}
          </div>
        )}

        <div className="absolute top-3 right-3 z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-full text-white hover:text-purple-400 transition-colors block"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`${big ? "text-2xl" : "text-xl"} font-bold text-white mb-2 group-hover:text-purple-400 transition-colors`}>
          {project.title}
        </h3>

        <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => toggleExpand(index)}
          className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto"
        >
          {expandedIndex === index ? <><FiChevronUp /> Show Less</> : <><FiChevronDown /> Details</>}
        </button>

        <AnimatePresence>
          {expandedIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-4 pt-4 border-t border-neutral-800"
            >
              <ul className="text-sm text-neutral-400 space-y-1">
                {project.keyFeatures?.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const isSearching = searchTerm.trim().length > 0;

  const filteredProjects = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return PROJECTS.filter(
      (project) =>
        project.title.toLowerCase().includes(search) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(search))
    );
  }, [searchTerm]);

  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const rest = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

  const toggleExpand = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Projects | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Explore real-world full stack and GenAI projects." />
      </Helmet>

      <section id="projects" className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
            >
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">PROJECTS</span>
            </motion.h2>

            <div className="relative max-w-md mx-auto group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                placeholder="Filter by tech or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-2xl"
              />
            </div>
          </div>

          {isSearching ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => {
                    const globalIndex = PROJECTS.indexOf(project);
                    return (
                      <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
                    );
                  })}
                </AnimatePresence>
              </div>
              {filteredProjects.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                  <p className="text-neutral-500 text-xl font-medium">No projects match your search.</p>
                </motion.div>
              )}
            </>
          ) : (
            <>
              {/* Featured Work */}
              <div className="mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Featured Work</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {featured.map((project) => {
                  const globalIndex = PROJECTS.indexOf(project);
                  return (
                    <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} big />
                  );
                })}
              </div>

              {/* More Projects */}
              <div className="mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-500 rounded-full" />
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">More Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rest.map((project) => {
                  const globalIndex = PROJECTS.indexOf(project);
                  return (
                    <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
```

---

### `src/components/Community.jsx`

```jsx
import { motion } from "framer-motion";
import { OpenSourceContributionsData } from "../utils/index.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Award, Users, Trophy, Flame } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RECOGNITION = [
  { label: "CGPA 9.7 · Rank Holder", sub: "CSE Department", Icon: Award, color: "text-purple-400" },
  { label: "150K+ Dev Community", sub: "75+ mentored, Geek Room MSIT", Icon: Users, color: "text-sky-400" },
  { label: "4x Hackathon mentored", sub: "IIIT Delhi, IGDTUW - Delhi, MSIT - Delhi etc", Icon: Trophy, color: "text-pink-400" },
  { label: "LeetCode 50-Day Streak", sub: "Consistent DSA practice", Icon: Flame, color: "text-orange-400" },
];

function Community() {
  return (
    <>
      <Helmet>
        <title>Community | Nevin Bali – Full Stack Engineer</title>
        <meta name="description" content="Open source contributions, hackathons, and community leadership by Nevin Bali." />
      </Helmet>

      <section
        id="community"
        className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] overflow-hidden border-b border-neutral-900"
      >
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sky-600/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white inline-block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">
                COMMUNITY
              </span>
            </motion.h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-lg">
              Driving impact through code contributions and technical leadership in global developer communities.
            </p>
          </div>

          {/* Recognition strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {RECOGNITION.map(({ label, sub, Icon, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/70 flex flex-col items-center text-center gap-2"
              >
                <Icon className={`text-2xl ${color}`} />
                <span className="text-sm font-bold text-white leading-tight">{label}</span>
                <span className="text-xs text-neutral-500 leading-tight">{sub}</span>
              </motion.div>
            ))}
          </div>

          {/* Contributions List */}
          <div className="space-y-32">
            {OpenSourceContributionsData.map((contribution, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                    <img
                      src={contribution.image}
                      alt={contribution.company}
                      className="w-full h-auto md:h-[300px] object-contain object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Visit Live <FaExternalLinkAlt size={14} />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase rounded-full border border-purple-500/20">
                        {contribution.role}
                      </span>
                      {contribution.repo && (
                        <a
                          href={contribution.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {contribution.company}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {contribution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {contribution.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-lg hover:border-purple-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
```

---

### `src/components/Connect.jsx`

```jsx
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
"use client";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin, FaGithub, FaEnvelope, FaUser, FaEnvelopeOpenText,
  FaGithubAlt, FaLink, FaPaperPlane, FaCheckCircle, FaTimesCircle,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { Code2, Rss, Newspaper, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";

const EMAILJS_SERVICE_ID = "service_nosk5as";
const EMAILJS_TEMPLATE_ID = "template_aeuohlj";
const EMAILJS_PUBLIC_KEY = "Cbd9cT9wFkGdasJv1";

const PROFILES = [
  { name: "GitHub", tag: "Connect", handle: "@Nevin100", glimpse: "98+ public repos · open source", href: "https://github.com/Nevin100", Icon: FaGithub, color: "hover:text-zinc-200 hover:border-zinc-500/50" },
  { name: "LinkedIn", tag: "Connect", handle: "@nevinbali1012", glimpse: "Full-stack SDE · open to opportunities", href: "https://linkedin.com/in/nevinbali1012", Icon: FaLinkedin, color: "hover:text-blue-400 hover:border-blue-400/50" },
  { name: "LeetCode", tag: "Practice", handle: "@Nevin_100", glimpse: "50-day streak · Arrays, Strings, DP", href: "https://leetcode.com/u/Nevin_100/", Icon: SiLeetcode, color: "hover:text-orange-400 hover:border-orange-400/50" },
  { name: "HackerRank", tag: "Practice", handle: "@Nevin-Bali100", glimpse: "Problem-solving badges", href: "https://www.hackerrank.com/profile/opopopopop100000", Icon: SiHackerrank, color: "hover:text-emerald-400 hover:border-emerald-400/50" },
  { name: "NeetCode", tag: "Practice", handle: "@Nevin-Bali100", glimpse: "Structured DSA practice", href: "https://neetcode.io/practice", Icon: Code2, color: "hover:text-yellow-400 hover:border-yellow-400/50" },
  { name: "dev.to", tag: "Writing", handle: "@Nevin-Bali100", glimpse: "devdocxai series", href: "https://dev.to/nevin100", Icon: Rss, color: "hover:text-zinc-200 hover:border-zinc-500/50" },
  { name: "daily.dev", tag: "Writing", handle: "@nevinbali100", glimpse: "devdocxai series", href: "https://daily.dev/nevinbali100", Icon: Newspaper, color: "hover:text-violet-400 hover:border-violet-400/50" },
  { name: "Hashnode", tag: "Writing", handle: "@nevinbali100", glimpse: "devdocxai series", href: "https://nevinbali.hashnode.dev/", Icon: BookOpen, color: "hover:text-sky-400 hover:border-sky-400/50" },
  { name: "Email", tag: "Connect", handle: "nevinbali10@gmail.com", glimpse: "Direct message, fastest reply", href: "mailto:nevinbali10@gmail.com", Icon: FaEnvelope, color: "hover:text-red-400 hover:border-red-400/50" },
];

const TAG_COLOR = { Connect: "text-purple-400 bg-purple-500/10", Practice: "text-orange-400 bg-orange-500/10", Writing: "text-sky-400 bg-sky-500/10" };

const INITIAL_FORM = { name: "", email: "", message: "", github: "", meeting: "" };
const INITIAL_ERRORS = { name: "", email: "", message: "" };

export default function Connect() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [status, setStatus] = useState("idle");
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const cardRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({ x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;
    if (!form.name.trim()) { newErrors.name = "Name is required."; valid = false; }
    if (!form.email.trim()) { newErrors.email = "Email is required."; valid = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { newErrors.email = "Enter a valid email."; valid = false; }
    if (!form.message.trim()) { newErrors.message = "Message cannot be empty."; valid = false; }
    else if (form.message.trim().length < 10) { newErrors.message = "Message is too short (min 10 chars)."; valid = false; }
    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      time: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      github_id: form.github || "Not provided",
      meeting_link: form.meeting || "Not provided",
    };
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setForm(INITIAL_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Connect | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Find Nevin Bali on GitHub, LinkedIn, LeetCode, HackerRank, and the devdocxai writing series, or send a direct message." />
      </Helmet>

      <section className="relative w-full py-24 px-4 md:px-8 lg:px-2 bg-transparent min-h-[800px]">
        {/* Ambient blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />
          <div className="absolute bottom-16 right-8 w-96 h-96 rounded-full bg-pink-500/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 mb-3">Find me anywhere</p>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-none tracking-tight">
              Let&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <div className="mt-6 h-px bg-gradient-to-r from-purple-500/50 via-pink-500/30 to-transparent" />
          </div>

          {/* Social Profiles Grid */}
          <div className="relative rounded-2xl border border-zinc-800/60 overflow-hidden mb-10">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
            <div className="p-6 md:p-10 bg-zinc-900/40 backdrop-blur-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PROFILES.map(({ name, tag, handle, glimpse, href, Icon, color }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex items-start gap-4 p-5 rounded-xl border border-zinc-800/70 bg-zinc-950/40 text-zinc-300 transition-all duration-200 hover:-translate-y-1 hover:bg-zinc-900/60 ${color}`}
                  >
                    <span className={`absolute top-3 right-3 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full ${TAG_COLOR[tag]}`}>
                      {tag}
                    </span>
                    <Icon className="text-2xl shrink-0 mt-0.5" />
                    <span className="flex flex-col leading-tight pr-10">
                      <span className="text-base font-bold text-white">{name}</span>
                      <span className="text-xs text-zinc-500 mt-0.5">{handle}</span>
                      <span className="text-xs text-zinc-400 mt-2 group-hover:text-zinc-300">{glimpse}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
          </div>

          {/* Contact Form */}
          <div
            ref={cardRef}
            className="relative rounded-2xl border border-zinc-800/60 overflow-hidden"
            style={{
              background: `radial-gradient(ellipse at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(192,132,252,0.07) 0%, rgba(236,72,153,0.04) 40%, rgba(24,24,27,0.95) 70%)`,
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            <div className="p-8 md:p-10">
              {status === "success" && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-400 text-sm font-medium">
                  <FaCheckCircle className="shrink-0 text-lg" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-400 text-sm font-medium">
                  <FaTimesCircle className="shrink-0 text-lg" />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Field id="name" label="Your Name" type="text" icon={<FaUser />} value={form.name} onChange={handleChange} error={errors.name} required />
                  <Field id="email" label="Your Email" type="email" icon={<FaEnvelopeOpenText />} value={form.email} onChange={handleChange} error={errors.email} required />
                  <div className="md:col-span-2">
                    <Field id="message" label="Your Message" type="textarea" value={form.message} onChange={handleChange} error={errors.message} required rows={5} />
                  </div>
                  <Field id="github" label="GitHub ID (optional)" type="text" icon={<FaGithubAlt />} value={form.github} onChange={handleChange} />
                  <Field id="meeting" label="Meeting Link (optional)" type="url" icon={<FaLink />} value={form.meeting} onChange={handleChange} />
                  <div className="md:col-span-2 mt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-sky-600 py-4 font-semibold text-white text-sm tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                      <span className="relative flex items-center justify-center gap-2.5">
                        {status === "loading" ? (
                          <>
                            <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-400/40 to-transparent" />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, type = "text", icon, value, onChange, error, required, rows = 5 }) {
  const baseInput =
    "peer w-full rounded-xl border bg-zinc-900/60 text-white text-sm transition-all duration-200 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 " +
    (error ? "border-red-500/60 focus:ring-red-500/40" : "border-zinc-800 hover:border-zinc-700");

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea id={id} rows={rows} placeholder=" " value={value} onChange={onChange} className={`${baseInput} py-4 px-4 resize-none`} />
      ) : (
        <input type={type} id={id} placeholder=" " value={value} onChange={onChange} className={`${baseInput} py-4 ${icon ? "pl-11 pr-4" : "px-4"}`} />
      )}
      <label
        htmlFor={id}
        className={`absolute text-sm transition-all duration-200 select-none pointer-events-none text-zinc-400
          ${type === "textarea" ? "left-4" : icon ? "left-11" : "left-4"}
          top-4 peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500
          peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-purple-400
          peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[10px] peer-not-placeholder-shown:text-zinc-400`}
      >
        {label}{required && <span className="text-pink-400 ml-0.5">*</span>}
      </label>
      {icon && type !== "textarea" && <span className="absolute left-4 top-4 text-zinc-500 text-sm pointer-events-none">{icon}</span>}
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <FaTimesCircle className="text-[10px]" />
          {error}
        </p>
      )}
    </div>
  );
}
```

---

### `src/components/Activities.jsx`
> ⚠️ Legacy component — now redirects to `Community.jsx` via `/activities` route

```jsx
import { motion } from "framer-motion";
import { OpenSourceContributionsData } from "../utils/index.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

function Activities() {
  return (
    <>
      <Helmet>
        <title>Contributions | Nevin Bali – Full Stack Engineer</title>
        <meta name="description" content="Explore open source and community contributions by Nevin Bali." />
      </Helmet>

      <section
        id="open-source"
        className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] overflow-hidden border-b border-neutral-900"
      >
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sky-600/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-24 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white inline-block"
            >
              OPEN SOURCE <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">
                & COMMUNITY
              </span>
            </motion.h2>
            <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-lg">
              Driving impact through code contributions and technical leadership in global developer communities.
            </p>
          </div>

          <div className="space-y-32">
            {OpenSourceContributionsData.map((contribution, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                    <img
                      src={contribution.image}
                      alt={contribution.company}
                      className="w-full h-auto md:h-[300px] object-contain object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Visit Live <FaExternalLinkAlt size={14} />
                      </div>
                    </a>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-widest uppercase rounded-full border border-purple-500/20">
                        {contribution.role}
                      </span>
                      {contribution.repo && (
                        <a
                          href={contribution.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors"
                          title="View Repository"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                      {contribution.company}
                    </h3>
                  </div>

                  <p className="text-neutral-400 text-lg leading-relaxed">
                    {contribution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {contribution.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-neutral-900 border border-neutral-800 text-neutral-300 text-sm font-medium rounded-lg hover:border-purple-500/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;
```

---

## 🧰 Utils (`src/utils/`)

### `src/utils/Loader.jsx`

```jsx
import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-neutral-950">
      <div className="flex flex-col items-center gap-5">
        {/* Animated line */}
        <motion.div
          className="h-[2px] w-28 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ transformOrigin: "left" }}
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-xs sm:text-sm tracking-[0.35em] text-neutral-400 uppercase text-center"
        >
          Nevin Bali
        </motion.p>
      </div>
    </div>
  );
}

export default Loader;
```

---

### `src/utils/index.js`
> Central data store — exports `HERO_CONTENT`, `EXPERIENCES`, `PROJECTS`, `OpenSourceContributionsData`, `CONTACT`

```javascript
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";
import project5 from "../assets/projects/5.png";
import project6 from "../assets/projects/6.png";
import project61 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/7.png";
import project9 from "../assets/projects/sparkImage.jpg";
import project10 from "../assets/projects/9.png";
import project11 from "../assets/projects/project11.jpg";
import project12 from "../assets/projects/project12.jpg";
import project13 from "../assets/projects/project13.png";

import image1 from "../assets/Open/image1.jpg";
import image2 from "../assets/Open/image-2.jpg";
import image3 from "../assets/Open/image-3.jpg";
import image4 from "../assets/Open/image-4.jpg";
import image5 from "../assets/Open/image-5.jpg";

import depInspectorImg from "../assets/dep-inspector.jpg";

export const HERO_CONTENT = `Full Stack Software Engineer with hands-on experience building scalable, production-ready web applications using modern JavaScript frameworks and cloud-native tools. I specialize in React, Next.js, TypeScript, and Tailwind CSS on the frontend, and Node.js, Express, MongoDB, PostgreSQL, and FastAPI on the backend. I have worked on real-world MVPs involving secure authentication, REST APIs, third-party integrations, and data-driven dashboards, while actively exploring GenAI, Cloud, and DevOps workflows to deliver reliable, high-performance systems.`;

export const EXPERIENCES = [
  {
    Duration: "Aug 2025 – Mar 2026",
    role: "Full Stack Web Developer Intern",
    company: "Square Education Pvt. Ltd.",
    description:
      "Owning and developing the company's primary production MVP as a full-stack engineer. Building scalable, secure, and high-performance web applications using modern frontend, backend, and cloud-native technologies in a real production environment.",
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    Tasks:
      "Led end-to-end development of the production codebase, including frontend architecture, backend APIs, authentication flows, and database design. Integrated PayU payment gateway, implemented JWT-based admin dashboards, and managed cloud deployment, infrastructure, and live user data in a remote, production setting.",
  },
  {
    Duration: "Mar 2025 – Apr 2025",
    role: "Full Stack Web Developer Intern",
    company: "Financea",
    description:
      "Worked in a fast-paced remote startup environment to design and build the core MVP of a data-driven financial platform, focusing on performance, scalability, and clean system architecture.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "React 19"],
    Tasks:
      "Developed full-stack features, implemented dynamic dashboards, and contributed to the overall product architecture. Collaborated closely with the team to deliver scalable, production-ready features within tight timelines.",
  },
  {
    Duration: "Feb 2025 – Present",
    role: "Deputy Head of Development",
    company: "Geek Room – MSIT",
    description:
      "Leading development initiatives for a large-scale technical community, focusing on mentoring, project execution, and strengthening full-stack engineering practices among members.",
    technologies: ["React.js", "Node.js", "Tailwind CSS", "MongoDB"],
    Tasks:
      "Mentoring and leading 50+ developers, overseeing technical projects, organizing development-focused events, and driving hands-on learning through real-world full-stack applications and collaborative initiatives.",
  },
  {
    Duration: "Oct 2024 – Present",
    role: "Deputy Head of Development",
    company: "GDGOC – MSIT",
    description:
      "Driving technical growth and development initiatives within a Google-backed developer community by leading teams, managing projects, and organizing large-scale technical events and campaigns.",
    technologies: ["Department Leadership", "Team Management", "Full Stack Development"],
    Tasks:
      "Supervised development teams, managed departmental operations, and played a key role in organizing workshops, hackathons, and community-driven projects aimed at upskilling students in modern software engineering practices.",
  },
];

export const PROJECTS = [
  {
    title: "dep-inspector-cli – Node.js Dependency Analysis CLI",
    image: depInspectorImg,
    github: "https://github.com/Nevin100/Dep-inspector-nevin",
    link: "https://www.npmjs.com/package/dep-inspector-cli",
    featured: true,
    featuredTag: "DevOps NPM Package",
    description:
      "An open-source CLI tool published on npm that goes beyond npm audit — traces the exact dependency chain that pulled in a vulnerability, with optional AI-powered insights via Groq."
        .padEnd(140, " "),
    technologies: ["TypeScript", "Node.js", "Commander.js", "LangChain", "Groq API", "Chalk", "Semver"],
    keyFeatures: [
      "Traces full chain: root → pkg → sub-pkg → vulnerable-dep",
      "Vulnerability scan with severity levels and version delta",
      "Visual dependency tree with outdated version highlights",
      "Optional AI analysis via Groq (--ai flag)",
      "JSON output for CI/CD pipeline integration",
      "240+ weekly downloads on npm",
    ],
    learnings: [
      "Published and maintained a production npm package",
      "Built a TypeScript CLI with Commander.js and Chalk",
      "Integrated LangChain + Groq for AI-powered dependency insights",
      "Designed machine-readable JSON output for CI/CD pipelines",
    ],
  },
  {
    title: "Invoicer v1 – Invoice & Finance Management Platform",
    image: project13,
    github: "https://github.com/Nevin100/Invoicer-v1",
    link: "https://invoicer.nevinbali.me/",
    featured: true,
    featuredTag: "Production SaaS",
    description:
      "Invoicer v1 is a modern, full-stack invoice and finance management platform designed for freelancers and small businesses to manage invoices, expenses, payments, clients, and financial analytics from a single, responsive platform.",
    technologies: ["Next.js (App Router)", "React", "TypeScript", "MongoDB", "Mongoose", "JWT", "Tailwind CSS", "Recharts", "Redux Toolkit", "Razorpay", "ExcelJS", "Tavily API", "Groq"],
    keyFeatures: [
      "Invoice lifecycle management with client-linked invoices",
      "Expense tracking with category-wise analytics & insights",
      "Interactive financial analytics dashboard (monthly & yearly)",
      "Secure online payments using Razorpay integration",
      "Export expenses & financial data to Excel for reporting",
      "Fully responsive dashboard with sidebar navigation",
      "AI Evaluations and insights for financial data using Tavily API & Groq",
    ],
    learnings: [
      "Designed and built a monolithic full-stack architecture using Next.js",
      "Implemented Cookie based authentication with secure API routes.",
      "Integrated Razorpay payment flow into invoice lifecycle",
      "Built real-time financial analytics using aggregated MongoDB data",
    ],
  },
  // ... (additional projects follow same structure)
];

export const OpenSourceContributionsData = [
  {
    image: depInspectorImg,
    role: "Author & Maintainer",
    company: "dep-inspector-cli (npm)",
    repo: "https://github.com/Nevin100/Dep-inspector-nevin",
    description:
      "Built and published an open-source CLI tool on npm for analyzing Node.js project dependencies. Traces the exact dependency chain that pulled in a vulnerable package, with AI-powered insights via Groq, JSON output for CI/CD pipelines, and 240+ weekly downloads.",
    technologies: ["TypeScript", "Node.js", "Commander.js", "LangChain", "Groq API", "npm Registry"],
    link: "https://www.npmjs.com/package/dep-inspector-cli",
  },
  {
    image: image4,
    role: "Frontend Developer",
    company: "Code Kshetra 2.0 (MLH Hackathon)",
    repo: "https://github.com/Nevin100/CodeKshetra2.0",
    description:
      "Contributed to the official MLH-backed hackathon website by developing scalable and visually engaging frontend components.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "UI Animations", "Responsive Design"],
    link: "https://code-kshetra2-0.vercel.app/#/",
  },
  // ... (additional contributions follow same structure)
];

export const CONTACT = {
  address: "Sector 8, Dwarka, New Delhi – 110077, India",
  email1: "opopopopop100000@gmail.com",
  email2: "nevinbali10@gmail.com",
};
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | DOM rendering |
| `react-router-dom` | ^7.6.2 | Client-side routing |
| `framer-motion` | ^11.3.19 | Animations |
| `react-icons` | ^5.2.1 | Icon sets |
| `lucide-react` | ^0.518.0 | Icon library |
| `@emailjs/browser` | ^4.4.1 | Contact form emails |
| `react-helmet-async` | ^2.0.5 | SEO meta tags |
| `tailwindcss` | ^3.4.7 | Utility CSS |
| `vite` | ^7.3.1 | Build tool |

---

## 🌐 Routes

| Route | Component | Description |
|---|---|---|
| `/` | `Hero` | Landing page |
| `/about` | `About` | About section |
| `/technologies` | `Technologies` | Tech stack showcase |
| `/experience` | `Experience` | Career timeline |
| `/community` | `Community` | Open source & community work |
| `/activities` | `Community` | Legacy redirect |
| `/projects` | `Projects` | Projects with search |
| `/connect` | `Connect` | Contact form + social links |
| `/contacts` | `Connect` | Legacy redirect |
| `/*` | `Hero` | 404 fallback |

---

> **Built with ❤️ by [Nevin Bali](https://github.com/Nevin100)**
