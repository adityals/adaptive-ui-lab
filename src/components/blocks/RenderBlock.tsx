import type { ReactNode } from "react";
import type { Block, BlockOf } from "../../types";
import { Banner } from "./Banner";
import { BlockTags } from "./BlockTags";
import { Product } from "./Product";
import { Title } from "./Title";

type Renderers = { [K in Block["component"]]: (block: BlockOf<K>, tags: ReactNode) => ReactNode };

const renderers: Renderers = {
  title: (block, tags) => <Title tags={tags}>{block.content}</Title>,
  banner: (block, tags) => <Banner tags={tags}>{block.content}</Banner>,
  product: (block, tags) => (
    <Product
      {...block.content}
      code={`AX-${String(block.id).padStart(4, "0")}`}
      category={block.tags[0]!}
      tags={tags}
    />
  ),
};

interface RenderBlockProps {
  block: Block;
}

export function RenderBlock({ block }: RenderBlockProps) {
  // TS can't narrow a mapped lookup by the union key, so widen the renderer here.
  const render = renderers[block.component] as (block: Block, tags: ReactNode) => ReactNode;
  return render(block, <BlockTags block={block} />);
}
