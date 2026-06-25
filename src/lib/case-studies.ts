import matanTorah from "@/assets/matan-torah.pdf.asset.json";
import eretzYisrael from "@/assets/eretz-yisrael.pdf.asset.json";
import scharVOnesh from "@/assets/schar-v-onesh.pdf.asset.json";
import newsletterIssue from "@/assets/yyh-newsletter-issue-2.pdf.asset.json";
import foundingTheFuture from "@/assets/founding-the-future.pdf.asset.json";
import nuggetAd1 from "@/assets/nugget-ad-1.png.asset.json";
import nuggetAd2 from "@/assets/nugget-ad-2.png.asset.json";
import nuggetAd3 from "@/assets/nugget-ad-3.png.asset.json";
import nuggetAd4 from "@/assets/nugget-ad-4.png.asset.json";

export type CategorySlug =
  | "copywriting"
  | "organizational-storytelling"
  | "educational-content";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  categorySlug: CategorySlug;
  hasCaseStudy: boolean;
  summary: string;
  overview: string;
  objective: string;
  audience: string;
  role: string;
  approach: string;
  outcome: string;
  samples: { label: string; url: string }[];
  images?: { label: string; url: string }[];
  lyrics?: { title: string; subtitle?: string; body: string }[];
  layout?: "default" | "book";
};

