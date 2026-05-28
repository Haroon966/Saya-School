import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

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
    <section>
      <h1 className="text-4xl font-bold text-slate-900">Donate to Saya School</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        Your support helps us provide learning resources, trained teachers, and a
        safe educational environment for children who need it most.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="section-card">
          <h2 className="text-2xl font-semibold text-slate-900">Donation Impact</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-700">
            <li>School supplies and classroom resources for students.</li>
            <li>Technology access through computer-based learning.</li>
            <li>Teacher training and student mentorship initiatives.</li>
            <li>Sports and co-curricular opportunities for holistic growth.</li>
          </ul>
        </article>
        <article className="section-card">
          <h2 className="text-2xl font-semibold text-slate-900">How to Donate</h2>
          <p className="mt-3 leading-7 text-slate-700">
            Please contact our team to receive official donation channels and
            verification details.
          </p>
          <a
            href={`mailto:${siteConfig.email}?subject=Donation Inquiry`}
            className="mt-5 inline-block rounded-md bg-sky-700 px-4 py-2 font-semibold text-white transition hover:bg-sky-800"
          >
            Email Donation Team
          </a>
        </article>
      </div>
    </section>
  );
}
