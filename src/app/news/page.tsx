import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import { newsPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "School News",
  description:
    "Read updates from Saya School including events, workshops, student activities, and campus improvements.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          School updates
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          News from
          <br />
          <em className="text-[var(--green-deep)]">our campus</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          Stay updated with announcements, achievements, and activity highlights from
          students and teachers at Saya School.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        {newsPosts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,92,42,0.12)]"
          >
            <ContentImage src={post.image} alt={post.imageAlt} />
            <div className="p-7">
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <h2 className="font-display mt-3 text-3xl font-medium leading-tight text-[var(--ink)]">
                {post.title}
              </h2>
              <p className="mt-3 leading-7 text-[var(--ink-muted)]">{post.excerpt}</p>
              <Link
                href={`/news/${post.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--green-mid)] transition group-hover:text-[var(--green-deep)]"
              >
                Read article <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
