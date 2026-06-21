import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import {
  getCategory,
  getCaseStudiesByCategory,
  type CategorySlug,
  type CaseStudy,
} from "@/lib/case-studies";

const PdfFlipbook = lazy(() =>
  import("@/components/pdf-flipbook").then((m) => ({ default: m.PdfFlipbook })),
);

function isPdf(url: string) {
  return /\.pdf(\?|$)/i.test(url);
}

export const Route = createFileRoute("/work/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    const items = getCaseStudiesByCategory(category.slug);
    return { category, items };
  },
  head: ({ loaderData }) => {
    const category = loaderData?.category;
    const title = category
      ? `${category.title} — Ettel Daskal`
      : "Portfolio — Ettel Daskal";
    const desc = category?.intro ?? "Selected work by Ettel Daskal.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
      ],
      links: category
        ? [{ rel: "canonical", href: `/work/${category.slug}` }]
        : [],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">
          That portfolio isn't here.
        </h1>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
});

function CategoryPage() {
  const { category, items } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="rule-top border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <Link
              to="/"
              hash="services"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> All services
            </Link>
            <p className="eyebrow mt-8">Portfolio</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              {category.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
              {category.intro}
            </p>
          </div>
        </section>

        {items.length === 0 ? (
          <section className="border-b border-border">
            <div className="mx-auto max-w-3xl px-6 py-20 text-center">
              <p className="text-base text-foreground/75">
                More samples available on request — get in touch and I'll send
                a few pieces tailored to what you're working on.
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
        ) : (
          items.map((cs: CaseStudy) => (
            <InlineSamples key={cs.slug} cs={cs} />
          ))
        )}
      </main>
      <SiteFooter />
    </div>
  );
}



function InlineSamples({ cs }: { cs: CaseStudy }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const pdfSamples = cs.samples.filter((s) => isPdf(s.url));
  const otherSamples = cs.samples.filter((s) => !isPdf(s.url));
  const [activeIdx, setActiveIdx] = useState(0);
  const active = pdfSamples[activeIdx];

  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-14 md:py-20">
        <p className="eyebrow">Sample</p>
        <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
          {cs.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/80">
          {cs.summary}
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
            <p className="mt-3 text-sm text-foreground/70">
              Click the right page to turn forward, the left page to go back.
            </p>
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

// Suppress unused warning for CategorySlug import — keeps type re-export shape.
export type _CategorySlug = CategorySlug;
