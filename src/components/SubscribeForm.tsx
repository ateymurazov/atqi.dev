import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { subscribeToNewsletter } from "@/lib/newsletter.functions";

export function SubscribeForm({
  source,
  compact = false,
}: {
  source: string;
  compact?: boolean;
}) {
  const subscribe = useServerFn(subscribeToNewsletter);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      await subscribe({ data: { email, source } });
      setStatus("ok");
      setMessage("You're in. First story lands soon.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={onSubmit} className={compact ? "" : "max-w-md"}>
      <div className="flex flex-col gap-2 sm:flex-row">
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          maxLength={255}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-full border border-border bg-background/80 px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-3 text-sm ${
            status === "error" ? "text-destructive" : "text-muted-foreground"
          }`}
        >
          {message}
        </p>
      )}
      {!message && (
        <p className="mt-3 text-xs text-muted-foreground">
          Engineering stories from the field. No spam, unsubscribe anytime.
        </p>
      )}
    </form>
  );
}