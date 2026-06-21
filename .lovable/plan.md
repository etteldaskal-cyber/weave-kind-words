## Goal

No individual case-study pages. Portfolio category pages still show all items with their samples/PDFs inline.

## Changes

1. **Delete** `src/routes/case-study.$slug.tsx`.
2. **Edit `src/routes/work.$category.tsx`**:
   - Remove the `CaseStudyCard` component and the `hasCaseStudy ? CaseStudyCard : InlineSamples` branch.
   - Render every item via `InlineSamples` (works for items with or without PDFs — when `samples` is empty the section just shows the title + summary).
   - Remove unused imports (`ArrowUpRight` if no longer needed, `Link` to `/case-study/$slug`).
3. **Edit `src/lib/case-studies.ts`**: drop the now-unused `hasCaseStudy` field from the type and from each entry (optional cleanup, keeps types tidy).
4. **Regenerate** `src/routeTree.gen.ts` automatically after the route file is removed.
5. **Search** for any remaining `/case-study/` links and remove them.

No content or copy changes. The donor gift book and Torah Nugget samples remain visible on their portfolio pages.
