"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "text";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  disabled?: boolean;
  variant?: ButtonVariant;
};

function buttonClassName(variant: ButtonVariant, className?: string) {
  return ["button", `button-${variant}`, className].filter(Boolean).join(" ");
}

export function Button({
  className,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClassName(variant, className)}
      type={type}
      {...props}
    />
  );
}

export function ButtonLink({
  children,
  className,
  disabled = false,
  onClick,
  tabIndex,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      aria-disabled={disabled || undefined}
      className={buttonClassName(variant, className)}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      tabIndex={disabled ? -1 : tabIndex}
      {...props}
    >
      {children}
    </a>
  );
}
