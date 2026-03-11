import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-muted-foreground">
              👋 Para donos de oficina que querem menos explicações e mais serviços
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
              Orçamento aprovado sem o cliente pisar na oficina
            </h1>

            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Chega de perder 20 minutos no telefone explicando o mesmo problema. Com a Auto-Mático, você envia fotos e vídeos reais da peça desgastada via WhatsApp. Cliente abre com um clique, aprova na hora e você já coloca a mão na massa.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl">
                Começar trial grátis de 14 dias
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <span>4.9 (78 avaliações)</span>
              <span className="text-border">|</span>
              <span>140+ oficinas já migraram do caderninho</span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={heroMockup}
              alt="Interface do Auto-Mático mostrando orçamento com foto de peça e botão de aprovação no celular"
              className="w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
