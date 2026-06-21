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

export const Route = createFileRoute("/case-study/$slug")({
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
        { property: "og:url", content: cs ? `/case-study/${cs.slug}` : "/work" },
      ],
      links: cs ? [{ rel: "canonical", href: `/case-study/${cs.slug}` }] : [],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">That case study isn't here.</h1>
        <Link to="/" className="mt-8 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to home
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
                to="/work/$category"
                params={{ category: cs.categorySlug }}
                className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> Back to {cs.category}
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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

  const pdfSamples = cs.samples.filter((s) => isPdf(s.url));
  const otherSamples = cs.samples.filter((s) => !isPdf(s.url));
  const active = pdfSamples[activeIdx];

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <p className="eyebrow">Selected samples</p>
        <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
          Read the book.
        </h2>
        <p className="mt-3 max-w-xl text-sm text-foreground/70">
          Click the right page to turn forward, the left page to go back.
        </p>

        {pdfSamples.length > 1 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {pdfSamples.map((s, i) => (
              <button
                key={s.url}
                type="button"
                onClick={() => setActiveIdx(i)}
                className={
                  "rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition " +
                  (i === activeIdx
                    ? "border-foreground bg-foreground text-background"
                    : "border-border bg-background text-foreground/70 hover:text-foreground")
                }
              >
                {s.label.replace(/\s*\(PDF\)\s*$/i, "")}
              </button>
            ))}
          </div>
        )}

        {active && (
          <div className="mt-8">
            {mounted ? (
              <Suspense
                fallback={
                  <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
                    Loading book…
                  </div>
                }
              >
                <PdfFlipbook key={active.url} url={active.url} title={active.label} />
              </Suspense>
            ) : (
              <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
                Loading book…
              </div>
            )}
          </div>
        )}

        {otherSamples.length > 0 && (
          <ul className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {otherSamples.map((s, i) => (
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
                      Open <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function NextUp({ current }: { current: string }) {
  const cur = CASE_STUDIES.find((c) => c.slug === current);
  return (
    <section>
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16 md:flex-row md:items-end md:justify-between md:py-20">
        <div>
          <p className="eyebrow">More {cur?.category}</p>
          <Link
            to="/work/$category"
            params={{ category: cur?.categorySlug ?? "copywriting" }}
            className="mt-3 inline-flex items-baseline gap-3 font-serif text-3xl text-foreground hover:text-primary md:text-4xl"
          >
            See the full portfolio <ArrowUpRight className="h-5 w-5" />
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
