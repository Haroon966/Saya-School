import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/site";

export const metadata: Metadata = {
  title: "Courses & Programs",
  description:
    "Explore Saya School programs from primary through secondary education for students in Islamabad.",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          What we offer
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Education for
          <br />
          <em className="text-[var(--green-deep)]">every stage</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          From foundational literacy to matriculation preparation, SAYA provides structured
          programs for boys and girls across grades 1 through 10.
        </p>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {courses.map((course, idx) => (
          <article
            key={course.title}
            className="rounded-2xl border border-[var(--border)] border-t-4 border-t-[var(--green-mid)] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,92,42,0.10)]"
          >
            <span className="font-mono text-sm font-medium text-[var(--green-mid)]">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h2 className="font-display mt-4 text-3xl font-medium text-[var(--green-deep)]">
              {course.level}
            </h2>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.06em] text-[var(--ink-muted)]">
              {course.title}
            </p>
            <p className="mt-4 leading-7 text-[var(--ink-muted)]">{course.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-3xl bg-[var(--green-deep)] p-8 text-white sm:p-10">
        <h2 className="font-display text-3xl font-normal">Ready to learn more?</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
          Contact our team for enrollment information, campus visits, and program details.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f1410] transition hover:bg-[#eef5ef]"
        >
          Contact SAYA →
        </Link>
      </section>
    </div>
  );
}
