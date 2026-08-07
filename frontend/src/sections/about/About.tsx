"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Server,
} from "lucide-react";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import { SITE } from "@/src/data/site";

const stats = [
  { icon: Briefcase, value: "5+", label: "Years Experience" },
  { icon: FolderGit2, value: "20+", label: "Projects Delivered" },
  { icon: Server, value: "10+", label: "Enterprise Systems" },
  { icon: Award, value: "AWS", label: "Cloud Certified" },
];

const features = [
  "Enterprise Java & Spring Boot Development",
  "Microservices & REST API Architecture",
  "AI-Assisted Software Development",
  "CI/CD Pipelines & Cloud Deployment",
  "Database Design & Performance Optimization",
  "Cross-functional Team Collaboration",
];

export default function About() {
  return (
    <Section id="about" className="relative">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center lg:mb-20"
        >
          <span className="section-badge">About Me</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Building Scalable Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Passionate about learning new technologies and continuously improving
            system performance. Dedicated to delivering user-friendly, maintainable,
            and high-performance solutions that align with business objectives.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="glass glow-blue rounded-2xl p-8 lg:p-10">
              <h3 className="mb-6 text-2xl font-bold">Who I Am</h3>
              <p className="leading-relaxed text-slate-400">
                I am a results-driven Software Engineer with expertise in both
                front-end and back-end development. Proficient in Java, Spring Boot,
                React, and Next.js, I have extensive experience working with both
                Waterfall and Agile teams. I specialize in designing scalable
                microservice architectures, integrating payment gateways, and
                leveraging AI-assisted development tools to accelerate delivery.
              </p>

              <div className="mt-8 space-y-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <ArrowRight size={16} className="shrink-0 text-blue-400" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <GraduationCap size={20} className="text-blue-400" />
                  <h4 className="font-semibold">Education</h4>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  {SITE.education.degree}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {SITE.education.school}
                </p>
                <span className="mt-2 inline-block rounded-full bg-blue-600/10 px-3 py-1 text-xs text-blue-400">
                  {SITE.education.status}
                </span>
              </div>

              <div className="glass rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <Award size={20} className="text-cyan-400" />
                  <h4 className="font-semibold">Certification</h4>
                </div>
                <p className="text-sm font-medium text-slate-200">
                  {SITE.certificate.title}
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  {SITE.certificate.issuer}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass group rounded-2xl p-6 transition hover:border-blue-500/30 hover:-translate-y-1"
                  >
                    <Icon size={22} className="mb-4 text-blue-400" />
                    <p className="text-3xl font-bold">{item.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
