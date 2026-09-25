/* eslint-disable react/prop-types */
import { PROJECTS } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import {
  FiGithub,
  FiSearch,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiExternalLink,
} from "react-icons/fi";
import { GraduationCap, Sparkles, SearchX } from "lucide-react";
import { Helmet } from "react-helmet-async";

function ProjectCard({ project, index, expandedIndex, toggleExpand, big }) {
  const isOpen = expandedIndex === index;
  const visibleTech = project.technologies.slice(0, 6);
  const extraTech = project.technologies.length - visibleTech.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-base-content/10 bg-base-200/50 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_24px_60px_-16px_rgba(0,0,0,0.5)] ${
        big ? "md:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`relative shrink-0 overflow-hidden ${
          big
            ? "h-52 sm:h-64 md:h-auto md:min-h-[320px] md:w-[46%]"
            : "h-48 sm:h-52"
        }`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/25 via-accent/10 to-secondary/25">
            <GraduationCap className="text-primary/60" size={56} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live preview`}
            className="absolute inset-0 flex items-center justify-center bg-neutral/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
          >
            <span className="flex translate-y-4 items-center gap-2 rounded-full bg-base-content px-5 py-2.5 text-sm font-bold text-base-100 shadow-xl transition-transform duration-300 group-hover:translate-y-0">
              Live Preview <FiExternalLink />
            </span>
          </a>
        )}

        {project.featuredTag && (
          <div className="absolute left-3 top-3 z-20 flex items-center gap-1.5 rounded-full bg-primary/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-content shadow-lg">
            <Sparkles size={12} /> {project.featuredTag}
          </div>
        )}

        {project.github && (
          <div className="absolute right-3 top-3 z-20">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repo`}
              className="block rounded-full bg-base-200/80 p-2.5 text-base-content backdrop-blur-md transition-all hover:scale-110 hover:text-primary"
            >
              <FiGithub size={18} />
            </a>
          </div>
        )}
      </div>

      {/* Body */}
      <div
        className={`flex flex-1 flex-col p-5 sm:p-6 ${
          big ? "md:justify-center md:p-8 lg:p-10" : ""
        }`}
      >
        <h3
          className={`mb-2 font-bold tracking-tight text-base-content transition-colors group-hover:text-primary ${
            big ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`mb-4 line-clamp-2 text-base-content/60 ${
            big ? "text-base sm:text-lg" : "text-sm sm:text-base"
          }`}
        >
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5 sm:gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-base-content/10 bg-base-300/80 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-base-content/70 sm:text-[11px]"
            >
              {tech}
            </span>
          ))}
          {extraTech > 0 && (
            <span className="rounded-md bg-primary/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-[11px]">
              +{extraTech} more
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3">
          <button
            onClick={() => toggleExpand(index)}
            aria-expanded={isOpen}
            className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
          >
            {isOpen ? (
              <>
                <FiChevronUp /> Show Less
              </>
            ) : (
              <>
                <FiChevronDown /> Details
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="rounded-full border border-base-content/10 p-2 text-base-content/60 transition-all hover:border-primary hover:text-primary"
              >
                <FiGithub size={16} />
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                className="rounded-full border border-base-content/10 p-2 text-base-content/60 transition-all hover:border-primary hover:text-primary"
              >
                <FiExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="mt-4 space-y-2 border-t border-base-content/10 pt-4 text-sm text-base-content/70 sm:text-base">
                {project.keyFeatures?.map((f, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

function SectionLabel({ color, text }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className={`h-6 w-1.5 rounded-full ${color}`} />
      <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-base-content/60 sm:text-sm">
        {text}
      </h3>
    </div>
  );
}

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedIndex, setExpandedIndex] = useState(null);

  const isSearching = searchTerm.trim().length > 0;

  const filteredProjects = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    return PROJECTS.filter(
      (project) =>
        project.title.toLowerCase().includes(search) ||
        project.description?.toLowerCase().includes(search) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(search))
    );
  }, [searchTerm]);

  const featured = useMemo(() => PROJECTS.filter((p) => p.featured), []);
  const rest = useMemo(() => PROJECTS.filter((p) => !p.featured), []);

  const toggleExpand = (index) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  const renderCard = (project, big = false) => {
    const globalIndex = PROJECTS.indexOf(project);
    return (
      <ProjectCard
        key={project.title}
        project={project}
        index={globalIndex}
        expandedIndex={expandedIndex}
        toggleExpand={toggleExpand}
        big={big}
      />
    );
  };

  return (
    <>
      <Helmet>
        <title>Projects | Nevin Bali – Full Stack & GenAI Engineer</title>
        <meta
          name="description"
          content="Explore real-world full stack and GenAI projects by Nevin Bali."
        />
      </Helmet>

      <section
        id="projects"
        className="relative overflow-hidden bg-base-100 px-4 py-16 sm:px-6 sm:py-20 lg:px-20 lg:py-24"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px] sm:h-96 sm:w-96"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-[120px] sm:h-96 sm:w-96"
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-4xl font-black tracking-tighter text-base-content sm:text-5xl md:text-7xl"
            >
              MY{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                PROJECTS
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative mx-auto max-w-md md:max-w-xl"
            >
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50 transition-colors group-focus-within:text-primary" />
              <input
                type="text"
                placeholder="Filter by tech, title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-2xl border border-base-content/10 bg-base-200/50 py-3 pl-12 pr-11 text-sm text-base-content shadow-xl backdrop-blur-xl transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 sm:text-base"
              />
              {isSearching && (
                <button
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-base-content/50 transition-colors hover:bg-base-300 hover:text-base-content"
                >
                  <FiX size={16} />
                </button>
              )}
            </motion.div>

            {isSearching && (
              <p className="mt-4 text-sm text-base-content/50">
                {filteredProjects.length}{" "}
                {filteredProjects.length === 1 ? "project" : "projects"} found
              </p>
            )}
          </div>

          {isSearching ? (
            filteredProjects.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((p) => renderCard(p))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 py-16 text-center sm:py-20"
              >
                <span className="rounded-full bg-base-200 p-5 text-base-content/40">
                  <SearchX size={32} />
                </span>
                <p className="text-lg font-semibold text-base-content/70 sm:text-xl">
                  No projects match &ldquo;{searchTerm.trim()}&rdquo;
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-1 text-sm font-semibold text-primary hover:underline"
                >
                  Clear search
                </button>
              </motion.div>
            )
          ) : (
            <>
              <SectionLabel color="bg-primary" text="Featured Work" />
              <div className="mb-14 grid grid-cols-1 gap-6 sm:mb-20 sm:gap-8">
                {featured.map((p) => renderCard(p, true))}
              </div>

              <SectionLabel color="bg-secondary" text="More Projects" />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                {rest.map((p) => renderCard(p))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;
