/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { ExternalLink, GraduationCap, MapPin, Code2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";

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
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-20" 
             style={{ backgroundImage: `radial-gradient(#27272a 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />
        
        {/* Floating Ambient Glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-[2.5rem] border border-white/5 bg-zinc-900/20 backdrop-blur-2xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-purple-500/5"
          >
            {/* Dynamic Spotlight Effect */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.15), transparent 40%)`
              }}
            />

            {/* Header */}
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

            {/* Content Body */}
            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16">
              <div className="space-y-8 text-lg text-zinc-400 leading-relaxed font-medium">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-3 first-letter:float-left">
                  I’m <strong className="text-white">Nevin Bali</strong>, a Software Engineer who thrives at the intersection of complex code and seamless user experiences. 
                  Specializing in <strong>Next.js, TypeScript, and FastAPI</strong>, I build systems that aren&apos;t just functional, but scalable for real-world traffic.
                </p>

                <p>
                  As an <strong className="text-purple-400">SDE Intern</strong>, I’ve had the privilege of owning entire production lifecycles. 
                  From architecting admin dashboards to integrating secure payment gateways, I focus on building infrastructure that stands the test of live environments.
                </p>

                <p>
                  My recent obsession? <strong className="text-sky-400">GenAI</strong>. I’ve been shipping products powered by 
                  <strong> Groq (Llama v3)</strong>, bridging the gap between raw LLM capabilities and practical, automated tools for modern businesses.
                </p>
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
                      MSIT, New Delhi (2023–2027)
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

                <div className="pt-6">
                  <Link
                    to="https://drive.google.com/file/d/1b6JlVv2VSWQwjyOtI8-EnSZTB7rQQ0yz/view"
                    target="_blank"
                    className="group flex items-center justify-center gap-3 w-full bg-white text-black py-4 rounded-2xl font-bold transition-all hover:bg-gradient-to-r hover:from-purple-400 hover:to-sky-400 hover:text-white"
                  >
                    View Full Resume
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}