import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, X } from "lucide-react";
import DynamicDateBadge from "./DynamicDateBadge";

const pricingTiers = [
  {
    name: "Plano Básico",
    price: "R$10",
    originalTotal: "R$108,90",
    discount: "91%",
    features: [
      { text: "Kit de Papelaria Lucrativa (+430 festas prontas)", included: true, price: "R$59,00" },
      { text: "Pacote de temas e moldes limpos", included: true, price: "R$49,90" },
      { text: "Curso Express – Canva do Zero ao Lucro", included: false, price: "R$29,00" },
      { text: "Planner de vendas de papelaria", included: false, price: "R$19,00" },
      { text: "Pacote de mensagens e modelos de divulgação", included: false, price: "R$15,00" }
    ],
    buttonText: "COMEÇAR AGORA - R$10",
    isPopular: false,
    checkoutLink: "#" // todo: remove mock functionality - add real checkout link
  },
  {
    name: "Plano Premium",
    price: "R$27",
    originalTotal: "R$171,90",
    discount: "84%",
    features: [
      { text: "Kit de Papelaria Lucrativa (+430 festas prontas)", included: true, price: "R$59,00" },
      { text: "Pacote de temas e moldes limpos", included: true, price: "R$49,90" },
      { text: "Curso Express – Canva do Zero ao Lucro", included: true, price: "R$29,00" },
      { text: "Planner de vendas de papelaria", included: true, price: "R$19,00" },
      { text: "Pacote de mensagens e modelos de divulgação", included: true, price: "R$15,00" }
    ],
    buttonText: "QUERO O PLANO PREMIUM - R$27",
    isPopular: true,
    checkoutLink: "#", // todo: remove mock functionality - add real checkout link
    socialProof: "Comprado por mais de 743 pessoas nos últimos dias"
  }
];

export default function Pricing() {
  return (
    <section id="offers" className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <DynamicDateBadge />
          </div>
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              LEVE TUDO ISSO COM<br />92% DE DESCONTO!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Mais de 430 festas prontas para colocar nome, idade e vender hoje mesmo sem necessidade de criar do zero.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={index}
                className={`relative transition-all duration-300 ${
                  tier.isPopular 
                    ? 'border-4 border-primary shadow-2xl scale-105' 
                    : 'hover-elevate'
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-accent text-accent-foreground font-bold px-6 py-2 text-sm shadow-lg">
                      <TrendingUp className="w-4 h-4 mr-1 inline" />
                      Best-seller
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2">
                    {tier.name}
                  </h3>
                  
                  {tier.socialProof && (
                    <p className="text-xs md:text-sm text-muted-foreground italic">
                      {tier.socialProof}
                    </p>
                  )}
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="text-center py-6 bg-card rounded-md">
                    <p className="text-sm text-muted-foreground mb-1">De:</p>
                    <p className="text-2xl line-through text-muted-foreground mb-2">
                      {tier.originalTotal}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">POR UM PAGAMENTO ÚNICO:</p>
                    <p className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
                      {tier.price}
                    </p>
                    <Badge variant="secondary" className="font-bold">
                      {tier.discount} DE DESCONTO
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          )}
                          <p className={`text-sm md:text-base ${!feature.included ? 'text-muted-foreground' : ''}`}>
                            {feature.text}
                          </p>
                        </div>
                        <span className="text-sm md:text-base font-bold text-red-500 line-through flex-shrink-0 ml-2">
                          {feature.price}
                        </span>
                      </div>
                    ))}
                    
                    <div className="pt-4 mt-4 border-t-2 border-dashed">
                      <div className="flex justify-between items-center">
                        <span className="font-heading font-bold text-lg md:text-xl">
                          Valor Total:
                        </span>
                        <span className="font-heading font-bold text-xl md:text-2xl text-red-500 line-through">
                          {tier.originalTotal}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className={`w-full font-heading font-bold text-base md:text-lg py-6 md:py-7 ${
                      tier.isPopular 
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                    data-testid={`button-checkout-${index}`}
                  >
                    <a href={tier.checkoutLink}>{tier.buttonText}</a>
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Compra segura com certificados de segurança.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-sm md:text-base text-muted-foreground italic">
              * Os botões acima são personalizáveis. Adicione seus links de checkout posteriormente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
