import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  tags?: ReactNode;
}

export function Title({ children, tags }: TitleProps) {
  return (
    <div className="block-title">
      {tags}
      <h2>{children}</h2>
    </div>
  );
}
