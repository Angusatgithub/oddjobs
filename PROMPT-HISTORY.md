# Prompt History

A log of AI-assisted coding sessions for this project. After every coding session, append a new entry using the template below.

## Template

Copy this template for each new session entry:

```markdown
---

## YYYY-MM-DD — Session title

**Goal:** What you were trying to achieve.

**Prompt(s) used:**
> Paste the key prompts from the session here.

**Changes made:**
- File changed and what was done
- File changed and what was done

**Decisions:**
- Why X was done instead of Y
- Any constraints or tradeoffs noted

**Outcome:** Did it work? Any follow-up needed?
```

---

## 2026-03-24 — Set up agentic coding infrastructure

**Goal:** Add workspace instructions, file-specific instructions, reusable prompts, and a prompt history log to make this repo ready for AI-assisted development.

**Prompt(s) used:**
> I want to develop this project further, can you familiarise yourself with it and create a plan that would set this repo up for agentic coding with relevant folders and/or files — for example a .github or .agents folder where I add in different copilot-instructions or equivalent of claude skills, and PROMPT-HISTORY.md

**Changes made:**
- Created `PROMPT-HISTORY.md` — this file, for logging AI coding sessions
- Created `.github/copilot-instructions.md` — always-on workspace instructions with project context
- Created `.github/instructions/html.instructions.md` — HTML-specific guidance
- Created `.github/instructions/javascript.instructions.md` — JavaScript-specific guidance
- Created `.github/instructions/css.instructions.md` — CSS-specific guidance
- Created `.github/prompts/new-feature.prompt.md` — reusable prompt for adding features
- Created `.github/prompts/refactor.prompt.md` — reusable prompt for refactoring code
- Created `.github/prompts/bug-fix.prompt.md` — reusable prompt for fixing bugs

**Decisions:**
- Used `.github/copilot-instructions.md` over `AGENTS.md` — single-folder project, not a monorepo, so this is the recommended cross-editor approach
- One instruction file per language (HTML, JS, CSS) — keeps concerns separated cleanly
- Three separate prompts (new-feature, refactor, bug-fix) — each focused on a single task type
- `PROMPT-HISTORY.md` at repo root — visible in repo listing, version-controlled alongside code
- Every instruction and prompt includes a reminder to update PROMPT-HISTORY.md

**Outcome:** Repo is now set up for agentic coding. Prompts available via `/` slash commands in Copilot chat. All instructions auto-load based on file type.

---

## 2026-03-24 — Add text input note

**Goal:** Add a small hand-drawn style note near the text input to show users where to type.

**Prompt(s) used:**
> currently the website looks like this screenshot, i've also attached a mockup where i'd like to add a little note that you can type into the box in the top left corner.
>
> just like the mock up i'd like it to be positioned absolute and have a little rotation on the elements so it looks a little more hand-done.
>
> You'll find the arrow asset in the assets folder.

**Changes made:**
- Updated `index.html` to wrap the text input in a header block, add an accessible label, and insert a decorative note using the arrow asset
- Updated `styles.css` to position and rotate the note, stabilize sidebar sizing, and add a small responsive adjustment for narrower screens
- Updated `PROMPT-HISTORY.md` with this session entry

**Decisions:**
- Kept the note purely decorative and separate from the input so the existing JavaScript logic did not need to change
- Removed the input placeholder because the new external note now provides the same guidance in the intended visual style
- Used a slight rotation on both the note and arrow to match the hand-done mockup without changing the core layout

**Outcome:** The sidebar now includes a visible "type in here" cue below the text field, styled to match the mockup more closely.

---

## 2026-03-24 — Adjust note spacing

**Goal:** Move the decorative input note slightly lower so the arrow no longer touches the divider line.

**Prompt(s) used:**
> good work, can you move the note div down a little so the arrow isnt touching the divider line?

**Changes made:**
- Updated `styles.css` to increase the top offset of the decorative note block
- Updated `PROMPT-HISTORY.md` with this follow-up adjustment

**Decisions:**
- Adjusted the note container position instead of the arrow alone so the note remains visually grouped and keeps its existing rotation

**Outcome:** The note sits slightly lower, giving the arrow more space below the divider line.

---

## 2026-03-24 — Increase arrow stroke width

**Goal:** Make the decorative arrow slightly bolder so it reads more clearly next to the handwritten note.

**Prompt(s) used:**
> actually is there a way to increase the stroke width of the arrow svg a little bit?

**Changes made:**
- Updated `assets/Arrow.svg` to increase the path stroke width
- Updated `PROMPT-HISTORY.md` with this follow-up adjustment

**Decisions:**
- Increased the SVG stroke at the asset level instead of using CSS filters or transforms so the line weight stays consistent anywhere the asset is reused

**Outcome:** The arrow renders a little thicker and should be easier to see without changing its shape.

---

## 2026-03-24 — Restore sidebar control width

**Goal:** Make the slider and toggle controls fill the sidebar width again after the note-related layout changes.

**Prompt(s) used:**
> it also looks like the changes have made the slider and toggle elements no longer fill the width of the sidebar?

**Changes made:**
- Updated `styles.css` to restore child stretching inside the sidebar and make the header and control container explicitly full width
- Updated `PROMPT-HISTORY.md` with this follow-up adjustment

**Decisions:**
- Fixed the sidebar container behavior rather than widening the individual controls so the layout stays consistent for all direct children

**Outcome:** The slider and toggle controls fill the sidebar width again while keeping the note placement intact.

---

## 2026-03-24 — Summarise and commit session changes

**Goal:** Capture the completed work in the session log, then stage and commit the current repo changes on `main`.

**Prompt(s) used:**
> summarise this session, stage changes and write a commit message and commit to main

**Changes made:**
- Updated `PROMPT-HISTORY.md` to record this wrap-up and commit step
- Staged the agentic setup files, prompt history, arrow asset, and UI note refinements for commit

**Decisions:**
- Kept the commit as a single changeset because the working tree already represented one coherent batch of project setup and UI polish
- Used the existing detailed prompt history entries to preserve the implementation breakdown, while this entry records the final repository action

**Outcome:** The session changes were summarised, staged, and prepared for a commit on `main`.
