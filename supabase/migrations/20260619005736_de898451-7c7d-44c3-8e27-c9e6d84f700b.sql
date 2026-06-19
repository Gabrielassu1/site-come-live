
-- 1) Replace permissive INSERT policy with field validation
DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.leads;

CREATE POLICY "Public lead submission with validation"
  ON public.leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(nome)) > 0
    AND length(btrim(sobrenome)) > 0
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(regexp_replace(telefone, '\D', '', 'g')) >= 10
    AND length(regexp_replace(cep, '\D', '', 'g')) = 8
    AND length(btrim(endereco)) > 0
    AND length(btrim(cidade)) > 0
    AND length(estado) = 2
  );

-- 2) Ensure leads are NOT publicly readable — revoke any stray SELECT and
--    rely on absent SELECT policy + revoked grants (only service_role can read)
REVOKE SELECT ON public.leads FROM anon, authenticated, PUBLIC;
