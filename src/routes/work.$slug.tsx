import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CASE_STUDIES, getCaseStudy, type CaseStudy } from "@/lib/case-studies";

const PdfFlipbook = lazy(() =>
  import("@/components/pdf-flipbook").then((m) => ({ default: m.PdfFlipbook })),
);

function isPdf(url: string) {
  return /\.pdf(\?|$)/i.test(url);
}

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const cs = getCaseStudy(params.slug);
    if (!cs) throw notFound();
    return { cs };
  },
  head: ({ loaderData }) => {
    const cs = loaderData?.cs;
    const title = cs ? `${cs.title} — Ettel Daskal` : "Case study — Ettel Daskal";
    const desc = cs?.summary ?? "Case study by Ettel Daskal.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
        { property: "og:url", content: cs ? `/work/${cs.slug}` : "/work" },
      ],
      links: cs ? [{ rel: "canonical", href: `/work/${cs.slug}` }] : [],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">That case study isn't here.</h1>
        <Link to="/work" className="mt-8 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to all work
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function CaseStudyPage() {
  const { cs } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <article>
          <header className="rule-top border-b border-border">
            <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All work
              </Link>
              <p className="eyebrow mt-8">{cs.category}</p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
                {cs.title}
              </h1>
              <p className="mt-6 max-w-2xl font-serif text-xl italic leading-snug text-foreground/85 md:text-2xl">
                {cs.overview}
              </p>
            </div>
          </header>

          <Section label="Objective" body={cs.objective} />
          <Section label="Audience" body={cs.audience} />
          <Section label="My role" body={cs.role} />
          <Section label="Approach" body={cs.approach} />
          <Section label="Outcome" body={cs.outcome} emphasis />

          <Samples cs={cs} />

          <NextUp current={cs.slug} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ label, body, emphasis }: { label: string; body: string; emphasis?: boolean }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-4xl gap-8 px-6 py-12 md:grid-cols-12 md:py-16">
        <p className="eyebrow md:col-span-3">{label}</p>
        <p
          className={
            (emphasis ? "font-serif text-2xl italic md:text-3xl " : "text-lg ") +
            "leading-relaxed text-foreground/90 md:col-span-9"
          }
        >
          {body}
        </p>
      </div>
    </section>
  );
}

function Samples({ cs }: { cs: CaseStudy }) {
  if (cs.samples.length === 0) {
    return (
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
          <p className="eyebrow">Selected samples</p>
          <p className="mt-4 max-w-xl text-base text-foreground/75">
            Samples available on request — get in touch and I'll send a few
            pieces tailored to what you're working on.
          </p>
          <Link
            to="/"
            hash="contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Request samples <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    );
  }

  if (cs.layout === "book") {
    return (
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <p className="eyebrow">Selected samples</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Open the book.
          </h2>
          <BookSpread cs={cs} />
          {cs.samples.map((s) => (
            <a
              key={s.url}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              {s.label} <ExternalLink className="h-4 w-4" />
            </a>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <p className="eyebrow">Selected samples</p>
        <ul className="mt-6 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {cs.samples.map((s, i) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift flex h-full flex-col justify-between gap-8 bg-background p-8"
              >
                <span className="font-serif text-sm italic text-muted-foreground">
                  Sample {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-serif text-2xl text-foreground">{s.label}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                    View original <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BookSpread({ cs }: { cs: CaseStudy }) {
  return (
    <div className="mt-10 perspective-[1800px]">
      <div className="group relative mx-auto grid max-w-3xl grid-cols-2 border border-ink/40 bg-[oklch(0.97_0.01_75)] shadow-[inset_0_0_60px_oklch(0.85_0.02_70)] transition-transform duration-500 hover:-rotate-x-1">
        {/* Spine */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-ink/20" />
        <div aria-hidden className="pointer-events-none absolute inset-y-6 left-1/2 w-6 -translate-x-1/2 bg-gradient-to-r from-transparent via-ink/10 to-transparent" />

        {/* Left page */}
        <div className="flex flex-col gap-6 p-10 md:p-14">
          <p className="eyebrow">{cs.category}</p>
          <h3 className="font-serif text-3xl leading-tight text-foreground">{cs.title}</h3>
          <p className="text-sm leading-relaxed text-foreground/80">{cs.overview}</p>
          <p className="mt-auto text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">— i —</p>
        </div>

        {/* Right page */}
        <div className="flex flex-col gap-6 border-l border-ink/10 p-10 md:p-14">
          <p className="font-serif text-2xl italic leading-snug text-foreground/90">
            "Your support became this."
          </p>
          <p className="text-sm leading-relaxed text-foreground/80">{cs.outcome}</p>
          <a
            href={cs.samples[0]?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 self-start text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            Turn the page <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
        Mockup spread · click through for the full publication
      </p>
    </div>
  );
}

function NextUp({ current }: { current: string }) {
  const idx = CASE_STUDIES.findIndex((c) => c.slug === current);
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length];
  return (
    <section>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div>
          <p className="eyebrow">Next case study</p>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="mt-3 inline-flex items-baseline gap-3 font-serif text-3xl text-foreground hover:text-primary md:text-4xl"
          >
            {next.title} <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background hover:bg-primary"
        >
          Book a Free Call <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  );
}
