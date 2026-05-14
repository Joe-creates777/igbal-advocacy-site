type Theme = {
  title: string;
  body: string;
};

const themes: Theme[] = [
  {
    title: "Academic freedom",
    body: "The space researchers need to ask difficult questions — without fear of punishment for the answers.",
  },
  {
    title: "Freedom of expression",
    body: "The right to publish, speak, and document — even when what you publish is inconvenient.",
  },
  {
    title: "Minority cultural research",
    body: "The careful, often quiet work of recording communities, languages, and histories whose stories are not always at the center.",
  },
];

export default function BroaderConcerns() {
  return (
    <section
      aria-labelledby="broader-concerns-heading"
      className="container-page section"
    >
      <div className="max-w-3xl">
        <p className="eyebrow">A larger pattern</p>
        <h2
          id="broader-concerns-heading"
          className="mt-3 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.022em] text-ink sm:text-5xl md:text-6xl"
        >
          This is not <span className="text-ember">just one case.</span>
        </h2>
      </div>

      <div className="mt-10 grid gap-10 md:mt-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-lg leading-[1.75] text-ink/80 md:text-xl">
            It would be easier if this were a story about one person. But
            Igbal Abilov&rsquo;s case raises broader concerns — about academic
            freedom, about freedom of expression, and about who gets to write
            the histories of communities whose stories are often left out of
            the record.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-ink/75 md:text-lg">
            It reminds us that research is not abstract. It is people,
            languages, archives, and memories — the slow work of making a
            community&rsquo;s experience legible. When that work becomes
            risky, what disappears is not only one researcher&rsquo;s career.
            It is the quiet, ordinary record of how a community sees itself.
          </p>
          <p className="mt-5 text-[1.0625rem] leading-[1.75] text-ink/75 md:text-lg">
            This case should not be understood only as an isolated story. It
            belongs to a wider conversation about the conditions under which
            knowledge is allowed to exist — and what happens, in everyday
            lives, when those conditions narrow.
          </p>
        </div>

        <aside className="lg:col-span-5">
          <p className="eyebrow mb-4">Three concerns at once</p>
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-card">
            {themes.map((theme, idx) => (
              <li
                key={theme.title}
                className="group bg-paper p-6 transition-colors duration-200 hover:bg-white md:p-7"
              >
                <p className="font-serif text-[11px] font-semibold tracking-[0.32em] text-ember">
                  0{idx + 1}
                </p>
                <h3 className="mt-3 font-serif text-lg font-semibold leading-snug tracking-[-0.015em] text-ink md:text-xl">
                  {theme.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink/70">
                  {theme.body}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
