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
  { label: "GitHub", value: "@Nevin100", Icon: FaGithub, color: "text-base-content/70" },
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
        className="relative min-h-screen py-24 overflow-hidden bg-base-100"
      >
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{ backgroundImage: `radial-gradient(hsl(var(--bc) / 0.4) 1px, transparent 1px)`, backgroundSize: '32px 32px' }}
        />

        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full" />

        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group rounded-[2.5rem] border border-base-content/10 bg-base-200/20 backdrop-blur-2xl p-8 md:p-16 overflow-hidden shadow-2xl shadow-primary/5"
          >
            <div
              className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--p) / 0.15), transparent 40%)`
              }}
            />

            <div className="relative mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[1px] w-12 bg-primary" />
                <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">The Story So Far</span>
              </motion.div>

              <h2 className="text-5xl md:text-8xl font-black text-base-content tracking-tighter mb-6">
                ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">ME.</span>
              </h2>

              <div className="flex flex-wrap gap-4 text-base-content/50 font-medium">
                <span className="flex items-center gap-2"><Code2 size={16} className="text-primary" /> Full Stack</span>
                <span className="flex items-center gap-2"><Sparkles size={16} className="text-secondary" /> GenAI Specialist</span>
                <span className="w-1.5 h-1.5 rounded-full bg-base-content/20 self-center" />
                <span>SaaS Builder</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-[1.5fr,1fr] gap-16">
              <div className="space-y-8 text-lg text-base-content/70 leading-relaxed font-medium">
                <p className="first-letter:text-5xl first-letter:font-black first-letter:text-base-content first-letter:mr-3 first-letter:float-left">
                  I&apos;m <strong className="text-base-content">Nevin Bali</strong>, a Software Engineer who thrives at the intersection of complex code and seamless user experiences.
                  Specializing in <strong>Next.js, TypeScript, and FastAPI</strong>, I build systems that aren&apos;t just functional, but scalable for real-world traffic.
                </p>

                <p>
                  As an <strong className="text-primary">SDE Intern</strong>, I&apos;ve had the privilege of owning entire production lifecycles.
                  From architecting admin dashboards to integrating secure payment gateways, I focus on building infrastructure that stands the test of live environments.
                </p>

                <p>
                  My recent obsession? <strong className="text-secondary">GenAI</strong>. I&apos;ve been shipping products powered by
                  <strong> Groq (Llama v3)</strong>, bridging the gap between raw LLM capabilities and practical, automated tools for modern businesses.
                </p>

                <div className="pt-2">
                  <Link
                    to="https://drive.google.com/file/d/1rOcRvvVAzD3ijvVV9Erhy9030TwhFNzy/view?usp=sharing"
                    target="_blank"
                    className="group flex items-center justify-center gap-3 w-full bg-base-content text-base-100 py-4 rounded-2xl font-bold transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-primary-content"
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
                  className="p-6 rounded-3xl bg-base-content/5 border border-base-content/5 flex items-start gap-5"
                >
                  <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-base-content font-bold text-lg">Education</h4>
                    <p className="text-base-content/60 text-sm leading-snug mt-1">
                      B.Tech – Computer Science<br />
                      MSIT, New Delhi (2023–2027) · CGPA 9.7
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-3xl bg-base-content/5 border border-base-content/5 flex items-start gap-5"
                >
                  <div className="p-3 rounded-2xl bg-secondary/10 text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-base-content font-bold text-lg">Location</h4>
                    <p className="text-base-content/60 text-sm mt-1">
                      New Delhi, India<br />
                      Remote • Full-time • Freelance
                    </p>
                  </div>
                </motion.div>

                {/* Proof of Work */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-3xl bg-base-content/5 border border-base-content/5"
                >
                  <div className="flex items-start gap-5 mb-4">
                    <div className="p-3 rounded-2xl bg-accent/10 text-accent">
                      <Code2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-base-content font-bold text-lg">Proof of Work</h4>
                      <p className="text-base-content/60 text-sm mt-1">Consistency across code &amp; practice</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {PROOF_STATS.map(({ label, value, Icon, color }) => (
                      <div key={label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-base-300/40 border border-base-content/5">
                        <Icon className={`text-lg shrink-0 ${color}`} />
                        <span className="flex flex-col leading-tight">
                          <span className="text-[11px] text-base-content/40">{label}</span>
                          <span className="text-xs font-semibold text-base-content/80">{value}</span>
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