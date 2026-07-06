import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  bg?: "cream" | "yellow" | "pink" | "mustard" | "none";
  overflow?: boolean;
  edges?: ReactNode;
  children: ReactNode;
}

const bgMap: Record<string, string> = {
  cream: "bg-cream",
  yellow: "bg-yellow/30",
  pink: "bg-pink/30",
  mustard: "bg-mustard/30",
  none: "",
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className, bg = "cream", overflow = false, edges, children }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn(
        "relative px-5 py-24 border-y-[3px] border-ink",
        overflow ? "overflow-visible" : "overflow-hidden",
        bgMap[bg],
        className,
      )}
    >
      {edges}
      <div className="mx-auto max-w-7xl relative z-10">{children}</div>
    </section>
  ),
);

Section.displayName = "Section";
