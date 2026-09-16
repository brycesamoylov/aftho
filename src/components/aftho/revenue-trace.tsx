"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionMeta } from "@/components/aftho/section-meta";

type TraceEvent = {
  id: string;
  label: string;
  timestamp: string;
  state: "received" | "complete" | "leak" | "unknown";
  status: string;
};

const traceEvents: TraceEvent[] = [
  {
    id: "01",
    label: "Web",
    timestamp: "11:43:01",
    state: "received",
    status: "Opportunity received",
  },
  {
    id: "02",
    label: "Form",
    timestamp: "11:43:02",
    state: "complete",
    status: "Submitted",
  },
  {
    id: "03",
    label: "Inbox",
    timestamp: "11:43:03",
    state: "complete",
    status: "Delivered",
  },
  {
    id: "04",
    label: "Owner",
    timestamp: "11:43:03",
    state: "leak",
    status: "Unassigned",
  },
  {
    id: "05",
    label: "Follow-up",
    timestamp: "12:28:41",
    state: "unknown",
    status: "No response",
  },
  {
    id: "06",
    label: "Quote",
    timestamp: "—",
    state: "unknown",
    status: "Not reached",
  },
  {
    id: "07",
    label: "Outcome",
    timestamp: "—",
    state: "unknown",
    status: "Unknown",
  },
];

export function RevenueTrace() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <figure
      aria-labelledby="trace-title"
      className="revenue-trace"
      id="trace"
    >
      <figcaption className="trace-header">
        <div>
          <SectionMeta as="p">Example trace / 001</SectionMeta>
          <h2 id="trace-title">One lead. Seven steps. One missing owner.</h2>
        </div>
        <dl className="trace-summary" aria-label="Example opportunity details">
          <div>
            <dt>Opportunity</dt>
            <dd>024</dd>
          </div>
          <div>
            <dt>Channel</dt>
            <dd>Web quote</dd>
          </div>
          <div>
            <dt>Est. value</dt>
            <dd>Unknown</dd>
          </div>
        </dl>
      </figcaption>

      <ol className="trace-path" aria-label="Example opportunity path">
        {traceEvents.map((event, index) => {
          const eventDelay = 0.28 + index * 0.2;

          return (
          <motion.li
            className={`trace-event trace-event--${event.state}`}
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 10 }
            }
            key={event.id}
            transition={{
              delay: shouldReduceMotion ? 0 : eventDelay,
              duration: shouldReduceMotion ? 0 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ amount: 0.65, once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="trace-node-row" aria-hidden="true">
              <motion.span
                animate={{ scale: 1 }}
                className="trace-node"
                initial={shouldReduceMotion ? false : { scale: 0 }}
                transition={{
                  delay: shouldReduceMotion ? 0 : eventDelay,
                  duration: shouldReduceMotion ? 0 : 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
              {index < traceEvents.length - 1 ? (
                <motion.span
                  animate={{ scale: 1 }}
                  className="trace-connector"
                  initial={shouldReduceMotion ? false : { scale: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : eventDelay + 0.12,
                    duration: shouldReduceMotion ? 0 : 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              ) : null}
            </div>
            <div className="trace-event-copy">
              <span className="trace-event-id">{event.id}</span>
              <h3>{event.label}</h3>
              <p>{event.status}</p>
              <time>{event.timestamp}</time>
            </div>
          </motion.li>
          );
        })}
      </ol>

      <motion.div
        className="trace-finding"
        id="trace-finding"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        transition={{
          delay: shouldReduceMotion ? 0 : 1.82,
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ amount: 0.65, once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="leak-flag">Leak detected</span>
        <p>
          <strong>The form worked.</strong> Nobody owned what came next, so the
          opportunity waited 45 minutes without a response.
        </p>
        <span className="trace-finding-code">Response gap / +45m 38s</span>
      </motion.div>
    </figure>
  );
}
