import type { Metadata } from "next";
import { successStories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Meet Saya School alumni and students who progressed to higher education and professional careers.",
  alternates: {
    canonical: "/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-slate-900">Success Stories</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        Our students continue to create impact through education, career growth, and
        confidence built during their journey at Saya School.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {successStories.map((story) => (
          <article key={story.name} className="section-card">
            <h2 className="text-xl font-semibold text-slate-900">{story.name}</h2>
            <p className="mt-1 text-sm font-semibold text-sky-700">{story.role}</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">{story.story}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
