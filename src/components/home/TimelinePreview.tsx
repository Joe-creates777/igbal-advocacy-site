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
    marker: "[Date pending]",
    title: "The case enters the public record",
    body: "Reports about his situation begin circulating. The campaign tracks each public development as it is independently confirmed.",
  },
  {
    marker: "[Date pending]",
    title: "Charges & proceedings",
    body: "Formal charges and proceedings are documented as they unfold, without speculation about what has not been verified.",
  },
  {
    marker: "[Date pending]",
    title: "International concern grows",
    body: "Academics, journalists, and rights organizations begin to raise their voices in solidarity and demand transparency.",
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
      className="container-page section"
    >
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Timeline</p>
          <h2
            id="timeline-heading"
            className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
          >
            How the story has unfolded.
          </h2>
          <p className="mt-5 text-base leading-[1.65] text-ink/70 md:text-lg">
            A short, cautious overview. Specific dates and details are added
            only as they are publicly confirmed.
          </p>
        </div>
        <Link
          href="/about"
          className="link-underline inline-flex items-center gap-2 text-sm font-semibold text-ink"
        >
          Read the full case
          <svg
            aria-hidden
            className="h-4 w-4"
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
      </header>

      <ol className="relative mt-14 border-l border-ink/15 pl-8 md:mt-16 md:pl-12">
        {events.map((event, idx) => (
          <li key={idx} className="group relative pb-10 last:pb-0 md:pb-12">
            <span
              aria-hidden
              className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center md:-left-[55px]"
            >
              <span className="h-2 w-2 rounded-full bg-ember ring-4 ring-paper transition duration-300 ease-editorial group-hover:scale-125 group-hover:ring-paper-200/50" />
            </span>

            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55 md:w-40 md:shrink-0 md:pt-1">
                {event.marker}
              </p>
              <div className="max-w-2xl">
                <h3 className="font-serif text-xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.5rem]">
                  {event.title}
                </h3>
                <p className="mt-2 text-[15px] leading-[1.7] text-ink/70">
                  {event.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
