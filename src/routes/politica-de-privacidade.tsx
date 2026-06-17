import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logoAsset from "@/assets/logo-alem-da-cadeira.png.asset.json";

const logo = logoAsset.url;

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Além da Cadeira" },
      {
        name: "description",
        content:
          "Política de Privacidade do evento Além da Cadeira. Saiba como tratamos seus dados pessoais em conformidade com a LGPD.",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Política de Privacidade — Além da Cadeira" },
      {
        property: "og:description",
        content: "Como coletamos, usamos e protegemos seus dados pessoais.",
      },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Além da Cadeira" className="h-12 w-auto" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Política de <span className="text-gradient-gold">Privacidade</span>
        </h1>
        <p className="text-sm text-muted-foreground mb-12">
          Última atualização: 17 de junho de 2026
        </p>

        <div className="prose-content space-y-8 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">1. Quem somos</h2>
            <p>
              O evento <strong className="text-foreground">Além da Cadeira</strong>, realizado
              por Gabriel Assunção / Moderna Barbearia, é responsável pelo tratamento dos dados
              pessoais coletados por meio deste site, em conformidade com a Lei Geral de Proteção
              de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">2. Dados que coletamos</h2>
            <p>Podemos coletar as seguintes informações quando você interage com nosso site:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Nome completo, e-mail, telefone e CPF (no momento da inscrição/compra).</li>
              <li>Dados de pagamento processados por gateways parceiros (não armazenamos dados de cartão).</li>
              <li>Dados de navegação: endereço IP, tipo de dispositivo, páginas visitadas, cookies.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">3. Finalidade do tratamento</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Processar inscrições e pagamentos.</li>
              <li>Enviar informações sobre o evento, local e logística.</li>
              <li>Comunicações de marketing (com seu consentimento).</li>
              <li>Cumprir obrigações legais e fiscais.</li>
              <li>Melhorar a experiência do site e medir resultados de campanhas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">4. Cookies e tecnologias de rastreamento</h2>
            <p>
              Utilizamos cookies próprios e de terceiros (incluindo Meta Pixel/Facebook) para
              medir desempenho de anúncios e oferecer conteúdo relevante. Você pode desabilitar
              cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">5. Compartilhamento de dados</h2>
            <p>
              Não vendemos seus dados. Compartilhamos apenas com parceiros estritamente
              necessários para a execução do serviço (processadores de pagamento, plataformas
              de e-mail e anúncios) ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">6. Armazenamento e segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso
              não autorizado, perda ou destruição. Mantemos as informações apenas pelo tempo
              necessário às finalidades descritas ou exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">7. Seus direitos (LGPD)</h2>
            <p>Você pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Confirmação da existência de tratamento;</li>
              <li>Acesso, correção ou atualização dos seus dados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
              <li>Portabilidade dos dados;</li>
              <li>Revogação do consentimento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">8. Contato</h2>
            <p>
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato
              pelo e-mail{" "}
              <a
                href="mailto:contato@alemdacadeira.com"
                className="text-gold hover:underline"
              >
                contato@alemdacadeira.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground mb-3">9. Alterações</h2>
            <p>
              Esta política pode ser atualizada periodicamente. A versão vigente estará sempre
              disponível nesta página com a data da última atualização.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-12">
        <div className="mx-auto max-w-5xl px-6 text-center text-xs text-muted-foreground">
          © 2026 Além da Cadeira · Gabriel Assunção · Moderna Barbearia
        </div>
      </footer>
    </div>
  );
}
