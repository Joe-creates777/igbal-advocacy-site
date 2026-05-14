import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import EndOfPostCTA from "@/components/blog/EndOfPostCTA";
import PostCard from "@/components/blog/PostCard";
import PostMeta from "@/components/blog/PostMeta";
import Prose from "@/components/blog/Prose";
import { posts } from "@/content/posts";
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";

type Params = { slug: string };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: "Article not found",
      description:
        "The article you’re looking for doesn’t exist or has been moved.",
    };
  }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  return (
    <article>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <header className="container-page pt-10 md:pt-14">
        <div className="max-w-prose">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink/65 transition-colors duration-200 hover:text-ember"
          >
            <svg
              aria-hidden
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All articles
          </Link>

          <p className="eyebrow mt-10">{post.category}</p>
          <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.022em] text-ink sm:text-5xl md:text-[3.5rem]">
            {post.title}
          </h1>
          <p className="mt-7 text-lg leading-[1.65] text-ink/75 md:text-xl">
            {post.excerpt}
          </p>
          <PostMeta
            publishedAt={post.publishedAt}
            readTime={post.readTime}
            className="mt-8"
          />
        </div>
      </header>

      <div className="container-page mt-12 md:mt-16">
        <div className="max-w-prose">
          <div aria-hidden className="pretty-divider mb-14 md:mb-20" />
          <Prose blocks={post.content} />
          <EndOfPostCTA />
        </div>
      </div>

      {related.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="mt-20 border-t border-ink/10 surface-muted md:mt-28"
        >
          <div className="container-page section">
            <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="eyebrow">Continue reading</p>
                <h2
                  id="related-heading"
                  className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
                >
                  More from the campaign.
                </h2>
              </div>
              <Link
                href="/blog"
                className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                View all posts
                <svg
                  aria-hidden
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </header>

            <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2">
              {related.map((rel) => (
                <li key={rel.slug}>
                  <PostCard post={rel} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </article>
  );
}
