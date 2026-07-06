import { cn } from "@/lib/utils";

interface ProgramCardProps {
  program: {
    id: string;
    shortName: string;
    name: string;
    tag: string;
    color: string;
    description: string;
  };
  index: number;
  onSelect: () => void;
}

export function ProgramCard({ program, onSelect }: ProgramCardProps) {
  return (
    <button
      onClick={onSelect}
      className={cn(
        "group outlined rounded-3xl p-6 text-left shadow-pop",
        "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all duration-200",
        "flex flex-col",
        program.color,
      )}
    >
      <span className="outlined inline-block self-start rounded-full bg-cream px-3 py-1 text-xs font-bold mb-4">
        {program.tag}
      </span>

      <div className="outlined overflow-hidden rounded-2xl bg-white mb-4 aspect-[16/10] flex items-center justify-center">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-ink/20 group-hover:text-orange-deep/40 transition-colors"
        >
          <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" />
        </svg>
      </div>

      <h3 className="font-display text-2xl leading-tight">{program.shortName}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/80 line-clamp-2">{program.description}</p>

      <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-orange-deep">
        <span>Ver más</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </button>
  );
}
