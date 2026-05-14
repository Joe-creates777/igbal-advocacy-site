import Link from "next/link";
import type { CoverHue, Post } from "@/content/posts";
import { formatPublishedDate } from "@/lib/posts";

type Props = {
  post: Post;
  showDate?: boolean;
};

const hueClasses: Record<CoverHue, { card: string; cap: string; tag: string }> = {
  ember: {
    card: "bg-gradient-to-br from-ember-50/70 via-paper to-paper",
    cap: "from-ember/15 via-ember/5 to-transparent",
    tag: "border-ember/30 text-ember",
  },
  ink: {
    card: "bg-gradient-to-br from-paper-200/55 via-paper to-paper",
    cap: "from-ink/15 via-ink/5 to-transparent",
    tag: "border-ink/20 text-ink",
  },
  paper: {
    card: "bg-paper",
    cap: "from-ember/10 via-ink/5 to-transparent",
    tag: "border-ink/15 text-ink",
  },
};

export default function PostCard({ post, showDate = false }: Props) {
  const hue = hueClasses[post.coverHue ?? "ink"];

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 ${hue.card} shadow-card transition duration-200 ease-editorial hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper`}
    >
      <div
        aria-hidden
        className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${hue.cap}`}
      >
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(rgba(17,24,43,0.08) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        <p className="absolute bottom-4 left-5 font-serif text-[3.5rem] font-semibold leading-none tracking-[-0.04em] text-ink/15 transition-transform duration-300 ease-editorial group-hover:translate-x-0.5">
          {post.category}.
        </p>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-ink/10 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${hue.tag}`}
          >
            {post.category}
          </span>
          <span className="text-[11px] text-ink/55">{post.readTime}</span>
          {showDate && (
            <>
              <span aria-hidden className="text-ink/30">
                &middot;
              </span>
              <time
                dateTime={post.publishedAt}
                className="text-[11px] text-ink/55"
              >
                {formatPublishedDate(post.publishedAt)}
              </time>
            </>
          )}
        </div>

        <h3 className="mt-5 font-serif text-[1.4rem] font-semibold leading-snug tracking-[-0.015em] text-ink md:text-2xl">
          {post.title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.65] text-ink/70">
          {post.excerpt}
        </p>

        <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ember transition-all duration-200 ease-editorial group-hover:gap-3">
          Read article
          <svg
            aria-hidden
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
