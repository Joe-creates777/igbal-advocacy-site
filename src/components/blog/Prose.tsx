import type { ContentBlock } from "@/content/posts";

type Props = {
  blocks: ContentBlock[];
};

export default function Prose({ blocks }: Props) {
  return (
    <div className="font-sans text-ink">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={idx}
                className="mt-7 text-[1.0625rem] leading-[1.8] text-ink/80 first:mt-0 md:text-[1.1875rem] md:leading-[1.8]"
              >
                {block.text}
              </p>
            );

          case "heading": {
            if (block.level === 3) {
              return (
                <h3
                  key={idx}
                  className="mt-12 font-serif text-xl font-semibold leading-snug tracking-[-0.015em] text-ink md:mt-14 md:text-2xl"
                >
                  {block.text}
                </h3>
              );
            }
            return (
              <h2
                key={idx}
                className="mt-14 font-serif text-2xl font-semibold leading-snug tracking-[-0.018em] text-ink md:mt-20 md:text-[2rem]"
              >
                <span
                  aria-hidden
                  className="mr-3 inline-block h-[0.5em] w-[0.5em] -translate-y-[0.18em] rounded-full bg-ember/80"
                />
                {block.text}
              </h2>
            );
          }

          case "quote":
            return (
              <figure
                key={idx}
                className="relative my-12 md:my-16"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -left-1 -top-6 select-none font-serif text-[6rem] leading-none text-ember/20 md:-left-2 md:-top-8 md:text-[8rem]"
                >
                  &ldquo;
                </span>
                <div className="border-l-2 border-ember pl-6 md:pl-8">
                  <blockquote className="font-serif text-[1.625rem] font-medium leading-[1.3] tracking-[-0.015em] text-ink md:text-[2rem]">
                    {block.text}
                  </blockquote>
                  {block.attribution && (
                    <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/55">
                      — {block.attribution}
                    </figcaption>
                  )}
                </div>
              </figure>
            );
        }
      })}
    </div>
  );
}
