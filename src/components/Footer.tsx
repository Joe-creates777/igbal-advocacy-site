import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/about", label: "About the Case" },
  { href: "/blog", label: "Blog" },
  { href: "/take-action", label: "Take Action" },
  { href: "/resources", label: "Resources" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-ink-700 bg-ink text-paper">
      <div className="container-page relative z-10 grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="space-y-5 md:col-span-5">
          <Link
            href="/"
            className="inline-flex items-baseline gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/30"
          >
            <span className="font-serif text-[20px] font-semibold uppercase tracking-[0.22em] text-paper">
              Free
            </span>
            <span className="font-serif text-[20px] font-semibold uppercase tracking-[0.22em] text-ember">
              Igbal
            </span>
          </Link>
          <p className="max-w-sm text-[14px] leading-[1.7] text-paper/70">
            An independent advocacy campaign for academic freedom and human
            rights. Built — and maintained — by students who believe public
            attention matters.
          </p>

          <div className="pt-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/55">
              Follow the campaign
            </p>
            <SocialLinks variant="dark" className="mt-3" />
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/55">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-semibold uppercase tracking-[0.18em]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-paper/80 transition-colors duration-200 hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/55">
            Take action
          </p>
          <ul className="mt-4 space-y-2.5 text-[13px] font-semibold uppercase tracking-[0.18em]">
            <li>
              <Link
                href="/take-action"
                className="text-paper/80 transition-colors duration-200 hover:text-paper"
              >
                Sign the petition
              </Link>
            </li>
            <li>
              <Link
                href="/take-action#share"
                className="text-paper/80 transition-colors duration-200 hover:text-paper"
              >
                Share the campaign
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-paper/80 transition-colors duration-200 hover:text-paper"
              >
                Stay informed
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-paper/10">
        <div className="container-page flex flex-col gap-2 py-6 text-[11px] uppercase tracking-[0.22em] text-paper/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {year} Free Igbal campaign</p>
          <p>Built for academic freedom and human rights</p>
        </div>
      </div>
    </footer>
  );
}
