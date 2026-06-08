import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  CONTACT_EMAIL,
  LINKTREE_URL,
  PETITION_URL,
  SCHOLARS_AT_RISK_URL,
  SENATOR_LETTER_URL,
} from "@/lib/links";

export const metadata: Metadata = {
  title: "Resources & sources",
  description:
    "Where to take action, verify the case, and continue reading — petition, Scholars at Risk action, letter to Senator Schiff, campaign Linktree, and the source organizations this campaign draws from.",
};

type ActionItem = {
  num: string;
  label: string;
  title: string;
  body: string;
  href: string;
  source: string;
};

const actionItems: ActionItem[] = [
  {
    num: "01",
    label: "Sign the petition",
    title: "Stop the unjust persecution of Igbal Abilov.",
    body: "Public petition calling for his release. The most repeatable, public form of pressure a campaign can carry.",
    href: PETITION_URL,
    source: "Change.org",
  },
  {
    num: "02",
    label: "Contact elected officials",
    title: "Letter to Senator Schiff in support of Igbal’s release.",
    body: "Add your name to a constituent letter asking for active diplomatic and political support for the case.",
    href: SENATOR_LETTER_URL,
    source: "Action Network",
  },
  {
    num: "03",
    label: "Scholars at Risk action",
    title: "Join the international academic-freedom advocacy effort.",
    body: "Scholars at Risk is a global network that defends researchers facing persecution for their work. This is their public action page for Igbal.",
    href: SCHOLARS_AT_RISK_URL,
    source: "Scholars at Risk Network",
  },
  {
    num: "04",
    label: "Share the campaign",
    title: "All campaign resources in one place.",
    body: "Petition, social channels, articles, and shareable assets — bundled so you can pass them along in a single link.",
    href: LINKTREE_URL,
    source: "linktr.ee/freeigbalabilov",
  },
];

type SourceItem = {
  name: string;
  href: string;
  body: string;
};

