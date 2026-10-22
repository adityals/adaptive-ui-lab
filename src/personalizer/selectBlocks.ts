import type { Block, Category } from "../types";

export function selectBlocks(blocks: Block[], categories: Category[]): Block[] {
  if (!categories.length) {
    return blocks;
  }

  const rank = (block: Block) =>
    Math.min(...block.tags.map((tag) => categories.indexOf(tag)).filter((i) => i >= 0));

  return blocks
    .filter((block) => block.tags.some((tag) => categories.includes(tag)))
    .sort((a, b) => rank(a) - rank(b));
}
