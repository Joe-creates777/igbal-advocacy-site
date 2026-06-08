import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BroaderConcerns from "@/components/about/BroaderConcerns";
import CaseHero from "@/components/about/CaseHero";
import CaseTimeline from "@/components/about/CaseTimeline";
import InlineCTAs from "@/components/about/InlineCTAs";
import SectionBlock from "@/components/about/SectionBlock";
import SourcesNote from "@/components/about/SourcesNote";

export const metadata: Metadata = {
  title: "About the Case",
  description:
    "Who Igbal Abilov is, what is currently known about his case, and why it matters for academic freedom and human rights.",
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About the Case" },
        ]}
      />

      <CaseHero />

      <SectionBlock
        index="01"
        eyebrow="Who he is"
        title="A researcher, before he was a case."
        intro="Before Igbal Abilov became the subject of a public campaign, he was — and is — a researcher. The kind of person whose work is the slow, ordinary work of trying to understand the world and write it down clearly."
        paragraphs={[
          "It’s easy, in advocacy, to lose sight of the person behind the principle. We’re trying not to. Verified biographical details are added here as the campaign confirms them publicly.",
        ]}
        bullets={[
          {
            title: "A researcher",
            body: "His work belongs to a long tradition of patient, public-minded inquiry — the kind academic freedom was built to protect.",
          },
          {
            title: "A writer",
            body: "Words on a page have been part of the work. That, by itself, should not be dangerous.",
          },
          {
            title: "A person",
            body: "Behind every case file is a human being with a life that continues even when the news cycle moves on.",
          },
        ]}
        illustration={{
          src: "/images/illustration-books-glasses.png",
          alt: "A flat illustration of a stack of books with reading glasses resting on top — the quiet work of a scholar.",
          caption: "Plate — The scholar",
          captionRight: "His daily work",
        }}
        accent="ember"
      />

      <SectionBlock
        index="02"
        eyebrow="What happened"
        title="What we can say — and what we can’t."
        intro="The full story of his situation is still being documented. This site does not invent details. We work from publicly available reports, and we update as facts are independently verified."
        paragraphs={[
          "What is clear is this: his case has entered a wider conversation about academic freedom and the safety of researchers. It is being followed by people inside and outside academia.",
          "What is not yet clear — and we are honest about this — is the precise sequence of events, the formal status of any proceedings, and the path forward. Where details are uncertain, you’ll see cautious language. That is on purpose.",
        ]}
        pullQuote={{
          text: "We would rather be honest about what we don’t know than fill the gaps with guesses.",
          attribution: "Editorial principle",
        }}
        illustration={{
          src: "/images/illustration-empty-chair.png",
          alt: "A flat illustration of an empty wooden chair tucked under a desk with an open notebook and pen — the researcher's seat, unoccupied.",
          caption: "Plate — The absence",
          captionRight: "What is missing",
        }}
        accent="crimson"
      />

      <SectionBlock
        index="03"
        eyebrow="Why it matters"
        title="One case. Three things at stake."
        intro="His case is specific to one person. But it is also a public test of whether academic freedom — the principle that knowledge belongs to all of us — survives outside university brochures and into the lives of the people who do the work."
        bullets={[
          {
            title: "For researchers",
            body: "Every case like this becomes a quiet calculation in another researcher’s mind: is this question worth the risk? The answers shape what gets studied at all.",
          },
          {
            title: "For readers and students",
            body: "When researchers are silenced, readers lose books, students lose teachers, and societies lose ways of seeing themselves.",
          },
          {
            title: "For the principle",
            body: "Academic freedom only exists in practice. Each case where we speak up — or stay silent — is part of how it is, or isn’t, defended.",
          },
        ]}
        paragraphs={[
          "Public attention is one of the few tools that consistently changes outcomes in cases like this. That’s why this campaign exists, and why it’s asking for yours.",
        ]}
        illustration={{
          src: "/images/illustration-solidarity.png",
          alt: "A flat illustration of three figures standing shoulder to shoulder — researchers, readers, and ordinary people in solidarity.",
          caption: "Plate — Solidarity",
          captionRight: "Why it matters",
        }}
        accent="moss"
      />

      <BroaderConcerns />

      <CaseTimeline />

      <SourcesNote />

      <InlineCTAs />
    </>
  );
}
