import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Nosotros } from "@/components/sections/Nosotros";
import { Programas } from "@/components/sections/Programas";
import { Galeria } from "@/components/sections/Galeria";
import { CTA } from "@/components/sections/CTA";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { ScrollProgress } from "@/components/effects/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gotas de Esperanza | ONG de Bienestar Social" },
      {
        name: "description",
        content:
          "Somos una organización dedicada al bienestar social, brindando apoyo alimentario, protección y oportunidades a comunidades vulnerables. Transformando vidas, una gota a la vez.",
      },
      { property: "og:title", content: "Gotas de Esperanza | ONG de Bienestar Social" },
      {
        property: "og:description",
        content:
          "Somos una organización dedicada al bienestar social, brindando apoyo alimentario, protección y oportunidades a comunidades vulnerables.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gotasdeesperanza.org" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gotas de Esperanza | ONG de Bienestar Social" },
      {
        name: "twitter:description",
        content: "Transformando vidas, una gota a la vez. Conoce nuestros programas y cómo ayudar.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-cream text-ink overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Nosotros />
        <Programas />
        <Galeria />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
