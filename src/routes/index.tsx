import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import {
  ArrowUpRight,
  BookOpen,
  Feather,
  HeartHandshake,
  Mic2,
  Sparkles,
  GraduationCap,
  Compass,
} from "lucide-react";

import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { Typewriter } from "@/components/typewriter";
import { HeroPanel } from "@/components/hero-panel";
import { CASE_STUDIES } from "@/lib/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ettel Daskal — Copy with heart for mission-driven work" },
      {
        name: "description",
        content:
          "Educational storyteller and copywriter for values-based, mission-driven organizations. Curriculum, donor storytelling, website copy, and creative campaigns.",
      },
      { property: "og:title", content: "Ettel Daskal — Copy with heart" },
      {
        property: "og:description",
        content:
          "Educational storyteller and copywriter for mission-driven organizations. Curriculum, donor storytelling, and creative campaigns that translate heart into clear, resonant words.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const SERVICES = [
  {
    icon: BookOpen,
    title: "Educational Publishing & Curriculum",
    body: "Long-form educational writing, curriculum, and publishing projects that hold their own intellectually and meet readers where they are.",
  },
  {
    icon: HeartHandshake,
    title: "Donor & Organizational Storytelling",
    body: "Donor books, sponsorship stories, newsletters, and fundraising communications that turn gratitude and mission into language people feel.",
  },
  {
    icon: Feather,
    title: "Website & Mission Copy",
    body: "Homepages, about pages, and program copy that translate heartfelt work into clear, warm, and confident words.",
  },
  {
    icon: Mic2,
    title: "Creative Campaigns & Event Content",
    body: "Songs, scripts, dinner and convention themes, and campaign writing built around a single emotional through-line.",
  },
];

