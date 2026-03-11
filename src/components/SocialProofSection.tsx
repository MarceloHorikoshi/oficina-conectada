const testimonials = [
  {
    quote: "Antes eu tirava foto, esperava o cliente vir buscar, explicava de novo... Hoje mando o link, ele aprova de casa, quando chega aqui já tem peça separada. Ganhei 3h por dia.",
    name: "Carlos Mota",
    company: "Mota Auto Center",
    metric: "3h economizadas por dia | +40% orçamentos aprovados",
  },
  {
    quote: "Cliente desconfiado era meu calo. Com as fotos marcadas, parei de perder venda. O sistema ainda avisa quando o cliente vai precisar trocar óleo de novo.",
    name: "Renata Farias",
    company: "Farias Mecânica",
    metric: "90% dos orçamentos aprovados no primeiro envio",
  },
  {
    quote: "Meu mecânico mais velho, que mal mexe em celular, aprendeu em 1 dia. Tira foto, marca o defeito, pronto. Parece que foi feito pra gente.",
    name: "Seu Zé",
    company: "Oficina do Zé",
    metric: "Usuários de todas as idades",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            "Achava que CRM era coisa de oficina grande. Hoje não vivo sem."
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-lg border border-border bg-background p-8"
            >
              <blockquote className="mb-6 text-sm leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <div>
                <div className="mb-3 text-sm">
                  <span className="font-bold text-foreground">{t.name}</span>
                  <span className="text-muted-foreground">, {t.company}</span>
                </div>
                <div className="rounded-md bg-accent px-3 py-1.5 text-xs font-bold text-accent-foreground">
                  {t.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
