import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/links";

export default function ContactBlock() {
  return (
    <section className="container-page section">
      <div className="grid gap-10 rounded-3xl border border-ink/10 bg-white/70 p-8 shadow-card md:grid-cols-12 md:p-12">
        <header className="md:col-span-5">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-4xl">
            Working on something related?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-ink/70 md:text-base">
            Whether you&rsquo;re a student group, a researcher, a journalist,
            or someone with information that could help — we&rsquo;d like to
            hear from you.
          </p>
        </header>

        <div className="md:col-span-7">
          <div className="grid gap-4 md:grid-cols-2">
            <ContactCard
              eyebrow="Email"
              title={CONTACT_EMAIL}
              body="For corrections, tips, collaboration, or just to say you read this."
              cta="Send a message"
              href={`mailto:${CONTACT_EMAIL}`}
              external
            />
            <ContactCard
              eyebrow="Read first"
              title="The case in 60 seconds"
              body="If you’re new here, the about page is the right place to start."
              cta="Read the case"
              href="/about"
            />
          </div>

          <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            <span aria-hidden className="h-1 w-1 rounded-full bg-ink/35" />
            Placeholder contact &middot; will be updated when the campaign
            address is finalized
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  eyebrow,
  title,
  body,
  cta,
  href,
  external,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "group block rounded-2xl border border-ink/10 bg-paper p-6 transition duration-200 ease-editorial hover:-translate-y-0.5 hover:border-ink/25 hover:bg-white hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
  const inner = (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.015em] text-ink">
        {title}
      </p>
      <p className="mt-2 text-[14px] leading-[1.65] text-ink/70">{body}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ember transition-all duration-200 group-hover:gap-3">
        {cta}
        <svg
          aria-hidden
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </span>
    </>
  );

  return external ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