const PRINCIPLES = [
  {
    icon: Sparkles,
    title: "Emotionally intelligent",
    body: "Writing that respects the reader and earns its weight, line by line.",
  },
  {
    icon: GraduationCap,
    title: "Educator's clarity",
    body: "Six years in the classroom taught me that complex isn't the same as complicated.",
  },
  {
    icon: Compass,
    title: "Mission-aligned",
    body: "I work with organizations whose work I genuinely believe in, so the writing can carry conviction.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <SelectedWork />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="rule-top border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-28">
        <div className="flex flex-col justify-center">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-foreground" /> Copy with heart
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight text-foreground md:text-7xl">
            I write for the
            <br />
            organizations that are
            <br />
            <span className="italic"><Typewriter /></span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
            I'm Ettel — a writer, educator, and creative strategist helping
            values-based, mission-driven organizations educate, inspire, and
            connect through copy that actually sounds like them.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book a Free Call <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-transparent px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground"
            >
              See the work
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] w-full overflow-hidden border border-border">
            <HeroPanel />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Vol. 01 · Selected work, 2019 — present
          </p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <p className="eyebrow">About</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            At the intersection of education, psychology, and storytelling.
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="drop-cap text-lg leading-relaxed text-foreground/90">
            My work lives where teaching, psychology, and storytelling meet. I
            specialize in crafting content that communicates complex ideas with
            clarity, emotional depth, and accessibility — whether through
            educational publishing, donor storytelling, curriculum development,
            newsletters, campaign writing, or creative event content.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            For the past several years I've partnered with schools and nonprofits
            to build messaging and educational materials for audiences ranging
            from young students to major donors. I currently write for{" "}
            <span className="font-medium">Oorah's Torah Nuggets</span>, an
            educational publishing initiative presenting foundational Jewish
            concepts in a way that is engaging, thoughtful, and accessible
            across backgrounds and ages.
          </p>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Before transitioning into full-time creative and educational
            content work, I taught English at the middle and high school level
            for six years — an experience that continues to shape my sensitivity
            to audience and the power of clear, meaningful language. I hold a
            B.S. in Psychology, which deeply informs my approach to messaging
            and emotionally resonant storytelling.
          </p>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10 md:grid-cols-4">
            <Stat n="12,500+" label="Copies of Torah Nugget printed" />
            <Stat n="$10,000" label="Spontaneously raised from one newsletter" />
            <Stat n="5 years" label="Teaching English, grades 6–10" />
            <Stat n="B.S." label="Psychology · masters dropout" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <dt className="font-serif text-3xl text-primary md:text-4xl">{n}</dt>
      <dd className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </dd>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">What I do</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Four ways I help organizations sound like themselves.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every project starts the same way: a conversation about who you're
            actually trying to reach, and what you want them to feel when they
            do.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
          {SERVICES.map(({ icon: Icon, title, body }) => (
            <article key={title} className="bg-background p-8 md:p-10">
              <Icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              Four projects, four audiences,
              <br className="hidden md:block" /> one through-line.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-foreground hover:text-primary md:self-end"
          >
            View all work <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((cs, idx) => (
            <li key={cs.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: cs.slug }}
                className="hover-lift block h-full border border-border bg-card p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring md:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-sm italic text-muted-foreground">
                    No. {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow">{cs.category}</span>
                </div>
                <h3 className="mt-6 font-serif text-3xl leading-tight text-foreground">
                  {cs.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">
                  {cs.summary}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-primary">
                  Read the case study <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Approach</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
              The work has to mean something — or it isn't worth writing.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/80">
              I take on projects I genuinely believe in, because that conviction
              is what lets the writing carry weight. The audience feels it when
              the writer does.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden border border-border bg-border md:col-span-7 md:grid-cols-1">
            {PRINCIPLES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-6 bg-secondary p-8">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden />
                <div>
                  <h3 className="font-serif text-2xl text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/75">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  // TODO: swap with real testimonials once provided by Ettel.
  const placeholders = [
    { quote: "[Client testimonial — replace with real quote]", name: "—", title: "Title, Organization" },
    { quote: "[Client testimonial — replace with real quote]", name: "—", title: "Title, Organization" },
  ];
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="eyebrow text-primary-foreground/70">Kind words</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
          The people I've written for, in their own words.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border border-primary-foreground/20 bg-primary-foreground/20 md:grid-cols-2">
          {placeholders.map((t, i) => (
            <figure key={i} className="bg-primary p-10">
              <blockquote className="font-serif text-2xl leading-snug italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 text-xs uppercase tracking-[0.18em] text-primary-foreground/80">
                {t.name} · {t.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please share your name.").max(100),
  email: z.string().trim().email("That doesn't look like a valid email.").max(255),
  service: z.string().trim().min(1, "Pick what you'd like to talk about."),
  message: z.string().trim().min(1, "Tell me a little about your project.").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      service: String(form.get("service") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = `New website inquiry from ${parsed.data.name}`;
    const body = [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      `Service: ${parsed.data.service}`,
      "",
      "Message:",
      parsed.data.message,
    ].join("\n");
    window.location.href = `mailto:etteldaskal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Let's talk about what you're trying to say.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-foreground/80">
            Tell me a little about your organization and the piece of writing
            on your desk. I'll reply within two business days to set up a free,
            no-pressure call.
          </p>
          <p className="mt-8 text-sm">
            Or write to me directly at{" "}
            <a className="text-primary underline-offset-4 hover:underline" href="mailto:etteldaskal@gmail.com">
              etteldaskal@gmail.com
            </a>
            .
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="md:col-span-7 md:col-start-6">
          <div className="grid gap-6 border border-border bg-card p-8 md:p-10">
            <Field label="Your name" name="name" error={errors.name} />
            <Field label="Email" name="email" type="email" error={errors.email} />
            <div>
              <label htmlFor="service" className="eyebrow mb-2 block">
                What's the project?
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:border-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="" disabled>Select a focus…</option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>{s.title}</option>
                ))}
                <option value="Something else">Something else</option>
              </select>
              {errors.service && <p className="mt-2 text-xs text-destructive">{errors.service}</p>}
            </div>
            <div>
              <label htmlFor="message" className="eyebrow mb-2 block">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What are you working on?"
                className="w-full resize-y border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:border-foreground focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.message && <p className="mt-2 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book a Free Call <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-border bg-background px-3 py-3 text-sm text-foreground focus:outline-none focus:border-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </div>
  );
}
