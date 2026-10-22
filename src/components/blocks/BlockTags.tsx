import type { Block } from "../../types";

interface BlockTagsProps {
  block: Block;
}

export function BlockTags({ block }: BlockTagsProps) {
  return (
    <div className="block-tags">
      <span className="block-tag block-tag-id">
        #{String(block.id).padStart(2, "0")} {block.component}
      </span>
      {block.tags.map((tag) => (
        <span key={tag} className="block-tag" data-category={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}
