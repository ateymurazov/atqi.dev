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
      "Why throwing more QA at a broken pipeline never works. Full framework on alextnow.com.",
    href: "https://alextnow.com/#principles",
    cta: "Read on alextnow.com",
  },
  {
    num: "02",
    category: "AI & Delivery",
    title: "Letting AI write the tests humans never would.",
    excerpt:
      "A playbook for embedding AI-generated regression coverage into existing CI. See the full case study.",
    href: "https://alextnow.com/#framework",
    cta: "Read on alextnow.com",
  },
  {
    num: "03",
    category: "Org Design",
    title: "Unifying engineering after a merger.",
    excerpt:
      "Five orgs, one delivery cadence — the full integration arc lives on alextnow.com.",
    href: "https://alextnow.com/#experience",
    cta: "Read on alextnow.com",
  },
];

function Index() {
  return (
    <div className="min-h-screen grid-bg">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 lg:py-16">
        <TopBar />
        <Hero />
        <PostsSection />
        <Footer />
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
          <span className="font-display text-sm font-bold tracking-tight">at</span>
        </div>
        <span className="font-mono-label text-muted-foreground">atqi.dev</span>
      </div>
      <a
        href="https://alextnow.com"
        rel="me"
        className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
      >
        alextnow.com ↗
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-foreground" />
        <span className="font-mono-label" style={{ color: "var(--brand-orange)" }}>
          ✦ A side journal by Aleksandr Teymurazov
        </span>
      </div>
      <h1 className="font-display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] text-foreground">
        Field notes that link back to{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          <a href="https://alextnow.com" className="underline decoration-2 underline-offset-[6px]">
            alextnow.com
          </a>
        </span>
        <span className="text-foreground">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Short essays on engineering quality, AI-driven delivery, and scaling software orgs —
        each one pointing to the full story over on{" "}
        <a href="https://alextnow.com" className="text-foreground underline underline-offset-4 hover:text-[color:var(--brand-orange)]">
          alextnow.com
        </a>
        .
      </p>
      <a
        href="https://alextnow.com"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
      >
        Visit alextnow.com <span aria-hidden>↗</span>
      </a>
    </section>
  );
}

function PostsSection() {
  return (
    <section className="border-t border-border/70 pt-10">
      <p className="font-mono-label text-muted-foreground">Three notes, three links</p>
      <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
        {posts.map((post) => (
          <li key={post.num}>
            <a
              href={post.href}
              className="group flex items-start gap-5 py-5 transition-colors"
            >
              <span className="font-mono-label mt-1 w-8 shrink-0 text-muted-foreground">
                {post.num}
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-mono-label text-muted-foreground">{post.category}</span>
                <h3 className="font-display mt-1 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[color:var(--brand-orange)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </div>
              <span
                className="mt-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/80 text-foreground transition-all group-hover:bg-foreground group-hover:text-background"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between pt-16">
      <p className="font-mono-label text-muted-foreground">
        © 2026 ·{" "}
        <a href="https://alextnow.com" rel="me author" className="hover:text-foreground">
          Aleksandr Teymurazov
        </a>
      </p>
      <div className="flex items-center gap-4">
        <a href="https://alextnow.com" className="font-mono-label text-muted-foreground hover:text-foreground">
          Portfolio ↗
        </a>
        <a href="https://alextnow.com/#contact" className="font-mono-label text-muted-foreground hover:text-foreground">
          Contact ↗
        </a>
      </div>
    </footer>
  );
}
