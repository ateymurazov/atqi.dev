import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/SiteShell";
import { SubscribeForm } from "@/components/SubscribeForm";

export const Route = createFileRoute("/subscribe")({
  component: SubscribePage,
  head: () => ({
    meta: [
      { title: "Subscribe | atqi.dev" },
      {
        name: "description",
        content:
          "Subscribe to atqi.dev for short engineering articles by Aleksandr Teymurazov, every couple of weeks.",
      },
      { property: "og:title", content: "Subscribe | atqi.dev" },
      {
        property: "og:description",
        content: "Engineering articles from my own experience. One short read every couple of weeks.",
      },
      { property: "og:url", content: "https://atqi.dev/subscribe" },
    ],
    links: [{ rel: "canonical", href: "https://atqi.dev/subscribe" }],
  }),
});

function SubscribePage() {
  return (
    <SiteShell>
      <section className="pt-16 pb-12">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-foreground" />
          <span className="font-mono-label" style={{ color: "var(--brand-orange)" }}>
            ✦ The atqi.dev newsletter
          </span>
        </div>
        <h1 className="font-display mt-6 text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[0.98] text-foreground">
          Engineering stories{" "}
          <span className="font-serif-italic" style={{ color: "var(--brand-orange)" }}>
            from my own work
          </span>
          <span className="text-foreground">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          One short article every couple of weeks. Quality systems, AI driven delivery,
          and the messy reality of running a software team. Written by{" "}
          <a
            href="https://alextnow.com"
            className="text-foreground underline underline-offset-4 hover:text-[color:var(--brand-orange)]"
          >
            Aleksandr Teymurazov
          </a>
          .
        </p>

        <div className="mt-10">
          <SubscribeForm source="subscribe_page" />
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { k: "Cadence", v: "Every 2 weeks" },
            { k: "Length", v: "5 min read" },
            { k: "Spam", v: "Never. Leave anytime." },
          ].map((item) => (
            <li
              key={item.k}
              className="rounded-2xl border border-border/70 bg-background/60 p-4"
            >
              <p className="font-mono-label text-muted-foreground">{item.k}</p>
              <p className="mt-1 text-sm text-foreground">{item.v}</p>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}