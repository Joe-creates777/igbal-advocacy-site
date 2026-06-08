import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";

export default function FollowCampaign() {
  return (
    <section
      aria-labelledby="follow-campaign-heading"
      className="container-page section-tight"
    >
      <div className="border border-ink bg-ink p-8 text-paper md:p-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <header className="md:col-span-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ember-100">
              Stay close to the campaign
            </p>
            <h2
              id="follow-campaign-heading"
              className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-paper md:text-4xl"
            >
              Follow and share the campaign.
            </h2>
            <span aria-hidden className="mt-6 block h-px w-16 bg-ember-100" />
            <p className="mt-5 text-[15px] leading-[1.65] text-paper/75 md:text-base">
              Use these channels to follow updates and share campaign
              materials.
            </p>

            <figure className="mt-8 border border-paper/15 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-solidarity.png"
                  alt="A flat illustration of three figures standing shoulder to shoulder — the community around the campaign."
                  fill
                  sizes="(min-width: 768px) 35vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-ink/15 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate — Together</span>
                <span>Stay in the loop</span>
              </figcaption>
            </figure>
          </header>

          <div className="md:col-span-7 md:pt-2">
            <SocialLinks variant="dark" showLabels />
            <p className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-paper/55">
              <span aria-hidden className="h-1 w-1 rounded-full bg-ember-100" />
              External links · open in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
