# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Developers and reviewers looking at a demo or portfolio piece. The shoppers in the store are fictional; the real audience wants to see a storefront adapt its layout to a typed preference.

## Product Purpose
A demo of AI-adaptive web: the visitor types what they like, an in-browser embedding model (`Xenova/all-MiniLM-L6-v2`) ranks the categories tech, home and food, and the page shows only the backend-style blocks tagged with the matching categories, best match first. Success means a reviewer can see, at a glance, why each block appeared.

## Positioning
Personalization runs fully in the browser with no server call: blocks come in a server-driven shape (`{ id, tags, component, content }`) and the client model decides which ones render.

## Capabilities and Constraints
- Three block components: `title`, `banner`, `product`.
- Three categories: `tech`, `home`, `food`. More than one category can match.
- Block data is mocked in `src/data/blocks.ts`; there is no real backend, cart or checkout.
- The model downloads on first load and shows a percentage.
- Debug tags (`#id component` and category tags) stay visible on every card, by user decision.

## Brand Commitments
No existing brand. The store name is a placeholder invented for the demo.

## Evidence on Hand
No product photography, prices, reviews or customers are real. Do not present any as genuine.

## Product Principles
- The adaptation must be visible: a reviewer can always tell which category picked each block.
- Keep the store believable but clearly a demo.
- The block shape stays backend-driven; the frontend only maps `component` to a renderer.
