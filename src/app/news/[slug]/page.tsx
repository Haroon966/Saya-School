import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.domain}/news/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h1 className="mt-3 text-4xl font-bold text-slate-900">{post.title}</h1>
      <p className="mt-6 text-lg leading-8 text-slate-700">{post.excerpt}</p>
      <p className="mt-6 leading-8 text-slate-700">
        Saya School continues to invest in student growth through high-quality
        teaching, practical exposure, and a supportive learning environment. This
        update reflects our commitment to educational outcomes and community impact.
      </p>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
