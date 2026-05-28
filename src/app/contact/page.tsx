import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Saya School",
  description:
    "Contact Saya School for donations, volunteering, and community partnership inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="rounded-3xl bg-[var(--green-deep)] p-8 text-white sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-pale)]">
          Contact
        </p>
        <h1 className="mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Let us build
          <br />
          <em className="text-[var(--green-pale)]">a better tomorrow.</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
          Reach out for donation support, volunteering, partnerships, or general
          school information. Our team is ready to help.
        </p>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
            School contact
          </p>
          <h2 className="mt-3 text-4xl font-medium text-[var(--green-deep)]">Reach SAYA</h2>
          <ul className="mt-6 space-y-5 text-sm leading-7 text-[var(--ink-muted)]">
            <li>
              <span className="block font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
                Address
              </span>
              <span className="mt-1 block text-base text-[var(--ink)]">{siteConfig.address}</span>
            </li>
            <li>
              <span className="block font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
                Phone
              </span>
              <span className="mt-1 block text-base text-[var(--ink)]">{siteConfig.phone}</span>
            </li>
            <li>
              <span className="block font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
                Email
              </span>
              <span className="mt-1 block text-base text-[var(--ink)]">{siteConfig.email}</span>
            </li>
          </ul>
        </article>
        <article className="rounded-2xl border border-[var(--border)] bg-white p-8">
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
            Inquiry form
          </p>
          <h2 className="mt-3 text-4xl font-medium text-[var(--green-deep)]">Send a message</h2>
          <form className="mt-6 space-y-4" action={`mailto:${siteConfig.email}`} method="post">
            <input
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition focus:border-[var(--green-mid)] focus:ring-2 focus:ring-[var(--green-mid)]/20"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
            <input
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition focus:border-[var(--green-mid)] focus:ring-2 focus:ring-[var(--green-mid)]/20"
              type="email"
              name="email"
              placeholder="Your email"
              required
            />
            <textarea
              className="min-h-36 w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm outline-none transition focus:border-[var(--green-mid)] focus:ring-2 focus:ring-[var(--green-mid)]/20"
              name="message"
              placeholder="How can we help?"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-[var(--green-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-mid)]"
            >
              Send inquiry →
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
