import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type ShapeType = "drops" | "triangles" | "waves" | "hexagons" | "dots";

interface GeometricShapesProps {
  shapes?: ShapeType[];
  className?: string;
}

function Drops() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollAnimation((gsap) => {
    if (!ref.current) return;
    gsap.to(ref.current.querySelectorAll(".drop"), {
      y: () => window.innerHeight + 100,
      opacity: 0.6,
      duration: 2,
      stagger: 0.2,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className={`drop absolute opacity-0 ${i % 2 === 0 ? "text-orange-deep" : "text-pink"}`}
          style={{
            left: `${8 + i * 15}%`,
            top: "-5%",
            fontSize: `${1.5 + (i % 3) * 0.5}rem`,
          }}
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Triangles() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollAnimation((gsap) => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".triangle"),
      { scale: 0, rotation: -90, opacity: 0 },
      {
        scale: 1,
        rotation: 0,
        opacity: 0.15,
        duration: 1.5,
        stagger: 0.15,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          end: "center center",
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {Array.from({ length: 5 }, (_, i) => {
        const size = 20 + (i % 3) * 10;
        return (
          <div
            key={i}
            className={`triangle absolute opacity-0 ${i % 2 === 0 ? "text-orange" : "text-yellow"}`}
            style={{ left: `${5 + i * 20}%`, top: `${10 + (i % 5) * 15}%` }}
          >
            <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L22 20H2L12 2Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

function Waves() {
  const ref = useRef<SVGSVGElement>(null);

  useScrollAnimation((gsap) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      opacity: 1,
      scaleY: 1,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%",
        end: "center center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <svg
      ref={ref}
      className="wave absolute bottom-0 left-0 w-full opacity-0 text-orange-deep/10"
      viewBox="0 0 1440 120"
      fill="none"
      preserveAspectRatio="none"
      style={{ height: "80px" }}
    >
      <path d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z" fill="currentColor" />
    </svg>
  );
}

function Hexagons() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollAnimation((gsap) => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current.querySelectorAll(".hexagon"),
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "center center",
          scrub: 1,
        },
      },
    );
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className={`hexagon absolute opacity-0 ${i % 2 === 0 ? "text-yellow/20" : "text-orange/20"}`}
          style={{ left: `${15 + i * 22}%`, top: `${15 + (i % 4) * 20}%`, fontSize: "2rem" }}
        >
          <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" />
          </svg>
        </div>
      ))}
    </div>
  );
}

function Dots() {
  const ref = useRef<SVGSVGElement>(null);

  useScrollAnimation((gsap) => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      opacity: 0.5,
      duration: 2,
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <svg
      ref={ref}
      className="absolute left-0 top-0 h-full w-full opacity-0"
      width="100%"
      height="100%"
    >
      <line
        x1="5%"
        y1="0"
        x2="95%"
        y2="100%"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="8 8"
        className="text-ink/10"
      />
    </svg>
  );
}

const SHAPE_MAP: Record<ShapeType, React.FC> = {
  drops: Drops,
  triangles: Triangles,
  waves: Waves,
  hexagons: Hexagons,
  dots: Dots,
};

export function GeometricShapes({ shapes = ["drops"], className = "" }: GeometricShapesProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {shapes.map((shape) => {
        const Component = SHAPE_MAP[shape];
        return <Component key={shape} />;
      })}
    </div>
  );
}
