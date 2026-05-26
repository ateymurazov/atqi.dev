import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "atqi.dev — Notes on engineering quality & delivery" },
      { name: "description", content: "Field notes from Aleksandr Teymurazov on engineering quality, AI-driven delivery, and scaling software organizations." },
      { property: "og:title", content: "atqi.dev — Notes on engineering quality & delivery" },
      { property: "og:description", content: "Field notes from Aleksandr Teymurazov on engineering quality, AI-driven delivery, and scaling software organizations." },
      { property: "og:url", content: "https://atqi.dev/" },
    ],
    links: [{ rel: "canonical", href: "https://atqi.dev/" }],
  }),
});

const posts = [
  {
    num: "01",
    category: "Quality Systems",
    title: "Quality is a systems problem, not a testing problem.",
    excerpt:
      "Why throwing more QA at a broken pipeline never works — and the five upstream levers that actually move defect rates.",
    date: "May 2026",
    read: "8 min",
  },
  {
    num: "02",
    category: "AI & Delivery",
    title: "Letting AI write the tests humans never would.",
    excerpt:
      "A practical playbook for embedding AI-generated regression coverage into existing CI without drowning in flake.",
    date: "Apr 2026",
    read: "12 min",
  },
  {
    num: "03",
    category: "Org Design",
    title: "Unifying engineering after a merger.",
    excerpt:
      "Five orgs, one delivery cadence: what survived the integration, what we deleted, and what I'd do differently.",
    date: "Mar 2026",
    read: "10 min",
  },
  {
    num: "04",
    category: "CI/CD",
    title: "Your pipeline is your org chart.",
    excerpt:
      "If your CI/CD reflects Conway's Law, your release cadence reflects your team boundaries. Here's how to redraw both.",
    date: "Feb 2026",
    read: "7 min",
  },
];

const navItems = [
  { num: "01", label: "Latest" },
  { num: "02", label: "Archive" },
  { num: "03", label: "Topics" },
  { num: "04", label: "About" },
  { num: "05", label: "Subscribe" },
];

function Index() {
  return (
    <div className="min-h-screen grid-bg">
      <div className="mx-auto flex min-h-screen max-w-[1480px] gap-12 px-6 py-10 lg:px-10">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Hero />
          <PostsSection />
          <StatsRow />
        </main>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <aside className="hidden w-[260px] shrink-0 flex-col justify-between lg:flex">
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background">
            <span className="font-display text-sm font-bold tracking-tight">at</span>
          </div>
          <span className="font-mono-label text-muted-foreground">Journal / 2026</span>
        </div>

        <div className="mt-14">
          <h2 className="font-display text-2xl font-bold leading-tight text-foreground">
            Aleksandr<br />Teymurazov
          </h2>
          <p className="mt-3 text-sm font-medium text-foreground">
            Engineering Quality & Delivery Leader
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Writing about the systems behind shipping software.
          </p>
        </div>

        <nav className="mt-12 flex flex-col">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={`#${item.label.toLowerCase()}`}
              className="group flex items-center gap-4 border-b border-border/60 py-4 transition-colors hover:text-[color:var(--brand-orange)]"
            >
              <span className="font-mono-label text-muted-foreground">{item.num}</span>
              <span className="font-display text-base font-medium text-foreground transition-colors group-hover:text-[color:var(--brand-orange)]">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-12 space-y-2 pt-8">
        <a href="https://alextnow.com" className="block font-mono-label text-muted-foreground hover:text-foreground">
          ← alextnow.com
        </a>
        <p className="font-mono-label text-muted-foreground">© 2026 Aleksandr Teymurazov</p>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="pb-20 pt-6">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-foreground" />
        <span className="font-mono-label" style={{ color: "var(--brand-orange)" }}>
          ✦ Notes from the field
        </span>
      </div>
      <h1 className="font-display mt-6 max-w-4xl text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.95] text-foreground">
        Field notes on shipping{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          software
        </span>
        <span className="text-foreground">.</span>
      </h1>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
        Essays on engineering quality, AI-driven delivery, and what it really takes to
        modernize how teams build and release software at scale.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="#latest"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Read the latest <span aria-hidden>↗</span>
        </a>
        <a
          href="#subscribe"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/80 bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          Subscribe
        </a>
      </div>
    </section>
  );
}

function PostsSection() {
  return (
    <section id="latest" className="border-t border-border/70 py-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="font-mono-label text-muted-foreground">01 / Latest writing</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
            Recent{" "}
            <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
              essays
            </span>
            <span className="text-foreground">.</span>
          </h2>
        </div>
        <a href="#archive" className="hidden font-mono-label text-muted-foreground hover:text-foreground md:block">
          View archive →
        </a>
      </div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.num}
            className="group relative flex flex-col gap-6 bg-background/80 p-8 backdrop-blur-sm transition-colors hover:bg-background"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-muted-foreground">
                {post.num} / {post.category}
              </span>
              <span className="font-mono-label text-muted-foreground">{post.read}</span>
            </div>
            <h3 className="font-display text-2xl font-bold leading-snug text-foreground transition-colors group-hover:text-[color:var(--brand-orange)]">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="font-mono-label text-muted-foreground">{post.date}</span>
              <span
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-foreground/80 text-foreground transition-all group-hover:bg-foreground group-hover:text-background"
                aria-hidden
              >
                ↗
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function StatsRow() {
  const stats = [
    { num: "24", label: "Essays published" },
    { num: "6", label: "Topics covered" },
    { num: "2.1k", label: "Subscribers" },
    { num: "15", label: "Years in the field" },
  ];
  return (
    <section className="border-t border-border/70 py-14">
      <p className="font-mono-label text-muted-foreground">02 / By the numbers</p>
      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-background/80 p-6">
            <div className="font-display text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
              {s.num}
            </div>
            <div className="font-mono-label mt-3 text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
