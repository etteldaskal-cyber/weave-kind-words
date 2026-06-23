## Goal
Replace the small "golden-idea" illustration (currently floating next to "You need a hard-working partner." in the Dream section) with the new uploaded storybook image, rendered as a faint, centered background — mirroring the Hero section's background treatment.

## Changes

### 1. Upload the new image as a Lovable Asset
- Source: `user-uploads://A_magical_storybook_open_..._sof-remov.png`
- Create `src/assets/storybook-spread.png.asset.json` via `lovable-assets create`.

### 2. `src/routes/index.tsx` — Dream section
- Import the new asset (`storybookSpread`) and remove the `goldenIdea` import.
- Replace the inline `<img>` (currently absolutely positioned to the right of the "partner" line) with a faint background layer on the Dream `<section>`, matching the Hero treatment exactly:
  - `absolute inset-0 z-0`
  - `backgroundImage: url(storybookSpread.url)`
  - `backgroundSize: "cover"`, `backgroundPosition: "center"`
  - `opacity: 0.25`
  - radial mask: `radial-gradient(ellipse at center, black 40%, transparent 85%)`
- Wrap the existing inner content so it stays above (`relative z-10`).
- Remove the now-unused `relative` wrapper around the partner line (revert it to a plain block) since the floating image is gone.

### 3. Cleanup
- Delete the old asset pointer `src/assets/golden-idea.png.asset.json` via `delete_asset` (no longer referenced anywhere — grep confirmed only the Dream section used it).

## Notes
- No layout/copy changes elsewhere; Hero is untouched and used only as the styling reference.
- The new image becomes purely decorative (`aria-hidden`, empty alt), same as the Hero background.
