import { Link, createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ArrowRight } from "lucide-react";
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
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              A few pieces of my work.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-loose text-foreground/80">
              Samples organized by the kind of writing each one required. If you'd like to see something tailored to what you're working on, get in touch.
            </p>
          </div>
        </section>

        {CATEGORIES.map((category) => {
          const items = CASE_STUDIES.filter((cs) => cs.categorySlug === category.slug);
          return (
            <section key={category.slug} className="border-b border-border">
              <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
                <div className="max-w-3xl">
                  <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
                    {category.title}
                  </h2>
                  <p className="mt-4 text-lg leading-loose text-foreground/80">
                    {category.intro}
                  </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((cs) => (
                    <article
                      key={cs.slug}
                      className="hover-lift flex flex-col rounded-2xl border border-border bg-secondary p-8"
                    >
                      <h3 className="font-serif text-2xl text-foreground">
                        {cs.title}
                      </h3>
                      <p className="mt-3 flex-1 text-base leading-loose text-foreground/80">
                        {cs.summary}
                      </p>

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

                      <Link
                        to="/work/$category"
                        params={{ category: category.slug }}
                        className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline"
                      >
                        View {category.title.toLowerCase()} samples
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-b border-border bg-[var(--cream)]">
          <div className="mx-auto max-w-3xl px-6 py-20 text-center">
            <p className="font-serif text-2xl text-foreground">
              Want to see something specific?
            </p>
            <p className="mt-4 text-foreground/80">
              I'd be happy to pull together a few samples matched to your project.
            </p>
            <p className="mt-6">
              <a
                href="mailto:etteldaskal@gmail.com"
                className="btn-gold inline-flex items-center gap-2"
              >
                Request Samples
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
