import { cn } from "@/src/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm font-medium transition-all duration-300",
    variant === "primary" &&
      "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30",
    variant === "secondary" &&
      "border border-slate-700 bg-slate-900/60 text-white hover:border-slate-600 hover:bg-slate-800",
    className
  );

  if (href) {
    const isExternal =
      href.startsWith("http") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.endsWith(".pdf");

    if (isExternal) {
      return (
        <a
          href={href}
          target={href.endsWith(".pdf") || href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }

    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}
