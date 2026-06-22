## Goal
Make body paragraphs easier to read by narrowing their line lengths and adding more vertical breathing room throughout the page.

## Changes

### 1. Narrower text columns
Reduce the max-width of long-form text blocks so each line wraps at roughly 60–70 characters (optimal reading width):
- **Pain, Dream, Services intro**: `max-w-2xl` → `max-w-xl`
- **About section**: `max-w-3xl` → `max-w-2xl`
- **Hero paragraph**: already `max-w-xl`, leave as-is
- **Who I Work With / sticky card**: keep `max-w-6xl` container but tighten body copy width inside cards/lists where applicable

### 2. More paragraph spacing
- Increase paragraph cluster gaps from `space-y-8` → `space-y-10` or `space-y-12`
- Add extra margin before/after key standalone lines (taglines, pull-quotes)

### 3. More section spacing
- Increase vertical section padding from `py-28 md:py-36` → `py-32 md:py-40` (or one step larger on the Tailwind scale)
- Increase gap between section heading and first paragraph from `mt-12` → `mt-14` or `mt-16`

## Files to modify
- `src/routes/index.tsx` — adjust container widths, spacing utilities, and section padding classes
- `src/styles.css` — optionally bump `p { line-height }` slightly if needed after narrowing

## Out of scope
- Rewriting or shortening paragraph copy
- Changing fonts, colors, or illustrations
- Responsive breakpoints (mobile stays proportionally tighter)