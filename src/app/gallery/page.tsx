import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryItems } from "@/lib/site";
import { withBasePath } from "@/lib/with-base-path";

export const metadata: Metadata = {
  title: "Photo Gallery",
  description:
    "Browse photos from Saya School — campus life, students, leadership, and the journey from learning under a tree to a thriving high school.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          Campus moments
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Photo
          <br />
          <em className="text-[var(--green-deep)]">Gallery</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          A glimpse into life at SAYA School — our students, spaces, leadership, and the story
          that began with a class under a tree.
        </p>
      </section>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <article
            key={item.src}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,92,42,0.1)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
              <Image
                src={withBasePath(item.src)}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--green-deep)]">
                {item.category}
              </span>
            </div>
            <div className="p-5">
              <h2 className="font-display text-2xl font-medium text-[var(--green-deep)]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">{item.caption}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl border border-[rgba(201,151,58,0.25)] bg-[var(--gold-pale)] p-8 sm:p-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--gold)]">
              Visit us
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium sm:text-5xl">
              See SAYA in person
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
              We welcome families, donors, and partners to visit our campus and meet the
              community behind our mission.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact"
              className="inline-block whitespace-nowrap rounded-full border border-[rgba(201,151,58,0.45)] bg-white px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--green-deep)] hover:bg-[var(--surface)]"
            >
              Plan a visit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
