import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { posts } from "@/lib/posts";
import frameworkImg from "@/assets/atqi-framework.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "atqi.dev | Notes on building better software" },
      { name: "description", content: "Articles by Aleksandr Teymurazov on engineering quality, AI driven delivery, and scaling software teams." },
      { property: "og:title", content: "atqi.dev | Notes on building better software" },
      { property: "og:description", content: "Articles by Aleksandr Teymurazov on engineering quality, AI driven delivery, and scaling software teams." },
      { property: "og:url", content: "https://atqi.dev/" },
    ],
    links: [{ rel: "canonical", href: "https://atqi.dev/" }],
  }),
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <WorkInProgressNotice />
      <PostsSection />
      <FrameworkSection />
      <SubscribeSection />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section className="pt-16 pb-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-foreground" />
        <span className="font-mono-label" style={{ color: "var(--brand-orange)" }}>
          ✦ Notes from the field · by Aleksandr Teymurazov
        </span>
      </div>
      <h1 className="font-display mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.95] text-foreground">
        Articles on building{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          better software
        </span>
        <span className="text-foreground">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        My take on engineering quality, AI driven delivery, and what it takes to scale
        a software team. Written from fifteen years of doing the work. New article
        every couple of weeks.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          to="/subscribe"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          Subscribe for new stories <span aria-hidden>→</span>
        </Link>
        <a
          href="https://alextnow.com"
          className="font-mono-label text-muted-foreground hover:text-foreground"
        >
          More about the author ↗
        </a>
      </div>
    </section>
  );
}

function PostsSection() {
  return (
    <section className="border-t border-border/70 pt-10">
      <h2 className="font-mono-label text-muted-foreground">Latest notes</h2>
      <ul className="mt-6 divide-y divide-border/70 border-y border-border/70">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/notes/$slug"
              params={{ slug: post.slug }}
              className="group flex items-start gap-5 py-5 transition-colors"
            >
              <span className="font-mono-label mt-1 w-8 shrink-0 text-muted-foreground">
                {post.num}
              </span>
              <div className="min-w-0 flex-1">
                <span className="font-mono-label text-muted-foreground">
                  {post.category} · {post.readMinutes} min read
                </span>
                <h3 className="font-display mt-1 text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-[color:var(--brand-orange)]">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.dek}
                </p>
              </div>
              <span
                className="mt-2 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-foreground/80 text-foreground transition-all group-hover:bg-foreground group-hover:text-background"
                aria-hidden
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function WorkInProgressNotice() {
  return (
    <aside
      role="note"
      className="mt-10 flex items-start gap-4 rounded-2xl border border-border/70 bg-background/60 p-5"
    >
      <span
        className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-background"
        style={{ backgroundColor: "var(--brand-orange)" }}
        aria-hidden
      >
        i
      </span>
      <div>
        <p className="font-mono-label text-muted-foreground">Heads up</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          This journal is actively being built out. Some entries below are
          placeholder drafts while I write the full articles. Subscribe to get
          the real thing in your inbox as it ships.
        </p>
      </div>
    </aside>
  );
}

function FrameworkSection() {
  return (
    <section
      id="framework"
      className="mt-16 rounded-2xl border border-border/70 bg-background/60 p-8"
    >
      <p className="font-mono-label text-muted-foreground">04 / Framework</p>
      <h2 className="font-display mt-2 text-3xl font-extrabold leading-tight text-foreground">
        The ATQI{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          Framework
        </span>
        <sup className="ml-1 text-base" style={{ color: "var(--brand-orange)" }}>™</sup>
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        AT Quality Intelligence is a systems based operating model for embedding
        AI driven quality into enterprise scale engineering. Built on
        observability, adaptive execution, and delivery intelligence.
      </p>
      <figure className="mt-6 overflow-hidden rounded-xl border border-border/70 bg-background p-3">
        <img
          src={frameworkImg}
          alt="AT Quality Intelligence Framework diagram showing GenAI Engineering, Predictive Intelligence, LLM Validation and Red Teaming, Continuous Evaluation and Feedback, AI Quality Observability, and Governance and Compliance."
          className="h-auto w-full rounded-md"
          loading="lazy"
        />
      </figure>
      <div className="mt-6">
        <a
          href="https://alextnow.com/#framework"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
        >
          See the full framework on alextnow.com <span aria-hidden>↗</span>
        </a>
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section className="mt-16 rounded-2xl border border-border/70 bg-background/60 p-8">
      <p className="font-mono-label text-muted-foreground">The Newsletter</p>
      <h2 className="font-display mt-2 text-2xl font-extrabold text-foreground">
        Engineering stories{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          in your inbox
        </span>
        .
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        One short, useful article every couple of weeks. Real situations from leading
        engineering teams, written from my own experience.
      </p>
      <div className="mt-5">
        <SubscribeForm source="home_inline" />
      </div>
    </section>
  );
}
