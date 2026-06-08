import Image from "next/image";

type Bullet = {
  title: string;
  body: string;
};

type PullQuote = {
  text: string;
  attribution?: string;
};

type Illustration = {
  src: string;
  alt: string;
  caption?: string;
  captionRight?: string;
};

type Accent = "ember" | "clay" | "moss" | "crimson";

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  intro: string;
  paragraphs?: string[];
  bullets?: Bullet[];
  pullQuote?: PullQuote;
  illustration?: Illustration;
  accent?: Accent;
};

const accentMap: Record<
  Accent,
  {
    indexText: string;
    eyebrowText: string;
    quoteBorder: string;
    quoteMark: string;
    figureBorder: string;
    figureCapBorder: string;
    figureCapBg: string;
  }
> = {
  ember: {
    indexText: "text-ember",
    eyebrowText: "text-ember",
    quoteBorder: "border-ember",
    quoteMark: "text-ember/20",
    figureBorder: "border-paper-300",
    figureCapBorder: "border-paper-300",
    figureCapBg: "bg-paper-50",
  },
  clay: {
    indexText: "text-clay-600",
    eyebrowText: "text-clay-600",
    quoteBorder: "border-clay-500",
    quoteMark: "text-clay-500/25",
    figureBorder: "border-clay-100",
    figureCapBorder: "border-clay-100",
    figureCapBg: "bg-clay-50/70",
  },
  moss: {
    indexText: "text-moss-600",
    eyebrowText: "text-moss-600",
    quoteBorder: "border-moss-500",
    quoteMark: "text-moss-500/25",
    figureBorder: "border-moss-100",
    figureCapBorder: "border-moss-100",
    figureCapBg: "bg-moss-50/70",
  },
  crimson: {
    indexText: "text-crimson-500",
    eyebrowText: "text-crimson-500",
    quoteBorder: "border-crimson-500",
    quoteMark: "text-crimson-500/20",
    figureBorder: "border-crimson-100",
    figureCapBorder: "border-crimson-100",
    figureCapBg: "bg-crimson-50/60",
  },
};

export default function SectionBlock({
  index,
  eyebrow,
  title,
  intro,
  paragraphs,
  bullets,
  pullQuote,
  illustration,
  accent = "ember",
}: Props) {
  const a = accentMap[accent];

  return (
    <section className="container-page section-tight">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-28">
            {index && (
              <p
                className={`font-serif text-[11px] font-semibold tracking-[0.32em] ${a.indexText}`}
              >
                {index}
              </p>
            )}
            {eyebrow && (
              <p
                className={`mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] ${a.eyebrowText}`}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-[2.5rem]">
              {title}
            </h2>

            {illustration && (
              <figure
                className={`mt-8 hidden border bg-paper md:block ${a.figureBorder}`}
              >
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={illustration.src}
                    alt={illustration.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
                {(illustration.caption || illustration.captionRight) && (
                  <figcaption
                    className={`flex items-center justify-between gap-3 border-t px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65 ${a.figureCapBorder} ${a.figureCapBg}`}
                  >
                    <span>{illustration.caption}</span>
                    {illustration.captionRight && (
                      <span>{illustration.captionRight}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            )}
          </div>
        </header>

        <div className="md:col-span-8 md:pt-2">
          <p className="text-lg leading-[1.75] text-ink/80 md:text-xl">
            {intro}
          </p>

          {paragraphs?.map((para, idx) => (
            <p
              key={idx}
              className="mt-5 text-[1.0625rem] leading-[1.75] text-ink/75 md:text-lg"
            >
              {para}
            </p>
          ))}

          {bullets && bullets.length > 0 && (
            <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-card">
              {bullets.map((bullet) => (
                <li
                  key={bullet.title}
                  className="bg-paper-50 p-6 transition-colors duration-200 hover:bg-paper md:p-7"
                >
                  <p className="font-serif text-lg font-semibold tracking-[-0.015em] text-ink md:text-xl">
                    {bullet.title}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">
                    {bullet.body}
                  </p>
                </li>
              ))}
            </ul>
          )}

          {pullQuote && (
            <figure className="relative mt-12">
              <span
                aria-hidden
                className={`pointer-events-none absolute -left-1 -top-6 select-none font-serif text-[5rem] leading-none md:-left-2 md:-top-8 md:text-[6rem] ${a.quoteMark}`}
              >
                &ldquo;
              </span>
              <div className={`border-l-2 pl-6 md:pl-8 ${a.quoteBorder}`}>
                <blockquote className="font-serif text-xl leading-[1.35] tracking-[-0.015em] text-ink md:text-2xl">
                  {pullQuote.text}
                </blockquote>
                {pullQuote.attribution && (
                  <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55">
                    — {pullQuote.attribution}
                  </figcaption>
                )}
              </div>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
