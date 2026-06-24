import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CASE_STUDIES, type CaseStudy } from "@/lib/case-studies";

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

function getPrimaryUrl(cs: CaseStudy) {
  if (cs.samples.length > 0) return cs.samples[0].url;
  if (cs.images && cs.images.length > 0) return cs.images[0].url;
  return null;
}

function PortfolioCard({ cs }: { cs: CaseStudy }) {
  const primaryUrl = getPrimaryUrl(cs);
  const card = (
    <div className="hover-lift flex aspect-square flex-col items-center justify-center rounded-2xl border border-border bg-secondary p-6 text-center">
      <h3 className="font-serif text-2xl text-foreground md:text-3xl">
        {cs.title}
      </h3>
      {primaryUrl && (
        <ExternalLink className="mt-4 h-5 w-5 text-[color:var(--teal)]" />
      )}
    </div>
  );

  if (primaryUrl) {
    return (
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {card}
      </a>
    );
  }

  return (
    <Link
      to="/work/$category"
      params={{ category: cs.categorySlug }}
      className="block"
    >
      {card}
    </Link>
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
