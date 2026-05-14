export type CoverHue = "ember" | "ink" | "paper";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; attribution?: string };

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  coverHue?: CoverHue;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "when-research-becomes-dangerous",
    title: "When research becomes dangerous",
    category: "Essay",
    excerpt:
      "Imagine doing academic research — and being imprisoned for it. What Igbal Abilov’s case tells us about the moment when ordinary inquiry becomes risky.",
    publishedAt: "2026-03-15",
    readTime: "6 min read",
    coverHue: "ember",
    content: [
      {
        type: "paragraph",
        text: "Imagine doing academic research — and being imprisoned for it.",
      },
      {
        type: "paragraph",
        text: "For most of us, research belongs somewhere ordinary: a library carrel, a seminar room, a quiet conversation about a footnote. It produces papers, lessons, the occasional difficult book. It isn’t, in our imagination, dangerous.",
      },
      {
        type: "paragraph",
        text: "But in some political contexts, the simple act of asking questions — about a community, a history, a culture — becomes risky. Documenting a minority language. Writing about an uncomfortable past. Publishing what others would rather stayed unread. The work itself doesn’t change. What changes is how much room the world is willing to give it.",
      },
      {
        type: "paragraph",
        text: "Igbal Abilov’s case is part of that story. The specifics are still being documented, and this campaign tracks only what is publicly verified. But the broader picture is clear enough already: academic work is moving into more contested territory, and the people doing it deserve our attention.",
      },
      {
        type: "heading",
        level: 2,
        text: "What we mean by “dangerous”",
      },
      {
        type: "paragraph",
        text: "We don’t mean dangerous in the abstract. We mean it in the most practical sense: careers paused, archives lost, voices silenced, and — in the most serious cases — freedoms taken away. The chilling effect on what gets researched at all is harder to measure, but no less real.",
      },
      {
        type: "quote",
        text: "When researchers begin to choose what they will not investigate, the questions a society can ask itself begin to shrink.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Why this case, why now",
      },
      {
        type: "paragraph",
        text: "Igbal’s story is specific to one person. But it is also a public test of whether academic freedom — the principle that knowledge belongs to all of us — survives outside university brochures and into the lives of the people who do the work.",
      },
      {
        type: "paragraph",
        text: "Public attention matters. When researchers know they will not be alone, the work continues. When they know they will be, it doesn’t.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Read the full case on the About page. Sign the petition. Share this article with one person who hasn’t heard of Igbal. Change happens slowly until it doesn’t — and the difference is almost always public attention.",
      },
    ],
  },
  {
    slug: "why-academic-freedom-matters-beyond-the-classroom",
    title: "Why academic freedom matters beyond the classroom",
    category: "Explainer",
    excerpt:
      "Academic freedom isn’t a niche concern. It’s the quiet engine behind public health, history, journalism, and the truths we share in common.",
    publishedAt: "2026-04-02",
    readTime: "5 min read",
    coverHue: "ink",
    content: [
      {
        type: "heading",
        level: 2,
        text: "Not just a campus issue",
      },
      {
        type: "paragraph",
        text: "Academic freedom can sound like an inside-baseball term — something for tenure committees and faculty senates. It isn’t. It is one of the quiet, load-bearing structures of any society that wants to be honest with itself.",
      },
      {
        type: "heading",
        level: 2,
        text: "What it actually protects",
      },
      {
        type: "paragraph",
        text: "Academic freedom is what allows a historian to write a difficult book, a public-health researcher to publish an inconvenient finding, a sociologist to ask why something is the way it is. Strip it away, and what’s left is a society that can only repeat itself.",
      },
      {
        type: "paragraph",
        text: "The classroom is only the most visible end of that work. The rest happens in archives, libraries, fieldwork, and conversations that may not see daylight for years. All of it depends on the same fragile assumption: that asking will not cost you your future.",
      },
      {
        type: "quote",
        text: "A society that cannot tolerate its researchers is a society that cannot bear to know itself.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Why Igbal’s case matters here",
      },
      {
        type: "paragraph",
        text: "When one researcher is punished for their work, every researcher hears it. The question isn’t whether they will keep working — most will — but what they will quietly stop investigating. That is the loss we don’t see in the headlines.",
      },
      {
        type: "paragraph",
        text: "Igbal’s case is a chance to say, clearly and publicly, that the freedom to ask difficult questions still belongs to people. Not just institutions. People.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Talk about academic freedom outside academic settings. Read about Igbal’s case. Sign the petition. Treat this not as a niche issue, but as a public one — because that’s exactly what it is.",
      },
    ],
  },
  {
    slug: "what-students-can-do",
    title: "What students can do",
    category: "Action",
    excerpt:
      "You don’t need a platform to make a difference. Practical, concrete ways to bring this case into your campus, your feeds, and your conversations.",
    publishedAt: "2026-04-22",
    readTime: "4 min read",
    coverHue: "paper",
    content: [
      {
        type: "heading",
        level: 2,
        text: "You don’t need a platform",
      },
      {
        type: "paragraph",
        text: "It’s tempting to think advocacy is something other people do. Bigger people, with bigger followings, in bigger rooms. That’s not how most campaigns actually move. They move because ordinary people — students especially — decide a story matters and refuse to let it disappear.",
      },
      {
        type: "heading",
        level: 2,
        text: "Five concrete things",
      },
      {
        type: "paragraph",
        text: "1. Sign the petition. It takes a minute and adds your name to the public record.",
      },
      {
        type: "paragraph",
        text: "2. Share the campaign with one person — not everyone. One person, chosen well, is worth more than a feed.",
      },
      {
        type: "paragraph",
        text: "3. Bring it into a class. Mention it in a paper, a presentation, a discussion. Academic freedom is a topic that belongs everywhere, not only in advocacy circles.",
      },
      {
        type: "paragraph",
        text: "4. Write something short. A sentence on social media. A note in a newsletter. A blog post of your own. Public attention is built one fragment at a time.",
      },
      {
        type: "paragraph",
        text: "5. Stay informed. Follow the timeline as it updates. Pressure works because it is steady, not because it is loud.",
      },
      {
        type: "quote",
        text: "The smallest sustained voice is louder than the loudest one-time shout.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Why students, specifically",
      },
      {
        type: "paragraph",
        text: "Students are inside the institutions where academic freedom is supposed to live. That gives you something most outside advocates don’t have: standing. When you raise this case, you raise it from inside the world it touches.",
      },
      {
        type: "paragraph",
        text: "You also have something simpler: time. Time to write, to read, to talk, to organize. Pressure is a long game, and that’s a game students are well placed to play.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Sign. Share. Stay informed. Then come back next week and do it again. That’s how this works.",
      },
    ],
  },
];
