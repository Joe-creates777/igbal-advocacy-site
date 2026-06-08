import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-paper-300 bg-paper">
      <div className="container-page relative z-10">
        {/* Archival top rail */}
        <div className="flex items-center justify-between border-b border-paper-300 py-4 text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/55">
          <span>Case file · 001</span>
          <span className="hidden sm:inline">Voice4Igbal — an independent advocacy campaign</span>
          <span className="sm:hidden">Voice4Igbal</span>
        </div>

        {/* Main hero — poster left, text right */}
        <div className="grid items-center gap-10 pt-12 pb-16 md:grid-cols-12 md:gap-14 md:pt-16 md:pb-24 lg:gap-20 lg:pt-20">
          {/* Portrait poster — dominant */}
          <figure className="relative md:col-span-7">
            <div className="relative aspect-square w-full">
              <Image
                src="/images/igbal-portrait-poster.png"
                alt="Free Igbal — He will not be silenced. Official campaign portrait illustration of Dr. Igbal Abilov with tape over his mouth."
                fill
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/55">
              <span>Official campaign portrait</span>
              <span>Voice4Igbal · 2026</span>
            </figcaption>
          </figure>

          {/* Typography panel */}
          <div className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-ember">
              Stop unjust persecution
            </p>
            <h1 className="mt-6 font-serif font-semibold leading-[0.92] tracking-[-0.03em] text-ink text-5xl sm:text-6xl md:text-[4.5rem] lg:text-[5.5rem]">
              He will not
              <br />
              <span className="text-ember">be silenced.</span>
            </h1>
            <span aria-hidden className="mt-8 block h-px w-20 bg-ember" />
            <p className="mt-8 max-w-md font-serif text-xl leading-[1.35] text-ink md:text-2xl">
              What happens when research becomes dangerous?
            </p>
            <p className="mt-5 max-w-md text-[15px] leading-[1.7] text-ink/75">
              Dr. Igbal Abilov is an ethnographer and researcher unjustly
              imprisoned for his work. His case is not just his own — it
              raises serious concerns about academic freedom for all.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Learn his story
              </Link>
              <Link href="/take-action" className="btn-secondary">
                Take action
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
