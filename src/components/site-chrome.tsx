import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <Link to="/" className="group flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
          <span className="font-serif text-2xl tracking-tight text-foreground">Ettel Daskal</span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground md:inline">
            Writer · Educator
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Primary">
          <a href="/#about" className="text-foreground/80 transition-colors hover:text-foreground">About</a>
          <Link to="/work" className="text-foreground/80 transition-colors hover:text-foreground">Work</Link>
          <a href="/#services" className="text-foreground/80 transition-colors hover:text-foreground">Services</a>
          <a href="/#contact" className="text-foreground/80 transition-colors hover:text-foreground">Contact</a>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-sm border border-ink bg-foreground px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-background transition-colors hover:bg-primary hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Book a Free Call
          </a>
        </nav>
        <a
          href="/#contact"
          className="inline-flex items-center rounded-sm border border-ink bg-foreground px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-background md:hidden"
        >
          Book a Call
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-top mt-24 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl text-foreground">Ettel Daskal</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            Copy with heart for values-based, mission-driven organizations.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2">
            <li><a href="/#about" className="text-foreground/80 hover:text-foreground">About</a></li>
            <li><Link to="/work" className="text-foreground/80 hover:text-foreground">Selected Work</Link></li>
            <li><a href="/#services" className="text-foreground/80 hover:text-foreground">Services</a></li>
            <li><a href="/#contact" className="text-foreground/80 hover:text-foreground">Contact</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Get in touch</p>
          <a href="mailto:etteldaskal@gmail.com" className="text-foreground hover:text-primary">
            etteldaskal@gmail.com
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ettel Daskal. All work shown with permission.
          </p>
        </div>
      </div>
    </footer>
  );
}
