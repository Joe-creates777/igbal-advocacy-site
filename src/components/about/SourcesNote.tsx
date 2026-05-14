import { LAST_UPDATED } from "@/lib/links";

export default function SourcesNote() {
  return (
    <section className="container-page section-tight">
      <aside
        aria-labelledby="sources-note-heading"
        className="relative overflow-hidden rounded-3xl border border-ember/25 bg-gradient-to-br from-ember-50/70 via-paper to-paper p-8 shadow-card md:p-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-ember/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/30 to-transparent"
        />
        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">A note on sources</p>
            <h2
              id="sources-note-heading"
              className="mt-3 font-serif text-2xl font-semibold leading-[1.15] tracking-[-0.018em] text-ink md:text-[1.875rem]"
            >
              How we handle facts.
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">
              <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
              Last updated: {LAST_UPDATED}
            </p>
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
                  Where details are still being confirmed, you&rsquo;ll see
                  cautious placeholder language. We&rsquo;d rather be honest
                  about uncertainty than guess — and we&rsquo;ll update as
                  more information is publicly verified.
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
      className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ember text-[11px] font-semibold text-white shadow-[0_4px_12px_-4px_rgba(215,64,43,0.5)]"
    >
      {children}
    </span>
  );
}
