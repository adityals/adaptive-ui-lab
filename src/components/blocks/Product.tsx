import type { ReactNode } from "react";
import type { Category, ProductContent } from "../../types";
import { CategoryGlyph } from "../CategoryGlyph";

interface ProductProps extends ProductContent {
  code: string;
  category: Category;
  tags?: ReactNode;
}

export function Product({ name, price, code, category, tags }: ProductProps) {
  return (
    <article className="block-product">
      <div className="product-pod" data-category={category}>
        <CategoryGlyph category={category} />
      </div>
      {tags}
      <h3>{name}</h3>
      <div className="product-row">
        <span className="product-code">{code}</span>
        <strong className="product-price">${price}</strong>
      </div>
    </article>
  );
}
