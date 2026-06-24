import { Link } from "@tanstack/react-router";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#who", label: "Who I Help" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "Process" },
  { to: "/portfolio", label: "P" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <Link
          to="/"
          className="group flex items-baseline gap-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="font-serif text-2xl tracking-tight text-foreground">Ettel Daskal</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground md:inline">
            {"\n"}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Primary">
          {NAV.map((n) =>
            "to" in n ? (
              <Link
                key={n.to}
                to={n.to}
                className="text-foreground/80 transition-colors hover:text-foreground"
              >
                {n.label}
              </Link>
            ) : (
              <a key={n.href} href={n.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {n.label}
              </a>
            )
          )}
          <a href="/#contact" className="btn-gold !py-2 !px-4 !text-xs uppercase tracking-[0.18em]">
            GET IN TOUCH
          </a>
        </nav>
        <a
          href="/#contact"
          className="btn-gold !py-2 !px-3.5 !text-[0.65rem] uppercase tracking-[0.18em] md:hidden"
        >
          GET IN TOUCH
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-0 bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-3xl">Ettel Daskal</p>
          <p className="mt-2 text-sm italic text-background/70">
            Writer · Educator · Storyteller
          </p>
          <p className="mt-4 max-w-xs text-sm text-background/80">
            Copy & writing for do-good organizations and brands
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background/60">
            Navigate
          </p>
          <ul className="space-y-2">
            <li><a href="/#about" className="text-background/85 hover:text-background">About</a></li>
            <li><a href="/#services" className="text-background/85 hover:text-background">Services</a></li>
            <li><Link to="/work/$category" params={{ category: "copywriting" }} className="text-background/85 hover:text-background">Portfolio</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-background/60">
            Get in touch
          </p>
          <a href="mailto:etteldaskal@gmail.com" className="text-background hover:underline">
            etteldaskal@gmail.com
          </a>
          <p className="mt-8 text-xs text-background/60">
            © {new Date().getFullYear()} Ettel Daskal
          </p>
        </div>
      </div>
    </footer>
  );
}
