import Image from "next/image";

type Card = {
  number: string;
  title: string;
  body: string;
};

const cards: Card[] = [
  {
    number: "01",
    title: "Who is Igbal Abilov?",
    body: "A researcher and writer whose work has placed him at the center of a public case. Verified background is being collected and published as the campaign grows.",
  },
  {
    number: "02",
    title: "What happened?",
    body: "The full picture is still being documented. The campaign tracks only what is publicly confirmed — and updates as more information comes to light.",
  },
  {
    number: "03",
    title: "Why does it matter?",
    body: "When researchers can be punished for asking questions, knowledge itself is at risk. This case is part of a much larger pattern, not an isolated story.",
  },
  {
    number: "04",
    title: "What can we do?",
    body: "Sign the petition. Share his story. Keep the spotlight on. Public pressure works — but only when it is sustained and organized.",
  },
];

export default function CaseSummary() {
  return (
    <section
      id="case-summary"
      aria-labelledby="case-summary-heading"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="container-page relative z-10 section">
        {/* Header + illustration plate */}
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-14">
          <header className="md:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-clay-500">
              The case in 60 seconds
            </p>
            <h2
              id="case-summary-heading"
              className="mt-5 font-serif font-semibold leading-[0.98] tracking-[-0.025em] text-paper text-5xl md:text-6xl lg:text-[5rem]"
            >
              An ethnographer.
              <br />
              A researcher.
              <br />
              <span className="text-clay-500">A prisoner of conscience.</span>
            </h2>
            <span aria-hidden className="mt-8 block h-px w-20 bg-clay-500" />
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-paper/80 md:text-base">
              Dr. Igbal Abilov has spent his career documenting culture,
              identity, and history. Now he is behind bars — not for violence,
              but for his research and writing.
            </p>
            <p className="mt-4 max-w-xl font-serif text-lg leading-[1.4] text-paper md:text-xl">
              His case is not an isolated incident. It is part of a growing
              pattern.
            </p>
          </header>

          <aside className="md:col-span-5">
            <figure className="relative border border-paper/15 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-books-glasses.png"
                  alt="A flat illustration of a stack of clothbound books with a pair of round scholar's glasses resting on top."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-ink/15 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate II — His work</span>
                <span>Preserved · Archived</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Four-question grid */}
        <ul className="mt-16 grid gap-px overflow-hidden border border-paper/15 bg-paper/15 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <li
              key={card.number}
              className="group relative flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-700 md:p-8"
            >
              <span
                aria-hidden
                className="font-serif text-[3rem] font-semibold leading-none text-clay-500/85"
              >
                {card.number}
              </span>
              <h3 className="mt-6 font-serif text-[1.35rem] font-semibold leading-snug tracking-[-0.015em] text-paper md:text-2xl">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.7] text-paper/70">
                {card.body}
              </p>
              <span
                aria-hidden
                className="mt-6 block h-px w-10 bg-clay-500 transition-all duration-300 ease-editorial group-hover:w-20"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
