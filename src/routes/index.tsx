import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Calendar, MapPin, Ticket, Users, Check, X, Flame, ChevronDown,
  DollarSign, TrendingUp, Target, Brain, Scissors, Mic, GraduationCap,
  Rocket, Smartphone, Award, BookOpen, MessageCircle, Sparkles, Gift,
  ShieldCheck, ArrowRight, Star, Quote,
} from "lucide-react";
import heroEventAsset from "@/assets/gabriel-palco-evento.png.asset.json";
const heroEvent = heroEventAsset.url;
import founderAsset from "@/assets/gabriel-assuncao.jpg.asset.json";
const founder = founderAsset.url;
import barberWorkAsset from "@/assets/barbeiro-profissional.png.asset.json";
const barberWork = barberWorkAsset.url;
import audience from "@/assets/audience.jpg";
import nivelAcimaBgAsset from "@/assets/nivel-acima-bg.png.asset.json";
const nivelAcimaBg = nivelAcimaBgAsset.url;
import logoAsset from "@/assets/logo-alem-da-cadeira.png.asset.json";
import resultadoReal1Asset from "@/assets/resultado-real-1.png.asset.json";
const resultadoReal1 = resultadoReal1Asset.url;
import resultadoReal2Asset from "@/assets/resultado-real-2.png.asset.json";
const resultadoReal2 = resultadoReal2Asset.url;
import resultadoReal3Asset from "@/assets/resultado-real-3.png.asset.json";
const resultadoReal3 = resultadoReal3Asset.url;
import ingressoAsset from "@/assets/ingresso-novo.png.asset.json";
const ingresso = ingressoAsset.url;
import resultadoReal4Asset from "@/assets/resultado-real-4.png.asset.json";
const resultadoReal4 = resultadoReal4Asset.url;

const logo = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Além da Cadeira — Imersão Presencial para Barbeiros | Gabriel Assunção" },
      { name: "description", content: "Imersão presencial de 2 dias em São Paulo. Aprenda a construir autoridade, aumentar faturamento e transformar sua barbearia em um negócio de verdade." },
      { property: "og:title", content: "Além da Cadeira — Imersão Presencial" },
      { property: "og:description", content: "02 e 03 de Agosto, São Paulo. Vagas limitadas." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preload", as: "image", href: heroEvent, fetchpriority: "high" },
    ],
  }),
  component: Landing,
});

