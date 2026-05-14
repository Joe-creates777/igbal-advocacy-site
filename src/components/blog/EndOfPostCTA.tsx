import Link from "next/link";

export default function EndOfPostCTA() {
  return (
    <aside
      aria-label="Take action"
      className="relative mt-20 overflow-hidden rounded-3xl bg-ink text-paper shadow-card-hover md:mt-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ember/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="relative p-8 md:p-12">
        <p className="eyebrow text-ember">Don&rsquo;t stop here</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.02em] md:text-4xl">
          Read the case. Then sign your name.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-[1.65] text-paper/75 md:text-lg">
          Pressure is built one signature, one share, one conversation at a
          time. If this article gave you something to think about, take the
          next step.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/about" className="btn-on-dark">
            Learn more about the case
          </Link>
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
        </div>
      </div>
    </aside>
  );
}
