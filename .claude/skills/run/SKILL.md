---
name: run
description: >
  Run and preview the personal website locally. Use this skill whenever the user wants
  to start the dev server, test a change in the browser, verify a fix works visually,
  take a screenshot of the site, or check how the site looks. Triggers on: "run it",
  "test locally", "start the server", "show me what it looks like", "verify the fix",
  "open the site", "preview the changes", or any request to see the site running.
---

# Running the Personal Website Locally

This is an Astro project. The dev server starts at `http://localhost:4321`.

## Steps

1. **Start the dev server** using the Claude Preview MCP tool:
   - Use `mcp__Claude_Preview__preview_start` with name `dev` (defined in `.claude/launch.json`)
   - The site base path is `/personal-website`, so after starting navigate there with `mcp__Claude_Preview__preview_eval`: `window.location.href = 'http://localhost:4321/personal-website'`

2. **Take a screenshot** with `mcp__Claude_Preview__preview_screenshot` to capture the page

3. **Report** what you see — confirm the page loaded, note anything visually broken or unexpected.

4. **Stop the server** when done (unless the user wants to keep it running):
   ```bash
   kill $(lsof -ti:4321) 2>/dev/null || true
   ```

## Notes

- If port 4321 is already in use, the server may pick 4322 — check the terminal output.
- If the preview MCP isn't available, fall back to `mcp__Claude_in_Chrome__navigate` with url `http://localhost:4321` and `mcp__Claude_in_Chrome__read_page`.
- If neither MCP is available, just report that the server started successfully and share the URL.
