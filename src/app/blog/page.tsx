import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import type { Post } from "@/content/posts";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, explainers, timeline entries, and calls to action connecting Igbal Abilov’s case to the wider conversation about academic freedom and human rights.",
};

type SearchParams = Promise<{ category?: string | string[] }>;

// Reading-order for the "All" view — narrative arc rather than alphabetical.
// Essay sets the why, Explainer the who/what, Timeline the chronology,
// Action the what-next. Categories not listed here fall to the end.
const CATEGORY_ORDER = ["Essay", "Explainer", "Timeline", "Action"] as const;

// Short subtitle shown under each category section header.
const CATEGORY_SUBTITLE: Record<string, string> = {
  Essay: "Why this matters — and why now.",
  Explainer: "Who, what, and what’s actually at stake.",
  Timeline: "How the story has unfolded.",
  Action: "What you can do, and how it works.",
};

function groupByCategory(posts: Post[]): { category: string; posts: Post[] }[] {
  const map = new Map<string, Post[]>();
  for (const post of posts) {
    const list = map.get(post.category) ?? [];
    list.push(post);
    map.set(post.category, list);
  }
  return Array.from(map.entries())
    .map(([category, posts]) => ({ category, posts }))
    .sort((a, b) => {
      const ai = CATEGORY_ORDER.indexOf(a.category as (typeof CATEGORY_ORDER)[number]);
      const bi = CATEGORY_ORDER.indexOf(b.category as (typeof CATEGORY_ORDER)[number]);
      const aRank = ai === -1 ? CATEGORY_ORDER.length : ai;
      const bRank = bi === -1 ? CATEGORY_ORDER.length : bi;
      return aRank - bRank;
    });
}

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const allPosts = getAllPosts();
  const categories = ["All", ...getAllCategories()];

  // Read & normalize the ?category= query, then pick the matching tab.
  const raw = (await searchParams)?.category;
  const requested = Array.isArray(raw) ? raw[0] : raw;
  const activeCategory =
    requested && categories.some((c) => c.toLowerCase() === requested.toLowerCase())
      ? categories.find((c) => c.toLowerCase() === requested.toLowerCase())!
      : "All";

  const visiblePosts =
    activeCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  const grouped =
    activeCategory === "All" ? groupByCategory(visiblePosts) : [];

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <section className="border-b border-ink/10">
        <div className="container-page py-14 md:py-20">
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-clay-600">
                Blog
              </p>
              <h1 className="mt-5 font-serif text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
                Stories from the campaign.
              </h1>
              <span aria-hidden className="mt-8 block h-px w-20 bg-clay-600" />
              <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
                Short, careful writing about Igbal Abilov&rsquo;s case and the
                wider questions it raises — academic freedom, freedom of
                expression, and what ordinary people can do.
              </p>

              <nav
                className="mt-10 flex flex-wrap gap-2"
                aria-label="Article categories"
              >
                {categories.map((category) => {
                  const isActive = category === activeCategory;
                  const href =
                    category === "All"
                      ? "/blog"
                      : `/blog?category=${encodeURIComponent(category)}`;
                  return (
                    <Link
                      key={category}
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      scroll={false}
                      className={`inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                        isActive
                          ? "bg-ink text-paper"
                          : "border border-ink/15 bg-paper text-ink/65 hover:border-ink/45 hover:text-ink"
                      }`}
                    >
                      {category}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <aside className="md:col-span-5">
              <figure className="relative border border-paper-300 bg-paper">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/images/illustration-newspapers.png"
                    alt="A flat illustration of a tied stack of folded newspapers — the campaign in print."
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-paper-300 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                  <span>Plate — The record</span>
                  <span>Read &amp; share</span>
                </figcaption>
              </figure>
            </aside>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        {visiblePosts.length === 0 ? (
          <div className="border border-dashed border-ink/20 bg-paper-50 p-10 text-center md:p-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-clay-600">
              No posts yet
            </p>
            <p className="mt-3 font-serif text-2xl font-semibold text-ink md:text-3xl">
              Nothing in &ldquo;{activeCategory}&rdquo; yet.
            </p>
            <p className="mt-3 text-[15px] leading-[1.65] text-ink/70">
              Try another category, or browse all articles.
            </p>
            <Link
              href="/blog"
              className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-1 text-[12px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:text-clay-600 hover:border-clay-600"
            >
              View all posts
            </Link>
          </div>
        ) : activeCategory === "All" ? (
          <div className="space-y-20 md:space-y-24">
            {grouped.map(({ category, posts }) => {
              const sectionId = `category-${category.toLowerCase()}`;
              return (
                <section
                  key={category}
                  id={sectionId}
                  aria-labelledby={`${sectionId}-heading`}
                  className="scroll-mt-24"
                >
                  <header className="flex flex-col gap-5 border-b border-ink/15 pb-7 md:flex-row md:items-end md:justify-between md:gap-10 md:pb-8">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ink/55">
                        {category}
                      </p>
                      <h2
                        id={`${sectionId}-heading`}
                        className="mt-3 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink md:text-[2.5rem]"
                      >
                        {CATEGORY_SUBTITLE[category] ?? `More from ${category}.`}
                      </h2>
                    </div>
                    <Link
                      href={`/blog?category=${encodeURIComponent(category)}`}
                      className="inline-flex items-center gap-2 self-start border-b border-ink pb-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink transition-colors hover:text-clay-600 hover:border-clay-600 md:self-end"
                    >
                      View only {category}
                      <svg
                        aria-hidden
                        className="h-3 w-3"
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

                  <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <li key={post.slug}>
                        <PostCard post={post} showDate />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visiblePosts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} showDate />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
