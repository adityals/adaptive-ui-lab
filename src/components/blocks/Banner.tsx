import type { ReactNode } from "react";

interface BannerProps {
  children: ReactNode;
  tags?: ReactNode;
}

export function Banner({ children, tags }: BannerProps) {
  return (
    <div className="block-banner">
      {tags}
      <p>{children}</p>
    </div>
  );
}
