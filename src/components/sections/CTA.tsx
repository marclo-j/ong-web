import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GeometricShapes } from "@/components/effects/GeometricShapes";
import { SITE } from "@/lib/constants";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useScrollAnimation((gsap) => {
    gsap.fromTo(
      ".cta-content",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      },
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative overflow-hidden border-y-[3px] border-ink bg-yellow/30 px-5 py-28 text-center"
    >
      <GeometricShapes shapes={["waves", "drops"]} />
      <div
        ref={contentRef as React.RefObject<HTMLDivElement>}
        className="cta-content relative z-10 mx-auto max-w-4xl"
      >
        <svg
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mx-auto text-orange-deep"
          aria-hidden="true"
        >
          <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" />
        </svg>

        <h2 className="mt-6 font-display text-5xl md:text-7xl">
          Ayúdanos a seguir <span className="text-orange-deep">gotando esperanza</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Cada gota cuenta. Tu apoyo nos permite seguir transformando vidas y construyendo un futuro
          mejor para quienes más lo necesitan.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${SITE.whatsapp.replace(/\s/g, "")}?text=Hola,%20quiero%20donar%20a%20Gotas%20de%20Esperanza`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-orange-deep px-10 py-5 font-display text-2xl text-white shadow-pop-lg transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            Donar ahora
          </a>
          <a
            href={`mailto:${SITE.email}?subject=Contacto%20Gotas%20de%20Esperanza`}
            className="rounded-full bg-cream px-8 py-5 font-display text-xl shadow-pop-lg transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
