import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSwatch } from "react-icons/hi2";
import useThemeStore from "../store/useThemeStore";

const THEMES = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween",
  "garden", "forest", "aqua", "lofi", "pastel", "fantasy",
  "wireframe", "black", "luxury", "dracula", "cmyk", "autumn",
  "business", "acid", "lemonade", "night", "coffee", "winter",
  "dim", "nord", "sunset", "caramellatte", "abyss",
];

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl border border-base-content/10 bg-base-200/40 text-base-content text-xs font-bold uppercase tracking-wide hover:border-primary/40 transition-colors"
      >
        <HiOutlineSwatch className="text-base" />
        <span className="hidden md:inline">{theme}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-2xl border border-base-content/10 bg-base-100/95 backdrop-blur-xl shadow-2xl p-2 z-[200]"
          >
            {THEMES.map((t) => (
              <button
                key={t}
                data-theme={t}
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-colors bg-base-100 hover:bg-base-200 ${
                  theme === t ? "ring-2 ring-primary" : ""
                }`}
              >
                <span className="flex gap-0.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-base-content">{t}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ThemeSwitcher;