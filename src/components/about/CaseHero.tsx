import Link from "next/link";
import { LAST_UPDATED } from "@/lib/links";

const known = [
  "Igbal Abilov is a researcher whose work has placed him at the center of a public case.",
  "His situation has prompted concern from people working in academic freedom and human rights.",
  "A public petition and an active campaign exist to call attention to his story.",
];

const unclear = [
  "The full chronology of events as they continue to unfold.",
  "Specific charges, proceedings, and outcomes — the campaign tracks only what is publicly verified.",
  "The future course of the case, which depends on actors well beyond this site.",
];

export default function CaseHero() {
  return (
    <section className="container-page pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="max-w-3xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="eyebrow">About the case</p>
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
            <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
            Last updated: {LAST_UPDATED}
          </p>
        </div>
        <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.022em] text-ink sm:text-5xl md:text-[3.75rem] lg:text-6xl">
          One person.{" "}
          <span className="text-ember">A larger principle.</span>
        </h1>
        <p className="mt-7 text-lg leading-[1.65] text-ink/75 md:text-xl">
          Igbal Abilov is a researcher whose case has become a public test of
          academic freedom. This page explains who he is, what is currently
          known about his situation, and why his story matters far beyond his
          own life.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/take-action" className="btn-primary">
            Sign the petition
          </Link>
          <Link href="/blog" className="btn-secondary">
            Read the blog
          </Link>
        </div>
      </div>

      <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2 md:gap-6">
        <KnownCard title="What we know" items={known} variant="known" />
        <KnownCard
          title="What is still unclear"
          items={unclear}
          variant="unclear"
        />
      </div>
    </section>
  );
}

function KnownCard({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "known" | "unclear";
}) {
  const isKnown = variant === "known";
  return (
    <div
      className={`group rounded-2xl p-7 transition duration-200 ease-editorial md:p-9 ${
        isKnown
          ? "border border-ink/10 bg-white/70 shadow-card hover:border-ink/20 hover:shadow-card-hover"
          : "border border-dashed border-ink/25 bg-paper hover:border-ink/40"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-8 w-8 place-items-center rounded-full ${
            isKnown
              ? "bg-ember/12 text-ember"
              : "bg-ink/[0.06] text-ink/55"
          }`}
        >
          {isKnown ? (
            <svg
              aria-hidden
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              aria-hidden
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M9.5 9.5a2.5 2.5 0 1 1 3.6 2.2c-.7.4-1.1 1-1.1 1.8" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
            </svg>
          )}
        </span>
        <p className={`eyebrow ${isKnown ? "text-ember" : "text-ink/55"}`}>
          {title}
        </p>
      </div>

      <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.65] text-ink/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                isKnown ? "bg-ember" : "bg-ink/40"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
