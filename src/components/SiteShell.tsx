import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid-bg">
      <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-6 py-10 lg:py-16">
        <TopBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <header className="flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
          <span className="font-display text-sm font-bold tracking-tight">at</span>
        </div>
        <span className="font-mono-label text-muted-foreground">atqi.dev</span>
      </Link>
      <nav className="flex items-center gap-5">
        <Link
          to="/"
          className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
        >
          Notes
        </Link>
        <Link
          to="/subscribe"
          className="font-mono-label text-muted-foreground transition-colors hover:text-foreground"
        >
          Subscribe
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-6">
      <p className="font-mono-label text-muted-foreground">
        © 2026 ·{" "}
        <a
          href="https://alextnow.com"
          rel="me author"
          className="hover:text-foreground"
        >
          Aleksandr Teymurazov
        </a>
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://alextnow.com"
          className="font-mono-label text-muted-foreground hover:text-foreground"
        >
          alextnow.com ↗
        </a>
        <a
          href="https://alextnow.com/#contact"
          className="font-mono-label text-muted-foreground hover:text-foreground"
        >
          Contact ↗
        </a>
      </div>
    </footer>
  );
}