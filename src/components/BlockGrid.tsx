import type { Block } from "../types";
import { RenderBlock } from "./blocks/RenderBlock";

interface BlockGridProps {
  blocks: Block[];
  scanKey: string;
}

export function BlockGrid({ blocks, scanKey }: BlockGridProps) {
  return (
    // A new key remounts the shelf, which replays the one-shot scan sweep.
    <section key={scanKey} className="shelf" aria-label="Products">
      {blocks.map((block) => (
        <RenderBlock key={block.id} block={block} />
      ))}
    </section>
  );
}
