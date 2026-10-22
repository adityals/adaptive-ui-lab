import type { ReactNode } from "react";
import type { Category } from "../types";

const paths: Record<Category, ReactNode> = {
  tech: (
    <>
      <rect x="16" y="16" width="32" height="32" rx="6" />
      <rect x="25" y="25" width="14" height="14" rx="2" />
      <path d="M24 16V9M32 16V9M40 16V9M24 55v-7M32 55v-7M40 55v-7M16 24H9M16 32H9M16 40H9M55 24h-7M55 32h-7M55 40h-7" />
    </>
  ),
  home: (
    <>
      <path d="M10 30 32 12l22 18" />
      <path d="M16 26v26h32V26" />
      <rect x="27" y="36" width="10" height="16" rx="2" />
    </>
  ),
  food: (
    <>
      <path d="M14 28h32v6a16 16 0 0 1-32 0z" />
      <path d="M46 31h4a5 5 0 0 1 0 10h-5" />
      <path d="M22 20c0-4 4-4 4-8M30 20c0-4 4-4 4-8M38 20c0-4 4-4 4-8" />
      <path d="M12 54h40" />
    </>
  ),
};

interface CategoryGlyphProps {
  category: Category;
}

export function CategoryGlyph({ category }: CategoryGlyphProps) {
  return (
    <svg viewBox="0 0 64 64" className="category-glyph" aria-hidden="true">
      {paths[category]}
    </svg>
  );
}
