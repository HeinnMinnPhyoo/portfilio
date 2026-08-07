"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import { PROJECTS } from "@/src/data/projects";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <Section id="projects" className="relative bg-slate-950/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-badge">Projects</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Enterprise applications spanning financial trading, e-learning,
            food delivery, and event ticketing platforms.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} large />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mb-8 mt-16 text-center text-2xl font-bold">
              Other Projects
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </Container>
    </Section>
  );
}

function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  large?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group glass overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-blue-500/30 ${large ? "lg:col-span-1" : ""}`}
    >
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${project.gradient} ${large ? "h-40" : "h-32"}`}
      >
        <span className="text-5xl font-bold text-white/20">
          {project.title.charAt(0)}
        </span>
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold">{project.title}</h3>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-800 hover:text-blue-400"
              aria-label={`Visit ${project.title}`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-xs font-medium text-blue-400">{project.role}</p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-800/60 pt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-400"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            View Live
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.article>
  );
}
