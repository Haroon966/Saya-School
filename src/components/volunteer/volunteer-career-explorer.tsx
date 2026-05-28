"use client";

import { useMemo, useState } from "react";
import { volunteerCareerPaths, volunteerMailto } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-mid)]";

const tags = ["All", ...Array.from(new Set(volunteerCareerPaths.map((p) => p.tag)))];

export function VolunteerCareerExplorer() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? volunteerCareerPaths
        : volunteerCareerPaths.filter((path) => path.tag === activeTag),
    [activeTag],
  );

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter careers by field"
        className="flex flex-wrap gap-2"
      >
        {tags.map((tag) => {
          const selected = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveTag(tag)}
              className={`min-h-11 rounded-full px-4 py-2 text-sm font-medium transition ${focusRing} ${
                selected
                  ? "bg-[var(--green-deep)] text-white"
                  : "border border-[var(--border)] bg-white text-[var(--ink-muted)] hover:border-[var(--green-mid)] hover:text-[var(--green-deep)]"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-[var(--ink-muted)]" aria-live="polite">
        Showing {filtered.length} {filtered.length === 1 ? "path" : "paths"}
        {activeTag !== "All" ? ` in ${activeTag}` : ""}
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {filtered.map((path) => (
          <article
            key={path.profession}
            className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-7"
          >
            <header className="flex flex-wrap items-start justify-between gap-3 border-b border-[var(--border)] pb-4">
              <h3 className="font-display text-2xl font-medium text-[var(--green-deep)]">
                {path.profession}
              </h3>
              <span className="rounded-full bg-[var(--gold-pale)] px-3 py-1 text-xs font-medium text-[var(--gold)]">
                {path.tag}
              </span>
            </header>

            <ol className="mt-5 space-y-4">
              <li>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--green-mid)]">
                  Step 1 · What you teach
                </p>
                <p className="mt-1.5 text-base leading-7 text-[var(--ink)]">{path.whatYouTeach}</p>
              </li>
              <li>
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--green-mid)]">
                  Step 2 · Why it matters
                </p>
                <p className="mt-1.5 text-base leading-7 text-[var(--ink-muted)]">{path.whyItMatters}</p>
              </li>
              <li className="rounded-xl bg-[var(--surface)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--gold)]">
                  Step 3 · Success in life
                </p>
                <p className="mt-1.5 text-base leading-7 text-[var(--ink)]">{path.lifeSuccess}</p>
              </li>
            </ol>

            <a
              href={volunteerMailto(path.profession)}
              className={`mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--green-deep)] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--green-mid)] ${focusRing}`}
            >
              Volunteer — {path.profession}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
