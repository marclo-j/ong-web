import { useScrollSpy } from "@/hooks/useScrollSpy";
import { NAV_ITEMS, SITE } from "@/lib/constants";

export function Navbar() {
  const activeId = useScrollSpy(NAV_ITEMS.map((i) => i.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b-[3px] border-ink bg-cream/90 backdrop-blur-md"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <button
          onClick={() => scrollTo("nosotros")}
          className="flex items-center gap-2"
          aria-label="Ir al inicio"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-orange-deep"
            aria-hidden="true"
          >
            <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" />
          </svg>
          <span className="font-display text-xl">{SITE.shortName}</span>
        </button>

        <ul className="hidden items-center gap-6 text-sm font-semibold md:flex" role="menubar">
          {NAV_ITEMS.map((item) => (
            <li key={item.id} role="none">
              <button
                role="menuitem"
                onClick={() => scrollTo(item.id)}
                aria-current={activeId === item.id ? "true" : undefined}
                className={`relative px-2 py-1 transition-colors hover:text-orange-deep ${
                  activeId === item.id ? "text-orange-deep" : "text-ink"
                }`}
              >
                {item.label}
                {activeId === item.id && (
                  <span
                    className="absolute -bottom-0.5 left-0 h-[3px] w-full bg-orange-deep"
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scrollTo("cta")}
          className="outlined rounded-full bg-orange-deep px-5 py-2 text-sm font-bold text-white shadow-pop transition hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
          aria-label="Ir a sección de donaciones"
        >
          Donar
        </button>
      </div>
    </nav>
  );
}
