type Bullet = {
  title: string;
  body: string;
};

type PullQuote = {
  text: string;
  attribution?: string;
};

type Props = {
  index?: string;
  eyebrow?: string;
  title: string;
  intro: string;
  paragraphs?: string[];
  bullets?: Bullet[];
  pullQuote?: PullQuote;
};

export default function SectionBlock({
  index,
  eyebrow,
  title,
  intro,
  paragraphs,
  bullets,
  pullQuote,
}: Props) {
  return (
    <section className="container-page section-tight">
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-28">
            {index && (
              <p className="font-serif text-[11px] font-semibold tracking-[0.32em] text-ember">
                {index}
              </p>
            )}
            {eyebrow && <p className="eyebrow mt-2">{eyebrow}</p>}
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-[2.5rem]">
              {title}
            </h2>
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
                  className="bg-paper p-6 transition-colors duration-200 hover:bg-white md:p-7"
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
                className="pointer-events-none absolute -left-1 -top-6 select-none font-serif text-[5rem] leading-none text-ember/20 md:-left-2 md:-top-8 md:text-[6rem]"
              >
                &ldquo;
              </span>
              <div className="border-l-2 border-ember pl-6 md:pl-8">
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
