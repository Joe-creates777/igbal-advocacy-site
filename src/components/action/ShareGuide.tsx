import Image from "next/image";
import { CAMPAIGN_URL, HASHTAGS } from "@/lib/links";
import CopyButton from "./CopyButton";

type Channel = {
  id: string;
  platform: string;
  helper: string;
  description: string;
  icon: React.ReactNode;
  body: string;
  subject?: string;
};

const HASHTAG_LINE = HASHTAGS.join(" ");
const SHORT_HASHTAGS = HASHTAGS.slice(0, 2).join(" ");

const TWITTER_TEXT = `What happens when research becomes dangerous?

Igbal Abilov, a researcher, is reportedly imprisoned in connection with his work. Read his story and sign the petition.

${CAMPAIGN_URL}

${SHORT_HASHTAGS}`;

const LINKEDIN_TEXT = `What happens when research becomes dangerous?

Igbal Abilov is a researcher whose case has raised serious concerns about academic freedom. According to public reports, he is currently imprisoned in connection with his work.

This isn’t only about one person. It’s about academic freedom, freedom of expression, and the conditions under which knowledge is allowed to exist. If you have three minutes, read the case and sign the petition.

${CAMPAIGN_URL}

${HASHTAG_LINE}`;

const EMAIL_SUBJECT = "What happens when research becomes dangerous?";
const EMAIL_BODY = `Hi —

I wanted to flag a campaign I came across: Igbal Abilov is a researcher who, according to public reports, is currently imprisoned in connection with his work. His case has raised serious concerns about academic freedom.

The site has a short overview, a few essays, and a public petition.

Worth a few minutes if you have them:
${CAMPAIGN_URL}

Thanks,
[your name]`;

const channels: Channel[] = [
  {
    id: "twitter",
    platform: "Twitter / X",
    helper: "~280 characters",
    description: "A short, hashtag-friendly post for the timeline.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M18.244 2H21l-6.52 7.45L22 22h-6.812l-4.77-6.234L4.8 22H2.04l6.97-7.965L2 2h6.95l4.32 5.71L18.244 2zm-2.39 18.4h1.494L7.27 3.51H5.67l10.184 16.89z" />
      </svg>
    ),
    body: TWITTER_TEXT,
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    helper: "Longer post",
    description: "A more reflective version for a professional audience.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.92H5.66v8.42h2.68zM7 8.74a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.6v-4.7c0-2.52-1.34-3.7-3.13-3.7-1.46 0-2.1.8-2.46 1.36V9.92h-2.68c.04.76 0 8.42 0 8.42h2.68v-4.7c0-.24.02-.48.09-.65.18-.48.62-.97 1.34-.97.95 0 1.33.72 1.33 1.78v4.54h2.83z" />
      </svg>
    ),
    body: LINKEDIN_TEXT,
  },
  {
    id: "email",
    platform: "Email",
    helper: "One-to-one",
    description:
      "A short, personal note for someone you think will care — a friend, a professor, an editor.",
    icon: (
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
    subject: EMAIL_SUBJECT,
    body: EMAIL_BODY,
  },
];

export default function ShareGuide() {
  return (
    <section
      id="share"
      aria-labelledby="share-heading"
      className="border-y border-ink/10 surface-muted scroll-mt-24"
    >
      <div className="container-page section">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          <header className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em]">
              <span className="text-moss-600">Toolkit for Action 04</span>
              <span aria-hidden className="h-px w-10 bg-ink/20" />
              <span className="text-ink/55">Drafted for you</span>
            </div>
            <h2
              id="share-heading"
              className="mt-5 font-serif text-3xl font-semibold leading-[1.05] tracking-[-0.022em] text-ink md:text-5xl lg:text-[3.5rem]"
            >
              Copy. Paste. Send.
            </h2>
            <span aria-hidden className="mt-7 block h-px w-20 bg-moss-600" />
            <p className="mt-7 max-w-xl text-[15px] leading-[1.7] text-ink/75 md:text-base">
              If you&rsquo;d rather post in your own voice than share the
              Linktree, here are short, ready-made messages. Edit freely — or
              send them word-for-word. Replace{" "}
              <code className="rounded bg-ink/[0.06] px-1.5 py-0.5 font-sans text-[13px] text-ink/80">
                {CAMPAIGN_URL}
              </code>{" "}
              with the live campaign link before posting.
            </p>
          </header>

          <aside className="md:col-span-5">
            <figure className="relative border border-paper-300 bg-paper">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/illustration-sealed-letter.png"
                  alt="A flat illustration of a sealed letter ready to be sent — the campaign, in your words."
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-3 border-t border-paper-300 bg-paper-50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/65">
                <span>Plate — Send it</span>
                <span>One share at a time</span>
              </figcaption>
            </figure>
          </aside>
        </div>

        <ul className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-3">
          {channels.map((channel) => (
            <li
              key={channel.id}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 shadow-card transition duration-200 ease-editorial hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-card-hover md:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-paper">
                  {channel.icon}
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold tracking-[-0.015em] text-ink">
                    {channel.platform}
                  </p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                    {channel.helper}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[14px] leading-[1.65] text-ink/70">
                {channel.description}
              </p>

              {channel.subject && (
                <div className="mt-5 border border-paper-300 bg-paper-50 p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                    Subject
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {channel.subject}
                  </p>
                </div>
              )}

              <div className="mt-3 flex flex-1 flex-col border border-paper-300 bg-paper-50 p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/55">
                  Message
                </p>
                <p className="mt-1 flex-1 whitespace-pre-wrap text-[14px] leading-[1.65] text-ink/85">
                  {channel.body}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                {channel.subject ? (
                  <CopyButton
                    text={`Subject: ${channel.subject}\n\n${channel.body}`}
                    ariaLabel={`Copy ${channel.platform} message`}
                  />
                ) : (
                  <CopyButton
                    text={channel.body}
                    ariaLabel={`Copy ${channel.platform} message`}
                  />
                )}
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
                  Edit before sending
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
