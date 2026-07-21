import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";

const terminalWords = ["Code", "Build", "Ship", "Scale", "Deploy", "Engineer"];

const navItems = [
  "About",
  "Technologies",
  "Experience",
  "Community",
  "Projects",
  "Connect",
];

const socialIcons = [
  {
    href: "https://www.linkedin.com/in/nevinbali1012/",
    label: "LinkedIn",
    icon: <FaLinkedin />,
    color: "hover:text-blue-400",
  },
  {
    href: "https://github.com/Nevin100",
    label: "GitHub",
    icon: <FaGithub />,
    color: "hover:text-base-content",
  },
  {
    href: "mailto:nevinbali10@mail.com",
    label: "Email",
    icon: <FaEnvelope />,
    color: "hover:text-red-400",
  },
];

function Navbar() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % terminalWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 md:px-8 py-5 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 
          bg-base-200/40 backdrop-blur-xl border border-base-content/10 
          ${
            scrolled
              ? "shadow-[0_10px_30px_-10px_hsl(var(--s)/0.3),0_10px_30px_-10px_hsl(var(--p)/0.3)] border-primary/20"
              : "shadow-none"
          }`}
        role="navigation"
      >
        <Link to="/" className="group flex items-center">
          <div className="leading-none">
            <div className="flex items-center text-xl md:text-2xl font-black italic font-mono">
              <span className="text-primary">@</span>

              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                NevinBali
              </span>

              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="text-primary text-2xl md:text-3xl italic font-mono ml-1"
              >
                _
              </motion.span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={terminalWords[index]}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35 }}
                className="text-[10px] md:text-md uppercase tracking-[0.35em] text-base-300 font-bold ml-1 mt-1"
              >
                {terminalWords[index]}
              </motion.div>
            </AnimatePresence>
          </div>
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
                    className={`transition-colors duration-300 ${isActive ? "text-primary" : "text-base-content/70 hover:text-base-content"}`}
                  >
                    {item}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="h-5 w-[1px] bg-base-content/10 mx-2" />
          <ThemeSwitcher />
          <div className="flex gap-4">
            {socialIcons.map(({ href, label, icon, color }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl text-base-content/60 transition-colors ${color}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-2xl text-primary"
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
            className="lg:hidden absolute inset-x-4 mt-3 p-8 bg-base-100/95 backdrop-blur-2xl border border-base-content/10 rounded-2xl shadow-2xl"
          >
            <div className="flex flex-col items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold uppercase tracking-widest ${pathname === `/${item.toLowerCase()}` ? "text-primary" : "text-base-content/70"}`}
                >
                  {item}
                </Link>
              ))}
              <div className="flex gap-8 text-2xl mt-4">
                {socialIcons.map(({ href, label, icon, color }) => (
                  <a key={label} href={href} className={color}>
                    {icon}
                  </a>
                ))}
              </div>
              <div className="mt-2">
                <ThemeSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
