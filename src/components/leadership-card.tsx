"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/with-base-path";

type LeadershipCardProps = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

export function LeadershipCard({ name, title, bio, image }: LeadershipCardProps) {
  const [expanded, setExpanded] = useState(false);
  const bioId = `leader-bio-${name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="relative min-h-[430px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
      <Image
        src={withBasePath(image)}
        alt={`${name}, ${title} at SAYA School`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition duration-500 hover:scale-105"
      />
      <div className="relative z-10 flex min-h-[430px] flex-col justify-end">
        <div className="rounded-xl bg-gradient-to-tr from-[rgba(12,21,16,0.78)] via-[rgba(12,21,16,0.42)] to-[rgba(12,21,16,0.08)] p-4">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">SAYA Core</p>
          <h3 className="font-display mt-2 text-2xl font-medium text-white">{name}</h3>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-pale)]">
            {title}
          </p>
          <p id={bioId} className="mt-3 hidden text-sm leading-7 text-white/85 md:block">
            {bio}
          </p>
          <p
            className={`mt-3 text-sm leading-7 text-white/85 md:hidden ${
              expanded ? "block" : "hidden"
            }`}
          >
            {bio}
          </p>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            aria-controls={bioId}
            className="mt-2 text-xs font-medium text-[var(--green-pale)] underline decoration-white/30 underline-offset-4 md:hidden"
          >
            {expanded ? "Hide bio" : "Read bio"}
          </button>
        </div>
      </div>
    </article>
  );
}
