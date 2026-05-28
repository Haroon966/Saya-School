import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlumniStoryCard } from "@/components/alumni-story-card";
import { ContactDetails } from "@/components/contact-details";
import { ContentImage } from "@/components/content-image";
import { HomeAnimations } from "@/components/home-animations";
import { LeadershipCard } from "@/components/leadership-card";
import {
  courses,
  galleryItems,
  donationImpactTiers,
  donationMailto,
  leadership,
  newsPosts,
  siteConfig,
  socialLinks,
  successStories,
  successStoriesDemoNotice,
} from "@/lib/site";
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteConfig.name,
    url: siteConfig.domain,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.foundingYear,
    logo: `${siteConfig.domain}${siteConfig.logoPath}`,
    sameAs: socialLinks.map((link) => link.href),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };

  return (
    <HomeAnimations>
      <section className="relative -mt-[7.25rem] flex min-h-[100lvh] flex-col justify-center overflow-hidden px-5 pb-12 pt-28 sm:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="home-hero-image absolute inset-y-0 right-0 w-full">
            <Image
              src={withBasePath("/childrens.jpg")}
              alt="SAYA School students learning together in Islamabad"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/95 via-45% to-transparent" />
          <div className="hero-blob absolute -right-20 -top-24 h-80 w-80 rounded-full bg-[var(--green-mid)]/20 blur-3xl" />
          <div className="hero-blob absolute bottom-10 left-8 h-72 w-72 rounded-full bg-[var(--green-pale)]/25 blur-3xl" />
          <div className="hero-blob absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-[var(--gold)]/15 blur-3xl" />
        </div>
        <div className="relative mx-auto w-full max-w-[1200px]">
          <article className="max-w-2xl">
            <p className="home-hero-eyebrow font-mono text-xs uppercase tracking-[0.12em] text-[var(--green-mid)]">
              Islamabad, Pakistan · Est. {siteConfig.foundingYear}
            </p>
            <h1 className="mt-4 text-5xl font-normal leading-[1.02] sm:text-7xl">
              <span className="home-hero-line block">It started</span>
              <span className="home-hero-line block">
                <em className="text-[var(--green-deep)]">under a tree.</em>
              </span>
            </h1>
            <p className="home-hero-body mt-6 max-w-xl text-lg leading-8 text-[var(--ink-muted)]">
              SAYA School operates under the auspices of the SAYA Welfare Society to provide
              and promote education for out-of-school children on the outskirts of Islamabad.
              From a class of a dozen children under a tree, it has grown into a high school
              serving more than 800 boys and girls.
            </p>
            <div className="home-hero-actions mt-9 flex flex-wrap gap-3">
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
            <article key={stat.label} className="home-hero-stat pr-8">
              <p className="text-3xl font-medium text-[var(--green-deep)]">{stat.value}</p>
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--green-deep)] px-5 py-20 text-center sm:px-8">
        <div className="home-quote-inner mx-auto flex w-full max-w-[740px] flex-col items-center gap-6">
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
          <header className="home-section-header mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
              What we offer
            </span>
            <h2 className="mt-3 text-5xl font-medium leading-tight">Education for every stage</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {courses.map((course, idx) => (
              <article
                key={course.title}
                className="home-reveal-card rounded-2xl border border-[var(--border)] border-t-4 border-t-[var(--green-mid)] bg-[var(--surface)] p-8 transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,92,42,0.10)]"
              >
                <span className="font-mono text-sm font-medium text-[var(--green-mid)]">
                  {String(idx + 1).padStart(2, "0")}
                </span>
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

      <section className="bg-[var(--surface)] px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="home-section-header mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
                Campus moments
              </span>
              <h2 className="mt-3 text-5xl font-medium leading-tight">Life at SAYA</h2>
            </div>
            <Link
              href="/gallery"
              className="rounded-full border border-[var(--border)] bg-white px-5 py-2 text-sm font-medium text-[var(--green-deep)] transition hover:border-[var(--green-mid)] hover:text-[var(--green-mid)]"
            >
              View full gallery →
            </Link>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.slice(0, 3).map((item) => (
              <article
                key={item.src}
                className="home-reveal-card group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(26,92,42,0.10)]"
              >
                <ContentImage
                  src={item.src}
                  alt={item.alt}
                  className="transition duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[var(--green-mid)]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-medium text-[var(--green-deep)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--ink-muted)]">{item.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--gold-pale)] px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="home-section-header mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--gold)]">Alumni</span>
            <h2 className="mt-3 text-5xl font-medium">Their stories inspire us</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--ink-muted)]">
              {successStoriesDemoNotice}
            </p>
          </header>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {successStories.slice(0, 3).map((story) => (
              <div key={story.id} className="home-reveal-card">
                <AlumniStoryCard story={story} headingLevel="p" compact />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/success-stories"
              className="inline-block rounded-full border border-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--gold)] transition hover:bg-white"
            >
              View all success stories →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="home-section-header">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--green-mid)]">
              Leadership
            </span>
            <h2 className="mt-3 text-5xl font-medium">SAYA Core</h2>
          </header>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {leadership.map((leader) => (
              <div key={leader.name} className="home-reveal-card">
                <LeadershipCard {...leader} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--green-deep)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-12 text-white lg:grid-cols-2">
          <article className="home-donate-copy">
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
          <aside className="home-donate-tiers space-y-6">
            {donationImpactTiers.map((item) => (
              <div
                key={item.amount}
                className="flex items-stretch justify-between gap-4 border-b border-white/15 pb-6"
              >
                <div className="pr-3">
                  <p className="text-3xl font-medium text-[var(--green-pale)]">{item.amount}</p>
                  <p className="mt-2 text-sm text-white/60">{item.detail}</p>
                  <a
                    href={donationMailto(item.mailtoSubject)}
                    className="mt-3 inline-block text-sm font-medium text-white underline decoration-white/40 underline-offset-4 transition hover:text-[var(--green-pale)]"
                  >
                    Give at this level →
                  </a>
                </div>
                <span className="inline-flex self-stretch text-5xl leading-none text-[var(--green-pale)]">
                  <span className="m-auto" aria-hidden="true">
                    ↗
                  </span>
                </span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="bg-[var(--surface)] px-5 py-20 sm:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <header className="home-section-header mb-10 flex flex-wrap items-end justify-between gap-4">
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
                className="home-reveal-card group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(26,92,42,0.12)]"
              >
                <ContentImage src={post.image} alt={post.imageAlt} className="rounded-t-2xl" />
                <div className="p-6">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8">
        <div className="home-contact-panel mx-auto grid w-full max-w-[1200px] overflow-hidden rounded-2xl border border-[var(--border)] md:grid-cols-[1.15fr_1fr]">
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
            <div className="mt-6">
              <ContactDetails variant="compact" />
            </div>
          </article>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </HomeAnimations>
  );
}
