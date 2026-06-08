import Image from "next/image";
import Link from "next/link";

type Event = {
  marker: string;
  title: string;
  body: string;
};

const events: Event[] = [
  {
    marker: "Background",
    title: "A researcher’s career",
    body: "Igbal builds a body of work as a researcher and writer. Verified background details will be added as the campaign confirms them.",
  },
  {
    marker: "Recent reports",
    title: "The case enters the public record",
    body: "Reports about his situation begin circulating. The campaign tracks each public development as it is independently confirmed.",
  },
  {
    marker: "Ongoing",
    title: "Charges & proceedings",
    body: "Formal charges and proceedings are documented as they unfold, without speculation about what has not been verified.",
  },
  {
    marker: "Recent months",
    title: "International concern grows",
    body: "Academics, journalists, and rights organizations begin to raise their voices in solidarity and call for transparency.",
  },
  {
    marker: "Today",
    title: "A campaign you can join",
    body: "The petition is live, the blog is being written, and the world is paying attention. Your action — right now — matters.",
  },
];

export default function TimelinePreview() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="border-y border-moss-100 bg-moss-50"
    >
      <div className="container-page section">
        {/* Header + university illustration */}
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-moss-600">
              Timeline
            </p>
            <h2
              id="timeline-heading"
              className="mt-5 font-serif font-semibold leading-[0.98] tracking-[-0.025em] text-ink text-4xl md:text-6xl lg:text-[4.5rem]"
            >
              How the story
              <br />
              has unfolded.
            </h2>
            <span aria-hidden className="mt-8 block h-px w-20 bg-moss-600" />
            <p className="mt-7 max-w-lg text-[15px] leading-[1.7] text-ink/75 md:text-base">
              A short, cautious overview. Specific dates and details are added
              only as they are publicly confirmed.
            </p>
            <div className="mt-9">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 border-b border-ink pb-1 text-[12px] font-semibold uppercase tracking-[0.24em] text-ink transition-colors hover:text-moss-600 hover:border-moss-600"
              >
                Read the full case
                <svg
                  aria-hidden
                  className="h-3.5 w-3.5"
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
              </Link>
            </div>
          </header>

          <aside className="md:col-span-5">
            <figure className="relative border border-moss-100 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-university.png"
                  alt="A flat illustration of a classical university building with columns and a sage-green pediment."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-moss-100 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate IV — The institution</span>
                <span>The seat of learning</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Timeline list */}
        <ol className="relative mt-16 border-l border-moss-600/35 pl-8 md:mt-20 md:pl-12">
          {events.map((event, idx) => (
            <li key={idx} className="group relative pb-10 last:pb-0 md:pb-12">
              <span
                aria-hidden
                className="absolute -left-[35px] top-2 grid h-3 w-3 place-items-center md:-left-[51px]"
              >
                <span className="h-2 w-2 bg-moss-600 ring-4 ring-moss-50 transition duration-300 ease-editorial group-hover:scale-125" />
              </span>

              <div className="flex flex-col gap-4 md:flex-row md:gap-12">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/55 md:w-44 md:shrink-0 md:pt-1">
                  {event.marker}
                </p>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.625rem]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink/75">
                    {event.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
