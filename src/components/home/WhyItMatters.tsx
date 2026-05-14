type Pillar = {
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    title: "Academic freedom",
    body: "The right to research, to question, and to publish — without fear of punishment — is the foundation of every university and every functioning democracy.",
  },
  {
    title: "Freedom of expression",
    body: "When a researcher is silenced, every reader, student, and citizen loses something. Information is power, but only when it is free to move.",
  },
  {
    title: "Human rights",
    body: "Behind the headlines and the case files is a person. Standing with Igbal is standing for the principle that no one should pay for their ideas with their freedom.",
  },
];

export default function WhyItMatters() {
  return (
    <section
      id="why-it-matters"
      aria-labelledby="why-it-matters-heading"
      className="border-y border-ink/10 surface-muted"
    >
      <div className="container-page section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-5">
            <p className="eyebrow">Why this case matters</p>
            <h2
              id="why-it-matters-heading"
              className="mt-3 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.018em] text-ink md:text-5xl"
            >
              One researcher.{" "}
              <span className="text-ember">Three principles</span> at stake.
            </h2>
            <p className="mt-6 max-w-md text-base leading-[1.65] text-ink/70 md:text-lg">
              This isn&rsquo;t only about one person. It&rsquo;s about the
              quiet structures — academic, civic, human — that hold open
              societies together.
            </p>

            <figure className="mt-10 max-w-md border-l-2 border-ember pl-5">
              <blockquote className="font-serif text-xl leading-snug text-ink md:text-[1.5rem]">
                &ldquo;The strength of a society can be measured by how it
                treats the people asking it the hardest questions.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                Campaign principle
              </figcaption>
            </figure>
          </header>

          <ul className="lg:col-span-7 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-card">
            {pillars.map((pillar, idx) => (
              <li
                key={pillar.title}
                className="group flex flex-col gap-3 bg-paper p-8 transition-colors duration-200 hover:bg-white md:flex-row md:gap-10 md:p-10"
              >
                <div className="md:w-32 md:shrink-0">
                  <p className="font-serif text-3xl font-semibold tracking-[-0.02em] text-ember md:text-4xl">
                    0{idx + 1}
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.65rem]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-[1.65] text-ink/70 md:text-base">
                    {pillar.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
