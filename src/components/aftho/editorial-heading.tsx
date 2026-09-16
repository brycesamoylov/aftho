import type { ElementType, HTMLAttributes, ReactNode } from "react";

type EditorialHeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  size?: "section" | "display" | "hero";
};

export function EditorialHeading({
  as: Component = "h2",
  children,
  className,
  size = "display",
  ...props
}: EditorialHeadingProps) {
  return (
    <Component
      className={["editorial-heading", `text-${size}`, className]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}

type EditorialAccentProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

export function EditorialAccent({
  as: Component = "em",
  children,
  className,
  ...props
}: EditorialAccentProps) {
  return (
    <Component
      className={["editorial-accent", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </Component>
  );
}
