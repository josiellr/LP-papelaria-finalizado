import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TrendingUp, CheckCircle, X, ArrowRight, ArrowDown, Flame, Gift } from "lucide-react";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const pricingTiers = [
  {
    name: "PACOTE BÁSICO",
    price: "R$10",
    originalTotal: "R$108,90",
    discount: "84%",
    deliverables: [
      { text: "Kit de Papelaria Lucrativa (+430 festas prontas)", price: "R$59,00", included: true },
      { text: "Pacote de temas e moldes limpos", price: "R$49,90", included: true },
      { text: "Convites digitais no Canva", price: "R$29,90", included: true },
      { text: "Fontes personalizadas", price: "R$27,00", included: true },
      { text: "Acesso por 3 meses", price: "", included: true },
      { text: "Garantia de 15 dias", price: "", included: true }
    ],
    buttonText: "COMEÇAR AGORA - R$10",
    isPopular: false,
    checkoutLink: "https://pay.kiwify.com.br/6P8i9Ja"
  },
  {
    name: "PACOTE PREMIUM",
    price: "R$29,90",
    originalTotal: "R$171,90",
    discount: "91%",
    deliverables: [
      { text: "Kit de Papelaria Lucrativa (+430 festas prontas)", price: "R$59,00", included: true },
      { text: "Pacote de temas e moldes limpos", price: "R$49,90", included: true },
      { text: "Convites digitais no Canva", price: "R$29,90", included: true },
      { text: "Fontes personalizadas", price: "R$27,00", included: true },
      { text: "Acesso por 1 ano", price: "", included: true },
      { text: "Garantia de 15 dias", price: "", included: true },
      { text: "Suporte prioritário", price: "", included: true },
      { text: "Atualizações mensais", price: "", included: true }
    ],
    buttonText: "QUERO O PLANO PREMIUM - R$29,90",
    isPopular: true,
    checkoutLink: "https://pay.kiwify.com.br/t8I0sae",
    socialProof: "Comprado por mais de 743 pessoas nos últimos dias"
  }
];

