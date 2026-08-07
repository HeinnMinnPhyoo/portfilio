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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        <nav className="hidden items-center gap-3 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-slate-800/50 hover:text-white"
            >
              {item.title}
            </a>
          ))}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
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
                className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-slate-800/50"
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <a
              href={SITE.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white"
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
