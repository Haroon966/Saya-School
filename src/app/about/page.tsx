import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Saya School",
  description:
    "Learn about Saya School history, mission, and leadership in delivering quality education to underprivileged children in Islamabad.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-16 h-56 w-56 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-4 h-56 w-56 rounded-full bg-[var(--gold)]/15 blur-3xl" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
            About SAYA
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-normal leading-tight sm:text-6xl">
            A school that grew
            <br />
            <em className="text-[var(--green-deep)]">from shade into hope.</em>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
            Saya School started in 2008 under the Saya Welfare Society to support
            out-of-school children in Islamabad through affordable, inclusive, and
            quality education.
          </p>
        </div>
      </section>

      <section className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          { value: "2008", label: "Founded" },
          { value: "800+", label: "Students reached" },
          { value: "3", label: "School buildings" },
        ].map((stat) => (
          <article key={stat.label} className="section-card bg-white p-7">
            <p className="text-4xl font-medium text-[var(--green-deep)]">{stat.value}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
              {stat.label}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="section-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
            Our Story
          </p>
          <h2 className="mt-3 text-4xl font-medium text-[var(--green-deep)]">Under a tree</h2>
          <p className="mt-4 leading-8 text-[var(--ink-muted)]">
            The first classes were held under the shadow of a tree, which inspired the
            name &quot;Saya&quot;. From a dozen students, the school has grown into a high school
            with hundreds of boys and girls learning in purpose-built facilities.
          </p>
        </article>
        <article className="section-card p-8">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
            Mission
          </p>
          <h2 className="mt-3 text-4xl font-medium text-[var(--green-deep)]">
            Dignified education
          </h2>
          <p className="mt-4 leading-8 text-[var(--ink-muted)]">
            We create a safe and supportive learning environment where every child can
            build confidence, discipline, and the academic foundation needed for a
            stronger future.
          </p>
        </article>
      </section>

      <section className="mt-10 rounded-3xl bg-[var(--green-deep)] p-8 text-white sm:p-10">
        <div className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">
            What we offer
          </p>
          <h2 className="mt-3 text-4xl font-normal leading-tight sm:text-5xl">
            Learning with care, structure, and purpose.
          </h2>
          <ul className="mt-6 grid gap-3 text-sm leading-7 text-white/80 md:grid-cols-2">
            <li>Structured academic curriculum with trained teaching staff.</li>
            <li>Library, computer lab, and science support for practical learning.</li>
            <li>Sports and co-curricular development for confidence and teamwork.</li>
            <li>A safe environment for long-term educational success.</li>
          </ul>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f1410] transition hover:bg-[#eef5ef]"
          >
            Connect with SAYA →
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "School",
            name: siteConfig.name,
            url: `${siteConfig.domain}/about`,
            description: siteConfig.description,
          }),
        }}
      />
    </>
  );
}
