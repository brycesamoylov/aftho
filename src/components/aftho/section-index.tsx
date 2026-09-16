"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/button";

const sections = [
  { id: "hero", label: "Entry" },
  { id: "invisible-middle", label: "The leak" },
  { id: "what-aftho-sees", label: "Diagnosis" },
  { id: "audit", label: "Audit" },
  { id: "capabilities", label: "Repair" },
  { id: "websites", label: "Website" },
  { id: "evidence", label: "Evidence" },
  { id: "why-aftho", label: "Why AFTHO" },
  { id: "faq", label: "Questions" },
  { id: "start", label: "Start" },
] as const;

export function SectionIndex() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeId),
    0,
  );

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((target): target is HTMLElement => Boolean(target));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const current = entries.find((entry) => entry.isIntersecting);
        if (current) setActiveId(current.target.id);
      },
      { rootMargin: "-24% 0px -66% 0px", threshold: 0 },
    );

    targets.forEach((target) => sectionObserver.observe(target));

    const hero = document.getElementById("hero");
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        const hasPassedHero =
          !entry.isIntersecting || entry.intersectionRatio < 0.08;
        setIsVisible(hasPassedHero);
        if (!hasPassedHero) setIsOpen(false);
      },
      { threshold: 0.08 },
    );

    if (hero) heroObserver.observe(hero);

    return () => {
      sectionObserver.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const desktop = window.matchMedia(
      "(min-width: 64rem) and (min-height: 42rem)",
    );
    const closePanel = () => {
      if (desktop.matches) setIsOpen(false);
    };

    desktop.addEventListener("change", closePanel);
    return () => desktop.removeEventListener("change", closePanel);
  }, []);

  function closePanel() {
    setIsOpen(false);
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.aside
          animate={{ opacity: 1, x: 0 }}
          className="page-index"
          exit={shouldReduceMotion ? undefined : { opacity: 0, x: 8 }}
          initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <nav aria-label="Page sections" className="page-index-rail">
            <ol>
              {sections.map((section, index) => {
                const isActive = section.id === activeId;

                return (
                  <li key={section.id}>
                    <a
                      aria-current={isActive ? "location" : undefined}
                      aria-label={`${String(index).padStart(2, "0")} — ${section.label}`}
                      href={`#${section.id}`}
                      onClick={() => setActiveId(section.id)}
                    >
                      <span className="page-index-label">{section.label}</span>
                      <span aria-hidden="true" className="page-index-dot" />
                      <span aria-hidden="true" className="page-index-number">
                        {String(index).padStart(2, "0")}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="page-index-mobile">
            <AnimatePresence>
              {isOpen ? (
                <motion.nav
                  animate={{ opacity: 1, y: 0 }}
                  aria-label="Page section index"
                  className="page-index-panel"
                  exit={
                    shouldReduceMotion ? undefined : { opacity: 0, y: 8 }
                  }
                  id="section-index-panel"
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 8 }
                  }
                  ref={panelRef}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.18,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className="page-index-panel-title">Page index</p>
                  <ol>
                    {sections.map((section, index) => {
                      const isActive = section.id === activeId;

                      return (
                        <li key={section.id}>
                          <a
                            aria-current={isActive ? "location" : undefined}
                            href={`#${section.id}`}
                            onClick={closePanel}
                          >
                            <span aria-hidden="true">
                              {String(index).padStart(2, "0")}
                            </span>
                            {section.label}
                            {isActive ? (
                              <span className="sr-only"> (current section)</span>
                            ) : null}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                  <ButtonLink href="#audit" onClick={closePanel} variant="primary">
                    Run an audit <span aria-hidden="true">↗</span>
                  </ButtonLink>
                </motion.nav>
              ) : null}
            </AnimatePresence>

            <button
              aria-controls="section-index-panel"
              aria-expanded={isOpen}
              aria-label={`${isOpen ? "Close" : "Open"} page index. Current section: ${sections[activeIndex].label}`}
              className="page-index-trigger"
              onClick={() => setIsOpen((open) => !open)}
              ref={triggerRef}
              type="button"
            >
              <span aria-hidden="true" className="page-index-trigger-count">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(sections.length).padStart(2, "0")}
              </span>
              <span>{sections[activeIndex].label}</span>
              <span aria-hidden="true" className="page-index-trigger-mark">
                {isOpen ? "−" : "+"}
              </span>
            </button>
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
