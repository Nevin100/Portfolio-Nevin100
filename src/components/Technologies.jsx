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

// Note: a few resume items (SQLite, Upstash, Render, Linux, Nginx, Shell,
// JWT, NextAuth, Bcrypt, Cookie Sessions, Microservices, REST APIs) don't
// have a guaranteed Simple-Icons logo in every react-icons version, so they
// intentionally fall back to a neutral code-bracket glyph below.

// ─── Section blueprint, straight off Nevin's resume "Technical Skills" ───
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
        {/* Ambient background gradients */}
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
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
                className="tech-card group flex flex-col p-8 rounded-[2rem] bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-xl hover:bg-neutral-900/50 transition-all duration-500 shadow-2xl"
                style={{ "--accent": section.accent }}
              >
                {/* Section title */}
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
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

          {/* Footer note */}
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

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";

// import {
//   SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss3,
//   SiReact, SiNextdotjs, SiRedux, SiTailwindcss, SiFramer, SiNodedotjs,
//   SiExpress, SiFastapi, SiMongodb, SiPostgresql, SiPrisma, SiMysql,
//   SiSupabase, SiFirebase, SiDocker, SiPostman, SiGithub, SiPowerbi,
//   SiAmazonaws, SiGooglecloud, SiKubernetes, SiGit, SiBootstrap,
//   SiNestjs, SiAppwrite, SiApachekafka, SiVercel, SiSocketdotio, SiClerk, SiRabbitmq
// } from "react-icons/si";
// import { DiMysql } from "react-icons/di";
// import { FaJava } from "react-icons/fa";
// import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

// export default function Technologies({ sections }) {
//   // POORA DATA EXACTLY WAHI HAI JO TUMNE DIYA THA
//   const defaultSections = sections || [
//     {
//       title: "Languages",
//       items: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++", "HTML", "CSS", "PHP"],
//     },
//     {
//       title: "Frontend",
//       items: ["React.js", "Next.js", "Bootstrap", "Zustand", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "ShadCN UI"],
//     },
//     {
//       title: "Backend",
//       items: ["Node.js", "Express.js", "FastAPI", "SQLAlchemy", "MongoDB", "PostgreSQL", "Prisma", "Mongoose ODM", "NestJS", "Hono.js", "Supabase Services", "REST APIs"],
//     },
//     {
//       title: "Databases",
//       items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "MySQL"],
//     },
//     {
//       title: "Developer Tools & Extras",
//       items: ["Git/GitHub", "Docker", "Postman", "Thunder Client", "Power BI"],
//     },
//     {
//       title: "Working On",
//       items: ["DevOps", "Cloud (AWS)", "CI/CD", "Scalable Architectures", "Microservices", "Kafka", "MonoRepo Patterns"],
//     },
//     {
//       title: "Authentication & Security",
//       items: ["JWT Authentication", "Firebase Authentication", "NextAuth.js", "Clerk Authentication", "Stack Auth"],
//     },
//     {
//       title: "Deployment & Hosting Platforms",
//       items: ["Vercel", "Render", "AWS", "Docker", "CI/CD (GitHub Actions)"],
//     },
//     {
//       title: "Backend Services & Messaging",
//       items: ["REST APIs", "Socket.IO", "RabbitMQ", "Microservices", "Scalable Architectures"],
//     },
//   ];

//   const data = sections || defaultSections;

//   const iconMap = {
//     javascript: SiJavascript, typescript: SiTypescript, python: SiPython, java: FaJava,
//     "c++": SiCplusplus, html: SiHtml5, css: SiCss3, react: SiReact, next: SiNextdotjs,
//     redux: SiRedux, tailwind: SiTailwindcss, framer: SiFramer, node: SiNodedotjs,
//     express: SiExpress, fastapi: SiFastapi, mongodb: SiMongodb, mongoose: SiMongodb,
//     postgresql: SiPostgresql, prisma: SiPrisma, mysql: SiMysql, neon: SiPostgresql,
//     supabase: SiSupabase, firebase: SiFirebase, docker: SiDocker, postman: SiPostman,
//     "thunder client": SiPostman, github: SiGithub, git: SiGit, "power bi": SiPowerbi,
//     aws: SiAmazonaws, gcp: SiGooglecloud, googlecloud: SiGooglecloud, kubernetes: SiKubernetes,
//     bootstrap: SiBootstrap, nest: SiNestjs, nestjs: SiNestjs, appwrite: SiAppwrite,
//     kafka: SiApachekafka, vercel: SiVercel, "socket.io": SiSocketdotio, clerk: SiClerk,
//     sqlite: DiMysql, rabbitmq: SiRabbitmq,
//   };

//   const getIcon = (techName) => {
//     const key = techName.toLowerCase().trim();
//     if (iconMap[key]) return iconMap[key];
//     const found = Object.keys(iconMap).find((k) => key.includes(k));
//     return found ? iconMap[found] : HiOutlineCodeBracketSquare;
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Technologies & Skills | Nevin Bali</title>
//       </Helmet>

//       <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
//         {/* Animated Background Gradients */}
//         <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
//         <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Header Section */}
//           <div className="text-center mb-24">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
//             >
//               TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">STACK</span>
//             </motion.h2>
//             <div className="h-1.5 w-24 bg-gradient-to-r from-purple-500 to-sky-500 mx-auto rounded-full" />
//           </div>

//           {/* Skills Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {data.map((section, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.4, delay: i * 0.05 }}
//                 className="group flex flex-col p-8 rounded-[2rem] bg-neutral-900/30 border border-neutral-800/50 backdrop-blur-xl hover:border-purple-500/30 hover:bg-neutral-900/50 transition-all duration-500 shadow-2xl"
//               >
//                 {/* Section Title */}
//                 <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
//                   <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
//                   {section.title}
//                 </h3>

//                 {/* Tech Items List */}
//                 <div className="flex flex-wrap gap-3">
//                   {section.items.map((tech, idx) => {
//                     const Icon = getIcon(tech);
//                     return (
//                       <motion.div
//                         key={idx}
//                         whileHover={{ y: -4, scale: 1.05 }}
//                         className="flex items-center gap-3 px-4 py-2.5 bg-neutral-800/40 border border-neutral-700/30 rounded-2xl text-neutral-200 hover:text-white hover:bg-neutral-800/80 hover:border-purple-400/50 transition-all cursor-default"
//                       >
//                         <Icon className="text-xl text-purple-400 group-hover:text-purple-300 transition-colors" />
//                         <span className="text-sm md:text-base font-semibold tracking-tight">{tech}</span>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Modern Footer Note */}
//           <motion.div 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="mt-24 text-center"
//           >
//             <p className="text-neutral-500 text-sm md:text-base font-medium max-w-2xl mx-auto border-t border-neutral-900 pt-8">
//               Continuously evolving — currently deep-diving into <span className="text-purple-400">DevOps</span>, 
//               <span className="text-sky-400"> Cloud Architectures</span>, and <span className="text-pink-400">Scalable Systems</span>.
//             </p>
//           </motion.div>
//         </div>
//       </section>
//     </>
//   );
// }