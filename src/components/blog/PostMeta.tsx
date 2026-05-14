import { formatPublishedDate } from "@/lib/posts";

type Props = {
  publishedAt: string;
  readTime: string;
  className?: string;
};

export default function PostMeta({ publishedAt, readTime, className }: Props) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/60 ${className ?? ""}`}
    >
      <time dateTime={publishedAt} className="font-medium text-ink/70">
        {formatPublishedDate(publishedAt)}
      </time>
      <span aria-hidden className="text-ink/30">
        &middot;
      </span>
      <span>{readTime}</span>
    </div>
  );
}
