import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import { newsPosts, siteConfig } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "News Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/news/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${siteConfig.domain}/news/${post.slug}`,
      publishedTime: post.publishedAt,
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = newsPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.domain}${post.image}`,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.domain}${siteConfig.logoPath}`,
      },
    },
    mainEntityOfPage: `${siteConfig.domain}/news/${post.slug}`,
  };

  return (
    <div className="mx-auto w-full max-w-[1200px] px-5 py-10 sm:px-8">
      <Link
        href="/news"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--green-mid)] transition hover:text-[var(--green-deep)]"
      >
        ← Back to news
      </Link>
      <article className="mx-auto mt-6 max-w-3xl overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
        <ContentImage src={post.image} alt={post.imageAlt} className="rounded-t-3xl" priority />
        <div className="p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="font-display mt-4 text-4xl font-normal leading-tight text-[var(--ink)] sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-8 border-t border-[var(--border)] pt-8">
            <p className="text-lg font-medium leading-8 text-[var(--ink)]">{post.excerpt}</p>
            <p className="mt-6 leading-8 text-[var(--ink-muted)]">
              Saya School continues to invest in student growth through high-quality
              teaching, practical exposure, and a supportive learning environment. This
              update reflects our commitment to educational outcomes and community impact.
            </p>
            <p className="mt-6 leading-8 text-[var(--ink-muted)]">
              We focus on developing core competencies in science, mathematics, technology, and
              arts. Through these initiatives, we aim to eliminate educational disparities and
              provide our students with the skills required to navigate and succeed in the modern
              world.
            </p>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </article>
    </div>
  );
}
