import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Building2, Coffee, BookOpen, Heart } from "lucide-react";


import { SiteNav, SiteFooter } from "@/components/site-chrome";
import wingedGlobe from "@/assets/winged-globe.png.asset.json";
import heroBackground from "@/assets/hero-background.png.asset.json";

import clippedWings from "@/assets/clipped-wings.png.asset.json";
import sunMotif from "@/assets/sun-motif.png.asset.json";

import quill from "@/assets/quill.jpg.asset.json";
import spellingWorksheet from "@/assets/spelling-worksheet-v2.png.asset.json";
import envelopeTransparent from "@/assets/envelope-transparent.png.asset.json";

import hats from "@/assets/magical-hats.png.asset.json";
import plants from "@/assets/plants-sprouts.png.asset.json";
import ettelPortrait from "@/assets/ettel-portrait.png.asset.json";
import storybookSpread from "@/assets/storybook-spread.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ettel Daskal — Copywriting for Mission-Driven Organizations" },
      {
        name: "description",
        content:
          "The writer your story needs. Emotive copywriting and storytelling for nonprofits, schools, wellness practices, and purpose-led brands.",
      },
      { property: "og:title", content: "Ettel Daskal — The Writer Your Story Needs" },
      {
        property: "og:description",
        content:
          "Copywriting and storytelling for mission-driven organizations and purpose-led brands. Reach the people who need you most.",
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
        <hr className="section-divider" />
        <Pain />
        <hr className="section-divider" />
        <Dream />
        <hr className="section-divider" />
        <About />
        <hr className="section-divider" />
        <WhoIWorkWith />
        <hr className="section-divider" />
        <Services />
        <hr className="section-divider" />
        <TestimonialsOne />
        <PlantsDivider />
        <Process />
        <hr className="section-divider" />
        <Values />
        <TestimonialsTwo />
        <GentleNudge />
        <hr className="section-divider" />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}


