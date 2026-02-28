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
          {/* Vertical Line (Hidden on mobile, visible on desktop) */}
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

                  {/* Skills/Tech Used */}
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