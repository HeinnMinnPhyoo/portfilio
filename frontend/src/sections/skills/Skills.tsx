"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code,
  Database,
  Layers,
  Server,
  Sparkles,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import { SKILL_CATEGORIES } from "@/src/data/skills";

const iconMap = {
  server: Server,
  code: Code,
  database: Database,
  cloud: Cloud,
  sparkles: Sparkles,
  layers: Layers,
} as const;

export default function Skills() {
  return (
    <Section id="skills" className="relative bg-slate-950/50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-badge">Skills</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Technical Expertise
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Technologies and methodologies I use to build scalable,
            production-ready enterprise applications.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Server;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass group rounded-2xl p-6 transition hover:border-blue-500/30"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold">{category.title}</h3>
                  </div>
                  <span className="text-sm font-semibold text-blue-400">
                    {category.percentage}%
                  </span>
                </div>

                <div className="mb-5 h-1.5 overflow-hidden rounded-full bg-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-300 transition group-hover:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
