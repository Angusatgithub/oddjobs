---
description: "Use when editing HTML files. Covers semantic structure, Typekit font integration, and accessibility for the oddjobs.design typography tool."
applyTo: "**/*.html"
---
# HTML Guidelines

- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`)
- Preserve the Adobe Typekit stylesheet link: `https://use.typekit.net/tdm8gnr.css`
- Keep the side nav / main content split-pane layout pattern
- Add `aria-label` or `aria-describedby` to interactive controls (inputs, buttons, sliders)
- Use `<label>` elements for all form controls
- Do not add external dependencies or CDN links without explicit approval
- Scripts load at the end of `<body>` — maintain this pattern

## Prompt History

After making changes, append a session entry to `PROMPT-HISTORY.md` using the template in that file.
