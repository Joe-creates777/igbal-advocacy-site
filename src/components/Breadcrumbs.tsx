import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  items: Crumb[];
  className?: string;
};

export default function Breadcrumbs({ items, className }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`container-page pt-8 md:pt-10 ${className ?? ""}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/55">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li
              key={`${item.label}-${idx}`}
              className={`flex items-center gap-2 ${
                isLast ? "max-w-[28ch] truncate" : ""
              }`}
            >
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors duration-200 hover:text-ember"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="text-ink"
                  title={item.label}
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-ink/30">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
