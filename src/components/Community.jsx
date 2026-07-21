import { motion } from "framer-motion";
import { OpenSourceContributionsData } from "../utils/index.js";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Award, Users, Trophy, Flame } from "lucide-react";
import { Helmet } from "react-helmet-async";

const RECOGNITION = [
  {
    label: "CGPA 9.7 · Rank Holder",
    sub: "CSE Department",
    Icon: Award,
    color: "text-primary",
  },
  {
    label: "150K+ Dev Community",
    sub: "75+ mentored, Geek Room MSIT",
    Icon: Users,
    color: "text-secondary",
  },
  {
    label: "4x Hackathon Mentored",
    sub: "IIIT Delhi, IGDTUW, MSIT etc.",
    Icon: Trophy,
    color: "text-accent",
  },
  {
    label: "LeetCode 50-Day Streak",
    sub: "Consistent DSA Practice",
    Icon: Flame,
    color: "text-orange-400",
  },
];

function Community() {
  return (
    <>
      <Helmet>
        <title>Community | Nevin Bali – Full Stack Engineer</title>
        <meta
          name="description"
          content="Open source contributions, hackathons, and community leadership by Nevin Bali."
        />
      </Helmet>

      <section
        id="community"
        className="relative py-24 px-6 lg:px-20 bg-base-100 overflow-hidden border-b border-base-content/10"
      >
        {/* Background Blur */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                COMMUNITY
              </span>
            </motion.h2>

            <p className="text-base-content/50 mt-4 max-w-2xl mx-auto text-lg">
              Driving impact through code contributions and technical leadership
              in global developer communities.
            </p>
          </div>

          {/* Recognition */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {RECOGNITION.map(({ label, sub, Icon, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl bg-base-200/40 border border-base-content/10 flex flex-col items-center text-center gap-2"
              >
                <Icon className={`w-8 h-8 ${color}`} />
                <span className="text-sm font-bold text-base-content leading-tight">
                  {label}
                </span>
                <span className="text-xs text-base-content/50 leading-tight">
                  {sub}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Contributions */}
          <div className="space-y-32">
            {OpenSourceContributionsData.map((contribution, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-2xl border border-base-content/10 bg-base-200 shadow-2xl">
                    <img
                      src={contribution.image}
                      alt={contribution.company}
                      className="w-full h-auto md:h-[300px] object-contain object-top transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Live Link */}
                    <a
                      href={contribution.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-neutral/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center cursor-pointer"
                    >
                      <div className="flex items-center gap-2 bg-base-content text-base-100 px-6 py-3 rounded-full font-bold shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Visit Live
                        <FaExternalLinkAlt size={14} />
                      </div>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full border border-primary/20">
                        {contribution.role}
                      </span>

                      {contribution.repo && (
                        <a
                          href={contribution.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base-content/60 hover:text-primary transition-colors"
                          title="View Repository"
                        >
                          <FaGithub size={24} />
                        </a>
                      )}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-base-content tracking-tight">
                      {contribution.company}
                    </h3>
                  </div>

                  <p className="text-base-content/60 text-lg leading-relaxed">
                    {contribution.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {contribution.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-1.5 bg-base-200 border border-base-content/10 text-base-content/80 text-sm font-medium rounded-lg hover:border-primary/50 transition-colors"
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