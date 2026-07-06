import { Section } from "@/components/sections/Section";
import { EdgeLines } from "@/components/effects/EdgeLines";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { NOSOTROS } from "@/lib/constants";

export function Nosotros() {
  const heroRef = useScrollAnimation((gsap) => {
    gsap.to(
      ".hero-title span span",
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "back.out(1.7)",
      },
    );
    gsap.to(
      ".hero-sub",
      {
        y: 0,
        opacity: 1,
        scaleX: 1,
        duration: 1,
        delay: 0.6,
        ease: "elastic.out(1, 0.5)",
      },
    );
    gsap.to(
      ".hero-desc",
      { y: 0, opacity: 1, duration: 0.8, delay: 1, ease: "power2.out" },
    );
  }, []);

  const missionRef = useScrollAnimation((gsap) => {
    gsap.fromTo(
      ".mission-card",
      { x: -80, opacity: 0, rotation: -3 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".mission-card", start: "top 80%" },
      },
    );
  }, []);

  const visionRef = useScrollAnimation((gsap) => {
    gsap.fromTo(
      ".vision-card",
      { x: 80, opacity: 0, rotation: 3 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: { trigger: ".vision-card", start: "top 80%" },
      },
    );
  }, []);

  return (
    <>
      <Section id="nosotros" bg="cream" overflow edges={<EdgeLines />} className="min-h-screen pt-32 md:pt-40">
        <div
          ref={heroRef as React.RefObject<HTMLDivElement>}
          className="relative mx-auto max-w-5xl text-center"
        >
          <div className="hero-title py-6 px-4">
            <h1 className="font-display text-7xl leading-[0.85] tracking-tight sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem]">
              {NOSOTROS.hero.title.split(" ").map((word, i) => (
                <span key={i} className="mr-[0.15em] inline-block">
                  <span
                    className="text-sticker inline-block"
                    style={{ opacity: 0, transform: "translateY(80px) scale(0.8)" }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </h1>
          </div>
          <p
            className="hero-sub mt-8 font-display text-2xl md:text-3xl lg:text-4xl"
            style={{ opacity: 0, transform: "translateY(40px) scaleX(0.8)" }}
          >
            <span className="highlight-block">{NOSOTROS.hero.subtitle}</span>
          </p>
          <p
            className="hero-desc mx-auto mt-10 max-w-2xl text-lg leading-relaxed md:text-xl"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            {NOSOTROS.hero.description}
          </p>
        </div>
      </Section>

      <Section bg="yellow" className="py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2">
          <div ref={missionRef as React.RefObject<HTMLDivElement>}>
            <div className="mission-card outlined rounded-3xl bg-cream p-8 shadow-[12px_12px_0_0_var(--ink)] md:p-10">
              <span className="outlined mb-6 inline-block rounded-full bg-orange-deep px-5 py-1.5 text-sm font-bold text-white">
                Misión
              </span>
              <h2 className="mb-5 font-display text-4xl md:text-5xl">{NOSOTROS.mision.title}</h2>
              <p className="text-base leading-relaxed md:text-lg">{NOSOTROS.mision.description}</p>
            </div>
          </div>

          <div ref={visionRef as React.RefObject<HTMLDivElement>}>
            <div className="vision-card outlined rounded-3xl bg-cream p-8 shadow-[12px_12px_0_0_var(--ink)] md:p-10">
              <span className="outlined mb-6 inline-block rounded-full bg-pink px-5 py-1.5 text-sm font-bold">
                Visión
              </span>
              <h2 className="mb-5 font-display text-4xl md:text-5xl">{NOSOTROS.vision.title}</h2>
              <p className="text-base leading-relaxed md:text-lg">{NOSOTROS.vision.description}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