export default function Pricing() {
  const [currentDay, setCurrentDay] = useState("");
  const [peopleCount, setPeopleCount] = useState(957);
  const [timeRemaining, setTimeRemaining] = useState("");
  const [showUpsellDialog, setShowUpsellDialog] = useState(false);
  
  useEffect(() => {
    const day = format(new Date(), "dd 'DE' MMMM", { locale: ptBR });
    setCurrentDay(day.toUpperCase());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPeopleCount(prev => prev + 1);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const brasilia = new Date(now.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
      
      const midnight = new Date(brasilia);
      midnight.setHours(24, 0, 0, 0);
      
      const diff = midnight.getTime() - brasilia.getTime();
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      setTimeRemaining(`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offers" className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex flex-col items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-md font-heading font-bold text-xs md:text-sm shadow-lg">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="leading-tight">OFERTA ESPECIAL DE BLACK FRIDAY<br />APLICADA SOMENTE ATÉ HOJE {currentDay}</span>
              </div>
              {timeRemaining && (
                <div className="text-lg md:text-xl font-mono font-bold">
                  {timeRemaining}
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              LEVE TUDO ISSO COM<br />92% DE DESCONTO!
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Mais de 430 festas prontas para colocar nome, idade e vender hoje mesmo sem necessidade de criar do zero.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-8 md:mb-10">
            <ArrowRight className="hidden md:block w-7 h-7 text-primary animate-pulse" />
            <ArrowDown className="block md:hidden w-6 h-6 text-primary animate-bounce" />
            <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl text-foreground">
              ESCOLHA SEU PACOTE:
            </h3>
            <ArrowRight className="hidden md:block w-7 h-7 text-primary animate-pulse" />
            <ArrowDown className="block md:hidden w-6 h-6 text-primary animate-bounce" />
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
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-10">
                    <Badge className="bg-accent text-accent-foreground font-bold px-8 py-3 text-base shadow-xl border-2 border-accent-foreground/20">
                      <TrendingUp className="w-5 h-5 mr-2 inline" />
                      MAIS VENDIDO
                    </Badge>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-4 space-y-3 ${tier.isPopular ? 'pt-8' : ''}`}>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl">
                    {tier.name}
                  </h3>
                  
                  <div className="flex justify-center">
                    <Badge variant="secondary" className="font-semibold text-xs md:text-sm px-3 md:px-4 py-2 whitespace-normal text-center">
                      {tier.isPopular ? (
                        <>Escolhido por {peopleCount} pessoas nos últimos dias</>
                      ) : (
                        <>Oferta especial por tempo limitado</>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {tier.deliverables.map((deliverable, i) => (
                      <div key={i} className={`flex items-start gap-3 pb-3 border-b last:border-b-0 ${!deliverable.included ? 'opacity-50' : ''}`}>
                        {deliverable.included ? (
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex items-start justify-between gap-3 flex-1">
                          <p className="text-sm md:text-base flex-1">
                            {deliverable.text}
                          </p>
                          <span className="text-sm md:text-base font-bold text-red-500 line-through flex-shrink-0">
                            {deliverable.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center py-6 bg-muted/30 rounded-md space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">De:</p>
                      <p className="text-2xl line-through text-muted-foreground">
                        {tier.originalTotal}
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">POR UM PAGAMENTO ÚNICO:</p>
                      <p className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">
                        {tier.price}
                      </p>
                      <Badge variant="secondary" className="font-bold">
                        {tier.discount} DE DESCONTO
                      </Badge>
                    </div>
                  </div>
                  
                  {tier.isPopular ? (
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="w-full font-heading font-bold text-base md:text-lg py-6 md:py-7"
                      data-testid={`button-checkout-${index}`}
                    >
                      <a href={tier.checkoutLink}>{tier.buttonText}</a>
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowUpsellDialog(true)}
                      variant="secondary"
                      size="lg"
                      className="w-full font-heading font-bold text-base md:text-lg py-6 md:py-7"
                      data-testid={`button-checkout-${index}`}
                    >
                      {tier.buttonText}
                    </Button>
                  )}
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Compra segura com certificados de segurança.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={showUpsellDialog} onOpenChange={setShowUpsellDialog}>
        <DialogContent className="w-[90%] max-w-md mx-auto bg-background">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 py-2 md:py-4">
            <div className="text-5xl md:text-6xl animate-bounce">
              🎁
            </div>
            
            <div className="space-y-1 md:space-y-2">
              <h2 className="font-heading font-bold text-xl md:text-3xl text-foreground leading-tight">
                ESPERE! OFERTA ESPECIAL<br />DO PACOTE PREMIUM!
              </h2>
              <p className="text-sm md:text-lg text-muted-foreground">
                Faça o upgrade agora para o pacote premium com desconto extra
              </p>
            </div>

            <div className="space-y-1 md:space-y-2">
              <p className="text-base md:text-lg text-muted-foreground">
                De <span className="line-through">R$29,90</span>
              </p>
              <p className="font-heading font-bold text-3xl md:text-5xl text-green-600 dark:text-green-500">
                Por apenas R$19,90
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                Economize R$10,00 agora!
              </p>
            </div>

            <div className="w-full bg-muted/30 rounded-md p-3 md:p-4 space-y-2 md:space-y-3">
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                <p className="text-xs md:text-base text-left">Acesso por 1 ano</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                <p className="text-xs md:text-base text-left">Atualizações mensais</p>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600 dark:text-green-500 flex-shrink-0" />
                <p className="text-xs md:text-base text-left">Suporte prioritário</p>
              </div>
            </div>

            <div className="w-full space-y-2 md:space-y-3">
              <Button
                asChild
                className="w-full font-heading font-bold text-xs md:text-lg py-5 md:py-6 bg-green-600 hover:bg-green-700 text-white border-2 border-green-700"
                size="lg"
                data-testid="button-upsell-accept"
              >
                <a href="https://pay.kiwify.com.br/rRPB02l">
                  SIM, QUERO O PACOTE PREMIUM - R$19,90
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                className="w-full font-heading font-bold text-xs md:text-lg py-5 md:py-6"
                size="lg"
                data-testid="button-upsell-decline"
              >
                <a href="https://pay.kiwify.com.br/6P8i9Ja">
                  NÃO, QUERO O BÁSICO MESMO - R$10
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
