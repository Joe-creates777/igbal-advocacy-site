import SocialLinks from "@/components/SocialLinks";

export default function FollowCampaign() {
  return (
    <section
      aria-labelledby="follow-campaign-heading"
      className="container-page section-tight"
    >
      <div className="rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-card md:p-12">
        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <header className="md:col-span-5">
            <p className="eyebrow">Stay close to the campaign</p>
            <h2
              id="follow-campaign-heading"
              className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-4xl"
            >
              Follow and share the campaign.
            </h2>
            <p className="mt-4 text-[15px] leading-[1.65] text-ink/70 md:text-base">
              Use these channels to follow updates and share campaign
              materials.
            </p>
          </header>

          <div className="md:col-span-7 md:pt-2">
            <SocialLinks variant="light" showLabels />
            <p className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
              <span aria-hidden className="h-1 w-1 rounded-full bg-ember" />
              External links · open in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
