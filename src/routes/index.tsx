import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, PenLine, Sparkles, GraduationCap } from "lucide-react";

import { SiteNav, SiteFooter } from "@/components/site-chrome";
import wingedGlobe from "@/assets/winged-globe.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ettel Daskal — Copywriting for Mission-Driven Organizations" },
      {
        name: "description",
        content:
          "The writer your story needs. Emotive copywriting and storytelling for nonprofits, schools, and purpose-led brands. Connect to your audience. Move people to act.",
      },
      { property: "og:title", content: "Ettel Daskal — The Writer Your Story Needs" },
      {
        property: "og:description",
        content:
          "Copywriting and storytelling for mission-driven organizations and purpose-led brands. Connect to your audience. Move your people to act. Amplify your impact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: wingedGlobe.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: wingedGlobe.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main id="main">
        <Hero />
        <Pain />
        <Dream />
        <About />
        <WhoIWorkWith />
        <Services />
        <TestimonialsOne />
        <Process />
        <Values />
        <CostOfNotActing />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="paper-grain overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-24">
        <div className="relative z-10">
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--gold)]" /> The Writer Your Story Needs
          </p>
          <h1 className="mt-6 font-serif text-[2.6rem] leading-[1.05] tracking-tight text-foreground md:text-[4.2rem]">
            Copywriting for{" "}
            <span className="italic text-[color:var(--gold)]">mission-driven</span> organizations
            and <span className="italic">purpose-led</span> brands.
          </h1>
          <p className="mt-7 font-serif text-2xl italic leading-snug text-foreground/85 md:text-3xl">
            Connect to your audience. Move your people to act. Amplify your impact.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
            Through emotive storytelling married to hard data, I'll move your audience to act —
            so you can focus on changing the world. (And still have time for a coffee break.)
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link to="/work" className="btn-gold">
              See My Work <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href="#contact" className="btn-teal-outline">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 -z-10 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--amber) 35%, transparent), transparent 70%)" }}
          />
          <img
            src={wingedGlobe.url}
            alt="A pencil-sketch child lifted into the air by a golden, winged sphere — the spark of a story taking flight."
            className="relative w-full select-none"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 2 — PAIN ---------------- */
function Pain() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
          You don't have time to chase your audience.
        </h2>
        <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-foreground/85">
          <p>
            You know you have valuable things to share. You know you can impact lives and make a
            difference. But when it comes to finding the words to explain what you do and
            attracting your audience — you find a headache you don't have time for.
          </p>
          <p>
            Your mission is brilliant. But your messaging is beige. It's run-of-the-mill when you
            need one-of-a-kind. Your wings are clipped. You can't seem to get across the magic
            you've been able to offer the world. And so you're not accomplishing what you could
            be. You're not reaching the people you should — and it's costing you time, money,
            energy, momentum.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 — DREAM ---------------- */
