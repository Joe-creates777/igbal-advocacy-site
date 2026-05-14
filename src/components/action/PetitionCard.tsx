import Link from "next/link";
import { PETITION_URL } from "@/lib/links";

const reasons = [
  {
    title: "It tells the story.",
    body: "Every signature adds your name to the public record — and helps move this from a private case into a visible one.",
  },
  {
    title: "It applies pressure.",
    body: "Public attention is one of the few tools that consistently changes outcomes in cases of academic and human-rights concern.",
  },
  {
    title: "It builds momentum.",
    body: "Petitions don’t end at signing. Each new name strengthens the next ask — to journalists, institutions, and decision-makers.",
  },
];

export default function PetitionCard() {
  return (
    <section className="container-page pt-10 pb-16 md:pt-14 md:pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-ink text-paper shadow-card-hover">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-ember/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-ember/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative grid gap-12 p-10 md:grid-cols-12 md:gap-16 md:p-16 lg:p-20">
          <div className="md:col-span-7">
            <p className="eyebrow text-ember">Take action</p>
            <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.022em] text-paper sm:text-5xl md:text-6xl lg:text-[4.5rem]">
              Sign the petition for{" "}
              <span className="text-ember">Igbal Abilov.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-[1.55] text-paper/90 md:text-xl">
              Signing alone may not change everything. But without attention,
              nothing changes at all.
            </p>
            <p className="mt-4 max-w-xl text-base leading-[1.65] text-paper/70 md:text-lg">
              Three minutes is all it takes. Your name joins thousands of
              students, researchers, and ordinary readers who refuse to let
              this case quietly disappear.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={PETITION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ember px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_28px_-10px_rgba(215,64,43,0.7)] transition duration-200 ease-out hover:-translate-y-px hover:bg-ember-600 hover:shadow-[0_16px_36px_-12px_rgba(215,64,43,0.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:translate-y-0"
              >
                Sign the Petition
                <svg
                  aria-hidden
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 3h7v7" />
                  <path d="M10 14 21 3" />
                  <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
              </a>
              <Link href="/about" className="btn-on-dark">
                Read the case first
              </Link>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
              <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
              External link · opens in a new tab
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur md:p-8">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />
              <p className="eyebrow text-ember">
                Why your signature matters
              </p>
              <ul className="mt-5 space-y-5 text-sm text-paper/85">
                {reasons.map((reason, i) => (
                  <li key={reason.title} className="flex gap-4">
                    <span className="font-serif text-2xl font-semibold leading-none text-ember">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-paper">
                        {reason.title}
                      </p>
                      <p className="mt-1 text-paper/70">{reason.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
