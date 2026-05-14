import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section
      id="blog-preview"
      aria-labelledby="blog-preview-heading"
      className="border-y border-ink/10 surface-muted"
    >
      <div className="container-page section">
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">From the blog</p>
            <h2
              id="blog-preview-heading"
              className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
            >
              Read. Think. Then act.
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-ink/70 md:text-lg">
              Stories, explainers, and updates connecting Igbal&rsquo;s case to
              a wider conversation about freedom, knowledge, and power.
            </p>
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

        <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
