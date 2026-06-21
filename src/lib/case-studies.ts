import matanTorah from "@/assets/matan-torah.pdf.asset.json";
import eretzYisrael from "@/assets/eretz-yisrael.pdf.asset.json";
import scharVOnesh from "@/assets/schar-v-onesh.pdf.asset.json";
import newsletterIssue from "@/assets/yyh-newsletter-issue-2.pdf.asset.json";
import foundingTheFuture from "@/assets/founding-the-future.pdf.asset.json";

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
      "Websites, emails, newsletters, donor appeals, campaigns, and social content — words that connect, persuade, and inspire action.",
  },
  {
    slug: "organizational-storytelling",
    title: "Organizational Storytelling",
    intro:
      "Donor impact books, event songs, scripts, and campaign content — the human story inside the data, made to be felt.",
  },
  {
    slug: "educational-content",
    title: "Educational Content",
    intro:
      "Curriculum, lesson plans, educational series, and children's content — ideas brought to life with writing that's clear, deep, and genuinely engaging.",
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
    slug: "school-newsletter",
    title: "School Community Newsletter",
    category: "Copywriting",
    categorySlug: "copywriting",
    hasCaseStudy: false,
    summary:
      "A storytelling-driven newsletter that strengthened parent connection and communicated the emotional impact of school programming.",
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
    slug: "donor-gift-book",
    title: "Donor Gift Book",
    category: "Organizational Storytelling",
    categorySlug: "organizational-storytelling",
    hasCaseStudy: true,
    summary:
      "A keepsake book made to show donors the real, human impact of their support.",
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
    title: "Event Songs & Creative Campaigns",
    category: "Organizational Storytelling",
    categorySlug: "organizational-storytelling",
    hasCaseStudy: false,
    summary:
      "Original songs, scripts, and campaign themes written for productions, dinners, and conventions.",
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
