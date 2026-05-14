import { SOCIAL_LINKS } from "@/lib/links";

type Variant = "light" | "dark";

type Props = {
  variant?: Variant;
  showLabels?: boolean;
  className?: string;
};

type Platform = {
  key: keyof typeof SOCIAL_LINKS;
  label: string;
  ariaLabel: string;
  href: string;
  Icon: (props: { className?: string }) => React.ReactElement;
};

const platforms: Platform[] = [
  {
    key: "instagram",
    label: "Instagram",
    ariaLabel: "Follow us on Instagram",
    href: SOCIAL_LINKS.instagram,
    Icon: InstagramIcon,
  },
  {
    key: "tiktok",
    label: "TikTok",
    ariaLabel: "Follow us on TikTok",
    href: SOCIAL_LINKS.tiktok,
    Icon: TikTokIcon,
  },
  {
    key: "x",
    label: "X",
    ariaLabel: "Follow us on X",
    href: SOCIAL_LINKS.x,
    Icon: XIcon,
  },
];

const iconButtonBase =
  "group inline-flex h-10 w-10 items-center justify-center rounded-full border transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const pillBase =
  "group inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantClasses: Record<Variant, string> = {
  light:
    "border-ink/15 text-ink/70 hover:border-ember/40 hover:bg-white hover:text-ember focus-visible:ring-ink/30 focus-visible:ring-offset-paper",
  dark: "border-white/15 text-paper/80 hover:border-ember/60 hover:bg-white/5 hover:text-ember focus-visible:ring-paper/40 focus-visible:ring-offset-ink",
};

export default function SocialLinks({
  variant = "light",
  showLabels = false,
  className,
}: Props) {
  const cls = variantClasses[variant];
  const itemClass = showLabels ? `${pillBase} ${cls}` : `${iconButtonBase} ${cls}`;

  return (
    <ul
      className={`flex flex-wrap items-center gap-2 ${className ?? ""}`}
      aria-label="Campaign social channels"
    >
      {platforms.map(({ key, label, ariaLabel, href, Icon }) => (
        <li key={key}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={itemClass}
          >
            <Icon className="h-4 w-4 shrink-0" />
            {showLabels && <span>{label}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zm3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10zm-8-3a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm5-1.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.83 20.1a6.34 6.34 0 0 0 10.86-4.43V8.87a8.16 8.16 0 0 0 4.77 1.52V6.94a4.85 4.85 0 0 1-1.87-.25z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.812l-4.77-6.234L4.8 22H2.04l6.97-7.965L2 2h6.95l4.32 5.71L18.244 2zm-2.39 18.4h1.494L7.27 3.51H5.67l10.184 16.89z" />
    </svg>
  );
}
