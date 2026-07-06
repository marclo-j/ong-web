import { useState } from "react";
import { Section } from "@/components/sections/Section";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { ProgramModal } from "@/components/sections/ProgramModal";
import { GeometricShapes } from "@/components/effects/GeometricShapes";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PROGRAMS } from "@/lib/constants";

export function Programas() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProgram = PROGRAMS.find((p) => p.id === selectedId) ?? null;

  const sectionRef = useScrollAnimation((gsap) => {
    gsap.fromTo(
      ".program-card",
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".program-card",
          start: "top 70%",
        },
      },
    );
  }, []);

  return (
    <>
      <Section id="programas" bg="cream">
        <GeometricShapes shapes={["hexagons", "dots"]} />
        <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="font-display text-5xl md:text-7xl">Nuestros Programas</h2>
            <p className="mt-6 text-lg">
              Conoce cada una de nuestras iniciativas y cómo transformamos vidas día a día.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {PROGRAMS.map((program, i) => (
              <div key={program.id} className="program-card" role="listitem">
                <ProgramCard
                  program={program}
                  index={i}
                  onSelect={() => setSelectedId(program.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <ProgramModal
        program={selectedProgram}
        open={selectedId !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedId(null);
        }}
      />
    </>
  );
}
