const links = [
  ["sobre", "Sobre"],
  ["linha-do-tempo", "Linha do Tempo"],
  ["galeria", "Galeria"],
  ["historias", "Histórias"],
];

export function Navigation() {
  return (
    <div className="sticky top-0 z-30 mx-auto max-w-7xl px-4 sm:px-6">
      <nav
        aria-label="Navegação do memorial"
        className="overflow-hidden rounded-b-[2rem] border-x border-b border-[var(--border)] bg-[#A4B494] shadow-[var(--shadow-soft)]"
      >
        <div className="overflow-x-auto px-4 py-2.5 sm:px-6">
          <div className="flex min-w-max items-center gap-1.5 sm:gap-2">
            {links.map(([id, label], index) => {
              const isFirst = index === 0;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={
                    isFirst
                      ? "rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#2f382a] shadow-sm transition"
                      : "rounded-xl px-4 py-2 text-sm font-medium text-white/95 transition hover:bg-white/20 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  }
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
