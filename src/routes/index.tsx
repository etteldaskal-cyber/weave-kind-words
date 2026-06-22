import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Building2, Coffee, BookOpen, Heart } from "lucide-react";


import { SiteNav, SiteFooter } from "@/components/site-chrome";
import wingedGlobe from "@/assets/winged-globe.png.asset.json";
import ettelBio from "@/assets/ettel-bio.png.asset.json";
import clippedWings from "@/assets/clipped-wings.png.asset.json";
import sunMotif from "@/assets/sun-motif.png.asset.json";
import iconCopywriting from "@/assets/icon-copywriting.png.asset.json";
import iconEducation from "@/assets/icon-education.png.asset.json";
import processPath from "@/assets/process-path.png.asset.json";
import quill from "@/assets/quill.jpg.asset.json";
import spelling from "@/assets/spelling.jpg.asset.json";
import envelope from "@/assets/envelope.jpg.asset.json";
import magnifier from "@/assets/magnifier.jpg.asset.json";
import hats from "@/assets/hats.jpg.asset.json";
import plants from "@/assets/plants.jpg.asset.json";
import telephone from "@/assets/pink-telephone.jpg.asset.json";

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
        <Pain />
        <Dream />
        <About />
        <WhoIWorkWith />
        <Services />
        <TestimonialsOne />
        <PlantsDivider />
        <Process />
        <Values />
        <TestimonialsTwo />
        <GentleNudge />
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
        className="h-24 w-auto select-none object-contain mix-blend-multiply md:h-32"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="paper-grain border-b border-border">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:gap-16 md:py-24">
        <div className="relative z-10">
          <p className="eyebrow flex items-start gap-3">
            <span className="mt-2.5 h-px w-10 bg-[var(--gold)] shrink-0" />
            <span>COPY & WRITING FOR <span className="text-[color:var(--gold)]">MISSION-DRIVEN</span> ORGANIZATIONS AND <span className="text-[color:var(--gold)]">PURPOSE-LED</span> BRANDS</span>
          </p>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground md:text-5xl">
            The Writer Your Story Needs
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-loose text-foreground/85">
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

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 right-0 -z-10 h-72 w-72 rounded-full"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--amber) 35%, transparent), transparent 70%)" }}
          />
          <img
            src={wingedGlobe.url}
            alt="A watercolour illustration of a child being lifted into the air by a golden winged globe."
            className="relative w-full select-none md:scale-125"
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
      <div className="mx-auto max-w-xl px-6 py-32 md:py-40">
        <h2 className="font-serif text-[2rem] leading-tight text-foreground md:text-4xl text-center">
          You don't have time to chase after your audience.
        </h2>
        <div className="mt-14 space-y-10 text-lg leading-loose text-foreground/85">
          <p className="whitespace-pre-line text-left">
            You know you have valuable things to share.{"\n"}
            You know you can impact lives and make a difference.{"\n"}
            But you can't seem to get across the magic you know you can offer the world.{"\n"}
            When it comes to finding the right words to explain what you do and attract your audience — you find a headache you don't have time for.&nbsp;{"\n"}
            And that means you're not accomplishing what you could be.{"\n"}
            You're not reaching the people you should — and it's costing you time, money, and energy.
          </p>
        </div>
        <img
          src={clippedWings.url}
          alt=""
          aria-hidden
          className="mx-auto mt-16 h-28 w-auto select-none opacity-90"
          loading="lazy"
          decoding="async"
        />
        <p className="mt-6 text-center font-serif text-3xl italic leading-snug text-[color:var(--rose)] md:text-4xl">
          Your wings are clipped.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 — DREAM ---------------- */
