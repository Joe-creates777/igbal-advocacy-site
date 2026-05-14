import { LAST_UPDATED } from "@/lib/links";

type Event = {
  marker: string;
  title: string;
  body: string;
};

const events: Event[] = [
  {
    marker: "Earlier",
    title: "A researcher’s career",
    body: "Igbal builds a body of work as a researcher and writer. Verified background details will be added as the campaign confirms them publicly.",
  },
  {
    marker: "Earlier",
    title: "Academic conversations & writing",
    body: "His work enters wider academic and public conversations — the kind of slow, ordinary work that academic freedom is meant to protect.",
  },
  {
    marker: "[Date pending]",
    title: "The case enters the public record",
    body: "Reports about his situation begin circulating. The campaign tracks each public development as it is independently confirmed, without speculation.",
  },
  {
    marker: "[Date pending]",
    title: "Charges & proceedings",
    body: "Formal charges and proceedings are documented as they unfold. Specifics are added only as they are publicly verified.",
  },
  {
    marker: "[Date pending]",
    title: "International concern grows",
    body: "Academics, journalists, and rights organizations begin to raise their voices in solidarity and to call for transparency.",
  },
  {
    marker: "[Date pending]",
    title: "Solidarity broadens",
    body: "Students, civic groups, and ordinary readers begin sharing his story. Public attention grows from a quiet conversation into a campaign.",
  },
  {
    marker: "Today",
    title: "A campaign you can join",
    body: "The petition is live, the blog is being written, and the world is paying attention. Your action — right now — matters.",
  },
];

export default function CaseTimeline() {
  return (
    <section
      id="case-timeline"
      aria-labelledby="case-timeline-heading"
      className="border-y border-ink/10 surface-muted"
    >
      <div className="container-page section">
        <header className="flex max-w-3xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Timeline</p>
            <h2
              id="case-timeline-heading"
              className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-5xl"
            >
              How the story has unfolded.
            </h2>
            <p className="mt-5 text-base leading-[1.65] text-ink/70 md:text-lg">
              A more detailed view of the case as the campaign understands it.
              Specific dates appear only where they are publicly verified.
              Everywhere else, you&rsquo;ll see <em>[date pending]</em> — a
              promise to update as facts are confirmed, not a guess.
            </p>
          </div>
          <p className="inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
            <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <ol className="relative mt-14 border-l border-ink/15 pl-8 md:mt-16 md:pl-12">
          {events.map((event, idx) => (
            <li key={idx} className="group relative pb-10 last:pb-0 md:pb-12">
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center md:-left-[55px]"
              >
                <span className="h-2 w-2 rounded-full bg-ember ring-4 ring-paper-200/60 transition duration-300 ease-editorial group-hover:scale-125" />
              </span>

              <div className="flex flex-col gap-3 md:flex-row md:gap-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55 md:w-44 md:shrink-0 md:pt-1">
                  {event.marker}
                </p>
                <div className="max-w-2xl">
                  <h3 className="font-serif text-xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.5rem]">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink/70 md:text-base">
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
