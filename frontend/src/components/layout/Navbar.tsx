"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "@/src/components/ui/Container";
import Logo from "@/src/components/ui/Logo";
import { NAV_ITEMS } from "@/src/data/navigation";
import { SITE } from "@/src/data/site";
import { cn } from "@/src/lib/cn";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>(NAV_ITEMS[0].href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.href.slice(1));
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) =>
    cn(
      "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm transition",
      activeHref === href
        ? "bg-blue-600 text-white hover:bg-blue-500"
        : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <a href="#" className="group transition-opacity hover:opacity-90">
          <Logo size="md" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={linkClass(item.href)}
              onClick={() => setActiveHref(item.href)}
            >
              {item.title}
            </a>
          ))}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-xl border border-blue-500/60 px-5 py-2.5 text-sm font-medium text-blue-400 transition hover:border-blue-400 hover:bg-blue-600/10 hover:text-blue-300"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {mobileOpen && (
        <div className="glass border-t border-slate-800/60 md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-4 py-3 transition",
                  activeHref === item.href
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800/50"
                )}
                onClick={() => {
                  setActiveHref(item.href);
                  setMobileOpen(false);
                }}
              >
                {item.title}
              </a>
            ))}
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl border border-blue-500/60 px-4 py-3 text-center font-medium text-blue-400"
              onClick={() => setMobileOpen(false)}
            >
              Download Resume
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
