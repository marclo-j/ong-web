import { Section } from "@/components/sections/Section";
import { GeometricShapes } from "@/components/effects/GeometricShapes";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GALLERY_IMAGES } from "@/lib/constants";

export function Galeria() {
  const sectionRef = useScrollAnimation((gsap) => {
    gsap.fromTo(
      ".gallery-item",
      {
        scale: 0.7,
        opacity: 0,
        rotation: (i: number) => (i % 2 === 0 ? -8 : 8),
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-item",
          start: "top 60%",
        },
      },
    );

    gsap.to(".gallery-item img", {
      scale: 1.1,
      duration: 1.5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".gallery-item",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  const rotations = [
    "-rotate-2",
    "rotate-1",
    "-rotate-1",
    "rotate-2",
    "-rotate-3",
    "rotate-3",
    "-rotate-2",
    "rotate-1",
  ];

  return (
    <Section id="galeria" bg="pink">
      <GeometricShapes shapes={["triangles", "dots"]} />
      <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-display text-5xl md:text-7xl">Galería</h2>
          <p className="mt-6 text-lg">
            Momentos que capturan la esencia de nuestra labor y el impacto en la comunidad.
          </p>
        </div>

        <div className="columns-2 gap-4 space-y-4 md:columns-3 lg:columns-4" role="list">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={`gallery-item outlined break-inside-avoid overflow-hidden rounded-2xl shadow-pop ${rotations[i % rotations.length]}`}
              role="listitem"
            >
              <div className={`${img.bg} relative aspect-[4/3] overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-ink/20"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15L16 10L5 21" />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/40 to-transparent p-4 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <p className="text-sm font-bold text-white">{img.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
