# Oddjobs — Project Instructions

## Project Overview

**oddjobs.design** is an interactive typography/font animation tool hosted on GitHub Pages at `oddjobs.angushenderson.design`. Users type custom text and watch it animate through 15 decorative fonts loaded from Adobe Typekit.

## Tech Stack & Constraints

- **Vanilla HTML5, CSS3, JavaScript (ES6)** — no frameworks, no build tools, no package manager
- **Adobe Typekit** fonts loaded via `https://use.typekit.net/tdm8gnr.css` — this link must be preserved
- **GitHub Pages** hosting — static files only, no server-side code
- **No dependencies** — do not introduce npm, bundlers, or external libraries unless explicitly requested

## File Structure

```
index.html      — Single-page HTML structure (side nav + main display)
script.js       — Core logic: text rendering, font animation, UI controls
styles.css      — Dark theme design system, flexbox layout, custom components
CNAME           — Custom domain config (do not modify)
assets/         — Static assets (SVGs, images)
```

## Code Style

- ES6 syntax: `const`/`let`, arrow functions, template literals
- DOM manipulation via `document.createElement()` / `appendChild()` — no innerHTML for dynamic content
- Debounce pattern for input handlers (1-second delay before restarting animation)
- CSS: flexbox for layout, custom-styled form controls (toggle switch, range slider)
- Dark theme: `#1a1a1a` background, `#6f6f6f` accent, monospace font stack for UI

## Key Functions (script.js)

- `updateDynamicText()` — renders text with random font per character
- `animateFontsInterval()` — cycles fonts on each character at the configured interval
- `updateAnimationInterval()` — manages animation timing from the speed slider

## Prompt History

After every coding session, append a new entry to `PROMPT-HISTORY.md` using the template at the top of that file. Include: goal, prompts used, changes made, decisions, and outcome.
