import Image from "next/image";
import Link from "next/link";

export default function EndOfPostCTA() {
  return (
    <aside
      aria-label="Take action"
      className="relative mt-20 overflow-hidden border border-ink bg-ink text-paper md:mt-24"
    >
      <div className="relative grid gap-8 p-8 md:grid-cols-12 md:gap-10 md:p-12">
        <div className="md:col-span-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson-100">
            Don&rsquo;t stop here
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-4xl">
            Read the case. Then sign your name.
          </h2>
          <span aria-hidden className="mt-6 block h-px w-14 bg-crimson-100" />
          <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-paper/75 md:text-base">
            Pressure is built one signature, one share, one conversation at a
            time. If this article gave you something to think about, take the
            next step.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center gap-2 border border-paper bg-paper px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition duration-200 ease-out hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Sign the petition
            </Link>
            <Link href="/about" className="btn-on-dark">
              Learn more about the case
            </Link>
          </div>
        </div>

        <aside className="md:col-span-5">
          <figure className="relative border border-paper/15 bg-paper">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/illustration-raised-hand.png"
                alt="A flat illustration of a hand raising a petition upward."
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-ink/15 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
              <span>Plate — Act</span>
              <span>One name at a time</span>
            </figcaption>
          </figure>
        </aside>
      </div>
    </aside>
  );
}
