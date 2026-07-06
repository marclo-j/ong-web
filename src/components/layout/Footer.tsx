import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink px-5 py-12 text-cream" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-orange"
                aria-hidden="true"
              >
                <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" />
              </svg>
              <span className="font-display text-xl">{SITE.name}</span>
            </div>
            <p className="max-w-xs text-sm opacity-70">{SITE.description}</p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Contacto</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a
                  href={`mailto:${SITE.email}?subject=Contacto%20desde%20web`}
                  className="transition hover:text-orange"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsapp.replace(/\s/g, "")}`}
                  className="transition hover:text-orange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.whatsapp}
                </a>
              </li>
              <li className="opacity-70">{SITE.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-lg">Síguenos</h4>
            <div className="flex gap-4 text-sm font-semibold">
              <a
                href={SITE.social.facebook}
                className="transition hover:text-orange"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
              >
                Facebook
              </a>
              <a
                href={SITE.social.instagram}
                className="transition hover:text-orange"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Instagram"
              >
                Instagram
              </a>
              <a
                href={SITE.social.youtube}
                className="transition hover:text-orange"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs opacity-50">
          &copy; {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
