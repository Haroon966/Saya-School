import type { Metadata } from "next";
import {
  donationConfig,
  donationImpactTiers,
  donationMailto,
  siteConfig,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Saya School and help children in Islamabad access quality education, learning resources, and future opportunities.",
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <section className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[var(--green-mid)]/15 blur-3xl" />
        <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
          Support our mission
        </p>
        <h1 className="font-display mt-4 text-5xl font-normal leading-tight sm:text-6xl">
          Donate to
          <br />
          <em className="text-[var(--green-deep)]">Saya School</em>
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink-muted)]">
          Your support helps us provide learning resources, trained teachers, and a
          safe educational environment for children who need it most.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-3xl font-medium text-[var(--green-deep)]">Your impact</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {donationImpactTiers.map((tier) => (
            <article
              key={tier.amount}
              className="flex flex-col rounded-2xl border border-[var(--border)] bg-white p-6"
            >
              <p className="text-3xl font-medium text-[var(--green-deep)]">{tier.amount}</p>
              <p className="mt-2 flex-1 text-sm leading-7 text-[var(--ink-muted)]">{tier.detail}</p>
              <a
                href={donationMailto(
                  tier.mailtoSubject,
                  `I would like to donate ${tier.amount} to SAYA School.`,
                )}
                className="mt-5 inline-block rounded-full bg-[var(--green-deep)] px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--green-mid)]"
              >
                Donate {tier.amount} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="section-card rounded-2xl border border-[var(--border)] bg-white p-8">
          <h2 className="font-display text-3xl font-medium text-[var(--green-deep)]">Bank transfer</h2>
          <dl className="mt-6 space-y-4 text-sm leading-7 text-[var(--ink-muted)]">
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
                Account title
              </dt>
              <dd className="mt-1 text-base text-[var(--ink)]">{donationConfig.accountTitle}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">Bank</dt>
              <dd className="mt-1 text-base text-[var(--ink)]">{donationConfig.bankName}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">
                Account number
              </dt>
              <dd className="mt-1 text-base text-[var(--ink)]">{donationConfig.accountNumber}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">IBAN</dt>
              <dd className="mt-1 text-base text-[var(--ink)]">{donationConfig.iban}</dd>
            </div>
          </dl>
        </article>

        <article className="section-card flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
          <div>
            <h2 className="font-display text-3xl font-medium text-[var(--green-deep)]">Mobile wallets</h2>
            <ul className="mt-6 space-y-4">
              {donationConfig.mobileWallets.map((wallet) => (
                <li key={wallet.name} className="text-sm leading-7 text-[var(--ink-muted)]">
                  <p className="font-medium text-[var(--ink)]">{wallet.name}</p>
                  <p className="mt-1">{wallet.detail}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-[var(--ink-muted)]">{donationConfig.transparencyNote}</p>
          </div>
          <div className="mt-8">
            <a
              href={donationMailto("Donation inquiry — SAYA School")}
              className="inline-block rounded-full bg-[var(--green-deep)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--green-mid)] hover:-translate-y-0.5"
            >
              Email {siteConfig.email} →
            </a>
          </div>
        </article>
      </div>

      <article className="section-card mt-6 rounded-2xl border border-[var(--border)] bg-white p-8">
        <h2 className="font-display text-3xl font-medium text-[var(--green-deep)]">Donation impact</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--ink-muted)]">
          <li>School supplies and classroom resources for students.</li>
          <li>Technology access through computer-based learning.</li>
          <li>Teacher training and student mentorship initiatives.</li>
          <li>Sports and co-curricular opportunities for holistic growth.</li>
        </ul>
      </article>
    </div>
  );
}
