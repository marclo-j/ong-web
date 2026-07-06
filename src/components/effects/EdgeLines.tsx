import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BAND_WIDTH = 50;
const BORDER_WIDTH = 3;
const BORDER_COLOR = "#000000";

const COLORS = [
  "var(--rainbow-red)",
  "var(--rainbow-orange)",
  "var(--rainbow-yellow)",
  "var(--rainbow-green)",
  "var(--rainbow-blue)",
  "var(--rainbow-purple)",
];

function getRainbowPath(offset: number): string {
  const left = 50 + offset;
  const right = 1150 - offset;
  const curveSide = 550;
  const bottom = 900;
  const r = (right - left) / 2;
  return `M ${left},${bottom} L ${left},${curveSide} A ${r},${r} 0 0,1 ${right},${curveSide} L ${right},${bottom}`;
}

export function EdgeLines() {
  const containerRef = useRef<HTMLDivElement>(null);

  useScrollAnimation((gsap) => {
    if (!containerRef.current) return;

    const allPaths = containerRef.current.querySelectorAll("path");
    const tl = gsap.timeline({ delay: 0.5 });

    allPaths.forEach((path, i) => {
      const length = (path as SVGPathElement).getTotalLength?.() || 5000;
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1,
      });
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.inOut",
      }, i * 0.1);
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
      style={{ zIndex: 0 }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMin slice"
      >
        {/* Bandas de color (detrás) */}
        {COLORS.map((color, i) => {
          const offset = i * BAND_WIDTH;
          const d = getRainbowPath(offset);
          return (
            <path
              key={`color-${i}`}
              d={d}
              stroke={color}
              strokeWidth={BAND_WIDTH}
              strokeLinecap="butt"
              fill="none"
              style={{ opacity: 0 }}
            />
          );
        })}

        {/* Bordes negros entre bandas */}
        {COLORS.slice(0, -1).map((_, i) => {
          const offset = (i + 0.5) * BAND_WIDTH;
          const d = getRainbowPath(offset);
          return (
            <path
              key={`border-${i}`}
              d={d}
              stroke={BORDER_COLOR}
              strokeWidth={BORDER_WIDTH}
              strokeLinecap="butt"
              fill="none"
              style={{ opacity: 0 }}
            />
          );
        })}

        {/* Borde exterior */}
        <path
          d={getRainbowPath(-BAND_WIDTH / 2)}
          stroke={BORDER_COLOR}
          strokeWidth={BORDER_WIDTH}
          strokeLinecap="butt"
          fill="none"
          style={{ opacity: 0 }}
        />
        <path
          d={getRainbowPath(COLORS.length * BAND_WIDTH - BAND_WIDTH / 2)}
          stroke={BORDER_COLOR}
          strokeWidth={BORDER_WIDTH}
          strokeLinecap="butt"
          fill="none"
          style={{ opacity: 0 }}
        />
      </svg>
    </div>
  );
}
