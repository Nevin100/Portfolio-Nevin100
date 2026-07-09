/* eslint-disable react/prop-types */
import { PROJECTS } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { FiGithub, FiSearch, FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { GraduationCap } from "lucide-react";
import { Helmet } from "react-helmet-async";

function ProjectCard({ project, index, expandedIndex, toggleExpand, big }) {
  return (
    <motion.div
      layout
      key={project.title}
      className={`group relative flex flex-col bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300 ${big ? "md:col-span-1" : ""}`}
    >
      <div className={`relative ${big ? "h-56" : "h-52"} overflow-hidden cursor-pointer`}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-sky-600/20">
            <GraduationCap className="text-6xl text-purple-300/60" size={56} />
          </div>
        )}

        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
        >
          <div className="bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Live Preview <FiExternalLink />
          </div>
        </a>

        {project.featuredTag && (
          <div className="absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-500/90 text-white shadow-lg">
            {project.featuredTag}
          </div>
        )}

        <div className="absolute top-3 right-3 z-20">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-full text-white hover:text-purple-400 transition-colors block"
          >
            <FiGithub size={18} />
          </a>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`${big ? "text-2xl" : "text-xl"} font-bold text-white mb-2 group-hover:text-purple-400 transition-colors`}>
          {project.title}
        </h3>

        <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
              {tech}
            </span>
          ))}
        </div>

        <button
          onClick={() => toggleExpand(index)}
          className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto"
        >
          {expandedIndex === index ? <><FiChevronUp /> Show Less</> : <><FiChevronDown /> Details</>}
        </button>

        <AnimatePresence>
          {expandedIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-4 pt-4 border-t border-neutral-800"
            >
              <ul className="text-sm text-neutral-400 space-y-1">
                {project.keyFeatures?.map((f, i) => <li key={i}>• {f}</li>)}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const isSearching = searchTerm.trim().length > 0;

  const filteredProjects = useMemo(() => {
    const search = searchTerm.toLowerCase();
    return PROJECTS.filter(
      (project) =>
        project.title.toLowerCase().includes(search) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(search))
    );
  }, [searchTerm]);

  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const rest = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

  const toggleExpand = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <>
      <Helmet>
        <title>Projects | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Explore real-world full stack and GenAI projects." />
      </Helmet>

      <section id="projects" className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
            >
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">PROJECTS</span>
            </motion.h2>

            <div className="relative max-w-md mx-auto group">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-purple-400 transition-colors" />
              <input
                type="text"
                placeholder="Filter by tech or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-neutral-900/50 border border-neutral-800 rounded-2xl text-white backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all shadow-2xl"
              />
            </div>
          </div>

          {isSearching ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => {
                    const globalIndex = PROJECTS.indexOf(project);
                    return (
                      <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
                    );
                  })}
                </AnimatePresence>
              </div>
              {filteredProjects.length === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                  <p className="text-neutral-500 text-xl font-medium">No projects match your search.</p>
                </motion.div>
              )}
            </>
          ) : (
            <>
              {/* Featured Work */}
              <div className="mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-purple-500 rounded-full" />
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Featured Work</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {featured.map((project) => {
                  const globalIndex = PROJECTS.indexOf(project);
                  return (
                    <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} big />
                  );
                })}
              </div>

              {/* More Projects */}
              <div className="mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-sky-500 rounded-full" />
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">More Projects</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {rest.map((project) => {
                  const globalIndex = PROJECTS.indexOf(project);
                  return (
                    <ProjectCard key={project.title} project={project} index={globalIndex} expandedIndex={expandedIndex} toggleExpand={toggleExpand} />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;