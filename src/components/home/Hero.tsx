import Link from "next/link";

const meta = [
  "Petition open to the public",
  "Updated regularly",
  "Independent campaign",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(1100px 600px at 88% -10%, rgba(215,64,43,0.12), transparent 60%), radial-gradient(900px 520px at -10% 110%, rgba(17,24,43,0.06), transparent 55%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(17,24,43,0.10) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse at 50% 35%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 35%, black 30%, transparent 75%)",
        }}
      />

      <div className="container-page relative pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
              </span>
              <p className="eyebrow">Active campaign &middot; Academic freedom</p>
            </div>

            <h1 className="mt-7 font-serif text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.022em] text-ink sm:text-5xl md:text-[4rem] lg:text-[4.25rem] xl:text-[4.75rem]">
              What happens when research becomes{" "}
              <span className="text-ember">dangerous?</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-[1.65] text-ink/75 md:text-xl">
              Igbal Abilov is a researcher whose case has raised serious
              concerns about academic freedom. According to public reports, he
              is currently imprisoned in connection with his work. This is the
              campaign telling his story — and asking you to act.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/take-action" className="btn-primary">
                Sign the Petition
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
              <Link href="/about" className="btn-secondary">
                Read His Story
              </Link>
            </div>

            <ul className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink/55">
              {meta.map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span
                    aria-hidden
                    className="h-1 w-1 rounded-full bg-ink/35"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <PortraitCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(215,64,43,0.18),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-ink/10 via-transparent to-ember/10 blur-xl"
      />

      <article className="relative overflow-hidden rounded-[1.75rem] border border-white/5 bg-ink text-paper shadow-card-hover">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07]"
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative flex flex-col gap-10 p-8 md:p-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/85">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
              Active case
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-paper/45">
              #FreeIgbal
            </span>
          </div>

          <div>
            <p
              aria-hidden
              className="bg-gradient-to-br from-paper via-paper to-paper/70 bg-clip-text font-serif text-[7.5rem] font-semibold leading-none tracking-[-0.04em] text-transparent md:text-[9rem]"
            >
              IA
            </p>
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-paper/65">
              Igbal Abilov
            </p>
            <p className="mt-1 text-sm text-paper/55">
              Researcher &middot; Reportedly imprisoned
            </p>
          </div>

          <blockquote className="border-t border-white/10 pt-6">
            <p className="font-serif text-xl leading-snug text-paper md:text-2xl">
              &ldquo;Academic freedom isn&rsquo;t a luxury. It&rsquo;s the
              precondition for asking the questions that move societies
              forward.&rdquo;
            </p>
            <footer className="mt-3 text-xs uppercase tracking-[0.18em] text-paper/55">
              Campaign principle
            </footer>
          </blockquote>
        </div>
      </article>

      <div className="absolute -bottom-6 -left-6 hidden max-w-[16rem] rounded-2xl border border-ink/10 bg-paper/95 p-4 text-left shadow-card backdrop-blur md:block">
        <p className="eyebrow">Last update</p>
        <p className="mt-1 text-sm text-ink/80">
          The campaign is active. New developments are tracked as they are
          publicly verified.
        </p>
      </div>
    </div>
  );
}
