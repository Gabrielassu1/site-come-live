import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Calendar, MapPin, Pin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Parabéns, sua vaga está garantida! — Além da Cadeira" },
      {
        name: "description",
        content:
          "Sua inscrição no evento Além da Cadeira foi confirmada. Entre no grupo oficial do WhatsApp para receber as informações.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ObrigadoPage,
});

const WHATSAPP_URL = "https://chat.whatsapp.com/JtgcAiahGnk5ZcYXcTT53s";

function ObrigadoPage() {
  useEffect(() => {
    try {
      const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
      if (typeof fbq === "function") fbq("track", "Purchase");
    } catch {}
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-gold/40 bg-card shadow-gold-glow p-8 md:p-12 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/15 border border-gold/40 mb-6">
          <span className="text-3xl">🎉</span>
        </div>

        <h1 className="font-display text-3xl md:text-4xl font-bold leading-tight">
          Parabéns, sua{" "}
          <span className="text-gradient-gold">vaga está garantida!</span>
        </h1>

        <p className="mt-4 text-base md:text-lg text-muted-foreground">
          Você acaba de garantir sua participação no evento{" "}
          <span className="text-foreground font-semibold">Além da Cadeira</span>.
        </p>

        <div className="mt-8 grid gap-3 text-left bg-background/50 border border-border rounded-xl p-5 md:p-6">
          <InfoRow icon={<Calendar className="w-5 h-5 text-gold" />} label="Data" value="02 e 03 de agosto" />
          <InfoRow icon={<MapPin className="w-5 h-5 text-gold" />} label="Local" value="Hotel Braston" />
          <InfoRow
            icon={<Pin className="w-5 h-5 text-gold" />}
            label="Endereço"
            value="Rua Augusta, 467 — Consolação — São Paulo/SP"
          />
        </div>

        <p className="mt-8 text-sm md:text-base text-muted-foreground">
          Agora o próximo passo é entrar no grupo oficial dos participantes. Por
          lá vamos enviar informações importantes sobre o evento, horários,
          avisos, orientações e novidades.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center gap-3 rounded-full px-7 py-5 font-bold uppercase tracking-wider text-sm md:text-base text-navy-deep transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-gold-glow"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.92 0.10 90), oklch(0.78 0.18 80) 50%, oklch(0.92 0.10 90))",
          }}
        >
          <MessageCircle className="w-5 h-5" />
          Entrar no grupo oficial do WhatsApp
        </a>

        <p className="mt-4 text-[11px] text-muted-foreground">
          Nos vemos em São Paulo. 🚀
        </p>
      </div>
    </main>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5">{icon}</div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm md:text-base font-medium">{value}</div>
      </div>
    </div>
  );
}
