import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Base",
    price: "R$ 99,90",
    desc: "Oficinas que querem organizar e vender mais.",
    features: [
      "Orçamentos com fotos via WhatsApp",
      "Cliente vê sem login",
      "Status em tempo real",
      "Histórico completo do veículo",
      "1 usuário incluso",
      "Suporte por e-mail em 24h",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "R$ 149,90",
    desc: "Oficinas que querem atendimento premium e cliente fidelizado.",
    features: [
      "Tudo do Base, mais:",
      "Lembretes automáticos de revisão",
      "Marcação de defeito na foto",
      "Até 3 usuários",
      "Suporte WhatsApp prioritário",
      "Relatórios de cliente recorrente",
      "Backup em nuvem estendido",
    ],
    highlight: true,
  },
];

const PricingSection = () => {
  return (
    <section id="precos" className="py-24 bg-secondary">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Preço de 2 trocas de óleo por mês
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano que encaixa no seu ritmo. Cancele quando quiser.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-lg border p-8 ${
                p.highlight
                  ? "border-primary bg-background shadow-lg shadow-primary/5"
                  : "border-border bg-background"
              }`}
            >
              {p.highlight && (
                <div className="mb-4 inline-flex self-start rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Mais popular
                </div>
              )}
              <h3 className="mb-1 text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-foreground">{p.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={p.highlight ? "hero" : "hero-outline"}
                size="lg"
                className="mt-auto"
              >
                Iniciar trial gratuito
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
