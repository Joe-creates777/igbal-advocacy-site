import Image from "next/image";
import {
  LINKTREE_URL,
  PETITION_URL,
  SCHOLARS_AT_RISK_URL,
  SENATOR_LETTER_URL,
} from "@/lib/links";

type Variant = "ink-crimson" | "paper-clay" | "ink-moss" | "paper-ember";

type Action = {
  num: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: { label: string; href: string; external: boolean };
  source: string;
  variant: Variant;
  illustration: { src: string; alt: string; caption: string };
};

const actions: Action[] = [
  {
    num: "01",
    eyebrow: "Sign the petition",
    title: "Add your name to the public record.",
    body: "Add your name to the public petition calling for Igbal Abilov's release. A signature is the most public, repeatable form of pressure a campaign can carry — and the easiest first move you can make.",
    cta: { label: "Sign on Change.org", href: PETITION_URL, external: true },
    source: "Change.org",
    variant: "ink-crimson",
    illustration: {
      src: "/images/illustration-raised-hand.png",
      alt: "A flat illustration of a hand raising a sheet of paper — a petition — upward.",
      caption: "Add your voice",
    },
  },
  {
    num: "02",
    eyebrow: "Contact elected officials",
    title: "Bring the case into the halls of power.",
    body: "Help bring the case to the attention of policymakers by signing the letter to Senator Schiff. Pressure inside government is built letter by letter, name by name.",
    cta: {
      label: "Send the letter",
      href: SENATOR_LETTER_URL,
      external: true,
    },
    source: "Action Network — Senator Schiff",
    variant: "paper-clay",
    illustration: {
      src: "/images/illustration-sealed-letter.png",
      alt: "A flat illustration of a sealed letter and a pen — a formal note to an elected official.",
      caption: "Write to power",
    },
  },
  {
    num: "03",
    eyebrow: "Scholars at Risk action",
    title: "Stand with the international academic community.",
    body: "Participate in an international academic-freedom advocacy effort through Scholars at Risk — a global network that defends researchers facing persecution for their work.",
    cta: {
      label: "Join the SAR action",
      href: SCHOLARS_AT_RISK_URL,
      external: true,
    },
    source: "Scholars at Risk Network",
    variant: "ink-moss",
    illustration: {
      src: "/images/illustration-university.png",
      alt: "A flat illustration of a classical university building — the international academic community.",
      caption: "An academic-freedom coalition",
    },
  },
  {
    num: "04",
    eyebrow: "Share the campaign",
    title: "Move the story one conversation further.",
    body: "Share resources, follow campaign updates, and help spread awareness through the Linktree hub. Pressure only works when it stays in front of people — that takes everyone.",
    cta: { label: "Open the Linktree", href: LINKTREE_URL, external: true },
    source: "linktr.ee/freeigbalabilov",
    variant: "paper-ember",
    illustration: {
      src: "/images/illustration-megaphone.png",
      alt: "A flat illustration of a megaphone with sound waves — amplifying the campaign.",
      caption: "Spread it further",
    },
  },
];

// Shared CTA styles
const ctaOnInk =
  "inline-flex items-center justify-center gap-2 border border-paper bg-paper px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-ink transition duration-200 ease-out hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-px";
const ctaOnPaper =
  "inline-flex items-center justify-center gap-2 border border-ink bg-ink px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-paper transition duration-200 ease-out hover:bg-ink-600 hover:border-ink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:translate-y-px";

const variantStyles: Record<
  Variant,
  {
    section: string;
    eyebrow: string;
    number: string;
    rule: string;
    sourceText: string;
    title: string;
    body: string;
    extLabel: string;
    figureBorder: string;
    figureCapBorder: string;
    figureCapBg: string;
    figureCapText: string;
    cta: string;
  }
> = {
  // ACTION 01 — Sign the Petition (black)
  "ink-crimson": {
    section: "bg-ink text-paper",
    eyebrow: "text-crimson-100",
    number: "text-paper",
    rule: "bg-crimson-100",
    sourceText: "text-paper/55",
    title: "text-paper",
    body: "text-paper/80",
    extLabel: "text-paper/55",
    figureBorder: "border-paper/15",
    figureCapBorder: "border-ink/15",
    figureCapBg: "bg-paper-50",
    figureCapText: "text-ink/65",
    cta: ctaOnInk,
  },
  // ACTION 02 — Contact Elected Officials (paper · clay)
  "paper-clay": {
    section: "bg-paper text-ink",
    eyebrow: "text-clay-600",
    number: "text-clay-500/85",
    rule: "bg-clay-600",
    sourceText: "text-ink/50",
    title: "text-ink",
    body: "text-ink/75",
    extLabel: "text-ink/45",
    figureBorder: "border-clay-100",
    figureCapBorder: "border-clay-100",
    figureCapBg: "bg-clay-50/60",
    figureCapText: "text-ink/65",
    cta: ctaOnPaper,
  },
  // ACTION 03 — Scholars at Risk (black · moss)
  "ink-moss": {
    section: "bg-ink text-paper",
    eyebrow: "text-moss-100",
    number: "text-moss-50",
    rule: "bg-moss-100",
    sourceText: "text-paper/55",
    title: "text-paper",
    body: "text-paper/80",
    extLabel: "text-paper/55",
    figureBorder: "border-paper/15",
    figureCapBorder: "border-ink/15",
    figureCapBg: "bg-paper-50",
    figureCapText: "text-ink/65",
    cta: ctaOnInk,
  },
  // ACTION 04 — Share the Campaign (paper · ember)
  "paper-ember": {
    section: "bg-paper text-ink",
    eyebrow: "text-ember",
    number: "text-ember/85",
    rule: "bg-ember",
    sourceText: "text-ink/50",
    title: "text-ink",
    body: "text-ink/75",
    extLabel: "text-ink/45",
    figureBorder: "border-paper-300",
    figureCapBorder: "border-paper-300",
    figureCapBg: "bg-paper-50",
    figureCapText: "text-ink/65",
    cta: ctaOnPaper,
  },
};

