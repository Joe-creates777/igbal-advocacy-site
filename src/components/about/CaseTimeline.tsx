import Image from "next/image";
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
    marker: "Recent reports",
    title: "The case enters the public record",
    body: "Reports about his situation begin circulating. The campaign tracks each public development as it is independently confirmed, without speculation.",
  },
  {
    marker: "Ongoing",
    title: "Charges & proceedings",
    body: "Formal charges and proceedings are documented as they unfold. Specifics are added only as they are publicly verified.",
  },
  {
    marker: "Recent months",
    title: "International concern grows",
    body: "Academics, journalists, and rights organizations begin to raise their voices in solidarity and to call for transparency.",
  },
  {
    marker: "Now",
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
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-clay-600">
                Timeline
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
                Last updated: {LAST_UPDATED}
              </p>
            </div>
            <h2
              id="case-timeline-heading"
              className="mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.022em] text-ink md:text-5xl lg:text-[3.5rem]"
            >
              How the story has unfolded.
            </h2>
            <span aria-hidden className="mt-7 block h-px w-20 bg-clay-600" />
            <p className="mt-7 text-[15px] leading-[1.7] text-ink/75 md:text-base">
              A more detailed view of the case as the campaign understands it.
              Specific dates appear only where they are publicly verified.
              Elsewhere we use general timeframes — <em>recent reports</em>,{" "}
              <em>ongoing</em>, <em>now</em> — and update them as facts are
              confirmed.
            </p>
          </header>

          <aside className="md:col-span-5">
            <figure className="relative border border-paper-300 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-sealed-letter.png"
                  alt="A flat illustration of a sealed letter with a wax seal and a fountain pen — the case file, in writing."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-paper-300 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate — The case file</span>
                <span>Documented, day by day</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        <ol className="relative mt-14 border-l border-ink/15 pl-8 md:mt-16 md:pl-12">
          {events.map((event, idx) => (
            <li key={idx} className="group relative pb-10 last:pb-0 md:pb-12">
              <span
                aria-hidden
                className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center md:-left-[55px]"
              >
                <span className="h-2 w-2 rounded-full bg-clay-600 ring-4 ring-clay-50 transition duration-300 ease-editorial group-hover:scale-125" />
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