function Dream() {
  return (
    <section className="border-b border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow text-[color:var(--gold)]">The Flip</p>
        <h2 className="mt-4 font-serif text-4xl italic leading-tight text-foreground md:text-5xl">
          Let them come after you.
        </h2>
        <div className="mt-10 space-y-6 text-left text-lg leading-relaxed text-foreground/85">
          <p>
            What if your ideal audience found you on their own? What if your donors came to you
            for the opportunity to have a part in the beautiful world you are building? What if
            your website did the talking — so that when people reached out, you already knew they
            were a good fit? No turning people away. No feeling like a car salesman selling
            something you believe in too much to sell badly.
          </p>
          <p>
            You need a hard-working partner. Someone to uncover the magic that is already there
            and write your story so that your audience gets it.
          </p>
        </div>
        <div className="mt-10">
          <a href="#contact" className="btn-gold">Get In Touch <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 4 — ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        <p className="eyebrow">Every story has a hero. And every hero has a guide.</p>
        <h2 className="mt-5 font-serif text-5xl leading-tight text-foreground md:text-6xl">
          Hi, I'm <span className="italic text-[color:var(--gold)]">Ettel</span>.
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p className="drop-cap">
            I'm a wife and a mother and a teacher and a friend. I'm an actress, an artist, and an
            almost-psychologist — I dropped out mid-Master's and chose sunlight and storytelling
            instead. There's nothing I love more than stories. Except people.
          </p>
          <p>
            I was the kid whose mother got a call from the teacher in third grade — just to check
            if everything was okay at home. Why? Because my spelling sentences were not of the{" "}
            <em>Sarah ate a big red apple</em> variety. They were strung together into a
            spine-tingling horror story about what happened to children who didn't do their
            homework.
          </p>
          <p>
            I just couldn't stick with the mundane when there was a world of stories to be told.
            I haven't outgrown that.
          </p>
          <p className="font-serif text-2xl italic leading-snug text-[color:var(--ink)]">
            Every story has a little bit of magic inside it. I help you uncover it. Because
            people rarely connect to information — they connect to stories.
          </p>
          <p>
            I write website copy for meaningful nonprofits, help mission-driven brand founders
            find the magic in their stories, create content for educators who have something
            valuable to share, and write can't-put-down thriller novel curriculums for schools
            and organizations. I've got many hats, but one umbrella — I'm here to help you help
            them.
          </p>
          <p>
            My goal is to help the people who help the world. My people-connecting skills,
            background in psychology, and love of words combine to help you reach your audience
            with empathy, warmth, and wit. Let my words do the hard work for you. You were made
            for bigger things.
          </p>
        </div>

        <FunFacts />
      </div>
    </section>
  );
}

/* ---------------- FUN FACTS (with curly arrows) ---------------- */
const FACTS = [
  "My favourite hour of the day: the golden hour before sunset — when the whole world is painted gold.",
  "And before dawn, when the world is still quiet and the words come tumbling out.",
  "The things I can't get enough of: planners, coffee mugs, and pretty notebooks.",
  "I interview strangers on the bus. They always have the best stories.",
];

