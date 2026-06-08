import Image from "next/image";

type Pillar = {
  num: string;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Academic freedom",
    body: "The right to research, to question, and to publish — without fear of punishment — is the foundation of every university and every functioning democracy.",
  },
  {
    num: "02",
    title: "Freedom of expression",
    body: "When a researcher is silenced, every reader, student, and citizen loses something. Information is power, but only when it is free to move.",
  },
  {
    num: "03",
    title: "Human rights",
    body: "Behind the headlines and the case files is a person. Standing with Igbal is standing for the principle that no one should pay for their ideas with their freedom.",
  },
];

export default function WhyItMatters() {
  return (
    <section
      id="why-it-matters"
      aria-labelledby="why-it-matters-heading"
      className="relative bg-paper"
    >
      <div className="grid items-stretch md:grid-cols-12">
        {/* Illustration panel */}
        <div className="relative md:col-span-5">
          <div className="relative aspect-[3/2] w-full bg-moss-100/50 md:absolute md:inset-0 md:aspect-auto">
            <Image
              src="/images/illustration-open-book.png"
              alt="A flat illustration of an open hardbound book with handwritten lines and a fountain pen resting on the right page."
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-between gap-3 border-t border-moss-100 bg-paper px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
              <span>Plate III — The work</span>
              <span>Unfinished</span>
            </div>
          </div>
        </div>

        {/* Typography panel */}
        <div className="md:col-span-7">
          <div className="px-6 py-16 md:px-12 md:py-20 lg:px-16 lg:py-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-moss-600">
              Why this case matters
            </p>
            <h2
              id="why-it-matters-heading"
              className="mt-5 font-serif font-semibold leading-[0.98] tracking-[-0.025em] text-ink text-4xl md:text-6xl lg:text-[4.25rem]"
            >
              One researcher.
              <br />
              <span className="text-moss-600">Three principles</span> at stake.
            </h2>
            <span aria-hidden className="mt-8 block h-px w-20 bg-moss-600" />
            <p className="mt-7 max-w-lg font-serif text-xl leading-[1.4] text-ink md:text-2xl">
              This isn&rsquo;t only about one person. It&rsquo;s about the
              quiet structures — academic, civic, human — that hold open
              societies together.
            </p>

            <ol className="mt-12 divide-y divide-paper-300 border-y border-paper-300">
              {pillars.map((pillar) => (
                <li
                  key={pillar.num}
                  className="grid gap-4 py-7 md:grid-cols-[4rem_1fr] md:gap-6 md:py-8"
                >
                  <span className="font-serif text-[2rem] font-semibold leading-none text-moss-600 md:text-[2.25rem]">
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.75rem]">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-ink/75">
                      {pillar.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
