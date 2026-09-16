"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  axis?: "x" | "y";
  children: ReactNode;
  className?: string;
  delay?: number;
};

function useReveal(axis: "x" | "y", delay: number) {
  const shouldReduceMotion = useReducedMotion();
  const offset = axis === "x" ? { x: 18 } : { y: 18 };

  return {
    initial: shouldReduceMotion ? false : { opacity: 0, ...offset },
    transition: {
      delay: shouldReduceMotion ? 0 : delay,
      duration: shouldReduceMotion ? 0 : 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };
}

export function RevealListItem({
  axis = "y",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reveal = useReveal(axis, delay);

  return (
    <motion.li
      className={className}
      initial={reveal.initial}
      transition={reveal.transition}
      viewport={{ amount: 0.55, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.li>
  );
}

export function RevealDiv({
  axis = "y",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reveal = useReveal(axis, delay);

  return (
    <motion.div
      className={className}
      initial={reveal.initial}
      transition={reveal.transition}
      viewport={{ amount: 0.55, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealArticle({
  axis = "y",
  children,
  className,
  delay = 0,
}: RevealProps) {
  const reveal = useReveal(axis, delay);

  return (
    <motion.article
      className={className}
      initial={reveal.initial}
      transition={reveal.transition}
      viewport={{ amount: 0.3, once: true }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.article>
  );
}
