## Goal

Remove the generic "Case studies" landing page. Each "See More" on the *Let me help you help them* section jumps directly into the portfolio for that service category. Only Torah Nugget and the Donor Gift Book keep full case-study pages — everything else shows its samples inline on the category page.

## Information architecture

Three category routes, one per service card:

```
/work/copywriting                  → Copywriting portfolio
/work/organizational-storytelling  → Organizational Storytelling portfolio
/work/educational-content          → Educational Content portfolio
```

Service card → destination:

- Copywriting → `/work/copywriting`
- Organizational Storytelling → `/work/organizational-storytelling`
- Educational Content → `/work/educational-content`

## Data changes (`src/lib/case-studies.ts`)

Rename categories to match service titles exactly and add a `categorySlug` + a `hasCaseStudy` flag:

- Torah Nugget → category `Educational Content`, `hasCaseStudy: true`
- Donor Gift Book → category `Organizational Storytelling`, `hasCaseStudy: true`
- School Community Newsletter → category `Copywriting`, `hasCaseStudy: false` (samples shown inline)
- Event Songs & Creative Campaigns → category `Organizational Storytelling`, `hasCaseStudy: false`

(Confirm with user if newsletter belongs under Copywriting vs Organizational Storytelling — current best guess based on "newsletter / donor appeals" wording in the Copywriting service card.)

## Route changes

1. **Delete** `src/routes/work.index.tsx` (the generic "Case studies in writing that has to mean something" page).
2. **Create** `src/routes/work.$category.tsx` — a category portfolio page that:
   - Looks up all case studies for that category slug; 404 if unknown.
   - Shows a header with the category name + short intro.
   - For each item with `hasCaseStudy: true`: renders a card that links to `/work/$slug` (existing detailed page).
   - For each item with `hasCaseStudy: false`: renders the samples inline (PDF flipbook for PDFs, link cards for external URLs) directly on this page — no intermediate page.
   - Per-category `head()` metadata (title, description, og tags).
3. **Keep** `src/routes/work.$slug.tsx` as-is, but:
   - Update its "All work" back link and `NextUp` to point to the item's category page (`/work/$category`) instead of `/work`.
   - Loader still 404s for unknown slugs.

## Service section update (`src/routes/index.tsx`)

In the `SERVICES` array, add a `href` for each card (`/work/copywriting`, etc.) and change the See More `<Link to="/work">` to `<Link to="/work/$category" params={{ category: href }}>`.

## Site nav (`src/components/site-chrome.tsx`)

If the top nav currently links to `/work`, change it to the most representative category (likely `/work/copywriting`) or remove the link — confirm preference. Default: change "Work" nav item into a dropdown / inline links to the three category pages. Will read the file before editing and pick the lightest-touch option.

## Hero CTA (`src/routes/index.tsx`)

The hero "See My Work" button currently goes to `/work`. Repoint it to `/work/copywriting` (the most general category) since `/work` no longer exists.

## Out of scope

- No visual redesign of the case study or sample layouts.
- No changes to PDF flipbook component.
- No changes to assets.

## Verification

- Build succeeds (route tree regenerates cleanly).
- `/work` returns 404 (or we add a redirect — will ask if desired).
- Each See More lands on the right category page with the right items.
- Torah Nugget and Donor Gift Book cards still open their full case-study pages with flipbook intact.
- Newsletter and Event Songs render inline samples on their category page.
