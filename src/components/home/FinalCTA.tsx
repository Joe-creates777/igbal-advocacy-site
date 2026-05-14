import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      id="take-action"
      aria-labelledby="final-cta-heading"
      className="container-page section"
    >
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
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ember/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-ember/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <div className="relative grid gap-10 p-10 md:grid-cols-12 md:gap-12 md:p-16 lg:p-20">
          <div className="md:col-span-7">
            <p className="eyebrow text-ember">Take action now</p>
            <h2
              id="final-cta-heading"
              className="mt-4 font-serif text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-paper md:text-6xl"
            >
              Don&rsquo;t scroll past.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.65] text-paper/75 md:text-lg">
              Three minutes can join your name to thousands. Pressure is built
              one signature, one share, one conversation at a time. Igbal needs
              all three.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 ease-out hover:-translate-y-px hover:bg-ember-600 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Sign the petition
                <svg
                  aria-hidden
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/take-action" className="btn-on-dark">
                Share the campaign
              </Link>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="eyebrow text-ember">Three ways to help</p>
              <ul className="mt-5 space-y-5 text-sm text-paper/85">
                <li className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold leading-none text-ember">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-paper">Sign</p>
                    <p className="mt-1 text-paper/70">
                      Add your name to the public petition. It only takes a
                      minute.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold leading-none text-ember">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-paper">Share</p>
                    <p className="mt-1 text-paper/70">
                      Send the campaign to one classmate, one colleague, one
                      friend.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-serif text-2xl font-semibold leading-none text-ember">
                    3
                  </span>
                  <div>
                    <p className="font-semibold text-paper">Stay informed</p>
                    <p className="mt-1 text-paper/70">
                      Read the blog. Watch the timeline. Keep the spotlight on.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
