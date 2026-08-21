# Repository Publication Rules

These rules apply to every change prepared for this repository.

- Describe the project as a general-purpose design-routing skill for compatible AI coding/design agents. Do not position it as exclusive to Codex, OpenAI, or any other vendor. Vendor-specific installation notes may appear only as clearly labelled examples.
- Before committing or publishing, scan all tracked text, metadata, repository description, page titles, and showcase labels for vendor-only positioning and remove it from public copy.
- Public files must contain final user-facing documentation only. Do not publish debugging notes, test labels, draft/WIP markers, migration notes, rejected alternatives, revision history, temporary identifiers, internal commentary, or language describing the editing process.
- Treat phrases such as `field test`, `debug`, `draft`, `TODO`, `WIP`, `rejected`, `temporary`, `previous version`, and similar process markers as release blockers unless they are necessary, user-facing design rationale in a project `DESIGN.md`.
- Keep provenance, licenses, contact details, demo-data boundaries, and accessibility/product validation evidence when they are part of the public deliverable. Never publish credentials or tokens.
- Run a final repository-wide semantic scan and `git diff --check` before each release; verify the GitHub repository description and deployed pages separately from local files.