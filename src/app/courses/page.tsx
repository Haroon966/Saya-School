import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses and Academic Programs",
  description:
    "Explore primary, middle, and secondary programs at Saya School focused on quality education and practical student development.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          Academic journey
        </p>
        <h1 className="mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Courses and
          <br />
          <em className="text-[var(--green-deep)]">Programs</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          Our academic track supports students from primary to secondary level with a
          balanced focus on conceptual learning, discipline, and modern skills.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {courses.map((course, idx) => (
          <article
            key={course.title}
            className="rounded-2xl border border-[var(--border)] border-t-4 border-t-[var(--green-mid)] bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,92,42,0.1)]"
          >
            <span className="text-3xl">{idx === 0 ? "📚" : idx === 1 ? "🔬" : "🎓"}</span>
            <h2 className="mt-4 text-3xl font-medium text-[var(--green-deep)]">{course.title}</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
              {course.level}
            </p>
            <p className="mt-4 leading-7 text-[var(--ink-muted)]">{course.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl bg-[var(--gold-pale)] p-8 sm:p-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--gold)]">
              Learning support
            </p>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Beyond the classroom</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--ink-muted)]">
              Students also benefit from guided projects, practical activities, and
              caring mentorship that strengthens confidence and long-term growth.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-[rgba(201,151,58,0.45)] bg-white px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--surface)]"
          >
            Ask about admissions →
          </Link>
        </div>
      </section>
    </>
  );
}
