
CREATE POLICY "Block public reads of leads"
  ON public.leads FOR SELECT
  TO anon, authenticated
  USING (false);
