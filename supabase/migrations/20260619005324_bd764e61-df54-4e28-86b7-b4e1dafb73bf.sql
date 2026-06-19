ALTER TABLE public.leads
ADD COLUMN tipo_profissional TEXT
CHECK (tipo_profissional IN ('dono', 'colaborador'));