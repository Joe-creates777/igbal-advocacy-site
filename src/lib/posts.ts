import { posts, type Post } from "@/content/posts";

const byNewest = (a: Post, b: Post) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

export function getAllPosts(): Post[] {
  return [...posts].sort(byNewest);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const others = posts.filter((post) => post.slug !== slug);
  const sameCategory = others.filter(
    (post) => post.category === current.category,
  );
  const otherCategory = others.filter(
    (post) => post.category !== current.category,
  );

  return [...sameCategory.sort(byNewest), ...otherCategory.sort(byNewest)].slice(
    0,
    limit,
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((post) => post.category)));
}

export function formatPublishedDate(iso: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(iso));
}
