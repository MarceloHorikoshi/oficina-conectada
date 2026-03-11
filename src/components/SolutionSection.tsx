import { Link2, Camera, Activity, FolderClock, Bell, Headset } from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Orçamento que o cliente abre sem login",
    desc: "Você envia o link no WhatsApp. Cliente clica e vê tudo: fotos, vídeos, valor. Zero senha, zero \"não tô conseguindo entrar\".",
  },
  {
    icon: Camera,
    title: "Prova visual que vende",
    desc: "Mecânico fotografa a peça trincada, marca o defeito com círculo vermelho. Cliente vê com os próprios olhos e aprova sem questionar.",
  },
  {
    icon: Activity,
    title: "Status em tempo real",
    desc: 'Cliente acompanha: "diagnosticando", "aguardando peça", "em reparo", "pronto". Menos ligações de "já ficou pronto?"',
  },
  {
    icon: FolderClock,
    title: "Histórico completo do carro",
    desc: "Na próxima vez que o cliente voltar, você sabe o que já foi feito, quando, com quais peças. Parece mágica, é só CRM.",
  },
  {
    icon: Bell,
    title: "Lembrete automático de revisão",
    desc: 'O sistema sabe que a correia trocada dura 50.000 km. Quando chega perto, dispara WhatsApp automático: "Hora de revisar seu Gol".',
  },
  {
    icon: Headset,
    title: "Suporte humano de verdade",
    desc: "Canais diretos no WhatsApp. Resposta em minutos, não em dias. (Plano Pro)",
  },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            O cliente vê o problema. Você vê o serviço rodando.
          </h2>
          <p className="text-lg text-muted-foreground">
            A Auto-Mático transforma cada orçamento em uma experiência visual que o cliente entende e aprova em segundos.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-lg border border-border p-8 transition-colors hover:border-primary/30">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <f.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