function Countdown() {
  const target = new Date("2026-08-02T09:00:00-03:00").getTime();
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = now === null ? 0 : Math.max(0, target - now);
  const d = now === null ? 0 : Math.floor(diff / 86400000);
  const h = now === null ? 0 : Math.floor((diff / 3600000) % 24);
  const m = now === null ? 0 : Math.floor((diff / 60000) % 60);
  const s = now === null ? 0 : Math.floor((diff / 1000) % 60);
  const items = [
    { v: d, l: "Dias" }, { v: h, l: "Horas" }, { v: m, l: "Min" }, { v: s, l: "Seg" },
  ];
  return (
    <div className="grid grid-cols-4 gap-3 md:gap-5">
      {items.map((i) => (
        <div key={i.l} className="rounded-xl bg-navy-deep/80 border border-gold/30 px-2 py-4 md:py-6 text-center shadow-elevated">
          <div className="text-3xl md:text-5xl font-display font-bold text-gradient-gold tabular-nums">
            {String(i.v).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground">{i.l}</div>
        </div>
      ))}
    </div>
  );
}

function GoldButton({ children, className = "", as: As = "a", ...props }: any) {
  return (
    <As
      className={`group relative inline-flex items-center justify-center gap-2 rounded-full px-7 md:px-10 py-4 md:py-5 font-bold uppercase tracking-wider text-sm md:text-base text-navy-deep transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-gold-glow ${className}`}
      style={{
        background: "linear-gradient(135deg, oklch(0.92 0.10 90), oklch(0.78 0.18 80) 50%, oklch(0.92 0.10 90))",
      }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </As>
  );
}

function GhostButton({ children, className = "", ...props }: any) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-gold/50 px-7 py-4 font-semibold uppercase tracking-wider text-sm text-gold hover:bg-gold/10 transition ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function SectionTitle({ kicker, title, className = "" }: { kicker?: string; title: string; className?: string }) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold mb-5">
          <Sparkles className="w-3 h-3" /> {kicker}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
        {title.split("|").map((part, i) =>
          i % 2 === 1 ? <span key={i} className="text-gradient-gold">{part}</span> : <span key={i}>{part}</span>
        )}
      </h2>
    </div>
  );
}

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Top utility bar */}
      <div className="bg-gold text-navy-deep py-2 text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]">
        🔥 Últimas vagas do lote atual — São Paulo, 02 e 03 de Agosto
      </div>

      {/* Nav */}
      <header className="absolute top-14 md:top-20 inset-x-0 z-30">
        <div className="mx-auto max-w-7xl px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Além da Cadeira" className="h-12 md:h-20 w-auto" />
          </a>
          <GhostButton href="#oferta" className="hidden md:inline-flex">Garantir Vaga</GhostButton>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute inset-0">
          <img
            src={heroEvent}
            alt="Auditório do evento Além da Cadeira"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          <div className="absolute inset-0 bg-grain opacity-60" />
        </div>

        {/* Floating decorative shapes */}
        <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-gold/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-navy/40 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 w-full">
          <div className="max-w-4xl animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-deep/60 backdrop-blur px-3 md:px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.25em] text-gold mb-6 md:mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
              Imersão Presencial · Edição 2026
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              EXISTE UM
              <br />
              <span className="shine-text">NÍVEL ACIMA</span>
              <br />
              DA CADEIRA
            </h1>

            <p className="mt-6 md:mt-8 text-base md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Você aprendeu a cortar cabelo.
              <br />
              <span className="text-foreground">
                Agora é hora de aprender a construir autoridade, aumentar seu faturamento e transformar sua profissão em um <span className="text-gold font-semibold">negócio de verdade.</span>
              </span>
            </p>

            {/* Ticket image */}
            <div className="mt-8 md:mt-10 max-w-xl animate-fade-up">
              <img
                src={ingresso}
                alt="Ingresso Além da Cadeira"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                decoding="async"
                fetchPriority="high"
              />
            </div>

            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 md:gap-4">
              <GoldButton href="#oferta">
                Quero Participar <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </GoldButton>
              <GhostButton href="#oferta">Garantir Minha Vaga</GhostButton>
            </div>

            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl">
              {[
                { Icon: Calendar, label: "02 e 03 de Agosto" },
                { Icon: MapPin, label: "São Paulo · SP" },
                { Icon: Ticket, label: "Vagas Limitadas" },
                { Icon: Users, label: "Evento Presencial" },
              ].map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 md:gap-3 rounded-xl border border-gold/20 bg-navy-deep/50 backdrop-blur px-3 md:px-4 py-3">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" />
                  <span className="text-xs md:text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70">
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="O Diagnóstico" title="O QUE ESTÁ TE IMPEDINDO DE |CRESCER|?" />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Você trabalha cada vez mais, mas sua renda continua limitada ao número de horários disponíveis.",
              "Sente que sua profissão depende exclusivamente da sua presença física.",
              "Sonha em crescer, mas não sabe qual é o próximo passo.",
              "Tem talento, mas ainda não construiu autoridade no mercado.",
              "Vê outros profissionais crescendo e não entende o que eles fazem de diferente.",
              "Quer conquistar mais liberdade financeira sem abandonar a profissão que ama.",
              "Sabe que nasceu para algo maior, mas ainda não encontrou o caminho.",
            ].map((pain, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-6 hover:border-destructive/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/15 flex items-center justify-center group-hover:bg-destructive/25 transition">
                    <X className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-base md:text-lg leading-snug pt-1">{pain}</p>
                </div>
              </div>
            ))}
            <div className="md:col-span-2 lg:col-span-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-navy to-navy-deep p-8 md:p-10 text-center">
              <p className="text-xl md:text-2xl font-display leading-relaxed">
                A verdade é que muitos barbeiros passam anos aperfeiçoando a técnica,
                <br className="hidden md:block" />
                <span className="text-gradient-gold"> mas nunca aprendem a crescer financeiramente.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPPORTUNITY */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-navy-deep/40 to-transparent">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle kicker="A Virada" title="E SE EXISTISSE UM |CAMINHO| PARA IR ALÉM?" className="!text-left !mx-0" />
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              O mercado mudou. Hoje os profissionais que mais crescem não são apenas os melhores tecnicamente.
            </p>
            <p className="mt-4 text-lg leading-relaxed">São aqueles que entendem:</p>
            <ul className="mt-6 space-y-3">
              {["Marketing", "Posicionamento", "Mentalidade", "Vendas", "Finanças", "Construção de autoridade"].map((it) => (
                <li key={it} className="flex items-center gap-3 text-lg">
                  <span className="w-6 h-6 rounded-full border border-gold flex items-center justify-center text-gold text-xs">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-medium">{it}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xl font-display text-gold">E é exatamente isso que você vai aprender.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/30 shadow-elevated">
              <img src={barberWork} alt="Barbeiro profissional em ação" loading="lazy" width={1280} height={896} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">Alto Padrão</div>
                <div className="font-display text-2xl">Profissionais que dominam técnica + negócio.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT EVENT */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <SectionTitle kicker="O Evento" title="O QUE É O |ALÉM DA CADEIRA|?" />
          <p className="mt-10 text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
            Uma imersão presencial de <span className="text-foreground font-medium">dois dias</span> criada para barbeiros que desejam evoluir profissionalmente e descobrir novas possibilidades dentro da profissão.
          </p>
          <p className="mt-6 text-xl md:text-2xl leading-relaxed">
            Aqui você não aprenderá apenas cortes.
            <br />
            Você aprenderá a construir uma carreira <span className="text-gradient-gold font-bold">sólida, lucrativa e respeitada, ensinando outras pessoas.</span>
          </p>
        </div>
      </section>

      {/* WHAT YOU LEARN */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="O Currículo" title="O QUE VOCÊ VAI |APRENDER|" />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: DollarSign, title: "Finanças para barbeiros", desc: "Precificação, lucro e gestão real do dinheiro." },
              { Icon: TrendingUp, title: "Marketing que gera alunos e clientes", desc: "Atração constante de clientes qualificados." },
              { Icon: Target, title: "Posicionamento profissional", desc: "Como ser visto como autoridade na sua região." },
              { Icon: Brain, title: "Mentalidade de crescimento", desc: "O mindset por trás dos profissionais de alto nível." },
              { Icon: Scissors, title: "Técnicas e tendências atuais", desc: "O que o mercado premium está exigindo agora." },
              { Icon: Mic, title: "Como construir autoridade", desc: "De anônimo a referência reconhecida." },
              { Icon: GraduationCap, title: "Ensinar e compartilhar", desc: "Multiplique conhecimento e abra novos mercados." },
              { Icon: Rocket, title: "Novas fontes de renda", desc: "Não dependa mais apenas de uma cadeira." },
              { Icon: Smartphone, title: "Redes sociais e conteúdo", desc: "Estratégia que converte seguidores em clientes." },
            ].map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur p-7 hover:border-gold/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-gold-glow"
              >
                <div className="absolute top-0 right-0 text-7xl font-display font-bold text-gold/5 pr-4 pt-2 leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/30 to-gold/5 border border-gold/40 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EARNING POTENTIAL */}
      <section className="relative py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border-2 border-gold bg-gradient-to-br from-gold/20 via-navy to-navy-deep p-8 md:p-12 text-center shadow-gold-glow">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Projeção de faturamento</div>
            <h3 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4">
              Com sua primeira turma você pode faturar:
            </h3>
            <div className="text-4xl md:text-6xl font-display font-bold text-gradient-gold mb-3">
              R$ 50 MIL A 100 MIL+
            </div>
            <p className="text-lg md:text-xl text-muted-foreground">
              Cobrando R$ 3.500 por aluno
            </p>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-navy-deep/40 to-transparent">
        <div className="mx-auto max-w-5xl px-6">
          <SectionTitle kicker="Indicação" title="PARA |QUEM| É" />
          <div className="mt-14 grid sm:grid-cols-2 gap-4">
            {[
              "Barbeiros iniciantes",
              "Barbeiros profissionais",
              "Barbeiros que trabalham para alguém",
              "Proprietários de barbearias",
              "Quem deseja aumentar o faturamento",
              "Quem deseja se destacar no mercado",
              "Quem quer construir autoridade",
            ].map((p) => (
              <div key={p} className="flex items-center gap-4 rounded-xl border border-gold/20 bg-card/50 backdrop-blur p-5 hover:border-gold/60 transition">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <span className="text-base md:text-lg font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMATION */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle kicker="A Transformação" title="COMO VOCÊ CHEGA E COMO VOCÊ |SAI|" />

          <div className="mt-16 grid md:grid-cols-2 gap-6 relative">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-soft items-center justify-center z-10 shadow-gold-glow">
              <ArrowRight className="w-7 h-7 text-navy-deep" />
            </div>

            <div className="rounded-3xl border border-destructive/30 bg-card/40 p-8 md:p-10">
              <div className="text-xs uppercase tracking-[0.3em] text-destructive mb-6">Antes</div>
              <ul className="space-y-4">
                {["Dependente apenas da cadeira.", "Sem direção.", "Sem estratégia.", "Sem crescimento."].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-lg text-muted-foreground">
                    <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-navy to-navy-deep p-8 md:p-10 shadow-gold-glow">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Depois</div>
              <ul className="space-y-4">
                {[
                  "Mais confiança.",
                  "Mais posicionamento.",
                  "Mais fontes de renda.",
                  "Mais faturamento.",
                  "Mais oportunidades.",
                  "Mais visão de negócio.",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-lg">
                    <Check className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                    <span className="font-medium">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COST OF NOT EVOLVING */}
      <section className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-destructive/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-destructive/50 bg-destructive/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-destructive mb-5">
            <Flame className="w-3 h-3" /> Pense bem
          </div>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
            QUANTO CUSTA <span className="text-destructive">NÃO EVOLUIR</span>?
          </h2>
          <div className="mt-12 grid md:grid-cols-2 gap-5 text-left">
            {[
              "Continuar trocando tempo por dinheiro sem construir algo maior.",
              "Ver outros profissionais crescerem enquanto você permanece no mesmo lugar.",
              "Trabalhar cada vez mais e continuar sem liberdade financeira.",
              "Chegar ao próximo ano exatamente onde está hoje.",
            ].map((t) => (
              <div key={t} className="flex items-start gap-4 rounded-2xl border border-destructive/30 bg-card/60 p-6">
                <div className="w-10 h-10 rounded-full bg-destructive/15 flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-lg leading-snug pt-1.5">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl md:text-2xl text-muted-foreground font-light">
            O preço da estagnação é sempre <span className="text-gold font-semibold">maior</span> do que o do investimento.
          </p>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="relative py-24 md:py-32 bg-gradient-to-b from-transparent via-navy-deep/40 to-transparent">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2 relative">
            <div className="absolute -inset-6 bg-gold/15 blur-3xl rounded-full" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gold/40 shadow-elevated">
              <img src={founder} alt="Gabriel Assunção, fundador" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">O Fundador</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              QUEM É <span className="text-gradient-gold">GABRIEL ASSUNÇÃO</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Barbeiro, educador e empreendedor, Gabriel Assunção é fundador da <span className="text-foreground font-semibold">Moderna Barbearia Escola</span> e criador do movimento Além da Cadeira.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Ao longo de sua trajetória, ajudou a transformar a vida de centenas de profissionais através da educação, formando barbeiros dentro e fora do Brasil e mostrando que existe um caminho além da execução técnica.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Hoje, lidera uma das escolas de barbeiros mais ativas da região, onde são realizados mais de 5.000 atendimentos gratuitos por ano, proporcionando experiência prática real para alunos e oportunidades para a comunidade.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Sua missão é ajudar barbeiros a desenvolver não apenas habilidades técnicas, mas também posicionamento, mentalidade, autoridade e visão de negócio para construir uma carreira sólida e duradoura.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { Icon: Award, text: "Mais de uma década transformando profissionais" },
                { Icon: Scissors, text: "Escola com milhares de atendimentos práticos realizados" },
                { Icon: GraduationCap, text: "Formação de barbeiros dentro e fora do Brasil" },
                { Icon: Rocket, text: "Especialista em transformar barbeiros em profissionais de referência" },
                { Icon: Mic, text: "Criador do método Além da Cadeira" },
              ].map(({ Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 text-base">
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF / TESTIMONIALS CAROUSEL */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle kicker="Prova Social" title="RESULTADOS |REAIS|" />
        </div>

        <div className="mt-16 relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex gap-6 animate-marquee w-max">
            {[...Array(2)].flatMap((_, dup) =>
              [
                {
                  name: "Lucas Andrade",
                  role: "Barbeiro · Curitiba",
                  text: "Triplicou meu faturamento em 4 meses. Hoje tenho fila de espera e sei exatamente como precificar.",
                },
                {
                  name: "Rafael Souza",
                  role: "Dono de Barbearia · SP",
                  text: "Saí com clareza absoluta. Reposicionei minha barbearia e atraí clientes de outro nível.",
                },
                {
                  name: "Diego Mendes",
                  role: "Barbeiro · BH",
                  text: "Nunca pensei que marketing pudesse mudar tanto meu negócio. Conteúdo prático e direto.",
                },
                {
                  name: "Vinícius Lima",
                  role: "Barbeiro · Salvador",
                  text: "Aprendi mais em 2 dias do que em 5 anos de barbearia. Outro patamar.",
                },
                {
                  name: "Thiago Rocha",
                  role: "Empreendedor · Rio",
                  text: "Networking de altíssimo nível. Fechei parcerias só no evento.",
                },
                {
                  name: "Anderson P.",
                  role: "Barbeiro · Recife",
                  text: "Mentalidade, autoridade, finanças. Voltei outro profissional.",
                },
              ].map((t, i) => (
                <div
                  key={`${dup}-${i}`}
                  className="w-[340px] md:w-[400px] flex-shrink-0 rounded-2xl border border-gold/20 bg-card/70 backdrop-blur p-7"
                >
                  <Quote className="w-8 h-8 text-gold/50 mb-4" />
                  <p className="text-base md:text-lg leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-soft text-navy-deep font-bold flex items-center justify-center">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: resultadoReal1, alt: "Treinamento prático com alunos na Moderna Barbearia Escola" },
              { src: resultadoReal2, alt: "Gabriel Assunção com alunos exibindo certificados" },
              { src: resultadoReal3, alt: "Atendimento e prática real com a comunidade na barbearia escola" },
              { src: resultadoReal4, alt: "Turma formada com certificados em resultado real" },
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/60 transition group">
                <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle kicker="Brindes" title="BÔNUS |EXCLUSIVOS|" />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { Icon: Award, t: "Certificado de participação" },
              { Icon: BookOpen, t: "Material complementar" },
              { Icon: MessageCircle, t: "Grupo exclusivo de networking" },
              { Icon: Sparkles, t: "Acesso a conteúdos extras" },
              { Icon: Gift, t: "Condições especiais para futuras mentorias" },
            ].map(({ Icon, t }, i) => (
              <div key={i} className="rounded-2xl border border-gold/30 bg-gradient-to-br from-navy/60 to-card p-6 flex items-start gap-4 hover:shadow-gold-glow transition">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-1">Bônus</div>
                  <div className="font-display text-lg font-semibold leading-snug">{t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="relative py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-navy to-navy-deep p-8 md:p-12 text-center shadow-elevated">
            <div className="w-20 h-20 mx-auto rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-6">
              <ShieldCheck className="w-10 h-10 text-gold" />
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Garantia</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">SUA VAGA ESTÁ PROTEGIDA</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Caso o evento seja cancelado pela organização, o valor será integralmente devolvido.
            </p>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="relative py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-6">
          <SectionTitle kicker="Sua Vaga" title="GARANTA SUA VAGA |AGORA|" />

          <div className="mt-12 rounded-3xl border border-gold/40 bg-gradient-to-br from-navy-deep via-navy to-navy-deep p-8 md:p-12 shadow-gold-glow">
            <div className="text-center">
              <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">O Evento começa em</div>
              <Countdown />
            </div>

            <div className="my-10 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 border border-red-500/40 px-4 py-2 text-xs uppercase tracking-[0.2em] text-red-400 font-bold">
                <Flame className="w-3 h-3" /> Atenção: o 1º lote vai virar e o valor sobe para R$ 1.997
              </div>
            </div>

            <div className="max-w-md mx-auto">
              {/* Plano - Sem hospedagem */}
              <div className="rounded-2xl border border-gold/40 bg-navy-deep/60 p-6 md:p-8 flex flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/15 border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-4">
                  <Flame className="w-3 h-3" /> 1º Lote · Sem hospedagem
                </div>
                <div className="text-sm text-muted-foreground mb-2">Investimento à vista</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl text-muted-foreground line-through">R$ 2.997</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-display text-4xl md:text-5xl font-bold text-gradient-gold">R$ 497,00</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  ou <span className="text-foreground font-semibold">12x de R$ 41,42</span> no cartão
                </div>

                <div className="mt-6 space-y-2 flex-1">
                  {[
                    "Imersão presencial de 2 dias",
                    "Acesso a todos os bônus exclusivos",
                    "Certificado oficial",
                    "Grupo de networking VIP",
                    "Coffee break incluso",
                  ].map((b) => (
                    <div key={b} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <GoldButton href="https://pay.cakto.com.br/s4xzuwy_913906" className="w-full !py-4 !text-sm md:!text-base">
                    Quero Participar <ArrowRight className="w-4 h-4" />
                  </GoldButton>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Vagas restantes</span>
                <span className="font-bold text-gold">48 de 120</span>
              </div>
              <div className="h-2 rounded-full bg-navy-deep overflow-hidden border border-border">
                <div className="h-full bg-gradient-to-r from-gold to-gold-soft" style={{ width: "40%" }} />
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              🔒 Compra 100% segura · Parcelamento em até 12x · Após o fim do 1º lote o valor sobe para R$ 1.997
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionTitle kicker="Dúvidas" title="PERGUNTAS |FREQUENTES|" />
          <div className="mt-14 space-y-3">
            {[
              { q: "Quanto dura o evento?", a: "2 dias presenciais, com programação completa do início ao fim." },
              { q: "Preciso ser barbeiro experiente?", a: "Não. O conteúdo é estruturado para iniciantes e profissionais experientes." },
              { q: "Recebo certificado?", a: "Sim. Você receberá um certificado oficial de participação, reconhecendo sua capacitação nos fundamentos do Barbeiro Educador, incluindo técnicas de ensino, desenvolvimento profissional e formação de novos barbeiros." },
              { q: "Posso parcelar?", a: "Sim, em até 12x no cartão de crédito." },
              { q: "Onde será realizado?", a: "São Paulo - SP. Local exato enviado por e-mail após confirmação da inscrição." },
            ].map((f, i) => (
              <details key={i} className="group rounded-2xl border border-border bg-card/60 backdrop-blur p-6 open:border-gold/50 open:shadow-gold-glow transition">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-display text-lg font-semibold pr-4">{f.q}</span>
                  <ChevronDown className="w-5 h-5 text-gold transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={nivelAcimaBg} alt="" className="w-full h-full object-cover opacity-30" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold mb-6">
            <Flame className="w-3 h-3" /> A decisão é sua
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
            O PRÓXIMO NÍVEL
            <br />
            DA SUA CARREIRA
            <br />
            <span className="shine-text">COMEÇA AGORA</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Você pode continuar fazendo o que sempre fez e obter os mesmos resultados.
            <br />
            Ou pode decidir <span className="text-gold font-semibold">evoluir, aprender novas estratégias e descobrir que existe um nível acima da cadeira.</span>
          </p>
          <div className="mt-12">
            <GoldButton href="#oferta" className="!px-10 md:!px-14 !py-5 md:!py-6 !text-base md:!text-lg animate-pulse-gold">
              🔥 Garantir Minha Vaga Agora <ArrowRight className="w-5 h-5" />
            </GoldButton>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <img src={logo} alt="Além da Cadeira" className="h-16 w-auto" loading="lazy" decoding="async" />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em]">
            <Link to="/politica-de-privacidade" className="hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
          </nav>
          <div className="text-center md:text-right">
            <div>Realização: Moderna Barbearia · Gabriel Assunção © 2026</div>
            <div className="mt-1 text-xs text-muted-foreground/60">Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
