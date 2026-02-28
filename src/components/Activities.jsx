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
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-sky-600/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
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
                {/* Image Section with Overlay */}
                <div className="w-full lg:w-1/2 group">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
                    <img
                      src={contribution.image}
                      alt={contribution.company}
                      className="w-full h-auto md:h-[300px] object-contain object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Professional Live Link Overlay */}
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

                {/* Content Section */}
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

                  {/* Tech Stack Chips */}
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