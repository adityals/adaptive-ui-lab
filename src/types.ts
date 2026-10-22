export const CATEGORIES = ["tech", "home", "food"] as const;
export type Category = (typeof CATEGORIES)[number];

interface BaseBlock {
  id: number;
  tags: Category[];
}

export interface TitleBlock extends BaseBlock {
  component: "title";
  content: string;
}

export interface BannerBlock extends BaseBlock {
  component: "banner";
  content: string;
}

export interface ProductContent {
  name: string;
  price: number;
}

export interface ProductBlock extends BaseBlock {
  component: "product";
  content: ProductContent;
}

export type Block = TitleBlock | BannerBlock | ProductBlock;

export type BlockOf<K extends Block["component"]> = Extract<Block, { component: K }>;
