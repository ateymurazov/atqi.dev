export type Post = {
  slug: string;
  num: string;
  category: string;
  tags: string[];
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
    tags: ["Quality Engineering", "Systems Thinking", "CI/CD", "Defect Prevention"],
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
      "A concrete example of this systems lens applied to test infrastructure: [predicting flaky tests with a Random Forest classifier](predicting-flaky-tests-with-random-forest) turned a distrusted CI pipeline back into a reliable signal in weeks. Same principle, sharper tool.",
      "I wrote up the full framework, including the metrics I track and the rituals I install, on my main site.",
    ],
  },
  {
    slug: "ai-writes-the-tests-humans-wont",
    num: "02",
    category: "AI & Delivery",
    tags: ["AI Driven Testing", "Test Automation", "CI/CD", "Machine Learning"],
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
      "Selection alone is not enough though. The promoted tests also have to stay trustworthy over time, which is exactly the problem I tackle in [predicting flaky tests with Random Forest](predicting-flaky-tests-with-random-forest). The two pieces compose: AI writes broadly, ML quietly evicts the flakiest tests before they erode trust.",
      "The full case study, including the prompts and the CI wiring, lives on my main site.",
    ],
  },
  {
    slug: "unifying-engineering-after-a-merger",
    num: "03",
    category: "Org Design",
    tags: ["Org Design", "Post Merger Integration", "Engineering Leadership", "Delivery Cadence"],
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
  {
    slug: "predicting-flaky-tests-with-random-forest",
    num: "04",
    category: "AI & Delivery",
    tags: [
      "AI Driven Testing",
      "Flaky Tests",
      "Machine Learning",
      "Quality Engineering",
      "Test Automation",
      "DevOps",
      "CI/CD",
      "Random Forest",
    ],
    title: "Predicting flaky tests with Random Forest.",
    dek: "How I used a Random Forest classifier on test metadata to quarantine flaky tests before they ever ran, and earned developer trust back.",
    publishedISO: "2026-05-24",
    publishedLabel: "May 2026",
    readMinutes: 5,
    parentAnchor: "framework",
    body: [
      "Nothing kills velocity faster than a test suite nobody trusts. Our automation suite had reached that breaking point. Flaky tests were everywhere. False positives, inconsistent runs, wasted CI/CD cycles, and a build pipeline that was visibly slowing down. Developers stopped trusting automation results altogether, which is the worst failure mode a QA org can land in.",
      "The instinct in most orgs is to write more tests, or to add another gate. I went the other direction, which lines up with my broader take that [quality is a systems problem, not a testing problem](quality-is-a-systems-problem). I built an AI based system to predict and isolate flaky tests using a Random Forest classifier, trained on test metadata: execution time, file change frequency, historical pass and fail variance, and a handful of other signals that quietly encode whether a test is actually stable.",
      "The pipeline is straightforward. Engineer features from test history. Label flaky tests using historical pass and fail patterns. Train the Random Forest classifier on that labeled set. Then, on every PR, flag the tests the model predicts will be flaky and route them to a quarantine tier. CI runs the stable, high signal tests on the hot path. The quarantined ones still run, just off the critical path where they cannot block a merge.",
      "Within weeks the impact was clear. Automated tests on every PR ran in under 20 minutes. False positives dropped by roughly 80 percent. CI/CD got about 25 percent faster because we stopped paying for retries on tests that were never going to be deterministic. Most importantly, developer confidence in automation came back. Automation became a reliable validation system again, not a noise generator.",
      "This was not just a tech win, it was a trust win. It pairs naturally with [letting AI write the tests humans never would](ai-writes-the-tests-humans-wont): one side generates coverage broadly, the other quietly evicts the unstable tests before they erode confidence. The full write up, with the feature set and the CI wiring, lives on my main site.",
    ],
  },
  {
    slug: "unpopular-opinion-that-might-save-your-career",
    num: "05",
    category: "Leadership",
    tags: [
      "Engineering Leadership",
      "Quality Engineering",
      "AI Testing",
      "LLM Testing",
      "Career",
      "Promptfoo",
      "Red Teaming",
    ],
    title: "Unpopular opinion that might save your career.",
    dek: "If you are a Senior Manager, Director, or VP in Quality Engineering and you are not still hands-on and technical, you are already obsolete.",
    publishedISO: "2026-05-31",
    publishedLabel: "May 2026",
    readMinutes: 4,
    parentAnchor: "principles",
    body: [
      "Unpopular opinion that might save your career: if you are a Senior Manager, Director, or VP in Quality Engineering and you are not still hands-on and technical, you are already obsolete.",
      "The market is ruthless right now. Titles do not save you. Fancy decks do not save you. If you cannot roll up your sleeves and build alongside your teams, your next job search will be a brutal wake-up call. Throughout my career I have made it a priority to keep leveling up, not just to stay current with the latest tech but to be the kind of leader who can jump in, help the team cross the finish line, or troubleshoot the issues no one else can crack. That mindset has carried me through every stage of my career.",
      "But now the game has changed. Testing AI and LLMs is a completely different beast. Traditional testing approaches do not prepare you for the way these systems fail, the risks they expose, or the tools required to validate them. And the reality is almost nobody is teaching this yet.",
      "This is where the industry is heading. More and more applications will embed AI or leverage LLMs, and the organizations that can test them effectively will have a huge advantage. So I invested six weeks into a Testing AI and LLMs course, not theory, but true hands-on skills learned by practicing: using Promptfoo in day-to-day testing, running red teaming attacks and knowing when, how, and why to adapt them to project maturity, and turning AI buzzwords into applied engineering skills.",
      "This is the same instinct behind [letting AI write the tests humans never would](ai-writes-the-tests-humans-wont) and [predicting flaky tests with Random Forest](predicting-flaky-tests-with-random-forest): the leaders who stay close to the tools are the ones who get to shape what quality means in the AI era. It also ties back to the deeper belief that [quality is a systems problem, not a testing problem](quality-is-a-systems-problem) — and you cannot redesign a system you no longer understand.",
      "Many QA leaders drift too far from the tech. Then they wonder why the market passes them by. Do not be one of them.",
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