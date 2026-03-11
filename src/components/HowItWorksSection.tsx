const steps = [
  {
    num: "1",
    title: "Diagnóstico e foto",
    desc: "Mecânico identifica o problema, fotografa a peça, marca o defeito com círculo. Tudo pelo app, em segundos.",
  },
  {
    num: "2",
    title: "Link vai pro WhatsApp",
    desc: "Sistema gera link único. Você envia pro cliente. Ele abre sem login, vê as fotos, o valor, aprova com 1 toque.",
  },
  {
    num: "3",
    title: "Oficina recebe sinal verde",
    desc: 'Você recebe notificação "Aprovado". Já emite nota, separa peça, executa. Cliente acompanha tudo sozinho.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            3 cliques e o cliente já viu o problema
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                {s.num}
              </div>
              <h3 className="mb-3 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
