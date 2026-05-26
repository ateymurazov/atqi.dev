export type Post = {
  slug: string;
  num: string;
  category: string;
  title: string;
  dek: string;
  body: string[];
  parentAnchor: string; // section on alextnow.com this expands on
  publishedISO: string;
  publishedLabel: string;
  readMinutes: number;
};

export const posts: Post[] = [
  {
    slug: "quality-is-a-systems-problem",
    num: "01",
    category: "Quality Systems",
    title: "Quality is a systems problem, not a testing problem.",
    dek: "Why throwing more QA at a broken pipeline never works, and what I do instead.",
    publishedISO: "2026-04-12",
    publishedLabel: "April 2026",
    readMinutes: 4,
    parentAnchor: "principles",
    body: [
      "Every org I've joined had the same instinct when bugs leaked to production. Add more testers. Add more test cases. Add another gate. None of it ever moved the needle for me, because quality is a property of the system that produces the software. It is not a layer you bolt on at the end.",
      "When the architecture is tangled, when ownership is unclear, when CI takes 40 minutes and people start skipping it, no amount of manual QA will save you. The defects are already upstream of the test suite by the time anyone runs it.",
      "My fix is usually unglamorous. Shorten the feedback loops. Isolate the blast radius. Make the cost of breaking something visible to the person who broke it. That is where I have consistently seen escaped defect rates drop by an order of magnitude.",
      "I wrote up the full framework, including the metrics I track and the rituals I install, on my main site.",
    ],
  },
  {
    slug: "ai-writes-the-tests-humans-wont",
    num: "02",
    category: "AI & Delivery",
    title: "Letting AI write the tests humans never would.",
    dek: "How I embed AI generated regression coverage into a CI pipeline without the noise.",
    publishedISO: "2026-04-26",
    publishedLabel: "April 2026",
    readMinutes: 5,
    parentAnchor: "framework",
    body: [
      "Here is the boring truth about regression suites. Nobody wants to write them. They are tedious, they age badly, and the payoff on any individual test is close to zero. So they do not get written, and six months later you have a flaky suite that everyone ignores.",
      "AI changes that math for me. Generating a thousand plausible edge case tests against a stable interface now takes minutes instead of weeks. The hard part is not generation. It is selection. Which generated tests actually encode a real invariant, and which ones are just noise that will break on the next refactor?",
      "The pattern that has worked for me is to generate broadly and then promote narrowly. AI proposes. I (or a second AI pass with stricter prompts) decide what graduates into the protected suite. Everything else lives in a quarantine tier that runs nightly and produces signal instead of blocking builds.",
      "The full case study, including the prompts and the CI wiring, lives on my main site.",
    ],
  },
  {
    slug: "unifying-engineering-after-a-merger",
    num: "03",
    category: "Org Design",
    title: "Unifying engineering after a merger.",
    dek: "Five teams, one delivery cadence. What I did when integrating engineering after an acquisition.",
    publishedISO: "2026-05-10",
    publishedLabel: "May 2026",
    readMinutes: 6,
    parentAnchor: "experience",
    body: [
      "Post merger integration is the only time you get to redesign an engineering org from scratch with everyone's blessing. It is also the only time you can quietly make it worse forever. The window is short.",
      "My first instinct used to be to standardize tooling. Same CI, same language, same cloud. I have learned that it is the wrong first move. People resist tools they did not choose, and you burn political capital you will need later.",
      "What worked for me was to standardize the delivery cadence first. One shared planning ritual. One shared definition of shipped. One shared on call rotation. Tools follow naturally once the rhythm is shared, because the friction becomes obvious to the engineers themselves.",
      "The full arc, including what we kept, what we killed, and the org chart we landed on, is on my main site.",
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export const ALEXTNOW_URL = "https://alextnow.com";
export function parentLink(anchor: string): string {
  return `${ALEXTNOW_URL}/#${anchor}`;
}