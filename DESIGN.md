# Design

World: a futuristic space-station lounge, after the film *I, Robot*. Style reference chosen by the user: a glossy white sci-fi living room with black glass HUD screens and white LED light strips (dreamstime #391838463, used as a guide only, never shipped). Original brand only: the store is "Axiom", with no real company names or marks.

## Thesis
The store is a room that rearranges itself around you. Soft white furniture carries the products; angular black glass screens carry the machine's voice. Light, not colour, shows where the machine is paying attention.

## Palette (tokens in `src/index.css` `:root`)
- `--pearl` glossy white ground, `--pearl-raised` panel white, `--haze` cool grey shadow and floor reflection.
- `--ink` near-black text, `--ink-soft` secondary text.
- `--glass` black glass screens, `--glass-text` and `--glass-soft` text on glass.
- `--led` cool white light for strips, focus and the scan sweep.
- Category channels, used only on tag dots and product pods: `--ch-tech` blue, `--ch-home` violet, `--ch-food` amber.
- Light theme only: a bright, sunlit room.

## Type
- One family: Sora. Headline at weight 300 with tight tracking, section titles at 400, UI at 500 to 600.
- Sentence case everywhere. No all-caps, no wide letter-spacing.
- System mono only for data: debug tags, item codes, prices.

## Components
- Two materials, never mixed on one surface:
  - White furniture: rounded 20px panels, white-to-pearl gradient, soft offset shadow. Used for product cards.
  - Charcoal glass: rounded corners (14 to 28px, pill for the status HUD), a white LED strip on the top edge. Used for the console, banners, product pods and the status HUD.
- Everything is rounded, like the reference's curved furniture. No sharp or cut corners.
- Debug tags stay visible inside every card: `#id component` plus one chip per category with its channel dot.

## Motion
One authored moment: when the categories change, a white LED line sweeps once down the shelf. Everything is visible without it; `prefers-reduced-motion` turns it off.

## Prohibitions
- No photos, no gradient text, no glass blur as decoration.
- No neon on black: the room is white, and light is the accent.
