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
    dek: "Why throwing more QA at a broken pipeline never works — and what to fix instead.",
    publishedISO: "2026-04-12",
    publishedLabel: "April 2026",
    readMinutes: 4,
    parentAnchor: "principles",
    body: [
      "Every org I've joined had the same instinct when bugs leaked to production: add more testers, add more test cases, add another gate. None of it moved the needle. The reason is simple — quality is a property of the system that produces the software, not a layer you bolt on at the end.",
      "When the architecture is tangled, when ownership is unclear, when CI takes 40 minutes and people start skipping it, no amount of manual QA will save you. The defects are upstream of the test suite.",
      "The fix is unglamorous: shorten feedback loops, isolate blast radius, and make the cost of breaking something visible to the person who broke it. That's where I've consistently seen escaped-defect rates drop by an order of magnitude.",
      "I wrote up the full framework — the metrics I track, the rituals I install, and the org shape it implies — on my main site.",
    ],
  },
  {
    slug: "ai-writes-the-tests-humans-wont",
    num: "02",
    category: "AI & Delivery",
    title: "Letting AI write the tests humans never would.",
    dek: "A playbook for embedding AI-generated regression coverage into an existing CI pipeline.",
    publishedISO: "2026-04-26",
    publishedLabel: "April 2026",
    readMinutes: 5,
    parentAnchor: "framework",
    body: [
      "The boring truth about regression suites is that nobody wants to write them. They're tedious, they age badly, and the ROI on any individual test is approximately zero. So they don't get written, and six months later you have a 'flaky' suite that everyone ignores.",
      "AI changes the economics. Generating a thousand plausible edge-case tests against a stable interface now costs minutes, not weeks. The hard part isn't generation — it's selection. Which generated tests actually encode real invariants? Which are just noise that will break on the next refactor?",
      "The pattern that's worked for me: generate broadly, then promote narrowly. AI proposes; humans (or a second AI pass with stricter prompts) decide what graduates into the protected suite. Everything else lives in a quarantine tier that runs nightly and produces signal, not blocking failures.",
      "Full case study, including the prompts and the CI wiring, lives on my main site.",
    ],
  },
  {
    slug: "unifying-engineering-after-a-merger",
    num: "03",
    category: "Org Design",
    title: "Unifying engineering after a merger.",
    dek: "Five orgs, one delivery cadence — what actually worked when integrating engineering after an acquisition.",
    publishedISO: "2026-05-10",
    publishedLabel: "May 2026",
    readMinutes: 6,
    parentAnchor: "experience",
    body: [
      "Post-merger integration is the only time you get to redesign an engineering org from scratch with everyone's blessing. It is also the only time you can quietly make it worse forever. The window is short.",
      "The instinct is to standardize tooling first — same CI, same language, same cloud. That's the wrong first move. People will resist tools they didn't choose, and you'll burn political capital you need later.",
      "What worked: standardize the delivery cadence first. One shared planning ritual, one shared definition of 'shipped', one shared on-call rotation. Tools follow naturally once the rhythm is shared, because the friction becomes obvious to the engineers themselves.",
      "The full arc — what we kept, what we killed, and the org chart we landed on — is on my main site.",
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