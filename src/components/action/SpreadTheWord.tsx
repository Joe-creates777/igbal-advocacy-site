import Link from "next/link";
import { PETITION_URL } from "@/lib/links";

type Step = {
  number: string;
  title: string;
  body: string;
  cta: { href: string; label: string; external?: boolean };
};

const steps: Step[] = [
  {
    number: "01",
    title: "Sign",
    body: "Add your name to the public petition. It takes a minute and gives the campaign weight that nothing else can.",
    cta: {
      href: PETITION_URL,
      label: "Sign the petition",
      external: true,
    },
  },
  {
    number: "02",
    title: "Share",
    body: "Send the campaign to one classmate, one colleague, one friend. One thoughtful share is worth a hundred half-read posts.",
    cta: { href: "#share", label: "See sharing tools" },
  },
  {
    number: "03",
    title: "Stay informed",
    body: "Read the blog, watch the timeline, and keep the spotlight on. Pressure works because it is steady, not because it is loud.",
    cta: { href: "/blog", label: "Read the blog" },
  },
];

const arrowSvg = (
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
);

export default function SpreadTheWord() {
  return (
    <section
      id="how-to-help"
      aria-labelledby="how-to-help-heading"
      className="container-page section"
    >
      <header className="max-w-2xl">
        <p className="eyebrow">Three ways to help</p>
        <h2
          id="how-to-help-heading"
          className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
        >
          Sign. Share. Stay informed.
        </h2>
        <p className="mt-5 text-base leading-[1.65] text-ink/70 md:text-lg">
          A small, doable plan — that, repeated by enough people, becomes a
          campaign.
        </p>
      </header>

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-card md:mt-16 md:grid-cols-3">
        {steps.map((step) => (
          <li
            key={step.number}
            className="group relative flex flex-col bg-paper p-8 transition-colors duration-200 hover:bg-white md:p-10"
          >
            <span
              aria-hidden
              className="font-serif text-[11px] font-semibold tracking-[0.32em] text-ember"
            >
              {step.number}
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.65rem]">
              {step.title}
            </h3>
            <p className="mt-3 flex-1 text-[15px] leading-[1.65] text-ink/70">
              {step.body}
            </p>

            {step.cta.external ? (
              <a
                href={step.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ember transition-all duration-200 group-hover:gap-3"
              >
                {step.cta.label}
                {arrowSvg}
              </a>
            ) : (
              <Link
                href={step.cta.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ember transition-all duration-200 group-hover:gap-3"
              >
                {step.cta.label}
                {arrowSvg}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
