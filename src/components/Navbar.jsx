import { useState, useEffect } from "react";
import logo from "../assets/NevinLogo.png";
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["About", "Technologies", "Experience", "Activities", "Projects"];

const socialIcons = [
  { href: "https://www.linkedin.com/in/nevinbali1012/", label: "LinkedIn", icon: <FaLinkedin />, color: "hover:text-blue-400" },
  { href: "https://github.com/Nevin100", label: "GitHub", icon: <FaGithub />, color: "hover:text-gray-300" },
  { href: "mailto:nevinbali10@mail.com", label: "Email", icon: <FaEnvelope />, color: "hover:text-red-400" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Scroll detection for the shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-[100] px-4 md:px-8 py-5 transition-all duration-300">
      <nav
        className={`mx-auto max-w-7xl flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 
          /* PERMANENT GLASS LOOK */
          bg-neutral-900/40 backdrop-blur-xl border border-white/10 
          /* DYNAMIC PINK-VIOLET GLOW ON SCROLL */
          ${scrolled 
            ? "shadow-[0_10px_30px_-10px_rgba(236,72,153,0.3),0_10px_30px_-10px_rgba(168,85,247,0.3)] border-purple-500/20" 
            : "shadow-none"
          }`}
        role="navigation"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <motion.img
            whileHover={{ scale: 1.1, rotate: 5 }}
            src={logo}
            alt="Nevin Logo"
            className="w-10 md:w-12 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[13px] font-bold uppercase tracking-[0.15em]">
            {navItems.map((item) => {
              const path = `/${item.toLowerCase()}`;
              const isActive = pathname === path;
              return (
                <li key={item} className="relative">
                  <Link
                    to={path}
                    className={`transition-colors duration-300 ${
                      isActive ? "text-purple-400" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {item}
                  </Link>
                  {/* Underline for active link */}
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

          {/* Socials */}
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

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-2xl text-purple-400"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </nav>

      {/* Mobile Menu Overlay */}
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
                  className={`text-lg font-bold uppercase tracking-widest ${
                    pathname === `/${item.toLowerCase()}` ? "text-purple-400" : "text-neutral-300"
                  }`}
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