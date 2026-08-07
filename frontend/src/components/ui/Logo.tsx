import { cn } from "@/src/lib/cn";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { icon: 32, text: "text-base" },
  md: { icon: 36, text: "text-lg" },
  lg: { icon: 44, text: "text-xl" },
};

export default function Logo({
  className,
  iconClassName,
  showText = true,
  size = "md",
}: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={icon}
        height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={cn("shrink-0", iconClassName)}
      >
        <defs>
          <linearGradient
            id="hmp-logo-gradient"
            x1="4"
            y1="4"
            x2="44"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="0.5" stopColor="#22D3EE" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
          <linearGradient
            id="hmp-logo-glow"
            x1="24"
            y1="0"
            x2="24"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#hmp-logo-glow)" />
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          stroke="url(#hmp-logo-gradient)"
          strokeWidth="2"
        />
        <path
          d="M16 14V34M16 24H32M32 14V34"
          stroke="url(#hmp-logo-gradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="36" cy="12" r="3" fill="#22D3EE" />
      </svg>

      {showText && (
        <span className={cn("font-bold tracking-tight", text)}>
          <span className="gradient-text">Hein</span>
          <span className="text-cyan-400">.</span>
        </span>
      )}
    </span>
  );
}
