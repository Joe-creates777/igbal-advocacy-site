import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/about", label: "About the Case" },
  { href: "/blog", label: "Blog" },
  { href: "/take-action", label: "Take Action" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-ink/10 bg-ink text-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-64 w-64 rounded-full bg-ember/10 blur-3xl"
      />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="space-y-5 md:col-span-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/30 rounded-full"
          >
            <span
              aria-hidden
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ember text-[10px] font-bold uppercase tracking-wider text-white"
            >
              FI
            </span>
            <span className="text-sm font-semibold tracking-tightish">
              Free Igbal Abilov
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-[1.65] text-paper/65">
            An independent advocacy campaign for academic freedom and human
            rights. Built — and maintained — by students who believe public
            attention matters.
          </p>

          <div className="pt-2">
            <p className="eyebrow text-ember">Follow the campaign</p>
            <SocialLinks variant="dark" className="mt-3" />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-ember">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-paper/80 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-ember">Take action</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link
                href="/take-action"
                className="text-paper/80 transition-colors duration-200 hover:text-white"
              >
                Sign the petition
              </Link>
            </li>
            <li>
              <Link
                href="/take-action#share"
                className="text-paper/80 transition-colors duration-200 hover:text-white"
              >
                Share the campaign
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-paper/80 transition-colors duration-200 hover:text-white"
              >
                Stay informed
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-paper/55 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Free Igbal Abilov campaign. All rights reserved.</p>
          <p>Built for academic freedom and human rights.</p>
        </div>
      </div>
    </footer>
  );
}
