import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stories, explainers, and updates connecting Igbal Abilov’s case to the wider conversation about academic freedom and human rights.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const categories = ["All", ...getAllCategories()];

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
          <div className="max-w-3xl">
            <p className="eyebrow">Blog</p>
            <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
              Stories from the campaign.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-ink/75 md:text-xl">
              Short, careful writing about Igbal Abilov&rsquo;s case and the
              wider questions it raises — academic freedom, freedom of
              expression, and what ordinary people can do.
            </p>
          </div>

          <div
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Article categories"
          >
            {categories.map((category, idx) => (
              <span
                key={category}
                className={`inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition ${
                  idx === 0
                    ? "bg-ink text-paper"
                    : "border border-ink/15 bg-paper text-ink/65"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <PostCard post={post} showDate />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