export const CATEGORIES: {
  slug: CategorySlug;
  title: string;
  intro: string;
}[] = [
  {
    slug: "copywriting",
    title: "Copywriting",
    intro:
      "\n",
  },
  {
    slug: "organizational-storytelling",
    title: "Organizational Storytelling",
    intro: "Donor impact books, event lyrics, newsletters, and campaign content.",
  },
  {
    slug: "educational-content",
    title: "Educational Content",
    intro:
      "Curriculum, lesson plans, educational series, and children's content — spreading ideas with powerful writing that's clear, deep, and wonderous.",
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "torah-nugget",
    title: "Torah Nugget",
    category: "Educational Content",
    categorySlug: "educational-content",
    hasCaseStudy: true,
    summary:
      "A curriculum for Oorah's Torah Mate program presenting the basics of Judaism for readers ages 8 to 80.",
    overview:
      "An ongoing educational publishing initiative with Oorah, translating foundational Jewish concepts into clear, emotionally engaging writing that meets readers across a wide range of ages and backgrounds.",
    objective:
      "Create curriculum-based content that feels intellectually serious and personally inviting — neither watered down for younger readers nor inaccessible to newcomers.",
    audience:
      "Students and lifelong learners ages 8 through 80, including readers with varied levels of Jewish background.",
    role:
      "Writer, researcher, and content developer. I shape each piece end to end — concept, research, drafting, and close collaboration with the graphics and design team so the writing and visual presentation work as one.",
    approach:
      "I write toward the reader, not the topic. Every concept is anchored in a concrete image, story, or question a person can feel before they're asked to understand it. Sentences earn their length; ideas earn their weight.",
    outcome:
      "Over 12,500 copies of the Torah Nugget educational resource printed and distributed, with the series continuing as a flagship Torah Mate publication.",
    samples: [
      { label: "Matan Torah (PDF)", url: matanTorah.url },
      { label: "Eretz Yisrael (PDF)", url: eretzYisrael.url },
      { label: "Schar V'Onesh (PDF)", url: scharVOnesh.url },
    ],
  },
  {
    slug: "donor-gift-book",
    title: "Donor Gift Book",
    category: "Organizational Storytelling",
    categorySlug: "organizational-storytelling",
    hasCaseStudy: true,
    summary:
      "A keepsake book made to show donors the personal impact of their support.",
    overview:
      "A book-length donor appreciation project that gathered stories, voices, and outcomes into a single keepsake — a thank-you that read like a piece of literature, not a report.",
    objective:
      "Turn abstract gratitude into something a donor could hold. Show them, in scenes and voices, the lives their giving touched.",
    audience: "Major donors and sponsors of the organization.",
    role:
      "Concept, narrative architecture, interviewing, writing, and editorial collaboration with the design team on pacing, typography, and image placement.",
    approach:
      "I structured the book the way you'd structure an essay collection: each chapter a distinct story with its own emotional shape, all of them quietly carrying the same thesis — your support became this.",
    outcome:
      "A polished, gift-quality publication that gave the organization a lasting way to thank, retain, and deepen relationships with key donors.",
    samples: [
      { label: "Founding the Future (PDF)", url: foundingTheFuture.url },
    ],
    layout: "book",
  },
  {
    slug: "event-songs",
    title: "Event Songs",
    category: "Organizational Storytelling",
    categorySlug: "organizational-storytelling",
    hasCaseStudy: false,
    summary:
      "Original lyrics for productions, dinners, and conventions.",
    overview:
      "An ongoing body of creative work for live events: production songs and scripts, dinner songs, convention themes, and campaign writing built around a single emotional through-line.",
    objective:
      "Give each event a piece of writing that feels inevitable — language and lyrics that crystallize what the night, the cause, or the room is actually about.",
    audience:
      "Live event attendees: dinner guests, convention participants, students, donors, and broader community.",
    role:
      "Concept, lyric and script writing, theme development, and collaboration with directors and design teams.",
    approach:
      "I start from feeling, not format. What does this audience need to feel by the end of the night? The song, theme, or script is built backwards from that single sentence.",
    outcome:
      "A repeat-commission body of work used across productions, dinners, and conventions — language people remember after the lights come up.",
    samples: [],
    lyrics: [
      {
        title: "כָּתְבֵם עַל לוּחַ לִבֶּךָ",
        subtitle: "A Tribute to Bnos Bais Yaakov — written for the school's 25th Anniversary Dinner",
        body: `Etched deep in my heart, Bnos Bais Yaakov
Are your wisdom and warmth, Bnos Bais Yaakov
Your lessons and care have built a core strong as steel
You've opened up my eyes and shown me what's real.

I'm holding on tight
To all you've taught, to all I've got
Your imprint lives on and on inside my heart
Wherever life leads me
Still, you'll see, I will be
A student of Bnos Bais Yaakov

כָּתְבֵם עַל לוּחַ לִבֶּךָ
Forever a תלמידה, Bnos Bais Yaakov

How secure I felt in your halls, in your embrace
Your strong walls have kept out the winds, and given me a place
To discover the treasures that are mine, to learn and reflect
You've held my hand and guided my every step
You've instilled deep inside a most vibrant Yiddishkeit

I'm holding on tight
To all you've taught, to all I've got
Your imprint lives on and on inside my heart
Wherever life leads me
Still, you'll see, I will be
A student of Bnos Bais Yaakov

כָּתְבֵם עַל לוּחַ לִבֶּךָ
Forever a תלמידה, Bnos Bais Yaakov — what words can I say
For your gift that just grows every day
When I raise my children to go in your way
You'll see that indeed your words are engraved
Upon my heart, deep in my soul
Another link in our chain of solid gold
You're etched in my heart, in my heart Bnos Bais Yaakov!`,
      },
    ],
  },
  {
    slug: "nugget-ad-series",
    title: "Nugget Ad Series",
    category: "Copywriting",
    categorySlug: "copywriting",
    hasCaseStudy: false,
    summary:
      "A concept four-piece print ad series for Nugget, the original play couch for kids.",
    overview:
      "A concept-driven ad series built around a historical through-line: how the cultural idea of childhood — and what 'a good home' looks like — has shifted across generations, with Nugget as the playful, modern resolution.",
    objective:
      "Position Nugget as more than a play couch: a product that fits the way families actually live now, told through a series with a clear narrative arc rather than four isolated ads.",
    audience: "Parents of young children; brand and creative decision-makers at Nugget.",
    role: "Concept, copy, and art direction across all four pieces in the series.",
    approach:
      "Treat the series as a single story across four frames. Each ad earns its place by moving the timeline — and the emotional read of parenthood — forward, until the final piece delivers the product as the punchline.",
    outcome:
      "A spec campaign sample demonstrating long-form brand thinking and series-level copy craft.",
    samples: [],
    images: [
      { label: "1879", url: nuggetAd1.url },
      { label: "2017", url: nuggetAd2.url },
      { label: "2023", url: nuggetAd3.url },
      { label: "Nugget", url: nuggetAd4.url },
    ],
  },
  {
    slug: "kashani-dental",
    title: "Kashani Dental Website",
    category: "Copywriting",
    categorySlug: "copywriting",
    hasCaseStudy: false,
    summary:
      "A concept website for a Queens dental practice.",
    overview:
      "A spec website project for a family dental practice in Jamaica, Queens, built as a marketing pitch sample.",
    objective:
      "Translate a friendly, trust-first dental brand into a site that feels gentle rather than clinical — without sacrificing professional credibility.",
    audience: "Local families, anxious adult patients, and parents researching a kid-friendly dentist.",
    role: "Concept, copy, content architecture, and design direction.",
    approach:
      "Lead with feeling — calm, warmth, no pressure. Let the credentials and services land underneath, after the reader already trusts the voice on the page.",
    outcome: "A polished portfolio sample demonstrating end-to-end site thinking.",
    samples: [
      { label: "View the site", url: "/samples/kashani-dental.html" },
    ],
  },
  {
    slug: "school-newsletter",
    title: "School Community Newsletter",
    category: "Copywriting",
    categorySlug: "copywriting",
    hasCaseStudy: false,
    summary:
      "A school newsletter that strengthened parent and donor relationships.",
    overview:
      "A recurring publication for a school community designed to feel emotionally meaningful rather than purely informational, while strengthening school-family engagement.",
    objective:
      "Build a parent and donor publication that read like a piece of writing, not a status update — one that gave the school's mission a voice families could feel.",
    audience: "Parents, donors, and broader school community members.",
    role:
      "Wrote and structured all editorial content, shaped messaging tone and narrative flow, and collaborated on presentation and visuals.",
    approach:
      "I focused on emotionally resonant, student-centered narratives — language that balanced warmth with professionalism, and reporting with point of view.",
    outcome:
      "Although it was never positioned as a fundraising campaign, the newsletter organically generated $10,000 in donations from a single issue and significantly increased community engagement.",
    samples: [
      { label: "Newsletter — Sample Issue (PDF)", url: newsletterIssue.url },
    ],
  },
  {
    slug: "birchwood-gardens",
    title: "Birchwood Gardens Website",
    category: "Copywriting",
    categorySlug: "copywriting",
    hasCaseStudy: false,
    summary:
      "A concept website for a nursing and rehabilitation facility.",
    overview:
      "A spec website project for a fictional Astoria-based skilled nursing and long-term care facility, built as a marketing pitch sample.",
    objective:
      "Show how warm, grounded copy and clear structure can make a healthcare site feel like a place worth trusting.",
    audience: "Adult children researching care for a parent; prospective residents and their families.",
    role: "Concept, copy, content architecture, and design direction.",
    approach:
      "Lead with feeling, not features. Open on what the place is — a home — then earn the clinical credibility underneath. Every section answers a real question a family is already asking.",
    outcome: "A polished portfolio sample demonstrating end-to-end site thinking.",
    samples: [
      { label: "View the site", url: "/samples/birchwood-gardens.html" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCaseStudiesByCategory(slug: CategorySlug) {
  return CASE_STUDIES.filter((c) => c.categorySlug === slug);
}
