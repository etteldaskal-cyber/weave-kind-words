## Plan

The portfolio pages are colliding because both category pages and case-study pages currently use the same URL shape: `/work/<something>`. That means a case-study link like `/work/donor-gift-book` can be interpreted as a category, which triggers “That portfolio isn't here.”

I’ll fix this by:

1. Keep category portfolio pages at `/work/<category>`.
2. Move individual case studies to a distinct path like `/case-study/<slug>` or `/work/case-study/<slug>`.
3. Update all case-study links and canonical metadata to use the new path.
4. Leave the existing donor book / Torah Nugget book display unchanged.
5. Flush the preview so the updated routes are active.