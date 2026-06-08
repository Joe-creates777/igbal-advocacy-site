export type CoverHue = "ember" | "ink" | "paper";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; attribution?: string };

export type PostImage = {
  /** Public path to the illustration (e.g. "/images/illustration-foo.png"). */
  src: string;
  /** Accessible description of the illustration. */
  alt: string;
  /** Short caption shown on the article banner plate. */
  caption?: string;
};

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  coverHue?: CoverHue;
  /**
   * Optional per-post illustration override. When set, this image replaces the
   * default category illustration on the post card and on the article banner.
   * When omitted, the category default is used.
   */
  image?: PostImage;
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
  {
    slug: "who-is-igbal-abilov",
    title: "Who is Igbal Abilov?",
    category: "Explainer",
    excerpt:
      "Behind the case is a person — a researcher whose work belongs to a long, quiet tradition of trying to understand how communities see themselves. Here is what is publicly known, with care taken where details are still being confirmed.",
    publishedAt: "2026-05-08",
    readTime: "5 min read",
    coverHue: "paper",
    image: {
      src: "/images/illustration-researcher-desk.png",
      alt: "A flat illustration of a researcher's desk: an open notebook, a fountain pen, round scholar's reading glasses, and a small empty picture frame behind them — the absent researcher.",
      caption: "Plate — The researcher",
    },
    content: [
      {
        type: "paragraph",
        text: "Behind every advocacy case is a person — and when a case slips out of the news, the person usually goes first. The headlines fade, the hashtags rotate, and the human being at the center of the story can disappear into a generalization.",
      },
      {
        type: "paragraph",
        text: "On a campaign website it is tempting to flatten a person into a slogan. We are trying not to do that. What follows is what is publicly known about Igbal Abilov, with care taken where details are still being confirmed.",
      },
      {
        type: "heading",
        level: 2,
        text: "Before he was a case",
      },
      {
        type: "paragraph",
        text: "Igbal Abilov is a researcher and writer. The details of his biography are ordinary in the best sense — a long, steady investment in scholarly work — but they are also the reason his case has drawn attention. He belongs to a generation of researchers who chose to spend their working lives close to questions that other people prefer to leave alone.",
      },
      {
        type: "heading",
        level: 2,
        text: "His work",
      },
      {
        type: "paragraph",
        text: "Igbal’s research belongs to a long tradition of ethnographic inquiry — careful, slow work that asks how communities understand themselves, how memory and language travel between generations, and how histories that don’t fit official narratives manage to survive. It is the kind of scholarship that rarely makes news. It is also exactly the kind of work that academic freedom is meant to protect.",
      },
      {
        type: "paragraph",
        text: "Researchers in this field often work close to the boundaries that political contexts draw and redraw. The work itself doesn’t move; the room around it does. When the room contracts, the work — and the people doing it — bear the consequences.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why his case has drawn concern",
      },
      {
        type: "paragraph",
        text: "The specifics of Igbal’s case are being documented as they become publicly verifiable, and this campaign points readers to source organizations rather than make claims it cannot independently confirm. What the international response has converged on is narrower and clearer: that a researcher should not face serious consequences for the questions his work asks.",
      },
      {
        type: "paragraph",
        text: "International academic and human-rights organizations — including Scholars at Risk — have raised public concern about the case. Their statements, not ours, are the right starting point for anyone who wants to verify the situation directly.",
      },
      {
        type: "quote",
        text: "A campaign begins where uncertainty ends and concern begins.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Where you come in",
      },
      {
        type: "paragraph",
        text: "Knowing who Igbal is doesn’t, by itself, change his situation. What changes situations is sustained public attention — the kind built when readers do something with what they read, instead of letting it close like a tab.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Read the case on the About page. Sign the petition. Send the letter to Senator Schiff. Then tell one person — well, not a feed. That is how this campaign moves.",
      },
    ],
  },
  {
    slug: "academic-freedom-human-rights",
    title: "Why academic freedom is a human rights issue",
    category: "Essay",
    excerpt:
      "Academic freedom is sometimes treated as a workplace concern for tenured faculty. It belongs to a much older, larger framework — the right to ask, to publish, to think out loud — and the cost of losing it shows up far outside the university.",
    publishedAt: "2026-05-22",
    readTime: "6 min read",
    coverHue: "ink",
    image: {
      src: "/images/illustration-justice-scales.png",
      alt: "A flat illustration of a classical brass balance scale standing beside an open hardbound book with a fountain pen resting across the page — academic freedom inside the human-rights framework.",
      caption: "Plate — The framework",
    },
    content: [
      {
        type: "paragraph",
        text: "It is easy to file academic freedom under workplace concerns. Tenure committees, departmental politics, the small print of an employment contract. That filing system is wrong — and the cost of getting it wrong shows up in places that have nothing to do with universities.",
      },
      {
        type: "heading",
        level: 2,
        text: "A right, not a perk",
      },
      {
        type: "paragraph",
        text: "Academic freedom is the freedom to ask, publish, and teach without fear of punishment for the questions themselves. It is not a benefit a university hands to its faculty. It is closer to what international human-rights documents have long described as the freedom of expression and the right to take part in the cultural and scientific life of a community.",
      },
      {
        type: "paragraph",
        text: "The International Covenant on Civil and Political Rights treats the freedom to seek, receive, and impart information as one of the load-bearing freedoms of any open society. The Universal Declaration of Human Rights — Article 27 — names a right to share in scientific advancement and its benefits. Academic freedom is one of the ways those rights become real for the people whose job it is to extend what we collectively know.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why this matters for people outside academia",
      },
      {
        type: "paragraph",
        text: "Most of what any of us know about public health, economic history, climate, social policy, or the past century of our own country is built on top of scholarship that someone, somewhere, was free to pursue. When that freedom contracts, the public conversation contracts with it — slowly, and in ways that are hard to notice until they are difficult to reverse.",
      },
      {
        type: "paragraph",
        text: "Strip away the freedom to inquire, and what’s left is a public sphere that can only repeat back the answers it has already approved.",
      },
      {
        type: "quote",
        text: "Academic freedom is not a workplace perk. It is the practical form of a right we all rely on.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "What this means for Igbal’s case",
      },
      {
        type: "paragraph",
        text: "When a researcher faces serious consequences for work that fits the ordinary description of scholarship, the question is not only about one person. It is about whether academic freedom — and the rights it serves — survives as a real protection or becomes, slowly, decorative.",
      },
      {
        type: "paragraph",
        text: "Igbal Abilov’s case is one chance to insist that those rights still mean what they say they mean.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Treat academic freedom as a public issue, not an internal one. Read Igbal’s case. Sign the petition. Send the letter. Then keep the conversation going — outside university buildings, where it usually needs the most help.",
      },
    ],
  },
  {
    slug: "how-advocacy-campaigns-create-pressure",
    title: "How advocacy campaigns create pressure",
    category: "Action",
    excerpt:
      "Campaigns don’t run on outrage. They run on coordination — petitions, letters, public attention, students, institutions, and international networks doing small things, on repeat. Here’s how the parts fit together, and where you fit in.",
    publishedAt: "2026-06-03",
    readTime: "6 min read",
    coverHue: "ember",
    image: {
      src: "/images/illustration-clasped-hands.png",
      alt: "A flat illustration of two hands clasped together in a sideways solidarity grip, with short ink lines radiating outward — coordinated, collective pressure.",
      caption: "Plate — Coordination",
    },
    content: [
      {
        type: "paragraph",
        text: "Most successful human-rights campaigns don’t end with a viral moment. They end with a slow, steady accumulation of attention — petitions filed, letters written, conversations had — until something that began as a single signature is unignorable.",
      },
      {
        type: "paragraph",
        text: "If you have ever wondered whether signing a petition or sharing a post actually does anything, the honest answer is: not on its own. Each one is small. Together they are how outcomes change.",
      },
      {
        type: "heading",
        level: 2,
        text: "The mechanics — five working parts",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Petitions",
      },
      {
        type: "paragraph",
        text: "A petition is the public record of an audience. It tells decision-makers — and the press — that a community of named people is paying attention. The signature is not the point. The pattern of signatures is. That is why one signature, repeated by thousands of people, ends up mattering.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Letters to elected officials",
      },
      {
        type: "paragraph",
        text: "Letters move pressure from a public square into a private inbox. They do not require fame; they require persistence. Officials and their staff actually count them — and a small number of well-written letters can be enough to put a case on an agenda where it didn’t exist before.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Public attention",
      },
      {
        type: "paragraph",
        text: "News coverage and social posts work the way weather works: cumulatively. One article rarely changes anything. A drumbeat does. Public attention is what keeps a case from disappearing, which is the single most common way cases end badly.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Students and institutions",
      },
      {
        type: "paragraph",
        text: "Universities, student groups, professional associations, and civic organizations have institutional voice — letters from a dean, statements from a department, motions from a student government. These are slow to assemble and powerful when they land. They convert individual concern into institutional pressure.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. International NGOs",
      },
      {
        type: "paragraph",
        text: "Organizations like Scholars at Risk, PEN International, and Amnesty have something individuals don’t: formal channels into governments, universities, and international bodies. When NGOs take up a case, they bring with them years of relationships, legal expertise, and the ability to keep a story alive over the long span a case sometimes needs.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why pressure works",
      },
      {
        type: "paragraph",
        text: "Pressure works because the cost of ignoring a case eventually exceeds the cost of acting on it. That tipping point is built — one signature, one letter, one shared link at a time.",
      },
      {
        type: "quote",
        text: "Pressure is the long, quiet sum of small actions, no one of which would have been enough alone.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Where you fit in",
      },
      {
        type: "paragraph",
        text: "Each of the five parts above only works if real people do small, repeatable things. Sign. Write. Share. Bring it up. None of these is impressive on its own. All of them together is how this campaign moves.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Take the four actions on the Take Action page — they cover all five mechanics. Then do one of them again next week. Steady is the whole point.",
      },
    ],
  },
  {
    slug: "timeline-of-the-case",
    title: "Timeline of the case",
    category: "Timeline",
    excerpt:
      "A careful chronological view of the case as it has entered the public record. Where exact dates aren’t yet publicly verifiable, we use general timeframes — and update as facts are confirmed.",
    publishedAt: "2026-05-15",
    readTime: "5 min read",
    coverHue: "paper",
    content: [
      {
        type: "paragraph",
        text: "Most stories begin in the middle. A petition lands in your feed; a name surfaces in a news clip; a campaign asks for your signature. By the time a case reaches the people who can act on it, the early chapters are usually missing.",
      },
      {
        type: "paragraph",
        text: "What follows is a careful chronology of what this campaign has been able to document so far. It is intentionally conservative — specific dates appear only where they are publicly verifiable, and elsewhere we use general timeframes that update as the picture sharpens.",
      },
      {
        type: "heading",
        level: 2,
        text: "How to read this timeline",
      },
      {
        type: "paragraph",
        text: "Each entry below corresponds to a phase of the case as it has entered the public record. Some are anchored to specific moments; others are anchored to seasons or to ongoing situations. None of them is speculation.",
      },
      {
        type: "heading",
        level: 2,
        text: "Background — a researcher’s career",
      },
      {
        type: "paragraph",
        text: "Before he became the subject of a public campaign, Igbal Abilov was a working researcher — building a body of writing on culture, identity, and the long, ordinary questions ethnography asks. That work is the context for everything that follows, and the reason any of this matters.",
      },
      {
        type: "heading",
        level: 2,
        text: "Recent reports — the case enters the public record",
      },
      {
        type: "paragraph",
        text: "Public reports about his situation begin to circulate through international academic and human-rights channels. The campaign tracks each development as it is independently confirmed, and follows the language used by source organizations rather than adding its own.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ongoing — charges and proceedings",
      },
      {
        type: "paragraph",
        text: "Formal proceedings are documented as they unfold. Specifics — dates of hearings, the formal status of the case, the precise framing of charges — are added here only as they appear in public sources we can point to. Where the picture is partial, we say so plainly.",
      },
      {
        type: "heading",
        level: 2,
        text: "Recent months — international concern grows",
      },
      {
        type: "paragraph",
        text: "Academics, journalists, and human-rights organizations begin to raise public concern. Scholars at Risk opens an action page on the case. A constituent letter to Senator Schiff begins circulating. Petitions gather signatures. The conversation widens.",
      },
      {
        type: "heading",
        level: 2,
        text: "Now — a public campaign",
      },
      {
        type: "paragraph",
        text: "Today, the campaign is what you are reading: a petition, a letter to a U.S. senator, a Scholars at Risk action, and a hub of resources you can share. The story is being written in real time, by the people who decide to keep it visible.",
      },
      {
        type: "quote",
        text: "A chronology that updates honestly is more useful than one that pretends to be complete.",
        attribution: "Editorial principle",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Read the case on the About page, then take one of the four actions on the Take Action page. The timeline above is a snapshot — what shapes the next entry is whether people stay attentive between the snapshots.",
      },
    ],
  },
  {
    slug: "what-students-can-actually-do",
    title: "What students can actually do",
    category: "Action",
    excerpt:
      "Sharing. Signing. Writing. Showing up. Four practical things a student can actually do — without a budget, a title, or a follower count.",
    publishedAt: "2026-05-28",
    readTime: "5 min read",
    coverHue: "ink",
    image: {
      src: "/images/illustration-student-bag.png",
      alt: "A flat illustration of an open canvas student satchel with a spiral notebook, a sharpened pencil, a folded campaign flyer, and a small campaign pin clipped to the strap.",
      caption: "Plate — Field kit",
    },
    content: [
      {
        type: "paragraph",
        text: "If you have ever sat with a story you cared about and didn’t know what to do with it, you are not alone. Most students who learn about a case like Igbal’s pause for the same reason: nothing they have on hand feels like enough.",
      },
      {
        type: "paragraph",
        text: "The honest answer is that almost nothing any one student does will be enough on its own. But almost everything any one student does is part of the only thing that has ever been enough — sustained, distributed attention. Here is what that looks like in practice.",
      },
      {
        type: "heading",
        level: 2,
        text: "1. Share what you read",
      },
      {
        type: "paragraph",
        text: "The most underrated student action is also the simplest: forward an article, a petition, or a campaign post to someone who hasn’t seen it. Not a feed — one person. A single, deliberate share to a friend who reads carefully is worth more than a hundred passive impressions.",
      },
      {
        type: "heading",
        level: 2,
        text: "2. Sign — and ask others to",
      },
      {
        type: "paragraph",
        text: "Petitions matter because they are public records of attention. Sign the Change.org petition. Pass it to a few people you know will sign it too. The point isn’t your name alone; it’s your name in a pattern that decision-makers and journalists notice.",
      },
      {
        type: "heading",
        level: 2,
        text: "3. Contact a representative",
      },
      {
        type: "paragraph",
        text: "Adding your name to a letter — like the Action Network letter to Senator Schiff — takes minutes and lands somewhere petitions don’t: a congressional inbox. If you are a U.S. constituent, your letter is counted as a constituent’s. That weight is real.",
      },
      {
        type: "paragraph",
        text: "If you are not in the U.S., the same logic applies in your own country: most elected officials respond to letters from their own districts before they respond to anyone else.",
      },
      {
        type: "heading",
        level: 2,
        text: "4. Bring it into your own world",
      },
      {
        type: "paragraph",
        text: "Mention the case in a paper, a presentation, a club meeting, a student newsletter, a class discussion on academic freedom. The conversation about cases like Igbal’s doesn’t only belong in advocacy circles — it belongs anywhere people are thinking about what universities are for.",
      },
      {
        type: "quote",
        text: "Students don’t need permission to make a case visible. They need persistence.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "What this is not",
      },
      {
        type: "paragraph",
        text: "None of this requires a megaphone, a budget, or insider access. None of it requires you to feel certain. None of it requires you to know everything about the case. It just requires you to do one of these things this week — and then do one of them again the week after.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Pick one of the four. Do it now. Next week, pick another. Steady is what makes this work — and steady is exactly what students can do.",
      },
    ],
  },
  {
    slug: "why-public-attention-matters",
    title: "Why public attention matters",
    category: "Explainer",
    excerpt:
      "Attention isn’t a feeling — it’s a force. Here is how awareness, media coverage, petitions, and public discussion actually shift the conditions a case is decided under.",
    publishedAt: "2026-06-06",
    readTime: "5 min read",
    coverHue: "ember",
    image: {
      src: "/images/illustration-lantern-light.png",
      alt: "A flat illustration of a brass oil lantern resting on a small stack of books, with concentric semi-circular ink arcs radiating outward — the quiet spread of attention.",
      caption: "Plate — The lantern",
    },
    content: [
      {
        type: "paragraph",
        text: "It is tempting to think public attention is a kind of pressure release: people get angry online, then forget, and the world keeps moving. Sometimes that’s true. Often it isn’t.",
      },
      {
        type: "paragraph",
        text: "When attention persists — even quietly, even unevenly — it changes the conditions a case is decided under. That isn’t sentiment. It is a mechanism, and once you have seen it, you stop underestimating it.",
      },
      {
        type: "heading",
        level: 2,
        text: "What attention actually does",
      },
      {
        type: "paragraph",
        text: "Attention doesn’t directly free anyone, change a verdict, or reverse a charge. What it does is alter the cost of inaction for everyone in a position to act — officials, institutions, diplomats, journalists, and the public itself. The more visible a case becomes, the more expensive it is to do nothing.",
      },
      {
        type: "heading",
        level: 2,
        text: "Three channels it moves through",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Media coverage",
      },
      {
        type: "paragraph",
        text: "A single article rarely changes outcomes. A pattern of coverage — across outlets, over weeks — does. Journalists watch each other; cases that surface in one outlet are easier for the next to justify covering. That is how a story moves from one editor’s queue to many.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Public discussion",
      },
      {
        type: "paragraph",
        text: "Conversations in classrooms, on social media, in newsletters, and around dinner tables generate the underlying demand that media respond to. Editors don’t only chase scoops; they chase relevance. Public discussion is what makes a case relevant.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Petitions and letters",
      },
      {
        type: "paragraph",
        text: "Petitions and constituent letters turn diffuse attention into countable evidence. A senator’s office can ignore vague concern; it has a harder time ignoring a quantified one. Numbers convert attention into the only language some institutions read.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why slow attention beats loud attention",
      },
      {
        type: "paragraph",
        text: "A viral moment lasts hours. A campaign lasts months. The cases that change outcomes are almost never decided on the day a story breaks; they are decided on the long tail, when most people have moved on. That is why a small group of people who keep showing up matters more than a large group that doesn’t.",
      },
      {
        type: "quote",
        text: "Public attention is not noise. It is the slow, organized refusal to let a case disappear.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Where you come in",
      },
      {
        type: "paragraph",
        text: "Every reader, signer, and sharer is one node in the channel attention moves through. None of those nodes is decisive on its own. All of them together are how the channel exists at all.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Sign the petition, send the letter, share the campaign with one person. Then come back next week — that’s the actual point. Attention isn’t a moment; it’s a habit.",
      },
    ],
  },
  {
    slug: "academic-freedom-beyond-one-case",
    title: "Academic freedom beyond one case",
    category: "Essay",
    excerpt:
      "One case is one case. The reason any of them matter is the same reason all of them matter — and it sits in a much wider conversation about what knowledge is for.",
    publishedAt: "2026-06-08",
    readTime: "6 min read",
    coverHue: "paper",
    image: {
      src: "/images/illustration-horizon-books.png",
      alt: "A flat illustration of four or five open hardbound books arranged side by side along a horizon line, their covers in mixed warm tones — a wider field of inquiry beyond a single book.",
      caption: "Plate — Horizon",
    },
    content: [
      {
        type: "paragraph",
        text: "Every advocacy campaign carries a quiet contradiction. It asks you to pay attention to one person, in one situation, with all the specificity that person deserves. And it asks you, at the same time, to see that one situation as a stand-in for something much larger than itself.",
      },
      {
        type: "paragraph",
        text: "Both halves are true. Igbal Abilov’s case is his — particular, dignified, irreducible. It is also part of a wider story about what societies do with the people who study them.",
      },
      {
        type: "heading",
        level: 2,
        text: "Why one case carries so much weight",
      },
      {
        type: "paragraph",
        text: "Academic-freedom cases never travel alone. When one becomes visible, others come into view with it: the researcher facing similar pressure in a neighboring country, the historian whose work no editor will publish, the graduate student quietly deciding to pick a safer topic. The pattern is wide and old.",
      },
      {
        type: "paragraph",
        text: "What changes when a single case enters public attention is that the pattern becomes legible. Cases that had been background noise begin to look like a shared problem with a shared name.",
      },
      {
        type: "heading",
        level: 2,
        text: "A short list of what is actually at stake",
      },
      {
        type: "paragraph",
        text: "Academic freedom protects more than the people inside universities. It protects the books any of us can read, the questions any of us can ask in public, and the ways future generations will be allowed to see their own past. It is, in the most practical sense, a public good — and like most public goods, it is mostly visible when it begins to fail.",
      },
      {
        type: "heading",
        level: 2,
        text: "The human-rights frame",
      },
      {
        type: "paragraph",
        text: "International human-rights instruments don’t use the phrase “academic freedom” often, but they don’t need to. Freedom of expression, the right to participate in cultural and scientific life, freedom from arbitrary detention — these are the underlying rights that academic freedom is one expression of. A case that touches any of them touches all of them.",
      },
      {
        type: "quote",
        text: "Defending one researcher and defending the freedom to research are, in the end, the same defense.",
        attribution: "Campaign principle",
      },
      {
        type: "heading",
        level: 2,
        text: "Beyond this case",
      },
      {
        type: "paragraph",
        text: "It is honest to say that any one campaign, including this one, will probably have a smaller effect than the people running it want. It is also honest to say that the alternative — silence — is what makes the next case more likely. The point of paying attention to one researcher is not that one researcher is the whole story. The point is that paying attention is the only story academic freedom has ever had.",
      },
      {
        type: "heading",
        level: 2,
        text: "What you can do today",
      },
      {
        type: "paragraph",
        text: "Sign for Igbal. Then, when the next case comes — and one will — recognize it. The work of academic freedom is the long habit of recognizing it again.",
      },
    ],
  },
];
