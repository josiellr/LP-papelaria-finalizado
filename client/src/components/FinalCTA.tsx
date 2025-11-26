import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function FinalCTA() {
  const scrollToOffers = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-card border-2 border-primary/20 px-6 py-3 rounded-md mb-6">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="font-semibold flex flex-col">
                <span className="text-primary">🔒 Compra 100% Segura</span>
                <span className="text-muted-foreground">Aproveite agora, essa oferta pode não aparecer novamente.</span>
              </span>
            </div>
          </div>
          
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Pegue sua vaga agora!
          </h2>
          
          <p className="text-xl md:text-2xl text-destructive font-bold mb-8">
            Essa oferta única termina hoje!
          </p>
          
          <Button 
            onClick={scrollToOffers}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg md:text-xl px-12 md:px-16 py-7 md:py-8 rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            data-testid="button-final-cta"
          >
            GARANTIR MINHA VAGA AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
