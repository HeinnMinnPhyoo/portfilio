import Image from "next/image";

import { cn } from "@/src/lib/cn";

type LogoProps = {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { icon: 32, text: "text-base" },
  md: { icon: 40, text: "text-lg" },
  lg: { icon: 48, text: "text-xl" },
};

export default function Logo({
  className,
  iconClassName,
  showText = true,
  size = "md",
}: LogoProps) {
  const { icon, text } = sizes[size];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Image
        src="/brand-logo.png"
        alt="Hein Min Phyo"
        width={icon}
        height={icon}
        className={cn("shrink-0 rounded-lg object-cover", iconClassName)}
        priority
      />

      {showText && (
        <span className={cn("font-semibold tracking-tight text-slate-100", text)}>
          Hein
          <span className="text-lime-400">.</span>
        </span>
      )}
    </span>
  );
}
