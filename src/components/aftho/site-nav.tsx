"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "#audit", label: "How it works" },
  { href: "#what-aftho-sees", label: "What we find" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#websites", label: "Websites" },
];

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const firstLink = menuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-container nav-frame">
        <a aria-label="AFTHO home" className="brand-mark" href="#hero">
          AFTHO
        </a>

        <nav aria-label="Primary navigation" className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink
          className="desktop-nav-cta"
          href="#audit"
          variant="primary"
        >
          Run an audit <span aria-hidden="true">↗</span>
        </ButtonLink>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="menu-trigger"
          onClick={() => setIsOpen((open) => !open)}
          ref={triggerRef}
          type="button"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true" className="menu-mark">
            {isOpen ? "−" : "+"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="mobile-nav"
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -8 }}
            ref={menuRef}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="page-container">
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={closeMenu}>
                      <span aria-hidden="true">0{index + 1}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#audit"
                onClick={closeMenu}
                variant="primary"
              >
                Run an audit <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
