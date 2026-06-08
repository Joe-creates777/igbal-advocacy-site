import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section
      id="blog-preview"
      aria-labelledby="blog-preview-heading"
      className="bg-paper"
    >
      <div className="container-page section">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ember">
              From the blog
            </p>
            <h2
              id="blog-preview-heading"
              className="mt-5 font-serif font-semibold leading-[0.98] tracking-[-0.025em] text-ink text-4xl md:text-6xl lg:text-[4.5rem]"
            >
              Read.
              <br />
              Think.
              <br />
              <span className="text-ember">Then act.</span>
            </h2>
            <span aria-hidden className="mt-8 block h-px w-20 bg-ember" />
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
              Stories, explainers, and updates connecting Igbal&rsquo;s case to
              a wider conversation about freedom, knowledge, and power.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 self-start border-b border-ink pb-1 text-[12px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-ember hover:border-ember md:self-end"
          >
            View all posts
            <svg
              aria-hidden
              className="h-3.5 w-3.5"
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
