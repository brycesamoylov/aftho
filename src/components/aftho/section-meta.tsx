import type { ElementType, HTMLAttributes, ReactNode } from "react";

type SectionMetaProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function SectionMeta({
  as: Component = "span",
  children,
  className,
  ...props
}: SectionMetaProps) {
  return (
    <Component
      className={["section-meta", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
