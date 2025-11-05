import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp } from "lucide-react";
import DynamicDateBadge from "./DynamicDateBadge";

const pricingTiers = [
  {
    name: "Plano Básico",
    price: "R$10",
    originalTotal: "R$171,90",
    discount: "94%",
    features: [
      "Kit de Papelaria Lucrativa (+430 festas prontas)",
      "Curso Express – Canva do Zero ao Lucro",
      "Planner de vendas de papelaria",
      "Pacote de mensagens e modelos de divulgação"
    ],
    buttonText: "COMEÇAR AGORA - R$10",
    isPopular: false,
    checkoutLink: "#" // todo: remove mock functionality - add real checkout link
  },
  {
    name: "Plano Premium",
    price: "R$20",
    originalTotal: "R$221,80",
    discount: "91%",
    features: [
      "Kit de Papelaria Lucrativa (+430 festas prontas)",
      "Curso Express – Canva do Zero ao Lucro",
      "Planner de vendas de papelaria",
      "Pacote de mensagens e modelos de divulgação",
      "Pacote de temas e moldes limpos (R$49,90)"
    ],
    buttonText: "QUERO O PLANO PREMIUM - R$20",
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              LEVE AGORA TUDO ISSO COM 92% DE DESCONTO!
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
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm md:text-base">{feature}</p>
                      </div>
                    ))}
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
