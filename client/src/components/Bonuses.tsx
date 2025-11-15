import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Mail, Type, CheckCircle } from "lucide-react";

const bonuses = [
  {
    icon: Sparkles,
    title: "Pacote de Temas e Moldes Limpos",
    description: "Os temas mais pedidos e os moldes limpos para você criar e personalizar como quiser.",
    items: [
      "Mais de 257 temas de festas",
      "Mais de 20 moldes limpos",
      "Arquivos 100% otimizados para corte manual (tesoura ou estilete)"
    ],
    originalPrice: "R$49,90"
  },
  {
    icon: Mail,
    title: "Convites Digitais no Canva",
    description: "Modelos de convites digitais prontos para personalizar e enviar aos convidados de forma rápida e prática.",
    items: [
      "Mais de 150 modelos de convites digitais",
      "Totalmente editáveis no Canva",
      "Formatos otimizados para WhatsApp e Instagram"
    ],
    originalPrice: "R$29,90"
  },
  {
    icon: Type,
    title: "Fontes Personalizadas",
    description: "Coleção exclusiva de fontes premium para deixar suas artes ainda mais profissionais e únicas.",
    items: [
      "Mais de 50 fontes premium selecionadas",
      "Estilos variados para todos os temas",
      "Compatível com qualquer programa de edição"
    ],
    originalPrice: "R$27,00"
  }
];

export default function Bonuses() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-primary/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              3 BÔNUS EXCLUSIVOS
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Vendemos separado, mas nessa página você leva de graça!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-bonus-${index}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex-shrink-0">
                      <bonus.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg md:text-xl mb-2">
                        {bonus.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {bonus.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="font-medium text-sm">Inclui:</p>
                    {bonus.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-xs text-muted-foreground">Vendido separado:</p>
                      <p className="text-sm line-through text-muted-foreground">{bonus.originalPrice}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Comprando hoje:</p>
                      <Badge className="bg-accent text-accent-foreground font-bold text-base px-4 py-1">
                        GRÁTIS!
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
