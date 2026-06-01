import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeForm } from "@/components/SubscribeForm";
import { getPost, parentLink, posts, ALEXTNOW_URL, type Post } from "@/lib/posts";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Note not found | atqi.dev" }] };
    }
    const url = `https://atqi.dev/notes/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | atqi.dev` },
        { name: "description", content: post.dek },
        { name: "keywords", content: post.tags.join(", ") },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.dek },
        { property: "og:url", content: url },
        { property: "article:author", content: "Aleksandr Teymurazov" },
        { property: "article:published_time", content: post.publishedISO },
        { property: "article:section", content: post.category },
        ...post.tags.map((tag) => ({ property: "article:tag", content: tag })),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.dek,
            datePublished: post.publishedISO,
            mainEntityOfPage: url,
            articleSection: post.category,
            keywords: post.tags,
            author: {
              "@type": "Person",
              name: "Aleksandr Teymurazov",
              url: ALEXTNOW_URL,
              sameAs: [ALEXTNOW_URL, "https://linkedin.com/in/ateymurazov"],
            },
          }),
        },
      ],
    };
  },
  component: NotePage,
  notFoundComponent: () => (
    <SiteShell>
      <div className="py-24 text-center">
        <p className="font-mono-label text-muted-foreground">404</p>
        <h1 className="font-display mt-3 text-3xl font-extrabold text-foreground">
          Note not found
        </h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background"
        >
          ← Back to all notes
        </Link>
      </div>
    </SiteShell>
  ),
});

function NotePage() {
  const { post } = Route.useLoaderData() as { post: Post };
  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];
  const related = posts.filter((p) => p.slug !== post.slug);

  return (
    <SiteShell>
      <article className="pt-12 pb-8">
        <Link to="/" className="font-mono-label text-muted-foreground hover:text-foreground">
          ← All notes
        </Link>
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-foreground" />
          <span className="font-mono-label" style={{ color: "var(--brand-orange)" }}>
            {post.category} · {post.publishedLabel} · {post.readMinutes} min read
          </span>
        </div>
        <h1 className="font-display mt-5 text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] text-foreground">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{post.dek}</p>

        <div className="mt-10 space-y-5 text-base leading-relaxed text-foreground/90">
          {post.body.map((para, i) => (
            <p key={i}>{renderBody(para)}</p>
          ))}
        </div>

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <span className="font-mono-label mr-1 text-muted-foreground">Tags</span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/70 bg-background/60 px-3 py-1 font-mono-label text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <aside className="mt-12 rounded-2xl border border-border/70 bg-background/60 p-6">
          <p className="font-mono-label text-muted-foreground">Keep reading</p>
          <p className="mt-2 text-base text-foreground">
            This note is a condensed take. The full framework, examples, and the work
            history behind it lives on my main site{" "}
            <a
              href={parentLink(post.parentAnchor)}
              className="font-medium text-foreground underline decoration-2 underline-offset-4 hover:text-[color:var(--brand-orange)]"
            >
              alextnow.com
            </a>
            .
          </p>
          <a
            href={parentLink(post.parentAnchor)}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
          >
            Read the full piece on alextnow.com <span aria-hidden>↗</span>
          </a>
        </aside>

        {related.length > 0 && (
          <section className="mt-12">
            <p className="font-mono-label text-muted-foreground">Related notes</p>
            <h2 className="font-display mt-2 text-xl font-extrabold text-foreground">
              More from INSIGHTS / 2026
            </h2>
            <ul className="mt-5 space-y-4">
              {related.map((r) => (
                <li
                  key={r.slug}
                  className="rounded-2xl border border-border/70 bg-background/60 p-5"
                >
                  <Link
                    to="/notes/$slug"
                    params={{ slug: r.slug }}
                    className="group block"
                  >
                    <p
                      className="font-mono-label"
                      style={{ color: "var(--brand-orange)" }}
                    >
                      {r.num} · {r.category} · {r.publishedLabel}
                    </p>
                    <h3 className="font-display mt-2 text-lg font-extrabold text-foreground group-hover:text-[color:var(--brand-orange)]">
                      {r.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{r.dek}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="mt-12 rounded-2xl border border-border/70 bg-background/60 p-6">
          <p className="font-mono-label text-muted-foreground">Get the next one</p>
          <h2 className="font-display mt-2 text-xl font-extrabold text-foreground">
            Subscribe for new engineering stories
          </h2>
          <div className="mt-4">
            <SubscribeForm source={`post_${post.slug}`} />
          </div>
        </section>

        <nav className="mt-12 flex items-center justify-between border-t border-border/70 pt-6">
          <Link
            to="/"
            className="font-mono-label text-muted-foreground hover:text-foreground"
          >
            ← All notes
          </Link>
          <Link
            to="/notes/$slug"
            params={{ slug: next.slug }}
            className="font-mono-label text-muted-foreground hover:text-foreground"
          >
            Next: {next.title} →
          </Link>
        </nav>
      </article>
    </SiteShell>
  );
}