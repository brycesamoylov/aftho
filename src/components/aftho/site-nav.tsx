"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  { href: "#problem", label: "How jobs get lost" },
  { href: "#check", label: "Revenue Leak Check" },
  { href: "#services", label: "What we fix" },
  { href: "#founder", label: "About me" },
  { href: "#faq", label: "FAQ" },
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
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="practical-header">
      <div className="practical-container practical-nav-frame">
        <a aria-label="AFTHO home" className="practical-brand" href="#hero">
          <Image
            alt=""
            className="practical-brand-logo"
            height={64}
            priority
            src="/aftho-logo.png"
            width={64}
          />
          <span>Revenue leak diagnostics</span>
        </a>

        <nav aria-label="Primary navigation" className="practical-desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink className="practical-nav-cta" href="#check" variant="primary">
          Take the check
        </ButtonLink>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          className="practical-menu-trigger"
          onClick={() => setIsOpen((open) => !open)}
          ref={triggerRef}
          type="button"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label="Mobile navigation"
            className="practical-mobile-nav"
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
            id="mobile-navigation"
            initial={shouldReduceMotion ? false : { opacity: 0, y: -6 }}
            ref={menuRef}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16 }}
          >
            <div className="practical-container">
              <ul>
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} onClick={closeMenu}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="practical-mobile-actions">
                <ButtonLink
                  href="tel:+13133649986"
                  onClick={closeMenu}
                  variant="primary"
                >
                  Call AFTHO
                </ButtonLink>
                <ButtonLink
                  href="mailto:dmitry@aftho.com"
                  onClick={closeMenu}
                  variant="secondary"
                >
                  Email AFTHO
                </ButtonLink>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
