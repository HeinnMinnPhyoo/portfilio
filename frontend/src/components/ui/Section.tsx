import { cn } from "@/src/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-24 lg:py-32",
        className
      )}
    >
      {children}
    </section>
  );
}