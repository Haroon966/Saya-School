import type { Metadata } from "next";
import Link from "next/link";
import { ContactDetails } from "@/components/contact-details";
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
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="rounded-3xl bg-[var(--green-deep)] p-8 text-white sm:p-12">
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-pale)]">
          Contact
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Let us build
          <br />
          <em className="text-[var(--green-pale)]">a better tomorrow.</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
          Reach out for donation support, partnerships, or general school information. Interested
          in volunteering? Visit our{" "}
          <Link href="/volunteer" className="text-[var(--green-pale)] underline underline-offset-4">
            volunteer program page
          </Link>{" "}
          to learn why it matters and how to get started.
        </p>
      </section>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section className="mx-auto w-full max-w-2xl lg:max-w-none">
          <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
              School contact
            </p>
            <h2 className="font-display mt-3 text-4xl font-medium text-[var(--green-deep)]">
              Reach SAYA
            </h2>
            <div className="mt-8">
              <ContactDetails />
            </div>
          </article>
        </section>

        <section>
          <h2 className="font-display text-3xl font-medium text-[var(--green-deep)]">Find us</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{siteConfig.address}</p>
          <a
            href={siteConfig.mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded-full border border-[var(--green-deep)] px-6 py-3 text-sm font-medium text-[var(--green-deep)] transition hover:bg-[var(--surface)]"
          >
            Get directions on Google Maps →
          </a>
          <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--border)]">
            <iframe
              title="SAYA School location on Google Maps"
              src="https://maps.google.com/maps?q=SAYA+trust+school+F%2F12+Islamabad+Pakistan&output=embed"
              className="h-[320px] w-full sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
