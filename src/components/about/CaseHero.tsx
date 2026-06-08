import Image from "next/image";
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
      {/* Header — title left, illustration right */}
      <div className="grid items-end gap-10 md:grid-cols-12 md:gap-14">
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ember">
              About the case
            </p>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
              Last updated: {LAST_UPDATED}
            </p>
          </div>
          <h1 className="mt-5 font-serif text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
            One person.{" "}
            <span className="text-ember">A larger principle.</span>
          </h1>
          <span aria-hidden className="mt-8 block h-px w-20 bg-ember" />
          <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
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

        <aside className="md:col-span-5">
          <figure className="relative border border-paper-300 bg-paper">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/illustration-open-book.png"
                alt="A flat illustration of an open hardbound book with handwritten lines and a fountain pen — the scholar's work."
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-paper-300 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
              <span>Plate I — His work</span>
              <span>The record</span>
            </figcaption>
          </figure>
        </aside>
      </div>

      {/* Known / Unclear cards */}
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
      className={`group p-7 transition duration-200 ease-editorial md:p-9 ${
        isKnown
          ? "border border-moss-100 bg-moss-50/60 hover:border-moss-500/50"
          : "border border-dashed border-clay-500/40 bg-clay-50/40 hover:border-clay-500/70"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid h-8 w-8 place-items-center rounded-none border ${
            isKnown
              ? "border-moss-500 bg-moss-100/60 text-moss-700"
              : "border-clay-500/60 bg-clay-50 text-clay-700"
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
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${
            isKnown ? "text-moss-700" : "text-clay-700"
          }`}
        >
          {title}
        </p>
      </div>

      <ul className="mt-5 space-y-3.5 text-[15px] leading-[1.65] text-ink/80">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden
              className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                isKnown ? "bg-moss-500" : "bg-clay-500"
              }`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
