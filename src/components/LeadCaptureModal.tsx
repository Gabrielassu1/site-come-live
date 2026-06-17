import { useEffect, useState } from "react";
import { X, Loader2 } from "lucide-react";

const CHECKOUT_URL = "https://pay.cakto.com.br/s4xzuwy_913906";
const SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbxZIAhZlin4pFt0IqpiX7FY006Mg_cjYCmNjnyRfR2qHkUN9lPDGevzaRZ5Al-P1ag2Ag/exec";

const UFS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

export interface LeadData {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cep: string;
  endereco: string;
  cidade: string;
  estado: string;
}

interface LeadCaptureModalProps {
  open: boolean;
  onClose: () => void;
}

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{0,2})(\d{0,4})(\d{0,4}).*/, (_, a, b, c) =>
    [a && `(${a}`, a && a.length === 2 ? ") " : "", b, c && `-${c}`].filter(Boolean).join(""));
  return d.replace(/(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
}

function maskCEP(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
}

export function LeadCaptureModal({ open, onClose }: LeadCaptureModalProps) {
  const [data, setData] = useState<LeadData>({
    nome: "", sobrenome: "", email: "", telefone: "",
    cep: "", endereco: "", cidade: "", estado: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const update = <K extends keyof LeadData>(k: K, v: string) =>
    setData((d) => ({ ...d, [k]: v }));

  const handleCEPBlur = async () => {
    const cep = data.cep.replace(/\D/g, "");
    if (cep.length !== 8) return;
    setCepLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const j = await res.json();
      if (!j.erro) {
        setData((d) => ({
          ...d,
          endereco: [j.logradouro, j.bairro].filter(Boolean).join(", ") || d.endereco,
          cidade: j.localidade || d.cidade,
          estado: j.uf || d.estado,
        }));
      }
    } catch {}
    setCepLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!data.nome.trim() || !data.sobrenome.trim()) return setError("Informe seu nome completo.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return setError("E-mail inválido.");
    if (data.telefone.replace(/\D/g, "").length < 10) return setError("Telefone inválido.");
    if (data.cep.replace(/\D/g, "").length !== 8) return setError("CEP inválido.");
    if (!data.endereco.trim() || !data.cidade.trim() || !data.estado) return setError("Preencha o endereço completo.");

    setSubmitting(true);
    try {
      const payload = { ...data, capturedAt: new Date().toISOString() };
      localStorage.setItem("alemdacadeira_lead", JSON.stringify(payload));
    } catch {}

    const params = new URLSearchParams({
      name: `${data.nome} ${data.sobrenome}`.trim(),
      email: data.email,
      phone: data.telefone.replace(/\D/g, ""),
    });
    window.location.href = `${CHECKOUT_URL}?${params.toString()}`;
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-gold/40 bg-card shadow-gold-glow p-6 md:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 text-muted-foreground"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <h2 id="lead-modal-title" className="font-display text-2xl md:text-3xl font-bold">
            Falta <span className="text-gradient-gold">1 passo</span> para garantir sua vaga
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Preencha seus dados para prosseguir com a inscrição segura.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <Field label="Nome" value={data.nome} onChange={(v) => update("nome", v)} autoFocus />
            <Field label="Sobrenome" value={data.sobrenome} onChange={(v) => update("sobrenome", v)} />
          </div>
          <Field label="E-mail" type="email" value={data.email} onChange={(v) => update("email", v)} />
          <Field
            label="Telefone (WhatsApp)"
            value={data.telefone}
            onChange={(v) => update("telefone", maskPhone(v))}
            placeholder="(11) 99999-9999"
          />
          <div className="grid grid-cols-[1fr_auto] gap-3 items-end">
            <Field
              label="CEP"
              value={data.cep}
              onChange={(v) => update("cep", maskCEP(v))}
              onBlur={handleCEPBlur}
              placeholder="00000-000"
            />
            {cepLoading && (
              <div className="pb-3 text-gold"><Loader2 className="w-4 h-4 animate-spin" /></div>
            )}
          </div>
          <Field label="Endereço" value={data.endereco} onChange={(v) => update("endereco", v)} placeholder="Rua, número, bairro" />
          <div className="grid grid-cols-[1fr_120px] gap-3">
            <Field label="Cidade" value={data.cidade} onChange={(v) => update("cidade", v)} />
            <div>
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">Estado</label>
              <select
                value={data.estado}
                onChange={(e) => update("estado", e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-gold"
              >
                <option value="">UF</option>
                {UFS.map((uf) => <option key={uf} value={uf}>{uf}</option>)}
              </select>
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-3">{error}</p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-bold uppercase tracking-wider text-sm text-navy-deep transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-gold-glow disabled:opacity-60"
            style={{
              background: "linear-gradient(135deg, oklch(0.92 0.10 90), oklch(0.78 0.18 80) 50%, oklch(0.92 0.10 90))",
            }}
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Continuar para o Pagamento"}
          </button>
          <p className="text-[11px] text-center text-muted-foreground">
            🔒 Seus dados estão seguros. Ao continuar, você concorda com nossa Política de Privacidade.
          </p>
        </form>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, type = "text", placeholder, autoFocus, onBlur,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  onBlur?: () => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
