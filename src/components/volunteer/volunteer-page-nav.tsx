"use client";

import { volunteerPageNav } from "@/lib/site";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-mid)]";

export function VolunteerPageNav() {
  return (
    <nav aria-label="Jump to section" className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5">
      <p id="volunteer-nav-label" className="text-sm font-semibold text-[var(--ink)]">
        Jump to a section
      </p>
      <ul aria-labelledby="volunteer-nav-label" className="mt-3 flex flex-wrap gap-2">
        {volunteerPageNav.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`inline-flex min-h-11 items-center rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm text-[var(--ink-muted)] transition hover:border-[var(--green-mid)] hover:bg-white hover:text-[var(--green-deep)] ${focusRing}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
