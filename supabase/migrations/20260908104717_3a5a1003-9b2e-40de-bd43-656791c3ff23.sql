CREATE TABLE public.contact_messages (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT INSERT ON public.contact_messages TO anon;
GRANT INSERT ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(trim(name)) > 0 AND length(name) <= 100
    AND length(trim(email)) > 0 AND length(email) <= 255
    AND length(trim(subject)) > 0 AND length(subject) <= 150
    AND length(trim(message)) > 0 AND length(message) <= 2000
  );