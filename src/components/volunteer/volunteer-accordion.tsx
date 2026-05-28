"use client";

import { useId, useState, type ReactNode } from "react";

type AccordionItem = {
  id: string;
  label: string;
  summary?: string;
  title: string;
  content: ReactNode;
};

type VolunteerAccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-mid)]";

export function VolunteerAccordion({ items, allowMultiple = false }: VolunteerAccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id ?? ""]);

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (allowMultiple) {
        return current.includes(id) ? current.filter((item) => item !== id) : [...current, id];
      }
      return current.includes(id) ? [] : [id];
    });
  };

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `${baseId}-${item.id}-panel`;
        const buttonId = `${baseId}-${item.id}-button`;

        return (
          <article
            key={item.id}
            className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"
          >
            <h3 className="m-0">
              <button
                type="button"
                id={buttonId}
                className={`flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 ${focusRing}`}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span className="min-w-0 flex-1">
                  {item.label ? (
                    <span className="inline-block rounded-full bg-[var(--surface)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--green-mid)]">
                      {item.label}
                    </span>
                  ) : null}
                  <span
                    className={`font-display block text-xl font-medium text-[var(--green-deep)] sm:text-2xl ${item.label ? "mt-3" : ""}`}
                  >
                    {item.title}
                  </span>
                  {item.summary && !isOpen ? (
                    <span className="mt-2 block text-sm leading-6 text-[var(--ink-muted)]">
                      {item.summary}
                    </span>
                  ) : null}
                </span>
                <span
                  className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] text-lg text-[var(--green-deep)] transition ${
                    isOpen ? "rotate-180 bg-[var(--surface)]" : "bg-white"
                  }`}
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-[var(--border)] px-5 pb-5 pt-1 sm:px-6 sm:pb-6"
            >
              {item.content}
            </div>
          </article>
        );
      })}
    </div>
  );
}
