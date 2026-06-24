import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CATEGORIES, CASE_STUDIES } from "@/lib/case-studies";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Ettel Daskal" },
      { name: "description", content: "Selected writing samples by Ettel Daskal, organized by copywriting, organizational storytelling, and educational content." },
      { property: "og:title", content: "Portfolio — Ettel Daskal" },
      { property: "og:description", content: "Selected writing samples by Ettel Daskal, organized by copywriting, organizational storytelling, and educational content." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="rule-top border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              A few pieces of my work.
            </h1>
          </div>
        </section>

        {CATEGORIES.map((category) => {
          const items = CASE_STUDIES.filter((cs) => cs.categorySlug === category.slug);
          return (
            <section key={category.slug} className="border-b border-border">
              <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
                  {category.title}
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((cs) => (
                    <article
                      key={cs.slug}
                      className="hover-lift flex flex-col rounded-2xl border border-border bg-secondary p-8"
                    >
                      <h3 className="font-serif text-2xl text-foreground">
                        {cs.title}
                      </h3>

                      {cs.samples.length > 0 && (
                        <ul className="mt-6 space-y-2">
                          {cs.samples.map((sample) => (
                            <li key={sample.url}>
                              <a
                                href={sample.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--teal)] hover:underline"
                              >
                                {sample.label.replace(/\s*\(PDF\)\s*$/i, "")}
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-b border-border bg-[var(--cream)]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <a
              href="mailto:etteldaskal@gmail.com"
              className="btn-gold inline-flex items-center gap-2"
            >
              Request Samples
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
