import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Container from "@/src/components/ui/Container";
import Logo from "@/src/components/ui/Logo";
import { SITE } from "@/src/data/site";
import { NAV_ITEMS } from "@/src/data/navigation";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Logo size="md" />
            <p className="mt-2 text-sm text-slate-500">{SITE.role}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-400 transition hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <FooterLink href={SITE.github} label="GitHub">
              <FaGithub size={18} />
            </FooterLink>
            <FooterLink href={SITE.linkedin} label="LinkedIn">
              <FaLinkedin size={18} />
            </FooterLink>
            <FooterLink href={`mailto:${SITE.email}`} label="Email">
              <Mail size={18} />
            </FooterLink>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/60 pt-8 text-center">
          <p className="text-sm text-slate-500">
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterLink({
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
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-blue-500/50 hover:text-blue-400"
    >
      {children}
    </a>
  );
}
