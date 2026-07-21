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

// Per-section accent colors kept as hex — these are deliberate category-differentiation
// colors (Languages/Frontend/Backend/etc), not theme accents. Mapping them to daisyUI
// primary/secondary/accent would collapse all 7 sections into 2-3 repeated colors and
// lose the visual distinction that's the whole point of this design.
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

      <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-base-100 overflow-hidden">
        {/* Ambient background gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-base-content mb-6"
            >
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">STACK</span>
            </motion.h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-base-content/60 max-w-2xl mx-auto mb-20 text-sm md:text-base"
          >
            Full-stack SDE building with Next.js, Node.js, PostgreSQL and Docker —
            shipping production Microservices in Node.js, DevOps pipelines and AI-integrated backends.
          </motion.p>

          {/* Skills grid */}
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
                className="tech-card group flex flex-col p-8 rounded-[2rem] bg-base-200/30 border border-base-content/10 backdrop-blur-xl hover:bg-base-200/50 transition-all duration-500 shadow-2xl"
                style={{ "--accent": section.accent }}
              >
                {/* Section title */}
                <h3 className="text-xl font-bold text-base-content mb-8 flex items-center gap-3">
                  <span
                    className="w-1.5 h-6 rounded-full"
                    style={{ backgroundColor: section.accent }}
                  />
                  {section.title}
                </h3>

                {/* Tech items */}
                <div className="flex flex-wrap gap-3">
                  {section.items.map((tech, idx) => {
                    const Icon = getIcon(tech);
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="flex items-center gap-3 px-4 py-2.5 bg-base-300/40 border border-base-content/10 rounded-2xl text-base-content/80 hover:text-base-content hover:bg-base-300/70 transition-all cursor-default"
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

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <p className="text-base-content/50 text-sm md:text-base font-medium max-w-2xl mx-auto border-t border-base-content/10 pt-8">
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