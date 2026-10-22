# Agent rules

Rules for any coding agent working in this repo. Bun specifics live in `CLAUDE.md`; product facts in `PRODUCT.md`; visual direction in `DESIGN.md`.

## Tooling

- Use Bun for everything: `bun install`, `bun run`, `bun test`, `bunx`. No Node, npm, vite, jest, express.
- Format with Prettier, `printWidth` 100 (see `.prettierrc`). Run `bunx prettier@3 --write <files>` on every file you touch.
- Type-check with `bunx tsc --noEmit -p .` before saying work is done.
- Never run the dev server (`bun run dev`, `bun src/index.ts`). The user runs it.

## TypeScript

- Write idiomatic TypeScript: `type` imports for types, discriminated unions, `as const` arrays for enums, `Record` for lookup tables.
- Use `interface` for object shapes, including component props; never inline them in a function signature. Keep `type` for unions, mapped types and derived types.
- Avoid non-null assertions (`!`); use defaults or `??` instead.
- Never use deprecated APIs or types. Example: use `SubmitEvent`, not `FormEvent`, for form submits.

## React

- Follow React best practices: function components, hooks for stateful logic, stable `key`s, no state for values derivable at render.
- Keep components small and single-purpose (SOLID). Logic goes in hooks or pure functions, not in JSX.
- Don't call a promise without handling it; mark intentional fire-and-forget calls with `void`.

## Style

- Never write a one-line `if`. Always use braces and put the body on its own line.
- In CSS, put a blank line between every rule block.
- Comments only where they earn their place: explain the reasoning behind non-obvious logic (for example the vector math and the category margin), not what the code obviously does.
- No commented-out code. Delete unused code, files and assets.
- Don't add tests unless asked.

## Product rules

- Blocks come from the backend as `{ id, tags, component, content }`. The frontend only maps `component` to a renderer; add a new block type by registering a renderer.
- Categories are `tech`, `home`, `food`. Category picking uses the in-browser embedding model, not an LLM; the result must always be one of the allowed values.
- Debug tags (`#id component` and the category tags) stay visible inside every card.
- Visual direction: futuristic, after the film *I, Robot*. No generic template styling. No real company names or marks.
