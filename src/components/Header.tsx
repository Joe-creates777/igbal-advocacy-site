"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/about", label: "About the Case" },
  { href: "/blog", label: "Blog" },
  { href: "/take-action", label: "Take Action" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-700 bg-ink text-paper">
      <div className="container-page flex h-16 items-center justify-between md:h-[68px]">
        {/* Wordmark */}
        <Link
          href="/"
          className="group inline-flex items-baseline gap-2 rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
          aria-label="Free Igbal Abilov — home"
        >
          <span className="font-serif text-[18px] font-semibold uppercase tracking-[0.22em] text-paper md:text-[19px]">
            Free
          </span>
          <span className="font-serif text-[18px] font-semibold uppercase tracking-[0.22em] text-ember md:text-[19px]">
            Igbal
          </span>
        </Link>

        {/* Primary nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-8 text-[12px] font-semibold uppercase tracking-[0.22em]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-flex items-center py-2 transition-colors duration-200 ${
                      active
                        ? "text-paper"
                        : "text-paper/65 hover:text-paper"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-px left-0 h-px bg-paper transition-all duration-300 ease-editorial ${
                        active ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: socials + petition link */}
        <div className="hidden items-center gap-6 md:flex">
          <SocialLinks variant="dark" />
          <Link
            href="/take-action"
            className="inline-flex items-center gap-2 border-l border-paper/20 pl-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/85 transition-colors duration-200 hover:text-paper"
          >
            Sign the petition
            <svg
              aria-hidden
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-paper/30 text-paper transition hover:border-paper/70 hover:bg-paper/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-paper/40"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden grid overflow-hidden border-paper/15 bg-ink transition-[grid-template-rows,border-color] duration-300 ease-editorial ${
          open
            ? "grid-rows-[1fr] border-t"
            : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="flex flex-col divide-y divide-paper/15">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 text-[13px] font-semibold uppercase tracking-[0.22em] transition ${
                        active ? "text-ember" : "text-paper"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      <svg
                        aria-hidden
                        className="h-4 w-4 text-paper/50"
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
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4">
              <Link href="/take-action" className="btn-on-dark w-full">
                Sign the petition
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-paper/15 pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-paper/55">
                Follow
              </p>
              <SocialLinks variant="dark" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
