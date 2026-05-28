import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { courses, newsPosts, siteConfig } from "@/lib/site";
import { withBasePath } from "@/lib/with-base-path";

export const metadata: Metadata = {
  title: "Affordable Quality School for Underprivileged Children in Islamabad",
  description:
    "Saya School empowers underprivileged children in Islamabad through affordable education, trained teachers, and modern learning facilities.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const demoStories = [
    { name: "Student One", role: "Demo Role", tag: "Demo Story A" },
    { name: "Student Two", role: "Demo Role", tag: "Demo Story B" },
    { name: "Student Three", role: "Demo Role", tag: "Demo Story C" },
  ];
  const leadership = [
    {
      name: "Safia Yamin",
      title: "Patron",
      bio: "Safia Yamin has been a source of inspiration for SAYA.",
      image: "/Safia.jpg",
    },
    {
      name: "Dr. Tughral Yamin",
      title: "Founder",
      bio: "Dr. Tughral Yamin is the visionary behind our organization, dedicated to innovation and excellence in all areas of operation.",
      image: "/Tughral.jpg",
    },
    {
      name: "Asma Tughral Yamin",
      title: "CEO",
      bio: "Asma Tughral Yamin leads our team with unparalleled expertise and a commitment to achieving organizational goals.",
      image: "/Asma.jpg",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };

  return (
    <>
      <section className="relative -mt-24 flex min-h-[100lvh] flex-col justify-center overflow-hidden px-5 pb-12 pt-28 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 right-0 w-full">
            <Image src="/childrens.jpg" alt="" fill priority className="object-cover " />
          </div>
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/95 via-45% to-transparent" />
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[var(--green-mid)]/20 blur-3xl" />
          <div className="absolute bottom-10 left-8 h-72 w-72 rounded-full bg-[var(--green-pale)]/25 blur-3xl" />
          <div className="absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-[var(--gold)]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1200px]">
          <article className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
              Islamabad, Pakistan · Est. 2008
            </p>
            <h1 className="mt-4 text-5xl font-normal leading-[1.02] sm:text-7xl">
              It started
              <br />
              <em className="text-[var(--green-deep)]">under a tree.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink-muted)]">
              SAYA School operates under the auspices of the SAYA Welfare Society to provide
              and promote education for out-of-school children on the outskirts of Islamabad.
              From a class of a dozen children under a tree, it has grown into a high school
              serving more than 800 boys and girls.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-full bg-[var(--green-deep)] px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--green-mid)]"
              >
                Explore our story →
              </Link>
              <Link
                href="/donate"
                className="rounded-full border border-[var(--green-deep)] px-7 py-3 text-sm font-medium text-[var(--green-deep)] transition hover:bg-[var(--surface)]"
              >
                Donate today
              </Link>
            </div>
          </article>
        </div>
        <div className="relative mx-auto mt-14 flex w-full max-w-[1200px] flex-wrap items-center gap-4 border-t border-[var(--border)] pt-8">
          {[
            { value: "2008", label: "Founded" },
            { value: "800+", label: "Students" },
            { value: "3", label: "Buildings" },
            { value: "Grade 1-10", label: "Education Range" },
            { value: "Free", label: "Education" },
          ].map((stat) => (
            <article key={stat.label} className="pr-8">
              <p className="text-3xl font-medium text-[var(--green-deep)]">{stat.value}</p>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--green-deep)] px-5 py-20 text-center sm:px-8">
        <div className="mx-auto flex w-full max-w-[740px] flex-col items-center gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-pale)]">
            Our story
          </span>
          <blockquote className="text-3xl font-normal italic leading-tight text-white sm:text-4xl">
            &ldquo;From a class of a dozen children under a tree, to a high school of 800 - we never
            stopped growing.&rdquo;
          </blockquote>
          <cite className="text-sm not-italic text-white/60">
            Dr. Tughral Yamin · Founder, SAYA School
          </cite>
          <Link
            href="/about"
            className="rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Read our full history →
          </Link>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
              What we offer
            </span>
            <h2 className="mt-3 text-5xl font-medium leading-tight">Education for every stage</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course, idx) => (
              <article
                key={course.title}
                className="rounded-2xl border border-[var(--border)] border-t-4 border-t-[var(--green-mid)] bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,92,42,0.10)]"
              >
                <span className="text-3xl">{idx === 0 ? "📚" : idx === 1 ? "🔬" : "🎓"}</span>
                <h3 className="mt-4 text-3xl font-medium text-[var(--green-deep)]">{course.level}</h3>
                <p className="mt-3 leading-7 text-[var(--ink-muted)]">{course.detail}</p>
                <Link href="/courses" className="mt-5 inline-block text-sm font-medium text-[var(--green-mid)]">
                  View curriculum →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--gold-pale)] px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--gold)]">Alumni</span>
            <h2 className="mt-3 text-5xl font-medium">Their stories inspire us</h2>
          </header>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {demoStories.map((story) => (
              <article
                key={story.name}
                className="overflow-hidden rounded-2xl border border-[rgba(201,151,58,0.2)] bg-white"
              >
                <div className="aspect-square bg-gradient-to-br from-[#d6ead5] to-[#f4f7f0]" />
                <div className="p-4">
                  <p className="text-sm font-medium">{story.name}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--gold)]">
                    {story.role}
                  </p>
                  <p className="mt-2 text-xs text-[var(--ink-muted)]">{story.tag}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
            Leadership
          </span>
          <h2 className="mt-3 text-5xl font-medium">SAYA Core</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="group relative min-h-[430px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${withBasePath(leader.image)})` }}
                  aria-hidden="true"
                />
                <div className="relative z-10 flex min-h-[430px] flex-col justify-end">
                  <div className="rounded-xl bg-gradient-to-tr from-[rgba(12,21,16,0.78)] via-[rgba(12,21,16,0.42)] to-[rgba(12,21,16,0.08)] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">SAYA Core</p>
                  <h3 className="mt-2 text-2xl font-medium text-white" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
                    {leader.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-pale)]">
                    {leader.title}
                  </p>
                  <p className="mt-3 max-h-0 translate-y-2 overflow-hidden text-sm leading-7 text-white/85 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:translate-y-0 group-hover:opacity-100">
                    {leader.bio}
                  </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--green-deep)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 text-white lg:grid-cols-2">
          <article>
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">
              Make a difference
            </span>
            <h2 className="mt-4 text-5xl font-normal leading-tight">
              Education is the
              <br />
              <em className="text-[var(--green-pale)]">greatest gift.</em>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/70">
              Your donation funds books, meals, uniforms, and classroom support for each child.
              Every rupee strengthens a future.
            </p>
            <Link
              href="/donate"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold !text-[#0f1410] shadow-sm transition hover:bg-[#f2f2f2] hover:!text-[#0f1410]"
            >
              Donate now →
            </Link>
          </article>
          <aside className="space-y-6">
            {[
              { amount: "Rs. 500", detail: "Buys a full set of textbooks" },
              { amount: "Rs. 2,000", detail: "Sponsors a child for a month" },
              { amount: "Rs. 24,000", detail: "Fully sponsors a child for a year" },
            ].map((item) => (
              <div key={item.amount} className="flex items-stretch justify-between gap-4 border-b border-white/15 pb-6">
                <div className="pr-3">
                  <p className="text-3xl font-medium text-[var(--green-pale)]">{item.amount}</p>
                  <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                </div>
                <span className="inline-flex self-stretch text-5xl leading-none text-[var(--green-pale)]">
                  <span className="m-auto">↗</span>
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">Latest updates</p>
              <h2 className="mt-2 text-5xl font-medium">Latest News</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">
                Featured from our school updates: Science Exhibition at SAYA School - encouraging
                creativity and scientific learning through Science, Web Development, and IoT.
              </p>
            </div>
            <Link
              href="/news"
              className="rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm font-medium text-[var(--green-deep)] transition hover:border-[var(--green-mid)] hover:text-[var(--green-mid)]"
            >
              View all news →
            </Link>
          </header>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,92,42,0.12)]"
              >
                <div className="mb-5 h-32 rounded-xl bg-gradient-to-br from-[#d6ead5] via-[#eef7ea] to-[#f8fbf5]" />
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-3 text-2xl font-medium leading-tight text-[var(--ink)]">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--ink-muted)]">{post.excerpt}</p>
                <Link
                  href={`/news/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--green-mid)] transition group-hover:text-[var(--green-deep)]"
                >
                  Read update <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] overflow-hidden rounded-2xl border border-[var(--border)] md:grid-cols-[1.15fr_1fr]">
          <article className="bg-[var(--green-deep)] p-8 text-white sm:p-10">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-pale)]">Contact Us</p>
            <h2 className="mt-3 text-5xl font-normal leading-tight">
              Let us build
              <br />
              <em className="text-[var(--green-pale)]">a better tomorrow.</em>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/75">
              Be part of something bigger. Together, we are building a better tomorrow through
              dedication, compassion, and action.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold !text-[#0f1410] transition hover:bg-[#eef5ef]"
            >
              Visit contact page →
            </Link>
          </article>
          <article className="bg-[var(--surface)] p-8 sm:p-10">
            <h3 className="text-2xl font-medium text-[var(--green-deep)]">Reach SAYA</h3>
            <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--ink-muted)]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">Address</p>
                <p className="mt-1">SAYA trust school F/12 Islamabad, Pakistan</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">Phones</p>
                <p className="mt-1">+92 321 5135876 · +92 3715481462</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--green-mid)]">Emails</p>
                <p className="mt-1">info@saya.edu.pk · tyamin57@hotmail.com · sayaschool786@gmail.com</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
