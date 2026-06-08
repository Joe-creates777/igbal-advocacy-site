import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/content/posts";
import { formatPublishedDate } from "@/lib/posts";

type Props = {
  post: Post;
  showDate?: boolean;
};

// Per-category styling — each category keeps the unified black title bar
// but carries its own accent color signature (tag, stripes, hover rule)
const categoryStyle: Record<
  string,
  {
    image: string;
    coverBg: string;
    tagBorder: string;
    tagText: string;
    stripeBg: string;
    cornerBg: string;
  }
> = {
  Essay: {
    image: "/images/illustration-open-book.png",
    coverBg: "bg-paper",
    tagBorder: "border-moss-600",
    tagText: "text-moss-700",
    stripeBg: "bg-moss-500",
    cornerBg: "bg-moss-600",
  },
  Explainer: {
    image: "/images/illustration-books-glasses.png",
    coverBg: "bg-paper",
    tagBorder: "border-clay-600",
    tagText: "text-clay-700",
    stripeBg: "bg-clay-500",
    cornerBg: "bg-clay-600",
  },
  Action: {
    image: "/images/illustration-megaphone.png",
    coverBg: "bg-paper",
    tagBorder: "border-crimson-500",
    tagText: "text-crimson-600",
    stripeBg: "bg-crimson-500",
    cornerBg: "bg-crimson-500",
  },
  Timeline: {
    image: "/images/illustration-sealed-letter.png",
    coverBg: "bg-paper",
    tagBorder: "border-ember",
    tagText: "text-ember-700",
    stripeBg: "bg-ember",
    cornerBg: "bg-ember",
  },
};

const defaultStyle = categoryStyle.Essay;

export default function PostCard({ post, showDate = false }: Props) {
  const style = categoryStyle[post.category] ?? defaultStyle;
  // Prefer the per-post illustration when set; fall back to the category plate.
  const imageSrc = post.image?.src ?? style.image;
  const imageAlt = post.image?.alt ?? "";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border border-ink bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      {/* Illustration cover — landscape 3:2 to match source */}
      <div className={`relative aspect-[3/2] w-full overflow-hidden ${style.coverBg}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition duration-500 ease-editorial group-hover:scale-[1.04]"
        />
        {/* Top category tag — color signature per category */}
        <div className="absolute inset-x-0 top-0 flex items-center justify-between gap-3 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.28em]">
          <span
            className={`inline-flex items-center gap-2 border-b-2 pb-1 ${style.tagBorder} ${style.tagText}`}
          >
            <span aria-hidden className={`h-1.5 w-1.5 ${style.cornerBg}`} />
            {post.category}
          </span>
          <span className="text-ink/75">Voice4Igbal</span>
        </div>
      </div>

      {/* Strong unified title bar — black with category-colored accent stripe */}
      <div className="relative flex flex-col gap-3 border-t border-ink bg-ink px-5 py-5 text-paper md:px-6 md:py-6">
        <span
          aria-hidden
          className={`absolute inset-x-0 top-0 h-[3px] ${style.stripeBg}`}
        />
        <h3 className="font-serif text-2xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-[1.625rem]">
          {post.title}
        </h3>
        <span
          aria-hidden
          className={`block h-px w-12 ${style.stripeBg} transition-all duration-300 ease-editorial group-hover:w-24`}
        />
      </div>

      {/* Meta strip */}
      <div className="flex flex-1 flex-col px-5 py-5 md:px-6 md:py-6">
        <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/55">
          <span>{post.readTime}</span>
          {showDate && (
            <time dateTime={post.publishedAt}>
              {formatPublishedDate(post.publishedAt)}
            </time>
          )}
        </div>

        <p className="mt-4 text-[14px] leading-[1.65] text-ink/75">
          {post.excerpt}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 pt-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-ink transition-all duration-200 group-hover:gap-3">
          Read article
          <svg
            aria-hidden
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1"
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
        </span>
      </div>
    </Link>
  );
}
