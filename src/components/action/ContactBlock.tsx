import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/links";

export default function ContactBlock() {
  return (
    <section className="container-page section">
      <div className="grid gap-10 border border-moss-100 bg-moss-50/60 p-8 md:grid-cols-12 md:p-12">
        <header className="md:col-span-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-moss-600">
            Get in touch
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-4xl">
            Working on something related?
          </h2>
          <p className="mt-5 text-[15px] leading-[1.65] text-ink/70 md:text-base">
            Whether you&rsquo;re a student group, a researcher, a journalist,
            or someone with information that could help — we&rsquo;d like to
            hear from you.
          </p>

          <figure className="mt-8 border border-moss-100 bg-paper">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src="/images/illustration-open-envelope.png"
                alt="A flat illustration of an open envelope with a letter pulled out and a postage stamp — correspondence."
                fill
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-3 border-t border-moss-100 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
              <span>Plate — Write to us</span>
              <span>We read everything</span>
            </figcaption>
          </figure>
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

          <p className="mt-7 inline-flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
            <span aria-hidden className="h-1 w-1 rounded-full bg-ink/35" />
            <span>Want to verify a source?</span>
            <Link
              href="/resources"
              className="underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-ink"
            >
              See Resources &amp; sources
            </Link>
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
    "group block border border-paper-300 bg-paper p-6 transition duration-200 ease-editorial hover:border-ink/40 hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
  const inner = (
    <>
      <p className="eyebrow">{eyebrow}</p>
      <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.015em] text-ink">
        {title}
      </p>
      <p className="mt-2 text-[14px] leading-[1.65] text-ink/70">{body}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-moss-600 transition-all duration-200 group-hover:gap-3 hover:text-moss-700">
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
