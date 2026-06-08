import Image from "next/image";
import Link from "next/link";

type CTA = {
  eyebrow: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
  variant: "soft" | "strong";
  eyebrowColor: string;
  stripeColor: string;
  illustration: { src: string; alt: string; caption: string };
};

const ctas: CTA[] = [
  {
    eyebrow: "Learn more",
    title: "Read the blog.",
    body: "Short, careful essays connecting Igbal’s case to the wider conversation about academic freedom.",
    cta: { href: "/blog", label: "Browse articles" },
    variant: "soft",
    eyebrowColor: "text-moss-600",
    stripeColor: "bg-moss-500",
    illustration: {
      src: "/images/illustration-newspapers.png",
      alt: "A flat illustration of a tied stack of folded newspapers.",
      caption: "Stories from the campaign",
    },
  },
  {
    eyebrow: "Take action",
    title: "Sign the petition.",
    body: "Add your name. Pressure is built one signature, one share, one conversation at a time.",
    cta: { href: "/take-action", label: "Sign now" },
    variant: "strong",
    eyebrowColor: "text-crimson-100",
    stripeColor: "bg-crimson-500",
    illustration: {
      src: "/images/illustration-raised-hand.png",
      alt: "A flat illustration of a hand raising a sheet of paper upward.",
      caption: "Add your voice",
    },
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
                className={`group relative flex h-full flex-col overflow-hidden border transition duration-300 ease-editorial focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                  strong
                    ? "border-ink bg-ink text-paper hover:bg-ink-600 focus-visible:ring-ink/40 focus-visible:ring-offset-paper"
                    : "border-paper-300 bg-paper-50 text-ink hover:border-ink/40 focus-visible:ring-ink/30 focus-visible:ring-offset-paper"
                }`}
              >
                <figure
                  className={`relative ${
                    strong
                      ? "border-b border-paper/15 bg-paper"
                      : "border-b border-paper-300 bg-paper"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 z-10 h-[3px] ${item.stripeColor}`}
                  />
                  <div className="relative aspect-[16/7] w-full overflow-hidden">
                    <Image
                      src={item.illustration.src}
                      alt={item.illustration.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 100vw"
                      className="object-cover object-center transition duration-500 ease-editorial group-hover:scale-[1.02]"
                    />
                  </div>
                  <figcaption
                    className={`flex items-center justify-between gap-3 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${
                      strong
                        ? "border-t border-paper-300 bg-paper-50 text-ink/65"
                        : "bg-paper text-ink/55"
                    }`}
                  >
                    <span>Plate — {item.eyebrow}</span>
                    <span>{item.illustration.caption}</span>
                  </figcaption>
                </figure>

                <div className="relative flex flex-1 flex-col p-8 md:p-10">
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.28em] ${item.eyebrowColor}`}
                  >
                    {item.eyebrow}
                  </p>
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

                  <span
                    className={`mt-auto inline-flex items-center gap-2 pt-8 text-[12px] font-semibold uppercase tracking-[0.22em] transition-all duration-200 group-hover:gap-3 ${
                      strong ? "text-paper" : "text-ink"
                    }`}
                  >
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
