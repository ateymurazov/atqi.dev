import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { posts } from "@/lib/posts";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "atqi.dev — Notes on building better software" },
      { name: "description", content: "Short essays on engineering quality, AI-driven delivery, and scaling software organizations — written by Aleksandr Teymurazov." },
      { property: "og:title", content: "atqi.dev — Notes on building better software" },
      { property: "og:description", content: "Short essays on engineering quality, AI-driven delivery, and scaling software organizations." },
      { property: "og:url", content: "https://atqi.dev/" },
    ],
    links: [{ rel: "canonical", href: "https://atqi.dev/" }],
  }),
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <PostsSection />
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
        Short essays on building{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          better software
        </span>
        <span className="text-foreground">.</span>
      </h1>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
        Engineering quality, AI-driven delivery, and scaling software orgs — written from
        fifteen years in the trenches. New story every couple of weeks.
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
      <p className="font-mono-label text-muted-foreground">Latest notes</p>
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

function SubscribeSection() {
  return (
    <section className="mt-16 rounded-2xl border border-border/70 bg-background/60 p-8">
      <p className="font-mono-label text-muted-foreground">The Newsletter</p>
      <h2 className="font-display mt-2 text-2xl font-extrabold text-foreground">
        Engineering stories,{" "}
        <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
          straight to your inbox
        </span>
        .
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        One short, useful note every couple of weeks. Real situations from leading
        engineering teams — no fluff.
      </p>
      <div className="mt-5">
        <SubscribeForm source="home_inline" />
      </div>
    </section>
  );
}
