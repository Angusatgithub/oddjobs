---
description: "Use when editing CSS files. Covers the dark theme design system, flexbox layout, and custom component styling for the oddjobs.design typography tool."
applyTo: "**/*.css"
---
# CSS Guidelines

## Design Tokens

- Background: `#1a1a1a`
- Accent / muted text: `#6f6f6f`
- UI font stack: `Consolas, Monaco, 'Courier New', monospace`
- Display fonts: 15 decorative Typekit families (applied via JS)

## Layout

- Flexbox for all layouts — no CSS Grid unless explicitly requested
- Side nav (`.sideNav`) + main content (`.titleContainer`) split-pane pattern
- Centered text display in the main area

## Custom Components

- **Toggle switch** (`.toggle`): custom checkbox with animated `::before` pseudo-element
- **Range slider** (`.slider-container`): custom-styled `<input type="range">` with circular thumb
- **Text shadow outline**: 4-directional text-shadow on `h1` for character outline effect

## Conventions

- Use existing class naming conventions (camelCase for compound names)
- Hide/show elements with a `.hidden` utility class
- Keep hover states and transitions consistent with existing patterns
- Mobile-responsive — test that controls remain accessible on small screens

## Prompt History

After making changes, append a session entry to `PROMPT-HISTORY.md` using the template in that file.
