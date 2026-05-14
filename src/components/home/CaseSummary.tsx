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
      className="container-page section"
    >
      <header className="max-w-3xl">
        <p className="eyebrow">The case in 60 seconds</p>
        <h2
          id="case-summary-heading"
          className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
        >
          Four questions. Four answers.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-[1.65] text-ink/70 md:text-lg">
          A clear, honest summary of what we know, what we don&rsquo;t, and why
          it matters — designed to read in under a minute.
        </p>
      </header>

      <ul className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
        {cards.map((card) => (
          <li
            key={card.number}
            className="group relative flex h-full flex-col rounded-2xl border border-ink/10 bg-white/65 p-7 shadow-card transition duration-200 ease-editorial hover:-translate-y-0.5 hover:border-ink/20 hover:bg-white hover:shadow-card-hover"
          >
            <span
              aria-hidden
              className="font-serif text-[11px] font-semibold tracking-[0.32em] text-ember"
            >
              {card.number}
            </span>
            <h3 className="mt-4 font-serif text-[1.4rem] font-semibold leading-snug tracking-[-0.015em] text-ink md:text-2xl">
              {card.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-ink/70">
              {card.body}
            </p>
            <span
              aria-hidden
              className="mt-6 h-px w-10 bg-ember/40 transition-all duration-300 ease-editorial group-hover:w-20"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
