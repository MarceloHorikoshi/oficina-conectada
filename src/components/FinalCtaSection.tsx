import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-background md:text-4xl">
            Pare de explicar. Comece a vender.
          </h2>
          <p className="mb-10 text-lg text-background/60">
            Teste grátis por 14 dias. Sem cartão de crédito. Sem surpresas.
          </p>

          <Button variant="hero" size="xl">
            Iniciar trial gratuito
          </Button>

          <p className="mt-4 text-sm text-background/40">
            Não precisa instalar. Não precisa cartão. Só testar.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-background/60">
            <MessageCircle size={16} />
            <span>Dúvidas? Fala com a gente no WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
