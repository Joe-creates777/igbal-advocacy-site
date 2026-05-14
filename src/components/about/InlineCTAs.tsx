import Link from "next/link";

type CTA = {
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  variant: "soft" | "strong";
};

const ctas: CTA[] = [
  {
    eyebrow: "Learn more",
    title: "Read the blog.",
    body: "Short, careful essays connecting Igbal’s case to the wider conversation about academic freedom.",
    cta: { href: "/blog", label: "Browse articles" },
    variant: "soft",
  },
  {
    eyebrow: "Take action",
    title: "Sign the petition.",
    body: "Add your name. Pressure is built one signature, one share, one conversation at a time.",
    cta: { href: "/take-action", label: "Sign now" },
    variant: "strong",
  },
];

export default function InlineCTAs() {
  return (
    <section className="container-page section-tight">
      <ul className="grid gap-6 md:grid-cols-2">
        {ctas.map((item) => {
          const strong = item.variant === "strong";
          return (
            <li key={item.title}>
              <Link
                href={item.cta.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 shadow-card transition duration-300 ease-editorial hover:-translate-y-0.5 hover:shadow-card-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 md:p-10 ${
                  strong
                    ? "bg-ink text-paper hover:bg-ink-600 focus-visible:ring-ember focus-visible:ring-offset-paper"
                    : "border border-ink/10 bg-white/70 text-ink hover:border-ink/20 hover:bg-white focus-visible:ring-ink/30 focus-visible:ring-offset-paper"
                }`}
              >
                {strong && (
                  <>
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ember/30 blur-3xl"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                  </>
                )}
                <div className="relative flex flex-1 flex-col">
                  <p className="eyebrow text-ember">{item.eyebrow}</p>
                  <h3
                    className={`mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-[2.25rem] ${
                      strong ? "text-paper" : "text-ink"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-4 max-w-md text-[15px] leading-[1.65] md:text-base ${
                      strong ? "text-paper/75" : "text-ink/70"
                    }`}
                  >
                    {item.body}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-ember transition-all duration-200 group-hover:gap-3">
                    {item.cta.label}
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}
