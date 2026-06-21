import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { CASE_STUDIES } from "@/lib/case-studies";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Ettel Daskal" },
      {
        name: "description",
        content:
          "Case studies in educational publishing, donor storytelling, website copy, and creative campaigns — for mission-driven organizations.",
      },
      { property: "og:title", content: "Selected Work — Ettel Daskal" },
      {
        property: "og:description",
        content:
          "Case studies in educational publishing, donor storytelling, and creative campaigns — copy with heart for values-based organizations.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const byCategory = CASE_STUDIES.reduce<Record<string, typeof CASE_STUDIES>>((acc, cs) => {
    (acc[cs.category] ||= []).push(cs);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <section className="rule-top border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
            <p className="eyebrow">All work</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.05] text-foreground md:text-7xl">
              Case studies in writing that has to mean something.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
              A few of the projects I'm proudest of, grouped by what they were
              really for. Click in for the full story behind each one.
            </p>
          </div>
        </section>

        {Object.entries(byCategory).map(([category, items]) => (
          <section key={category} className="border-b border-border">
            <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
              <p className="eyebrow">{category}</p>
              <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
                {items.map((cs) => (
                  <Link
                    key={cs.slug}
                    to="/work/$slug"
                    params={{ slug: cs.slug }}
                    className="group bg-background p-8 transition-colors hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-10"
                  >
                    <h2 className="font-serif text-3xl text-foreground">{cs.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{cs.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                      Read case study <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <SiteFooter />
    </div>
  );
}
