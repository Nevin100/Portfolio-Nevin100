import { PROJECTS } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { FiGithub, FiSearch, FiChevronDown, FiChevronUp,FiExternalLink } from "react-icons/fi";
import { Helmet } from "react-helmet-async";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Memoized filter for performance
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const search = searchTerm.toLowerCase();
      return (
        project.title.toLowerCase().includes(search) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(search))
      );
    });
  }, [searchTerm]);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Projects | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta name="description" content="Explore real-world full stack and GenAI projects." />
      </Helmet>

      <section id="projects" className="relative py-24 px-6 lg:px-20 bg-[#0a0a0a] overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-600/10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-6"
            >
              MY <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-400">PROJECTS</span>
            </motion.h2>
            
            {/* Sleek Search Bar */}
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              className="group relative flex flex-col bg-neutral-900/40 border border-neutral-800 rounded-3xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
            >
              {/* IMAGE SECTION WITH HOVER OVERLAY */}
              <div className="relative h-52 overflow-hidden cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Deployed Link Overlay - Appears on Hover */}
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

                {/* GitHub Icon (Top Right) */}
                <div className="absolute top-3 right-3 z-20">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="p-2 bg-neutral-900/80 backdrop-blur-md rounded-full text-white hover:text-purple-400 transition-colors block"
                  >
                    <FiGithub size={18} />
                  </a>
                </div>
              </div>

              {/* CARD CONTENT */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors mt-auto"
                >
                  {expandedIndex === index ? <><FiChevronUp /> Show Less</> : <><FiChevronDown /> Details</>}
                </button>

                {/* Expanded Content (Same logic as before) */}
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
          ))}
        </AnimatePresence>
      </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-neutral-500 text-xl font-medium">No projects match your search.</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;