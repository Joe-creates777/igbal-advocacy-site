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
  const [scrolled, setScrolled] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-40 transition-[background-color,border-color,backdrop-filter] duration-300 ease-editorial ${
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-full p-1 -ml-1 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          aria-label="Free Igbal Abilov — home"
        >
          <span
            aria-hidden
            className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full bg-ember text-[10px] font-bold uppercase tracking-wider text-white shadow-[0_0_0_2px_rgba(215,64,43,0.15)] transition duration-300 group-hover:shadow-[0_0_0_5px_rgba(215,64,43,0.18)]"
          >
            <span className="relative">FI</span>
          </span>
          <span className="text-sm font-semibold tracking-tightish text-ink">
            Free Igbal Abilov
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative inline-flex items-center py-1 font-medium transition-colors duration-200 ${
                      active ? "text-ink" : "text-ink/70 hover:text-ink"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-ember transition-all duration-300 ease-editorial ${
                        active ? "w-5" : "w-0 group-hover:w-3"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/take-action"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ember px-5 py-2.5 text-[13px] font-semibold text-white shadow-sm transition duration-200 ease-out hover:-translate-y-px hover:bg-ember-600 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            Sign the Petition
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition hover:border-ink/35 hover:bg-ink/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
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

      <div
        id="mobile-nav"
        className={`md:hidden grid overflow-hidden border-ink/10 bg-paper transition-[grid-template-rows,border-color] duration-300 ease-editorial ${
          open
            ? "grid-rows-[1fr] border-t"
            : "grid-rows-[0fr] border-transparent"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav aria-label="Mobile" className="container-page py-4">
            <ul className="flex flex-col divide-y divide-ink/10">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between py-4 text-base font-medium transition ${
                        active ? "text-ember" : "text-ink"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {link.label}
                      <svg
                        aria-hidden
                        className="h-4 w-4 text-ink/40"
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
              <Link href="/take-action" className="btn-primary w-full">
                Sign the Petition
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-ink/10 pt-5">
              <p className="eyebrow">Follow</p>
              <SocialLinks variant="light" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
