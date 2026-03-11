import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Meu mecânico mal mexe em celular. Vai conseguir usar?",
    a: "Sim. A interface foi desenhada pra quem tem mão suja de graxa. Botões grandes, fluxo simples: tira foto, marca defeito, envia. Testamos com mecânicos de todas as idades.",
  },
  {
    q: "E se o cliente não clicar no link?",
    a: "O link vai por WhatsApp. 98% dos brasileiros abrem mensagem em até 3 minutos. E se ele não abrir, você vê no sistema e pode ligar. Mas raramente precisa.",
  },
  {
    q: "Preciso instalar alguma coisa? Meu computador é velho.",
    a: "Zero instalação. Funciona no celular, tablet, computador velho ou novo. Só abrir o navegador. Seu mecânico pode usar o próprio celular.",
  },
  {
    q: "E se eu quiser cancelar?",
    a: "Cancele quando quiser, 1 clique, sem multa. Seu histórico fica salvo caso volte.",
  },
  {
    q: "Vale a pena pagar mais caro no Pro?",
    a: "Se você quer que o cliente volte sem você precisar ligar, sim. Os lembretes automáticos de revisão trazem de volta 30% dos clientes que sumiram. Em 2 meses paga o plano.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Respostas diretas pra você decidir
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-bold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
