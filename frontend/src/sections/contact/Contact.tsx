"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import Button from "@/src/components/ui/Button";
import { SITE } from "@/src/data/site";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: SITE.location,
    href: undefined,
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "HeinnMinnPhyoo",
    href: SITE.github,
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "heinn-minn-phyo",
    href: SITE.linkedin,
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="section-badge">Contact</span>
          <h2 className="mt-6 text-4xl font-bold sm:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-slate-400">
            Seeking an opportunity to leverage my skills in a dynamic and
            innovative environment. Feel free to reach out!
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-3xl items-start gap-6 lg:grid-cols-5 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <div className="glass flex items-center gap-4 rounded-xl px-4 py-3.5 transition hover:border-blue-500/30">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                    <Icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500">{link.label}</p>
                    <p className="truncate text-sm font-medium text-slate-200">{link.value}</p>
                  </div>
                </div>
              );

              return link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass glow-cyan h-fit self-start rounded-2xl px-6 py-6 lg:col-span-3"
          >
            <h3 className="text-lg font-bold">Get In Touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Have a project in mind or want to discuss opportunities?
              Send me an email and I&apos;ll get back to you promptly.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button href={`mailto:${SITE.email}?subject=Portfolio Inquiry`}>
                <Send size={16} />
                Send Email
              </Button>
              <Button href={SITE.resumeUrl} variant="secondary">
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
