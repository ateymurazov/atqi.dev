import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const Schema = z.object({
  email: z.string().trim().email().max(255),
  source: z.string().trim().max(120).optional(),
});

export const subscribeToNewsletter = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Schema.parse(data))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .insert({ email: data.email.toLowerCase(), source: data.source ?? null });

    if (error && error.code !== "23505") {
      // 23505 = unique_violation: already subscribed, treat as success
      throw new Error("Could not subscribe right now. Please try again.");
    }

    return { ok: true as const };
  });