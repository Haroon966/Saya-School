import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { VolunteerAccordion } from "@/components/volunteer/volunteer-accordion";
import { VolunteerCareerExplorer } from "@/components/volunteer/volunteer-career-explorer";
import { VolunteerPageNav } from "@/components/volunteer/volunteer-page-nav";
import {
  siteConfig,
  volunteerAiProgram,
  volunteerAtAGlance,
  volunteerExpectations,
  volunteerFaq,
  volunteerFramework,
  volunteerHowItWorks,
  volunteerMailto,
  volunteerSteps,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Volunteer Program — Teach What You Know",
  description:
    "Volunteer at Saya School in Islamabad. Simple guide: who can join, how it works, career paths, AI mentoring, and how to apply.",
  alternates: {
    canonical: "/volunteer",
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--green-mid)]";

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">{children}</p>
  );
}

function SectionIntro({ title, children }: { title: string; children: ReactNode }) {
  return (
    <header className="mb-8 max-w-3xl">
      <h2 className="font-display text-3xl font-medium leading-tight text-[var(--green-deep)] sm:text-4xl">
        {title}
      </h2>
      <div className="prose-width mt-3 text-base leading-8 text-[var(--ink-muted)]">{children}</div>
    </header>
  );
}

export default function VolunteerPage() {
  const frameworkAccordion = volunteerFramework.map((block) => ({
    id: block.label.replace(/\s+/g, "-").toLowerCase(),
    label: block.label,
    summary: block.summary,
    title: block.title,
    content: (
      <ul className="space-y-3 pt-2">
        {block.points.map((point) => (
          <li key={point} className="flex gap-3 text-base leading-7 text-[var(--ink-muted)]">
            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--green-mid)]" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    ),
  }));

  const faqAccordion = volunteerFaq.map((item, index) => ({
    id: `faq-${index}`,
    label: "",
    title: item.question,
    content: <p className="pt-2 text-base leading-8 text-[var(--ink-muted)]">{item.answer}</p>,
  }));

  return (
    <div className="volunteer-page mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <a
        href="#volunteer-main"
        className={`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-24 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:shadow-lg ${focusRing}`}
      >
        Skip to main content
      </a>

      {/* Hero — short and scannable */}
      <section className="relative overflow-hidden rounded-3xl bg-[var(--green-deep)] p-8 text-white sm:p-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[var(--green-pale)]/15 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-pale)]">
          Volunteer program
        </p>
        <h1 className="font-display mt-4 max-w-2xl text-4xl font-normal leading-[1.08] sm:text-5xl lg:text-6xl">
          Your job is the lesson.
          <span className="mt-2 block text-[var(--green-pale)]">Teach children how life works.</span>
        </h1>
        <p className="prose-width mt-6 text-lg leading-8 text-white/85">
          Whether you code, heal, design, fix wiring, lead teams, or work with AI — you can volunteer
          at SAYA and help students see a real path to success.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={volunteerMailto()}
            className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold !text-[#0f1410] transition hover:bg-[var(--green-pale)] ${focusRing}`}
          >
            Apply to volunteer
          </a>
          <a
            href="#quick-guide"
            className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-medium transition hover:bg-white/10 ${focusRing}`}
          >
            Read quick guide
          </a>
        </div>
      </section>

      <div id="volunteer-main" className="mt-8">
        <VolunteerPageNav />
      </div>

      {/* Quick guide — 3 simple answers */}
      <section id="quick-guide" className="mt-12 scroll-mt-36" aria-labelledby="quick-guide-heading">
        <SectionLabel>Start here</SectionLabel>
        <h2 id="quick-guide-heading" className="font-display mt-3 text-3xl font-medium text-[var(--green-deep)] sm:text-4xl">
          Quick guide — 30 seconds
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {volunteerAtAGlance.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[var(--border)] bg-white p-6"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--green-deep)] font-mono text-sm font-medium text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-base leading-7 text-[var(--ink-muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
        <aside className="mt-6 rounded-2xl border-l-4 border-l-[var(--green-mid)] bg-[var(--surface)] p-6 sm:p-7">
          <p className="text-base leading-8 text-[var(--ink)]">
            <strong>You are not replacing teachers.</strong> You visit to share your profession — one
            talk, one lab session, or regular mentoring. If you can explain your work simply, you are
            ready.
          </p>
        </aside>
      </section>

      {/* How it works — visual timeline */}
      <section id="how-it-works" className="mt-16 scroll-mt-36" aria-labelledby="how-heading">
        <SectionIntro title="How it works">
          <p>Four simple steps. Tap each number to read more detail.</p>
        </SectionIntro>
        <ol className="relative grid gap-6 md:grid-cols-4 md:gap-4">
          {volunteerHowItWorks.map((item, index) => (
            <li key={item.step} className="relative">
              {index < volunteerHowItWorks.length - 1 ? (
                <span
                  className="absolute left-1/2 top-12 hidden h-0.5 w-full bg-[var(--border)] md:block"
                  aria-hidden="true"
                />
              ) : null}
              <article className="relative z-10 flex h-full flex-col rounded-2xl border border-[var(--border)] bg-white p-5 text-center sm:p-6 md:text-left">
                <span
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--green-deep)] font-mono text-lg font-medium text-white md:mx-0"
                  aria-hidden="true"
                >
                  {item.step}
                </span>
                <h3 className="font-display mt-4 text-lg font-medium text-[var(--green-deep)]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-[var(--ink-muted)]">{item.detail}</p>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* Why volunteer — accordion (less overwhelming) */}
      <section id="why-volunteer" className="mt-16 scroll-mt-36" aria-labelledby="why-heading">
        <SectionIntro title="Why volunteer?">
          <p>
            Open each section below. Read in order: <strong>Why it is</strong> →{" "}
            <strong>How it works</strong> → <strong>Why do it</strong> → <strong>Success in life</strong>.
          </p>
        </SectionIntro>
        <VolunteerAccordion items={frameworkAccordion} />
      </section>

      {/* Career paths — filterable */}
      <section id="career-paths" className="mt-16 scroll-mt-36" aria-labelledby="careers-heading">
        <SectionIntro title="Pick your profession">
          <p>
            Every card follows the same pattern: <strong>what you teach</strong>,{" "}
            <strong>why it helps students</strong>, and <strong>how it leads to success in life</strong>.
            Use the filters to find your field.
          </p>
        </SectionIntro>
        <VolunteerCareerExplorer />
      </section>

      {/* AI — simplified numbered list */}
      <section
        id="ai-program"
        className="mt-16 scroll-mt-36 rounded-3xl border-2 border-[var(--gold)]/35 bg-[var(--gold-pale)] p-8 sm:p-10"
        aria-labelledby="ai-heading"
      >
        <SectionLabel>Special call — AI</SectionLabel>
        <h2 id="ai-heading" className="font-display mt-3 text-3xl font-medium text-[var(--green-deep)] sm:text-4xl">
          {volunteerAiProgram.headline}
        </h2>
        <p className="prose-width mt-4 text-base leading-8 text-[var(--ink)]">
          {volunteerAiProgram.intro}
        </p>
        <ol className="mt-8 space-y-4">
          {volunteerAiProgram.topics.map((topic, index) => (
            <li
              key={topic.question}
              className="flex gap-4 rounded-2xl border border-[rgba(201,151,58,0.3)] bg-white p-5 sm:p-6"
            >
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--gold-pale)] font-mono text-sm font-medium text-[var(--gold)]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--green-deep)]">{topic.question}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--ink-muted)]">{topic.answer}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="prose-width mt-8 text-base leading-8 text-[var(--ink)]">
          {volunteerAiProgram.callToAction}
        </p>
        <a
          href={volunteerMailto("AI mentor — workshops & responsible use")}
          className={`mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--green-deep)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-mid)] ${focusRing}`}
        >
          Volunteer for AI sessions
        </a>
      </section>

      {/* FAQ */}
      <section id="faq" className="mt-16 scroll-mt-36" aria-labelledby="faq-heading">
        <SectionIntro title="Common questions">
          <p>Short answers. Tap a question to read more.</p>
        </SectionIntro>
        <VolunteerAccordion items={faqAccordion} allowMultiple />
      </section>

      {/* Get started */}
      <section id="get-started" className="mt-16 scroll-mt-36" aria-labelledby="start-heading">
        <SectionIntro title="How to join — 4 steps">
          <p>Follow these steps. We reply within a few working days.</p>
        </SectionIntro>
        <ol className="space-y-4">
          {volunteerSteps.map((item) => (
            <li
              key={item.step}
              className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 sm:gap-6 sm:p-7"
            >
              <span
                className="font-mono text-3xl font-medium leading-none text-[var(--green-mid)]"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold text-[var(--green-deep)]">{item.title}</h3>
                <p className="mt-2 text-base leading-7 text-[var(--ink-muted)]">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer CTA */}
      <section className="mt-12 grid gap-6 lg:grid-cols-2" aria-labelledby="cta-heading">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <h2 id="cta-heading" className="font-display text-2xl font-medium text-[var(--green-deep)]">
            Tips for a great session
          </h2>
          <ul className="mt-6 space-y-4">
            {volunteerExpectations.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-7 text-[var(--ink-muted)]">
                <span className="font-bold text-[var(--green-mid)]" aria-hidden="true">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="flex flex-col justify-between rounded-2xl bg-[var(--green-deep)] p-8 text-white">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">
              Ready?
            </p>
            <h2 className="font-display mt-3 text-3xl font-normal">Apply in one email</h2>
            <p className="mt-4 text-base leading-7 text-white/80">
              Write to{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className={`font-medium text-white underline underline-offset-4 ${focusRing}`}
              >
                {siteConfig.email}
              </a>{" "}
              or call{" "}
              <a
                href={siteConfig.phones[0].href}
                className={`font-medium text-white underline underline-offset-4 ${focusRing}`}
              >
                {siteConfig.phones[0].display}
              </a>
              . Include your profession and when you are free.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={volunteerMailto()}
              className={`inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f1410] transition hover:bg-[var(--green-pale)] ${focusRing}`}
            >
              Open volunteer email
            </a>
            <Link
              href="/contact"
              className={`inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-medium transition hover:bg-white/10 ${focusRing}`}
            >
              Contact page
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
