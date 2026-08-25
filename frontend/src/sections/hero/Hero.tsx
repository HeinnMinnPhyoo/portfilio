"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/src/components/ui/Container";
import Button from "@/src/components/ui/Button";
import { SITE, HIGHLIGHTS } from "@/src/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] animate-float rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[400px] w-[400px] animate-float rounded-full bg-cyan-500/10 blur-[100px]" style={{ animationDelay: "2s" }} />

      <Container className="relative z-10 flex w-full flex-col items-center py-20">
        <div className="flex w-full max-w-4xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge mb-8 inline-flex">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full text-center text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{SITE.name}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xl text-slate-300 sm:text-2xl lg:text-3xl"
          >
            {SITE.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <Button href="#projects">View Projects</Button>
            <Button href={SITE.resumeUrl} variant="secondary">
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-5"
          >
            <SocialLink href={SITE.github} label="GitHub">
              <FaGithub size={20} />
            </SocialLink>
            <SocialLink href={SITE.linkedin} label="LinkedIn">
              <FaLinkedin size={20} />
            </SocialLink>
            <SocialLink href={`mailto:${SITE.email}`} label="Email">
              <Mail size={20} />
            </SocialLink>
            <SocialLink href={`tel:${SITE.phone.replace(/\s/g, "")}`} label="Phone">
              <Phone size={20} />
            </SocialLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
          >
            {HIGHLIGHTS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-800 bg-slate-900/60 px-5 py-2.5 text-sm text-slate-400"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 flex w-full max-w-4xl justify-center"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-500 transition hover:text-blue-400"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </Container>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition hover:border-blue-500/50 hover:bg-blue-600/10 hover:text-blue-400"
    >
      {children}
    </a>
  );
}
