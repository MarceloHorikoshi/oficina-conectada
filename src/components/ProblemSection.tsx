import { Phone, ShieldQuestion, FileText } from "lucide-react";

const problems = [
  {
    icon: Phone,
    title: "Telefone interminável",
    text: "Cliente liga 3x pra mesma dúvida, você repete explicação, perde foco no serviço.",
  },
  {
    icon: ShieldQuestion,
    title: "Cliente desconfiado",
    text: 'Sem fotos, parece "conto do vigia". Você perde venda ou gasta tempo provando.',
  },
  {
    icon: FileText,
    title: "Orçamento esquecido",
    text: "Cliente pede pra pensar, some, você nunca sabe se vai voltar.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Seu tempo vale mais do que explicar peça por telefone
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo dono de oficina conhece esse ciclo: diagnóstico pronto, cliente pede orçamento, você explica, ele desconfia, pede pra ver, agenda outro dia... e seu tempo desaparece.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-lg border border-border bg-background p-8"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <p.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
