---
description: "Use when editing JavaScript files. Covers vanilla ES6 patterns, DOM manipulation, and animation logic for the oddjobs.design typography tool."
applyTo: "**/*.js"
---
# JavaScript Guidelines

- Vanilla ES6 only — no frameworks, no libraries, no npm packages
- Use `const` by default, `let` when reassignment is needed, never `var`
- DOM manipulation via `document.createElement()` and `appendChild()` — avoid `innerHTML` for dynamic content (XSS risk)
- Use `addEventListener()` for event binding, not inline handlers

## Existing Architecture

Key functions in `script.js` — understand before modifying:
- `updateDynamicText()` — renders text, assigns a random font to each character
- `animateFontsInterval()` — continuously swaps fonts on each `<span>` at a configurable interval
- `updateAnimationInterval()` — reads the speed slider value and restarts the animation loop

## Patterns Used

- **Debounce on text input**: 1-second delay before restarting animation after typing
- **Interval-based animation**: `setInterval` / `clearInterval` for font cycling
- **Font list**: array of 15 Typekit font-family names — extend this array when adding fonts

## Prompt History

After making changes, append a session entry to `PROMPT-HISTORY.md` using the template in that file.