const sourceItems: SourceItem[] = [
  {
    name: "Scholars at Risk",
    href: "https://www.scholarsatrisk.org/",
    body: "International network of universities and academics defending the right to academic freedom and protecting scholars at risk. Their public action page for Igbal is the primary point of verification for this campaign.",
  },
  {
    name: "PEN International",
    href: "https://www.pen-international.org/",
    body: "Global association of writers defending freedom of expression. PEN tracks cases involving writers, journalists, and academics facing persecution.",
  },
  {
    name: "Amnesty International",
    href: "https://www.amnesty.org/",
    body: "Long-standing human-rights organization that documents and campaigns on cases of arbitrary detention, freedom of expression, and political imprisonment worldwide.",
  },
  {
    name: "Human Rights Watch",
    href: "https://www.hrw.org/",
    body: "Independent organization investigating and reporting on human-rights abuses around the world, including in the contexts most relevant to this case.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Resources" },
        ]}
      />

      {/* Hero */}
      <section className="border-b border-ink/10">
        <div className="container-page py-14 md:py-20">
          <div className="grid items-end gap-10 md:grid-cols-12 md:gap-14">
            <header className="md:col-span-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-clay-600">
                Resources &amp; sources
              </p>
              <h1 className="mt-5 font-serif text-[2.5rem] font-semibold leading-[1.0] tracking-[-0.025em] text-ink sm:text-5xl md:text-[3.75rem] lg:text-[4.5rem]">
                Where to verify.
                <br />
                Where to act.
              </h1>
              <span aria-hidden className="mt-8 block h-px w-20 bg-clay-600" />
              <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
                Every page on this site points back to public sources. This is
                the index — the same four advocacy links the campaign runs on,
                plus the organizations whose reporting and statements we draw
                from. Use it to verify, to continue reading, or to act.
              </p>
            </header>

            <aside className="md:col-span-5">
              <figure className="relative border border-paper-300 bg-paper">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src="/images/illustration-magnifier.png"
                    alt="A flat illustration of a magnifying glass held over a handwritten page — careful verification."
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-3 border-t border-paper-300 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                  <span>Plate — Verify</span>
                  <span>Line by line</span>
                </figcaption>
              </figure>
            </aside>
          </div>
        </div>
      </section>

      {/* Four advocacy actions */}
      <section
        id="take-action"
        aria-labelledby="actions-heading"
        className="container-page section-tight"
      >
        <header className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-500">
            Take action
          </p>
          <h2
            id="actions-heading"
            className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-[2.5rem]"
          >
            Four things you can do — today.
          </h2>
          <span aria-hidden className="mt-6 block h-px w-16 bg-crimson-500" />
          <p className="mt-6 text-[15px] leading-[1.7] text-ink/75 md:text-base">
            Each link goes directly to the campaign action it describes. None
            of them is run by this site — they are run by Change.org, Action
            Network, Scholars at Risk, and Linktree. We just point to them.
          </p>
        </header>

        <ol className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
          {actionItems.map((item) => (
            <li key={item.num}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col border border-paper-300 bg-paper p-7 transition duration-200 ease-out hover:border-ink/40 hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-serif text-2xl font-semibold tracking-[-0.02em] text-clay-600 md:text-3xl">
                    {item.num}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                    External
                  </p>
                </div>

                <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-clay-600">
                  {item.label}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold leading-snug tracking-[-0.015em] text-ink md:text-[1.375rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink/75">
                  {item.body}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 pt-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-ink/50">
                    Source · {item.source}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink transition-all duration-200 group-hover:gap-2.5 group-hover:text-clay-600">
                    Open
                    <svg
                      aria-hidden
                      className="h-3.5 w-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14 3h7v7" />
                      <path d="M10 14 21 3" />
                      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                    </svg>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <p className="mt-10 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55">
          <span aria-hidden className="h-px w-8 bg-ink/30" />
          Each link opens in a new tab. We do not collect signatures or contact
          details on this site.
        </p>
      </section>

      {/* Where this campaign draws from */}
      <section
        id="sources"
        aria-labelledby="sources-heading"
        className="border-t border-moss-100 bg-moss-50/60"
      >
        <div className="container-page section-tight">
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <header className="md:col-span-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-moss-600">
                Where we draw from
              </p>
              <h2
                id="sources-heading"
                className="mt-4 font-serif text-3xl font-semibold leading-[1.1] tracking-[-0.018em] text-ink md:text-[2.5rem]"
              >
                The organizations behind the facts.
              </h2>
              <span aria-hidden className="mt-6 block h-px w-16 bg-moss-600" />
              <p className="mt-6 text-[15px] leading-[1.7] text-ink/75 md:text-base">
                This is a student-led advocacy site, not a news outlet. Where
                this campaign makes a factual claim, it draws on the work of
                international human-rights and academic-freedom organizations.
                If something here is wrong or out of date, we&rsquo;d like to
                know — write to{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ink underline decoration-moss-600 decoration-2 underline-offset-4 hover:text-moss-700"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </header>

            <div className="md:col-span-7">
              <ul className="divide-y divide-moss-100 border border-moss-100 bg-paper">
                {sourceItems.map((source) => (
                  <li key={source.name}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block px-6 py-6 transition duration-200 ease-out hover:bg-moss-50/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-moss-600/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper md:px-8"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="min-w-0">
                          <p className="font-serif text-xl font-semibold tracking-[-0.015em] text-ink md:text-[1.375rem]">
                            {source.name}
                          </p>
                          <p className="mt-2 text-[14px] leading-[1.65] text-ink/75">
                            {source.body}
                          </p>
                        </div>
                        <svg
                          aria-hidden
                          className="mt-1.5 h-4 w-4 shrink-0 text-ink/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-moss-600"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14 3h7v7" />
                          <path d="M10 14 21 3" />
                          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                        </svg>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA — keep continuing */}
      <section className="container-page section-tight">
        <div className="grid items-center gap-8 border border-ink bg-ink p-8 text-paper md:grid-cols-12 md:gap-12 md:p-12">
          <div className="md:col-span-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson-100">
              Don&rsquo;t stop here
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-4xl">
              Pick one. Then pick the next one.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-paper/75 md:text-base">
              The four actions above are the entire campaign. They only work
              when real people return to them — once today, once next week, and
              once more after that.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:col-span-4 md:justify-end">
            <Link
              href="/take-action"
              className="inline-flex items-center justify-center gap-2 border border-paper bg-paper px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-ink transition duration-200 ease-out hover:bg-paper-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Go to Take Action
            </Link>
            <Link href="/about" className="btn-on-dark">
              Read the case
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
