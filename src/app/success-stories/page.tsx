import type { Metadata } from "next";
import { AlumniStoryCard } from "@/components/alumni-story-card";
import { successStories, successStoriesDemoNotice } from "@/lib/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Sample alumni profiles from Saya School. Real graduate stories will be added with permission.",
  alternates: {
    canonical: "/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          Voices of SAYA
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Their stories
          <br />
          <em className="text-[var(--green-deep)]">inspire us</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          Our students create impact through education and career growth. The profiles below are
          placeholders until we publish verified alumni stories.
        </p>
        <p className="mt-4 rounded-xl border border-[var(--gold)]/30 bg-[var(--gold-pale)] px-4 py-3 text-sm leading-7 text-[var(--ink-muted)]">
          {successStoriesDemoNotice}
        </p>
      </section>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {successStories.map((story) => (
          <AlumniStoryCard key={story.id} story={story} headingLevel="h2" />
        ))}
      </div>
    </div>
  );
}
