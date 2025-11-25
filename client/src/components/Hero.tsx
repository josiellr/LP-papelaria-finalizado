import { Star, Zap, Palette, Sparkles, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Festive_party_celebration_hero_549b0c91.png";

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
            <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-wide uppercase">O KIT FESTAS LUCRATIVAS</p>
          </div>
          
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            GERE DE <span className="text-accent">R$ 1.000 A R$ 2.000</span> TODOS OS MESES MONTANDO <span className="text-accent">CAIXAS PERSONALIZADAS</span> NA MESA DA SUA COZINHA.
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Pare de quebrar a cabeça procurando arquivos soltos na internet e criando do zero. Tenha acesso imediato a <span className="text-accent font-bold">1.137 Temas Prontos</span>, mais de <span className="text-accent font-bold">25 Moldes Validados</span> e <span className="text-accent font-bold">237 Fontes Exclusivas</span>. É só baixar, editar no Canva e vender, mesmo sem experiência.
          </p>
          
          <div className="mb-8 flex justify-center">
            <img 
              src="https://i.ibb.co/SXgD9xKp/Mockup-exemplo-1080x1350-pacote-molde.webp" 
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
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base justify-start" data-testid="feature-fast-editing">
              <Zap className="w-5 h-5 text-accent" />
              <span>Edição rápida e fácil</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base justify-start" data-testid="feature-canva">
              <Palette className="w-5 h-5 text-accent" />
              <span>Moldes para o Canva</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base justify-start" data-testid="feature-quality">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Imagens de alta qualidade</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base justify-start" data-testid="feature-no-experience">
              <Check className="w-5 h-5 text-accent" />
              <span>Não precisa saber designer</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base md:col-span-2 lg:col-span-1 justify-start" data-testid="feature-trial">
              <Shield className="w-5 h-5 text-accent" />
              <span>Teste sem compromisso por 7 dias</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
