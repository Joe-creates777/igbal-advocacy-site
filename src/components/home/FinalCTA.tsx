import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Sign",
    body: "Add your name to the public petition. It only takes a minute.",
  },
  {
    num: "02",
    title: "Share",
    body: "Send the campaign to one classmate, one colleague, one friend.",
  },
  {
    num: "03",
    title: "Stay informed",
    body: "Read the blog. Watch the timeline. Keep the spotlight on.",
  },
];

export default function FinalCTA() {
  return (
    <section
      id="take-action"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div className="container-page relative z-10 section">
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-100">
              Awareness should lead to action
            </p>
            <h2
              id="final-cta-heading"
              className="mt-5 font-serif font-semibold leading-[0.95] tracking-[-0.03em] text-paper text-5xl md:text-7xl lg:text-[6rem]"
            >
              Don&rsquo;t
              <br />
              scroll <span className="text-crimson-100">past.</span>
            </h2>
            <span aria-hidden className="mt-8 block h-px w-20 bg-crimson-100" />
            <p className="mt-8 max-w-xl font-serif text-xl leading-[1.4] text-paper md:text-2xl">
              Your voice can help bring Dr. Igbal Abilov home.
            </p>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-paper/75 md:text-base">
              Three minutes can add your name to the public record. Pressure is
              built one signature, one share, one conversation at a time.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/take-action"
                className="inline-flex items-center justify-center gap-2 border border-paper bg-paper px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition duration-200 ease-out hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              >
                Sign the petition
              </Link>
              <Link href="/take-action#share" className="btn-on-dark">
                Share the campaign
              </Link>
            </div>

            <ol className="mt-12 divide-y divide-paper/15 border-y border-paper/15">
              {steps.map((step) => (
                <li
                  key={step.num}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-6"
                >
                  <span className="font-serif text-[1.75rem] font-semibold leading-none text-crimson-100">
                    {step.num}
                  </span>
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-paper">
                      {step.title}
                    </p>
                    <p className="mt-2 text-[14px] leading-[1.7] text-paper/75">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="md:col-span-5">
            <figure className="relative border border-paper/15 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-raised-hand.png"
                  alt="A flat illustration of a hand raising a sheet of paper — a petition — upward."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-ink/15 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate V — Your voice</span>
                <span>Raise it</span>
              </figcaption>
            </figure>
          </aside>
        </div>
      </div>
    </section>
  );
}