function CurlyArrow({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
      aria-hidden
    >
      <path
        d="M5 50 C 25 50, 30 10, 55 20 S 95 45, 110 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="0"
      />
      <path
        d="M110 18 L 102 20 M110 18 L 107 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FunFacts() {
  return (
    <div className="mt-20 rounded-2xl border border-border bg-[var(--cream)] p-8 md:p-14">
      <p className="eyebrow">A few small things</p>
      <h3 className="mt-3 font-serif text-3xl italic leading-tight md:text-4xl">
        Notes from the margins.
      </h3>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {FACTS.map((fact, i) => (
          <div
            key={i}
            className="relative flex items-start gap-4 rounded-xl border border-[var(--sand)] bg-background/60 p-5"
          >
            <CurlyArrow
              className="mt-1 h-8 w-14 shrink-0 text-[color:var(--gold)]"
              flip={i % 2 === 1}
            />
            <p className="font-serif text-lg italic leading-snug text-foreground/90">{fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SECTION 5 — WHO I WORK WITH ---------------- */
const CLIENT_TYPES = [
  { label: "Nonprofit or charity", body: "Ready to turn your mission into words that move people to give?" },
  { label: "School or educational organization", body: "With powerful content that needs to come alive on the page?" },
  { label: "Wellness or therapy practice", body: "Who wants to reach the people who need you — without feeling salesy?" },
  { label: "Jewish outreach or educational org", body: "Looking for a writer with a passion for teaching and a background in Jewish studies?" },
  { label: "Mission-driven business", body: "Doing work that genuinely helps people and needs copy that reflects that?" },
  { label: "Community program or initiative", body: "With a story worth telling and an audience waiting to hear it?" },
];

const DELIVERABLES = [
  "Tell stories that show your values in action",
  "Bring personality and life to your messaging",
  "Give strategic structure to your copy so the pretty words actually work",
  "Adapt your tone to suit your audience and platforms",
  "Use clear, confident language that rallies — not lectures",
  "Communicate with warmth and clarity to the people you serve",
];

function WhoIWorkWith() {
  return (
    <section id="who" className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
        <div>
          <p className="eyebrow">Who I Work With</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Are you a<span className="italic text-[color:var(--gold)]">…</span>
          </h2>
          <ul className="mt-10 space-y-7">
            {CLIENT_TYPES.map((c) => (
              <li key={c.label}>
                <p className="text-base font-semibold text-foreground">{c.label}</p>
                <p className="mt-1 text-base leading-relaxed text-foreground/75">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pt-20">
          <div className="rounded-2xl border border-border bg-[var(--cream)] p-8 md:sticky md:top-28 md:p-10">
            <p className="eyebrow text-[color:var(--gold)]">Then let's…</p>
            <ul className="mt-6 space-y-4">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
                  {d}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn-gold mt-8">
              Get In Touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 6 — SERVICES ---------------- */
const SERVICES = [
  {
    icon: PenLine,
    title: "Copywriting",
    body: "Websites, emails, donor appeals, campaigns.",
    aka: "a.k.a. words that move people to act.",
  },
  {
    icon: Sparkles,
    title: "Organizational Storytelling",
    body: "Donor impact books, newsletters, event songs, scripts.",
    aka: "a.k.a. finding the story inside the data and making people feel it.",
  },
  {
    icon: GraduationCap,
    title: "Educational Content",
    body: "Curriculum, lesson plans, educational series.",
    aka: "a.k.a. bringing ideas to life with clear and engaging writing.",
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Let me help you <span className="italic text-[color:var(--gold)]">help them</span>.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, aka }) => (
            <article
              key={title}
              className="hover-lift flex flex-col rounded-2xl border border-border bg-background p-8 md:p-10"
            >
              <span
                className="inline-flex h-12 w-12 items-center justify-center rounded-full"
                style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)" }}
              >
                <Icon className="h-6 w-6 text-[color:var(--gold)]" aria-hidden />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{body}</p>
              <p className="mt-4 font-serif text-base italic text-[color:var(--teal)]">{aka}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 7 — TESTIMONIALS (first) ---------------- */
const TESTIMONIALS_ONE = [
  {
    quote:
      "Thank you so much. I literally sleep better at night knowing that you are part of our team.",
    name: "Sam Schwartz",
    title: "Marketing Director, Jewish Outreach Organization",
  },
  {
    quote: "An unbelievably gorgeous and moving piece.",
    name: "",
    title: "Client testimonial",
  },
];

function TestimonialsOne() {
  return (
    <section className="border-b border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="eyebrow text-center">Kind Words</p>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
          {TESTIMONIALS_ONE.map((t, i) => (
            <figure key={i} className="relative rounded-2xl border border-border bg-background p-10">
              <span
                aria-hidden
                className="absolute -top-6 left-8 font-serif text-7xl leading-none text-[color:var(--gold)]/60"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-2xl italic leading-snug text-foreground/90 md:text-[1.75rem]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-sm text-foreground">
                {t.name && <span className="font-semibold">— {t.name}</span>}
                {t.name && t.title && <span className="text-muted-foreground">, </span>}
                {!t.name && <span>— </span>}
                <span className="text-muted-foreground">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          <a href="#contact" className="btn-gold">Get In Touch</a>
          <Link to="/work" className="btn-teal-outline">View My Work</Link>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 8 — PROCESS ---------------- */
const STEPS = [
  {
    n: "01",
    title: "We Meet",
    body: "You tell me about your mission, your audience, and what you need. I ask a lot of questions. Good ones.",
  },
  {
    n: "02",
    title: "I Dig In",
    body: "I find the story underneath your work — the magic that was always there.",
  },
  {
    n: "03",
    title: "The Words Come",
    body: "I write. You review. We refine until every word feels exactly right.",
  },
];

function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">The Process</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            How it <span className="italic text-[color:var(--gold)]">works</span>.
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-[var(--cream)] p-8 md:p-10">
              <span
                className="inline-flex h-14 w-14 items-center justify-center rounded-full font-serif text-2xl text-[color:var(--parchment)]"
                style={{ background: "var(--gold)" }}
              >
                {s.n}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- SECTION 9 — VALUES (dark) ---------------- */
const VALUES = [
  {
    title: "Connection, not coercion",
    body: "No fear tactics. No manufactured urgency. Clear, honest writing that gives your audience what they need to decide — on their own terms. That's not just good ethics. It's good copywriting.",
  },
  {
    title: "More extra, less ordinary",
    body: "Fresh, creative thinking on every project. No cookie-cutter copy. Your story is specific. Your words should be too.",
  },
  {
    title: "Brains before bots",
    body: "Every word written by a human who genuinely cares about your mission. Because the people you serve deserve that.",
  },
];

function Values() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--amber)]">
            Why Work With Me
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Get your <span className="italic text-[color:var(--amber)]">happily-ever-after</span>.
          </h2>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-background/90">
            Don't come across like a sleazy car salesman when you're a fairy godmother.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-background/80">
            Your work exists to help people. Your copy should feel that way too.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t border-background/20 pt-6">
              <h3 className="font-serif text-2xl text-background">{v.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-background/80">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 11 — COST OF NOT ACTING ---------------- */
const COSTS = [
  { title: "You lose money.", body: "Donors don't give. Clients don't convert. Students don't enroll." },
  { title: "You lose time.", body: "You keep trying to write it yourself. It keeps not working." },
  { title: "You lose momentum.", body: "The longer your message stays unclear, the longer the people who need you can't find you." },
];

function CostOfNotActing() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">The Cost of Waiting</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">
            What happens when your copy <span className="italic text-[color:var(--rose)]">doesn't work</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {COSTS.map((c) => (
            <div key={c.title} className="border-t-2 border-[color:var(--rose)] pt-6">
              <h3 className="font-serif text-3xl italic text-foreground">{c.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-foreground/80">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="#contact" className="btn-gold">
            Get In Touch <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 12 — CONTACT ---------------- */
const contactSchema = z.object({
  name: z.string().trim().min(1, "Please share your name.").max(100),
  email: z.string().trim().email("That doesn't look like a valid email.").max(255),
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
      message: String(form.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = `New website inquiry from ${parsed.data.name}`;
    const body = [
      `Name: ${parsed.data.name}`,
      `Email: ${parsed.data.email}`,
      "",
      "Message:",
      parsed.data.message,
    ].join("\n");
    window.location.href = `mailto:etteldaskal@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow text-[color:var(--gold)]">Get in touch</p>
        <h2 className="mt-4 font-serif text-5xl leading-tight text-foreground md:text-6xl">
          Let's <span className="italic text-[color:var(--gold)]">talk</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/85">
          If you're working on something meaningful and need help finding the words for it — I'd
          love to hear about it.
        </p>
        <p className="mt-4">
          <a href="mailto:etteldaskal@gmail.com" className="text-[color:var(--teal)] hover:underline">
            etteldaskal@gmail.com
          </a>
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="mx-auto mt-12 grid gap-5 rounded-2xl border border-border bg-[var(--cream)] p-8 text-left md:p-10"
        >
          <Field label="Your name" name="name" error={errors.name} />
          <Field label="Email" name="email" type="email" error={errors.email} />
          <div>
            <label htmlFor="message" className="eyebrow mb-2 block">
              Tell me about your project
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="The audience you're trying to reach, the piece on your desk, what success looks like…"
            />
            {errors.message && <p className="mt-2 text-sm text-destructive">{errors.message}</p>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="btn-gold">
              Book a Free Call <ArrowUpRight className="h-4 w-4" />
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
        className="w-full rounded-md border border-border bg-background px-4 py-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
