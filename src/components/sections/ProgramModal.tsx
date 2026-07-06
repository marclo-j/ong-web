import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SITE } from "@/lib/constants";

interface ProgramModalProps {
  program: {
    id: string;
    name: string;
    tag: string;
    color: string;
    description: string;
    fullDescription: string;
    stats: { label: string; value: string }[];
    gallery: string[];
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProgramModal({ program, open, onOpenChange }: ProgramModalProps) {
  if (!program) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 outlined border-[3px] border-ink shadow-pop-lg bg-cream">
        <ScrollArea className="max-h-[85vh]">
          <div className="relative">
            <DialogClose
              className="absolute top-4 right-4 z-10 outlined flex h-10 w-10 items-center justify-center rounded-full bg-cream text-lg font-bold shadow-pop hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition"
              aria-label="Cerrar"
            >
              ✕
            </DialogClose>

            <div className="p-6 md:p-8">
              <span
                className={`outlined inline-block rounded-full px-4 py-1 text-xs font-bold mb-4 ${program.color}`}
              >
                {program.tag}
              </span>

              <DialogTitle className="font-display text-3xl md:text-5xl mb-6">
                {program.name}
              </DialogTitle>

              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                {program.gallery.map((bg, i) => (
                  <div
                    key={i}
                    className={`${bg} outlined flex aspect-[4/3] items-center justify-center rounded-2xl`}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-ink/30"
                      aria-hidden="true"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15L16 10L5 21" />
                    </svg>
                  </div>
                ))}
              </div>

              <p className="mb-8 text-base leading-relaxed">{program.fullDescription}</p>

              <div className="mb-4 grid grid-cols-3 gap-4">
                {program.stats.map((stat, i) => (
                  <div key={i} className={`outlined rounded-2xl ${program.color} p-4 text-center`}>
                    <p className="font-display text-2xl md:text-3xl">{stat.value}</p>
                    <p className="mt-1 text-xs font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/\s/g, "")}?text=Hola,%20quiero%20donar%20al%20programa%20${encodeURIComponent(program.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outlined rounded-full bg-orange-deep px-6 py-3 text-sm font-bold text-white shadow-pop transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Donar ahora
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Información%20sobre%20${encodeURIComponent(program.name)}`}
                  className="outlined rounded-full bg-cream px-6 py-3 text-sm font-bold shadow-pop transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
                >
                  Más información
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
