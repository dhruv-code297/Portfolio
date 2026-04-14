"use client";

import Image from "next/image";
import { createLucideIcon, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { PERSONAL, PROJECTS } from "@/lib/data";
import type { Project } from "@/types";

const Github = createLucideIcon("Github", [
  [
    "path",
    {
      d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
      key: "github",
    },
  ],
]);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/85 shadow-[var(--shadow-card)] backdrop-blur-xl transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-accent/70 before:to-cyan/70 before:opacity-0 before:transition-opacity before:duration-300 before:content-[''] hover:border-accent/35 hover:shadow-[var(--shadow-card-hover)] hover:before:opacity-100"
    >
      <div className="relative h-44 overflow-hidden bg-card-secondary">
        <Image
          src={project.coverImage}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-semibold text-foreground">{project.name}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={`${project.name}-${item}`}
              className="rounded-lg border border-border bg-card-secondary px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-1 flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-2xl border border-border bg-card/60 py-2 text-xs font-semibold text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <Github size={14} />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-2xl bg-gradient-to-r from-accent to-cyan py-2 text-xs font-semibold text-white shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="space-y-3">
        <p className="text-sm font-medium tracking-widest text-accent uppercase">
          WHAT I&apos;VE BUILT
        </p>
        <h2 className="cyber-heading text-3xl font-bold md:text-4xl">
          Projects
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-cyan" />
      </div>

      <div className="mt-2 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/60 px-6 py-2.5 text-sm font-semibold text-muted shadow-[var(--shadow-button)] backdrop-blur-md hover:-translate-y-1 hover:scale-[1.02] hover:border-accent/40 hover:text-foreground hover:shadow-[var(--shadow-button-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
        >
          View All on GitHub
          <ExternalLink size={14} />
        </a>
      </div>
    </SectionWrapper>
  );
}