function Dream() {
  return (
    <section className="paper-grain relative overflow-hidden border-b border-border bg-[var(--cream)]">
      <img
        src={sunMotif.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 select-none opacity-25 md:h-96 md:w-96"
        loading="lazy"
        decoding="async"
      />
      <div className="relative mx-auto max-w-xl px-6 py-32 md:py-40">
        <h2 className="font-serif text-[2rem] leading-tight text-foreground md:text-4xl text-center">
          What if they came after you?
        </h2>
        <div className="mt-14 space-y-10 text-lg leading-loose text-foreground/85">
          <p className="whitespace-pre-line text-left">
            What if your ideal audience found you on their own?&nbsp;{"\n\n"}
            What if the people you most want to reach came to you for the opportunity to have a part in the beautiful world you are building?{"\n\n"}
            What if your website did the talking — so that when people reached out, they were already sold on what you offer the world?&nbsp;{"\n\n"}
            What if you never had to feel like a desperate car salesman instead of the changemaker that you are?
          </p>
          <p className="whitespace-pre-line">
            <span className="block text-2xl font-serif italic text-[color:var(--gold)] mb-3">
              You need a hard-working partner.
            </span>
            {"\n"}
            Someone to uncover the magic that is already there and write your story so that your audience gets it.{"\n\n"}
          </p>
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

/* ---------------- SECTION 4 — ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-2xl px-6 py-32 md:py-40">
        <p className="eyebrow text-center">EVERY GOOD STORY HAS A HERO. AND EVERY GOOD HERO HAS A GUIDE.</p>

        <div className="mt-10 flex justify-center">
          <img
            src={ettelBio.url}
            alt="Ettel Daskal"
            className="h-40 w-40 rounded-full object-cover shadow-[0_8px_30px_rgba(200,147,58,0.18)] ring-4 ring-[color:var(--gold)]/30 md:h-48 md:w-48"
          />
        </div>

        <div className="mt-8 flex items-start justify-center gap-4">
          <h2 className="font-serif text-4xl leading-tight text-foreground">
            Hi, I'm Ettel.
          </h2>
          <div className="relative hidden pt-2 md:block">
            <CurlyArrow className="h-10 w-20 text-[color:var(--gold)]" />
            <span className="absolute -right-4 top-12 whitespace-nowrap font-serif text-base italic text-[color:var(--gold)]">
              a.k.a. your guide
            </span>
          </div>
        </div>
        <p className="mt-3 text-center font-serif text-base italic text-[color:var(--gold)] md:hidden">
          a.k.a. your guide
        </p>


        <div className="mt-14 space-y-10 text-lg leading-loose text-foreground/85">
          <p>
            I'm a wife and a mother and a teacher and a friend. I'm an actress, an artist, and an
            almost-psychologist (I dropped out mid-Master's and chose to brighten the world with 
            storytelling instead.)
          </p>
          <div className="flex justify-center">
            <img
              src={sunMotif.url}
              alt=""
              aria-hidden
              className="h-24 w-24 select-none object-contain mix-blend-multiply md:h-28 md:w-28"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p>
            I was the kid whose third-grade spelling sentences appalled my teacher and thrilled my
            class. Instead of the typical <em>Sarah ate a crunchy apple</em>, I strung them together
            into a spine-tingling horror story about what happened to children who didn't do their
            homework. I just couldn't stick with the mundane when there was a world of stories to
            be told — and I still haven't outgrown that.
          </p>
          <div className="flex justify-end">
            <img
              src={spelling.url}
              alt=""
              aria-hidden
              className="h-40 w-auto -rotate-3 select-none object-contain mix-blend-multiply md:h-48"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p>
            There's nothing I love more than stories — except maybe people. (And pretty coffee mugs. And new leather notebooks.)
          </p>
          <p>
            I believe that every person has a story and every story has a little bit of magic
            inside of it. I'm here to help you uncover it. Because people rarely connect to
            information — they connect to stories.
          </p>
          <p>
            I do a lot of things: I write strategic copy for meaningful nonprofits and
            mission-driven brands, help founders find their unique voice, create content for
            educators who have something valuable to spread, and write can't-put-down <span className="line-through">thriller novels</span> curriculums for schools and organizations. I've got many hats, but one umbrella —
          </p>
          <div className="flex justify-center">
            <img
              src={hats.url}
              alt=""
              aria-hidden
              className="h-44 w-auto select-none object-contain mix-blend-multiply md:h-56"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <p className="mt-14 text-center font-serif text-3xl italic leading-snug text-[color:var(--gold)] md:text-4xl">
          I'm here to help you help them.
        </p>

        <div className="mt-14 space-y-10 text-lg leading-loose text-foreground/85">
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
        <p className="text-center font-serif text-xl italic text-muted-foreground">
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

          <div className="md:pt-4">
            <div className="rounded-2xl border border-border bg-[var(--cream)] p-8 md:sticky md:top-28 md:p-10">
              <p className="font-serif text-2xl text-foreground">Let's:</p>
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
    art: iconCopywriting.url,
    title: "Copywriting",
    body: "Websites, emails, newsletters, donor appeals, campaigns, social content — and whatever else your mission needs.",
    aka: "a.k.a. words that connect, persuade, and inspire action.",
    category: "copywriting" as const,
  },
  {
    art: quill.url,
    title: "Organizational Storytelling",
    body: "Donor impact books, event songs, scripts, campaign content, impact reports.",
    aka: "a.k.a. finding the human story inside your data and making people feel it.",
    category: "organizational-storytelling" as const,
  },
  {
    art: iconEducation.url,
    title: "Educational Content",
    body: "Curriculum, lesson plans, educational series, children's content.",
    aka: "a.k.a. bringing ideas to life with writing that's clear, deep, and genuinely engaging.",
    category: "educational-content" as const,
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border bg-[var(--cream)]">
      <div className="max-w-6xl px-6 py-32 md:py-40">
        <div className="max-w-2xl">
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            Let me help you help them.
          </h2>
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
                className="h-20 w-20 select-none object-contain"
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
                See More →
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
    quote: "I literally sleep better at night knowing that you are part of our team.",
    name: "Sam Schwartz",
    title: "Marketing Director, Jewish Outreach Organization",
  },
  {
    quote: "An unbelievably gorgeous and moving piece.",
    name: "Project Manager",
    title: "Oorah (Jewish Outreach Organization)",
  },
  {
    quote:
      "Thank you so much for writing this beautiful song. It expressed everything that I envisioned and, it seems, did the job it was intended to do. So many compliments were said about the words and about the chosen track!",
    name: "Convention organizer",
    title: "representing 65+ schools",
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
    icon: Coffee,
    art: null as string | null,
    title: "We Meet",
    body: "You tell me about your mission, your goals, your audience, and a lot more. I ask a lot of questions — get ready to go deep. (The good kind of deep.)",
  },
  {
    n: "02",
    icon: null,
    art: magnifier.url,
    title: "I Dig In",
    body: "I find the story underneath your work — the magic that was always there. I research until I know what keeps your audience up at night and what makes them laugh out loud.",
  },
  {
    n: "03",
    icon: null,
    art: envelope.url,
    title: "The Words Come",
    body: "I write. You review. We refine until every word is exactly right.",
  },
];

function Process() {
  return (
    <section id="process" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-4xl leading-tight text-foreground md:text-5xl">
            How it works.
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
                  className="mx-auto mt-4 h-28 w-auto select-none object-contain mix-blend-multiply"
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
        <img
          src={processPath.url}
          alt=""
          aria-hidden
          className="mx-auto mt-12 w-full max-w-4xl select-none opacity-70"
          loading="lazy"
          decoding="async"
        />
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
    body: "Every word chosen by a human who genuinely cares about your mission. AI can be useful — but it can never replace a real mind and heart.",
  },
];

function Values() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Get your happily-ever-after.
          </h2>
          <p className="mt-8 font-serif text-2xl italic leading-snug text-[color:var(--amber)]">
            {"\n"}
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="border-t border-background/20 pt-6">
              <h3 className="font-serif text-2xl text-background">{v.title}</h3>
              <p className="mt-3 text-base leading-loose text-background/80">{v.body}</p>
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
      <div className="mx-auto max-w-xl px-6 py-28 text-center md:py-36">
        <p className="font-serif text-2xl italic leading-loose text-foreground/85 md:text-3xl">
          The people who need you are out there looking for you right now. Make it easy for them
          to find you.
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
      <div className="mx-auto max-w-xl px-6 py-28 text-center md:py-36">
        <div className="flex justify-center">
          <img
            src={telephone.url}
            alt=""
            aria-hidden
            className="h-48 w-auto select-none object-contain mix-blend-multiply md:h-56"
            loading="lazy"
            decoding="async"
          />
        </div>
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
            Book a Free Call
          </a>
        </div>
      </div>
    </section>
  );
}

