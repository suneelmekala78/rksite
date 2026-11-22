import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="section-pad flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between md:py-16">
        <div>
          <p className="font-display text-5xl tracking-[0.06em] md:text-6xl">{site.monogram}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            {site.name}. Always bringing the fight — on the floor and off it.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted md:items-end">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Instagram
          </a>
          <a href={site.studioUrl} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Fasttracks
          </a>
          <p className="mt-4 text-stone">© 2026 {site.name}</p>
        </div>
      </div>
    </footer>
  );
}
