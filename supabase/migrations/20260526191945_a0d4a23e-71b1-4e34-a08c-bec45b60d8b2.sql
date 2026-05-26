-- Drop the overly permissive insert policy
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.newsletter_subscribers;

-- Recreate insert policy with email format validation (not always-true)
CREATE POLICY "Anyone can subscribe with valid email"
ON public.newsletter_subscribers
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND length(email) <= 320
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Explicitly deny SELECT to anon and authenticated; only service_role may read
CREATE POLICY "No public read of subscribers"
ON public.newsletter_subscribers
FOR SELECT
TO anon, authenticated
USING (false);

-- Ensure no client role can update or delete
REVOKE UPDATE, DELETE, SELECT ON public.newsletter_subscribers FROM anon, authenticated;
GRANT INSERT ON public.newsletter_subscribers TO anon, authenticated;
GRANT ALL ON public.newsletter_subscribers TO service_role;