const ExternalArrow = () => (
  <svg
    aria-hidden
    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.25"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 3h7v7" />
    <path d="M10 14 21 3" />
    <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
  </svg>
);

export default function ActionFunnel() {
  return (
    <>
      {/* Page hero — sits above the funnel */}
      <section className="container-page pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-14">
          <header className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em]">
              <span className="text-crimson-500">Take action</span>
              <span aria-hidden className="h-px w-10 bg-ink/25" />
              <span className="text-ink/55">Four steps · today</span>
            </div>
            <h1 className="mt-5 font-serif text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
              Four things you can do —{" "}
              <span className="text-crimson-500">today.</span>
            </h1>
            <span aria-hidden className="mt-8 block h-px w-24 bg-crimson-500" />
            <p className="mt-7 max-w-2xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
              Igbal Abilov&rsquo;s freedom won&rsquo;t come from a single click.
              It will come from a steady, organized chorus — a name on a
              petition, a letter to a senator, an international academic
              network, a story shared one more time. Each of these takes
              minutes. Together they build the pressure that changes outcomes.
            </p>
          </header>

          <aside className="md:col-span-4">
            <ol className="border border-paper-300 bg-paper-50">
              {actions.map((a, idx) => (
                <li
                  key={a.num}
                  className={`flex items-center justify-between gap-4 px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] ${
                    idx < actions.length - 1
                      ? "border-b border-paper-300"
                      : ""
                  }`}
                >
                  <a
                    href={`#action-${a.num}`}
                    className="flex flex-1 items-center gap-3 text-ink/75 transition-colors hover:text-ink"
                  >
                    <span className="font-serif text-base text-ink/80">
                      {a.num}
                    </span>
                    <span>{a.eyebrow}</span>
                  </a>
                  <svg
                    aria-hidden
                    className="h-3 w-3 text-ink/40"
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
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </section>

      {/* Four numbered action panels */}
      {actions.map((action) => {
        const s = variantStyles[action.variant];
        return (
          <section
            key={action.num}
            id={`action-${action.num}`}
            aria-labelledby={`action-${action.num}-heading`}
            className={`relative scroll-mt-24 ${s.section}`}
          >
            <div className="container-page section-tight">
              <div className="grid gap-10 md:grid-cols-12 md:gap-14 lg:gap-16">
                {/* Left rail — number + eyebrow + source */}
                <div className="md:col-span-4">
                  <div className="md:sticky md:top-28">
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.32em] ${s.eyebrow}`}
                    >
                      Action
                    </p>
                    <p
                      aria-hidden
                      className={`mt-2 font-serif font-semibold leading-[0.85] tracking-[-0.04em] ${s.number} text-[8rem] md:text-[10rem] lg:text-[12rem]`}
                    >
                      {action.num}
                    </p>
                    <span
                      aria-hidden
                      className={`mt-4 block h-px w-20 ${s.rule}`}
                    />
                    <p
                      className={`mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] ${s.sourceText}`}
                    >
                      Source · {action.source}
                    </p>
                  </div>
                </div>

                {/* Right content — eyebrow, title, body, CTA, plate */}
                <div className="md:col-span-8 md:pt-2">
                  <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                    {/* Copy */}
                    <div className="lg:col-span-7">
                      <p
                        className={`text-[12px] font-semibold uppercase tracking-[0.24em] ${s.eyebrow}`}
                      >
                        {action.eyebrow}
                      </p>
                      <h2
                        id={`action-${action.num}-heading`}
                        className={`mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.022em] md:text-[2.5rem] lg:text-[2.75rem] ${s.title}`}
                      >
                        {action.title}
                      </h2>
                      <p
                        className={`mt-6 max-w-xl text-[15px] leading-[1.7] md:text-base ${s.body}`}
                      >
                        {action.body}
                      </p>

                      <div className="mt-8">
                        <a
                          href={action.cta.href}
                          target={action.cta.external ? "_blank" : undefined}
                          rel={
                            action.cta.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={`group ${s.cta}`}
                        >
                          {action.cta.label}
                          <ExternalArrow />
                        </a>
                        <p
                          className={`mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] ${s.extLabel}`}
                        >
                          External link · opens in a new tab
                        </p>
                      </div>
                    </div>

                    {/* Plate / illustration */}
                    <aside className="lg:col-span-5">
                      <figure
                        className={`relative border bg-paper ${s.figureBorder}`}
                      >
                        <div className="relative aspect-[3/2] w-full">
                          <Image
                            src={action.illustration.src}
                            alt={action.illustration.alt}
                            fill
                            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 40vw, 100vw"
                            className="object-cover object-center"
                          />
                        </div>
                        <figcaption
                          className={`flex items-center justify-between gap-3 border-t px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] ${s.figureCapBorder} ${s.figureCapBg} ${s.figureCapText}`}
                        >
                          <span>Plate {action.num}</span>
                          <span>{action.illustration.caption}</span>
                        </figcaption>
                      </figure>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