function PlantsDivider() {
  return (
    <div className="flex justify-center border-b border-border py-10">
      <img
        src={plants.url}
        alt=""
        aria-hidden
        className="h-96 w-auto select-none object-contain illustration md:h-[32rem]"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="paper-grain relative border-b border-border">
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="relative z-10">
          <p className="flex items-start gap-3" style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8C7A62" }}>
            <span className="mt-2.5 h-px w-10 bg-[var(--gold)] shrink-0" />
            <span>COPY & WRITING FOR <span className="text-[color:var(--gold)]">MISSION-DRIVEN</span> ORGANIZATIONS AND <span className="text-[color:var(--gold)]">PURPOSE-LED</span> BRANDS</span>
          </p>
          <h1 className="mt-6 font-serif leading-[1.05] tracking-tight text-foreground" style={{ fontSize: "52px" }}>
            The Writer Your Story Needs
          </h1>
          <p className="mt-7 text-foreground/85" style={{ fontSize: "18px", lineHeight: 1.8, maxWidth: "520px" }}>
            Through emotive storytelling and data-based strategy, I'll move your audience to act&nbsp;&nbsp;—&nbsp;so you can focus on changing the world (and still have time for a coffee break.)&nbsp;
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/work/$category"
              params={{ category: "copywriting" }}
              className="btn-gold"
            >
              See My Work
            </Link>
            <a href="#contact" className="btn-teal-outline">
              Get In Touch
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------------- SECTION 2 — PAIN ---------------- */
function Pain() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[680px] px-6">
        <h2 className="font-serif leading-tight text-foreground text-center">
          You don't have time to chase after your audience.
        </h2>
        <div className="mt-14 text-foreground/85 pain-body">
          <p>You know you have valuable things to share.</p>
          <p>You know you can impact lives and make a difference.</p>
          <p>But you can't seem to get across the magic you know you can offer the world.</p>
          <p>When it comes to finding the right words to explain what you do and attract your audience — you find a headache you don't have time for.</p>
          <p>And that means you're not accomplishing what you could be.</p>
          <p>You're not reaching the people you should — and it's costing you time, money, and energy.</p>
        </div>
        <p className="wings-line" style={{ color: "var(--gold)" }}>
          Your wings are clipped.
        </p>
        <img
          src={clippedWings.url}
          alt=""
          aria-hidden
          className="mx-auto mt-10 select-none illustration"
          style={{ maxWidth: "120px", display: "block" }}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 — DREAM ---------------- */
function Dream() {
  return (
    <section className="paper-grain relative border-b border-border bg-[var(--cream)]">
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${storybookSpread.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.25,
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 85%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-[680px] px-6">
        <h2 className="font-serif leading-tight text-foreground text-center">
          What if they came after you?
        </h2>
        <div className="mt-14 space-y-6 text-foreground/85">
          <div className="what-if-body">
            <p className="text-left">What if your ideal audience found you on their own?</p>
            <p className="text-left">What if the people you most want to reach came to you for the opportunity to have a part in the beautiful world you are building?</p>
            <p className="text-left">What if your website did the talking — so that when people reached out, they were already sold on what you offer the world?</p>
            <p className="text-left">What if you never had to feel like a desperate car salesman instead of the changemaker that you are?</p>
          </div>
          <div>
            <p className="partner-line">
              You need a hard-working partner.
            </p>
          </div>
          <div className="pt-6 sm:pt-10">
            <p>
              Someone to uncover the magic that is already there and write your story so that your audience gets it.
            </p>
          </div>
        </div>
        <div className="mt-14 text-center">
          <a href="#contact" className="btn-gold">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}


/* ---------------- CURLY ARROW ---------------- */
function CurlyArrow({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={{ transform: flip ? "scaleX(-1)" : undefined }} aria-hidden>
      <path d="M5 50 C 25 50, 30 10, 55 20 S 95 45, 110 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M110 18 L 102 20 M110 18 L 107 26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- UP-RIGHT ARROW (to portrait) ---------------- */
function UpRightArrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 60" className={className} aria-hidden>
      <path d="M5 50 Q 35 58, 55 38 T 110 15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M110 15 L 100 17 M110 15 L 106 25" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- SECTION 4 — ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow text-center">EVERY GOOD STORY HAS A HERO. AND EVERY GOOD HERO HAS A GUIDE.</p>

        <div className="mt-8 flex flex-col items-center text-center">
          <div className="portrait-frame">
            <img src={ettelPortrait.url} alt="Ettel Daskal" loading="lazy" decoding="async" />
          </div>
          <div className="relative mt-6 inline-block">
            <h2 className="font-serif leading-tight text-foreground m-0 text-center">
              Hi, I'm Ettel.
            </h2>
            <div className="absolute -right-4 -top-4 sm:-right-6 sm:-top-6" style={{ width: "130px", height: "60px" }}>
              <UpRightArrow className="absolute inset-0 h-full w-full text-[color:var(--gold)]" />
              <span className="guide-label absolute right-0 top-0 m-0 whitespace-nowrap">
                a.k.a. your guide
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="space-y-6 text-foreground/85">
            <img
              src={sunMotif.url}
              alt=""
              aria-hidden
              className="illustration sun-float"
              loading="lazy"
              decoding="async"
            />
            <p>
              I'm a wife and a mother and a teacher and a friend. I'm an actress, an artist, and an almost-psychologist (I dropped out mid-Master's and chose to brighten the world with storytelling instead.)
            </p>
            <p>
              <img
                src={spellingWorksheet.url}
                alt=""
                aria-hidden
                className="illustration"
                style={{ width: "200px", float: "right", margin: "0 0 1rem 1.5rem", mixBlendMode: "multiply" }}
                loading="lazy"
                decoding="async"
              />
              I was the kid whose third-grade spelling sentences appalled my teacher and thrilled my
              class. Instead of the typical <em>Sarah ate a crunchy apple</em>, I strung them together
              into a spine-tingling horror story about what happened to children who didn't do their
              homework. I just couldn't stick with the mundane when there was a world of stories to
              be told — and I still haven't outgrown that.
            </p>
            <p>
              There's nothing I love more than stories — except maybe people. (And pretty coffee mugs. And new leather notebooks.)
            </p>
            <p>
              I believe that every person has a story and every story has a little bit of magic
              inside of it.&nbsp;<br />
              I'm here to help you uncover it. Because people rarely connect to
              information — they connect to stories.
            </p>
            <p>
              <img
                src={hats.url}
                alt=""
                aria-hidden
                className="illustration"
                style={{ width: "270px", float: "left", margin: "0 1.5rem 1rem 0", mixBlendMode: "multiply" }}
                loading="lazy"
                decoding="async"
              />
              I do a lot of things: I write strategic copy for meaningful nonprofits and
              mission-driven brands, help founders find their unique voice, create content for
              educators who have something valuable to spread, and write can't-put-down <span className="line-through">thriller novels</span> curriculums for schools and organizations. I've got many hats, but one umbrella —
            </p>
          </div>
        </div>

        <p className="help-line">
          I'm here to help you help them.
        </p>

        <div className="mt-14 space-y-6 text-foreground/85 max-w-[680px] mx-auto">
          <p>
            My people-connecting skills, background in psychology, and love of words combine to
            help you reach your audience with empathy, warmth, and wit — so that you can focus on
            the bigger things.&nbsp;(Or take a nap. I firmly believe in siestas.)
          </p>
        </div>

      </div>
    </section>
  );
}

/* ---------------- SECTION 5 — WHO I WORK WITH ---------------- */
const CLIENT_TYPES = [
  {
    icon: Globe2,
    label: "Nonprofit or charity",
    body: "Ready to turn your mission into words that move people to open their hearts — and their wallets?",
  },
  {
    icon: BookOpen,
    label: "School or educational organization",
    body: "With powerful content that needs to spark wonder and a love of learning?",
  },
  {
    icon: Heart,
    label: "Wellness or therapy practice",
    body: "Who wants to connect with, support, and encourage the people who need you — without feeling salesy?",
  },
  {
    icon: Building2,
    label: "Mission-driven business",
    body: "Doing work that genuinely betters people's lives and needs copy that reflects that?",
  },
];

const DELIVERABLES = [
  "Tell stories that show your values in action",
  "Bring personality and life to your messaging",
  "Give strategic structure to your copy so the pretty words actually work",
  "Adapt your tone to suit your audience and platforms",
  "Communicate with warmth and clarity to the people you serve",
];

function WhoIWorkWith() {
  return (
    <section id="who" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <p className="transition-line">
          Ok. Enough about me. Tell me about yourself.
        </p>
        <h2 className="mt-6 text-center font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Are you a…
        </h2>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <ul className="space-y-8">
            {CLIENT_TYPES.map(({ icon: Icon, label, body }) => (
              <li key={label} className="flex gap-4">
                <span
                  className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: "color-mix(in oklab, var(--gold) 18%, transparent)" }}
                >
                  <Icon className="h-5 w-5 text-[color:var(--gold)]" aria-hidden />
                </span>
                <div>
                  <p className="font-serif text-xl text-foreground">{label}</p>
                  <p className="mt-1 text-base leading-loose text-foreground/75">{body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="md:pt-4 md:border-l md:border-[#E0D0B8] md:pl-10">
            <div className="rounded-2xl border border-border bg-[var(--cream)] p-8 md:sticky md:top-28 md:p-10">
              <p className="font-serif text-2xl text-foreground">Then Let's:</p>
              <ul className="mt-6 space-y-4">
                {DELIVERABLES.map((d) => (
                  <li key={d} className="flex gap-3 text-base leading-loose text-foreground/85">
                    <span aria-hidden className="mt-3 h-px w-4 shrink-0 bg-[var(--gold)]" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 6 — SERVICES ---------------- */
const SERVICES = [
  {
    art: quill.url,
    title: "Copywriting",
    body: "Websites, emails, newsletters, donor appeals, campaigns, social content — and whatever else your mission needs.",
    aka: "a.k.a. connecting, motivating, and inspiring action with words that work.",
    category: "copywriting" as const,
  },
  {
    art: quill.url,
    title: "Organizational Storytelling",
    body: "Donor impact books, event songs, scripts, campaign content, impact reports.",
    aka: "a.k.a. finding the story inside your data and bringing it to life.",
    category: "organizational-storytelling" as const,
  },
  {
    art: quill.url,
    title: "Educational Content",
    body: "Curriculum, lesson plans, educational series, children's content.",
    aka: "a.k.a. spreading ideas with powerful writing that's clear, deep, and wonderous.",
    category: "educational-content" as const,
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border bg-[var(--cream)]">
      <div className="max-w-6xl px-6 py-32 md:py-40">
        <div className="max-w-[680px]">
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            What's your story
          </h2>
          <p className="handwritten-subtitle">and how can I help you?</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {SERVICES.map(({ art, title, body, aka, category }) => (
            <article
              key={title}
              className="hover-lift flex flex-col rounded-2xl border border-border bg-background p-8 md:p-10"
            >
              <img
                src={art}
                alt=""
                aria-hidden
                className="select-none illustration"
                style={{ width: "80px", height: "80px", objectFit: "contain", marginBottom: "1rem" }}
                loading="lazy"
                decoding="async"
              />
              <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-base leading-loose text-foreground/80">{body}</p>
              <p className="mt-4 font-serif text-base italic text-muted-foreground">{aka}</p>
              <Link
                to="/work/$category"
                params={{ category }}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--teal)] hover:underline"
              >
                See Samples →
              </Link>
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
    quote: "An unbelievably gorgeous and moving piece.",
    name: "Non-Profit Client",
    title: "",
  },
  {
    quote:
      "Thank you so much for writing this beautiful song. It expressed everything that I envisioned and, it seems, did the job it was intended to do. So many compliments were said about the words and about the chosen track!",
    name: "Convention organizer",
    title: "representing 65+ schools",
  },
  {
    quote: "I literally sleep better at night knowing that you are part of our team.",
    name: "Non-Profit Client",
    title: "Marketing Director, Jewish Outreach Organization",
  },
];

function TestimonialsOne() {
  return (
    <section className="border-b border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="mt-2 grid gap-10 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS_ONE.map((t, i) => (
            <figure key={i} className="relative rounded-2xl border border-border bg-background p-8 md:p-10">
              <span
                aria-hidden
                className="absolute -top-6 left-6 font-serif text-7xl leading-none text-[color:var(--gold)]/60"
              >
                &ldquo;
              </span>
              <blockquote className="font-serif text-xl italic leading-snug text-foreground/90 md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-sm text-foreground">
                {t.name && <span className="font-semibold">— {t.name}</span>}
                {t.name && t.title && <span className="text-muted-foreground"> </span>}
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
    icon: Coffee,
    art: null as string | null,
    title: "We Meet",
    body: "You tell me about your mission, your goals, your audience, and a lot more. I ask a lot of questions — get ready to get deep and vulnerable.",
  },
  {
    n: "02",
    icon: BookOpen,
    art: null,
    title: "I Dig In",
    body: "I find the story underneath your work — the magic that was always there. I research until I know what keeps your audience up at night and what makes them laugh out loud.",
  },
  {
    n: "03",
    icon: Heart,
    art: null as string | null,
    title: "Get Your Happily-Ever-After",
    body: "I write. You review. We refine until every word is exactly right.",
  },
];

function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="mx-auto max-w-[680px] text-center">
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            How it works
          </h2>
        </div>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map(({ n, icon: Icon, art, title, body }) => (
            <li key={n} className="relative text-center">
              <span
                className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full font-serif text-2xl text-[color:var(--parchment)]"
                style={{ background: "var(--gold)" }}
              >
                {n}
              </span>
              {art ? (
                <img
                  src={art}
                  alt=""
                  aria-hidden
                  className="mx-auto mt-4 h-28 w-auto select-none object-contain illustration"
                  loading="lazy"
                  decoding="async"
                />
              ) : Icon ? (
                <Icon className="mx-auto mt-4 h-6 w-6 text-[color:var(--gold)]/70" aria-hidden />
              ) : null}
              <h3 className="mt-4 font-serif text-2xl text-foreground">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-base leading-loose text-foreground/80">{body}</p>
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
    body: "Your work exists to help people. Your copy should feel that way too. No fear-mongering or manufactured urgency — just clear, honest writing that gives your audience the information and gentle encouragement they need. That's not just good ethics. It's good copywriting.",
  },
  {
    title: "More extra, less ordinary",
    body: "Fresh, creative thinking on every project. No boring cookie-cutter copy. Your story is unique and your words should be too.",
  },
  {
    title: "Brains before bots",
    body: "Every word chosen by a human who genuinely cares about your mission. AI is useful — but it can never replace a real mind and heart.",
  },
];

function Values() {
  return (
    <section className="border-b border-border" style={{ backgroundColor: "#2C2218" }}>
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="relative mx-auto max-w-[680px] text-center">
          <p className="handwritten-note">
            If these values are your values too, then I know we can work magic together
          </p>
          <svg
            className="note-arrow"
            viewBox="0 0 220 120"
            aria-hidden
          >
            <path
              d="M180 110 C 140 110, 110 90, 90 60 S 60 20, 30 25"
              fill="none"
              stroke="#E8B86D"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M30 25 L 42 20 M30 25 L 38 35"
              fill="none"
              stroke="#E8B86D"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl" style={{ color: "#FAF7F0" }}>
            Are we on the same page?
          </h2>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-[color:var(--amber)]">
            {"\n"}
          </p>
        </div>

        <div className="mt-16" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {VALUES.map((v) => (
            <div key={v.title} className="value-card">
              <h3 className="font-serif text-[22px]" style={{ color: "#E8B86D", marginBottom: "0.75rem" }}>{v.title}</h3>
              <p className="text-base leading-relaxed" style={{ color: "#FAF7F0", fontFamily: "var(--font-sans)" }}>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 10 — TESTIMONIALS (second, placeholder) ---------------- */
function TestimonialsTwo() {
  // Spec: "[Leave blank — add when available]" — render nothing until testimonials provided.
  return null;
}

/* ---------------- SECTION 11 — GENTLE NUDGE ---------------- */
function GentleNudge() {
  return (
    <section className="border-b border-border bg-[var(--cream)]">
      <div className="mx-auto max-w-[680px] px-6 py-28 text-center md:py-36">
        <p className="font-serif text-2xl italic leading-loose text-foreground/85 md:text-3xl">
          Make it easy for the people you serve to find you.
        </p>
        <div className="mt-10">
          <a href="#contact" className="btn-gold">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 12 — CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-[680px] px-6 py-28 text-center md:py-36">
        <img
          src={envelopeTransparent.url}
          alt=""
          aria-hidden
          className="select-none"
          style={{ width: "300px", height: "auto", display: "block", margin: "0 auto 2rem", mixBlendMode: "multiply" }}
          loading="lazy"
          decoding="async"
        />
        <h2 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
          Let's talk.
        </h2>
        <p className="mx-auto mt-6 text-lg leading-loose text-foreground/85">
          If you're working on something meaningful and need help finding the words for it — I'd
          love to hear about it.
        </p>
        <p className="mt-6">
          <a href="mailto:etteldaskal@gmail.com" className="text-[color:var(--teal)] hover:underline">
            etteldaskal@gmail.com
          </a>
        </p>
        <div className="mt-8 flex justify-center">
          <a href="mailto:etteldaskal@gmail.com" className="btn-gold">
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}

