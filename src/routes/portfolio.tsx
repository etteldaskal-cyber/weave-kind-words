import { lazy, Suspense, useState } from "react";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import { createClientOnlyFn } from "@tanstack/react-start";
import { ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";

const loadPdfFlipbook = createClientOnlyFn(() =>
  import("@/components/pdf-flipbook.client").then((module) => ({
    default: module.PdfFlipbook,
  })),
);

const PdfFlipbook = lazy(loadPdfFlipbook);

function PdfFallback() {
  return (
    <div className="flex h-[520px] items-center justify-center text-sm text-muted-foreground">
      Loading…
    </div>
  );
}

function isPdf(url: string) {
  return /\.pdf(\?|$)/i.test(url);
}

function isHtml(url: string) {
  return /\.html?(\?|$)/i.test(url);
}

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Selected Work — Ettel Daskal" },
      { name: "description", content: "Selected writing samples by Ettel Daskal." },
      { property: "og:title", content: "Selected Work — Ettel Daskal" },
      { property: "og:description", content: "Selected writing samples by Ettel Daskal." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function CardPreview({ cs }: { cs: CaseStudy }) {
  // Pick a visual hint for the card thumbnail
  if (cs.images && cs.images.length > 0) {
    return (
      <img
        src={cs.images[0].url}
        alt={cs.title}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
        loading="lazy"
      />
    );
  }
  return null;
}

function SampleContent({ cs }: { cs: CaseStudy }) {
  const pdfs = cs.samples.filter((s) => isPdf(s.url));
  const htmls = cs.samples.filter((s) => isHtml(s.url));
  const [activeIdx, setActiveIdx] = useState(0);
  const activePdf = pdfs[activeIdx];

  return (
    <div className="space-y-8">
      {cs.summary && (
        <p className="text-base leading-loose text-foreground/80">
          {cs.summary}
        </p>
      )}

      {pdfs.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {pdfs.map((s, i) => (
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

      {activePdf && (
        <div>
          <ClientOnly fallback={<PdfFallback />}>
            <Suspense fallback={<PdfFallback />}>
              <PdfFlipbook
                url={activePdf.url}
                title={activePdf.label}
                mode={cs.slug === "torah-nugget" ? "single" : "spread"}
              />
            </Suspense>
          </ClientOnly>
          <a
            href={activePdf.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            Open PDF <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}

      {htmls.map((s) => (
        <div key={s.url} className="space-y-3">
          <div className="overflow-hidden rounded-lg border border-border bg-background">
            <iframe
              src={s.url}
              title={`${cs.title} — ${s.label}`}
              className="h-[70vh] w-full"
              loading="lazy"
            />
          </div>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary"
          >
            Open in new tab <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      ))}

      {cs.images && cs.images.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2">
          {cs.images.map((img) => (
            <figure key={img.url} className="border border-border bg-background">
              <img
                src={img.url}
                alt={`${cs.title} — ${img.label}`}
                className="block h-auto w-full"
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      )}

      {cs.lyrics && cs.lyrics.length > 0 && (
        <div className="space-y-8">
          {cs.lyrics.map((song) => (
            <article
              key={song.title}
              className="border border-border bg-background p-8 md:p-10"
            >
              <h3 className="font-serif text-2xl text-foreground md:text-3xl">
                {song.title}
              </h3>
              {song.subtitle && (
                <p className="mt-2 text-sm italic text-muted-foreground">
                  {song.subtitle}
                </p>
              )}
              <pre className="mt-6 whitespace-pre-wrap font-serif text-base leading-loose text-foreground/85">
                {song.body}
              </pre>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Recording available upon request.
              </p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

function PortfolioCard({ cs }: { cs: CaseStudy }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="hover-lift group relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-secondary p-6 text-center"
        >
          <CardPreview cs={cs} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20" />
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-end">
            <h3 className="font-serif text-2xl text-foreground md:text-3xl">
              {cs.title}
            </h3>
            <span className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--teal)]">
              View sample
            </span>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl md:text-4xl">
            {cs.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {cs.summary}
          </DialogDescription>
        </DialogHeader>
        <SampleContent cs={cs} />
      </DialogContent>
    </Dialog>
  );
}

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CASE_STUDIES.map((cs) => (
                <PortfolioCard key={cs.slug} cs={cs} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
