import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Festive_party_celebration_hero_549b0c91.png";
import mockupImage from "@assets/mockup-exemplo.webp";

export default function Hero() {
  const scrollToOffers = () => {
    document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-block mb-4">
            <p className="text-sm md:text-base font-medium tracking-wide uppercase">BAIXE AGORA:</p>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight">
            O KIT DE FESTAS LUCRATIVAS
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            +430 moldes prontos para adicionar o nome, idade do aniversariante e vender na sua cidade ou online. Funciona até mesmo para quem nunca mexeu com papelaria personalizada antes!
          </p>
          
          <div className="mb-8 flex justify-center">
            <img 
              src={mockupImage} 
              alt="Mockup do Kit de Festas Lucrativas mostrando exemplos de moldes" 
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
              data-testid="img-mockup"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-base md:text-lg font-semibold">4.9/5 de +1.532 usuários</span>
          </div>
          
          <Button 
            onClick={scrollToOffers}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-base md:text-lg px-8 md:px-12 py-6 md:py-7 rounded-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            data-testid="button-hero-cta"
          >
            QUERO COMEÇAR A LUCRAR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
}
