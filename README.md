# Personalized Web

A learning project. The question I want to answer: **can I make a web page adapt to each user's personalisation?**

> **About the code:** about 95% of the code in this project was written by AI. My part is steering: deciding the direction, setting the rules, and checking the quality of what comes out.

The page is a small demo store called Axiom. You type what you like in plain words, for example "I like fried chicken while I watch tech news", and the shelf rearranges to show the blocks that match you.

## User flow

1. **Open the page.** The model starts downloading in the background. The header shows the download progress. Until you type anything, the shelf shows the full catalogue.
2. **Type your preference** in the "Your preference" box (max 255 characters). For example: "I like fried chicken while I watch tech news".
3. **Submit** with Enter or the **Personalize** button (Shift+Enter adds a new line). The button stays disabled until the model has downloaded. It reads "Reading…" while the model works.
4. **See the result.** The line under the box shows which categories matched, in order, for example "Showing food then tech". The shelf below keeps only the matching blocks, best match first.
5. **Try again.** Type a new sentence and submit. The shelf rearranges each time.

If the model fails to load or run, the header shows an error status and the shelf stays as it was.

## How it works

1. **Blocks come in a backend-style shape.** Each block is `{ id, tags, component, content }`, mocked in `src/data/blocks.ts`. The frontend only maps `component` (`title`, `banner`, `product`) to a React component.
2. **An AI model reads your preference in the browser.** `Xenova/all-MiniLM-L6-v2` runs locally with Transformers.js. It turns your sentence and each category description into vectors and compares them. Nothing is sent to a server.
3. **The closest categories win.** Every category scoring close to the best one is kept, so a mixed sentence can show both `food` and `tech`, best match first. See `src/personalizer/embedder.ts` and `src/personalizer/rankCategories.ts` for the reasoning.
4. **The page filters and orders the blocks** by those categories (`src/personalizer/selectBlocks.ts`). Each card shows its id, component type and category tags, so you can see why it appeared.

I first tried a small text-generation model (SmolLM2-360M). It copied the example from the prompt and invented categories like `music`, so I switched to embeddings, which always return one of the allowed categories.

## Run it

```bash
bun install
bun run dev
```

The model downloads on first load. The header shows the progress.

For production:

```bash
bun run start
```
