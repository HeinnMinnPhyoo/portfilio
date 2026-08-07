"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import { EXPERIENCES } from "@/src/data/experience";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-badge">Experience</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Career Journey
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            My professional experience building enterprise-grade systems
            for financial, e-learning, and logistics industries.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-5 top-3 hidden h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-blue-500/50 via-slate-700 to-transparent md:block" />

          <div className="space-y-8">
            {EXPERIENCES.map((item, index) => (
              <motion.div
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="grid grid-cols-1 gap-4 md:grid-cols-[48px_1fr] md:gap-5"
              >
                <div className="hidden md:flex md:justify-center">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-blue-500/30 bg-slate-950">
                    <Briefcase size={16} className="text-blue-400" />
                  </div>
                </div>

                <div className="glass rounded-2xl px-5 py-5 transition hover:border-blue-500/20 sm:px-6 sm:py-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold sm:text-xl">{item.company}</h3>
                      <h4 className="mt-1.5 text-sm font-medium text-blue-400 sm:text-base">
                        {item.position}
                      </h4>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3.5 py-2 text-xs text-slate-400 sm:text-sm">
                      <Calendar size={14} />
                      {item.period}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {item.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-sm text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800/60 pt-5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
