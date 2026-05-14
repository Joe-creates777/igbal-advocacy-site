import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  children?: ReactNode;
};

export default function PagePlaceholder({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: Props) {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="max-w-3xl">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-4 font-serif text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.022em] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-ink/75 md:text-xl">
            {description}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-3">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>

      {children && <div className="mt-16">{children}</div>}
    </section>
  );
}
