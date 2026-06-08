import Image from "next/image";
import { LAST_UPDATED } from "@/lib/links";

export default function SourcesNote() {
  return (
    <section className="container-page section-tight">
      <aside
        aria-labelledby="sources-note-heading"
        className="relative overflow-hidden border border-moss-100 bg-moss-50/60 p-8 md:p-12"
      >
        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-moss-600">
              A note on sources
            </p>
            <h2
              id="sources-note-heading"
              className="mt-3 font-serif text-2xl font-semibold leading-[1.15] tracking-[-0.018em] text-ink md:text-[1.875rem]"
            >
              How we handle facts.
            </h2>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss-600">
              Last updated: {LAST_UPDATED}
            </p>

            <figure className="mt-8 border border-moss-100 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-magnifier.png"
                  alt="A flat illustration of a magnifying glass held over a handwritten page — careful verification."
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-moss-100 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate — Verify</span>
                <span>Line by line</span>
              </figcaption>
            </figure>
          </div>

          <div className="md:col-span-8">
            <p className="text-[1.0625rem] leading-[1.75] text-ink/80 md:text-lg">
              This is a student-led advocacy website. We don&rsquo;t claim to
              be a news outlet, and we&rsquo;re careful not to act like one.
              The campaign relies on public reports, course materials, and
              human rights advocacy resources — and we say so wherever a
              detail isn&rsquo;t independently verifiable.
            </p>

            <ul className="mt-6 space-y-5 text-[15px] leading-[1.65] text-ink/80">
              <li className="flex gap-4">
                <Marker>1</Marker>
                <span>
                  <strong className="font-semibold text-ink">
                    We work from public sources.
                  </strong>{" "}
                  Public reporting, course materials, and human rights
                  advocacy resources are the basis for what we publish here.
                  Where a fact can&rsquo;t yet be independently confirmed, we
                  say so.
                </span>
              </li>
              <li className="flex gap-4">
                <Marker>2</Marker>
                <span>
                  <strong className="font-semibold text-ink">
                    Claims update as facts are verified.
                  </strong>{" "}
                  Where exact dates aren&rsquo;t yet publicly verifiable, we
                  use general timeframes — <em>recent reports</em>,{" "}
                  <em>ongoing</em>, <em>now</em>. We&rsquo;d rather be honest
                  about uncertainty than guess, and we update as more
                  information is publicly confirmed.
                </span>
              </li>
              <li className="flex gap-4">
                <Marker>3</Marker>
                <span>
                  <strong className="font-semibold text-ink">
                    We welcome corrections.
                  </strong>{" "}
                  If something here is wrong, incomplete, or out of date, we
                  want to know — and we&rsquo;ll update it.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
  );
}

function Marker({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="grid h-6 w-6 shrink-0 place-items-center rounded-none border border-ink bg-ink text-[11px] font-semibold text-paper"
    >
      {children}
    </span>
  );
}
