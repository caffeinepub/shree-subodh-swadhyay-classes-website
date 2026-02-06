# Specification

## Summary
**Goal:** Ensure the Home page hero image loads correctly and the full hero photo is visible (not cropped/cut off) across mobile, tablet, and desktop.

**Planned changes:**
- Update the Home page hero image container/CSS so the image scales responsively while preserving the full photo (no unintended cropping) across common breakpoints.
- Verify the hero image static asset path/filename and update `frontend/src/pages/HomePage.tsx` to reference the correct `/assets/generated/` hero image so it loads successfully.

**User-visible outcome:** The Home page hero image consistently displays the full photo without clipping on mobile, tablet, and desktop, and no broken image icon appears.
