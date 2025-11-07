import { Card, CardContent } from "@/components/ui/card";
import { PartyPopper, Mail, Gift, Type, ShoppingBag, Sparkles } from "lucide-react";

const features = [
  {
    icon: PartyPopper,
    title: "KIT DE PAPELARIA LUCRATIVA",
    description: "+430 moldes prontos para Editar e Vender"
  },
  {
    icon: Mail,
    title: "Convites digitais e para imprimir",
    description: "Personalize e envie ou imprima"
  },
  {
    icon: Gift,
    title: "Kits de festa completos",
    description: "Caixas, toppers, etiquetas e lembrancinhas"
  },
  {
    icon: Type,
    title: "Letras e números 3D",
    description: "Para personalizar qualquer festa"
  },
  {
    icon: ShoppingBag,
    title: "Sacolas e embalagens personalizada",
    description: "Embalagens prontas para seus produtos"
  },
  {
    icon: Sparkles,
    title: "Itens temáticos prontos para imprimir",
    description: "Diversos temas de festas incluídos"
  }
];

export default function WhatYouGet() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              O QUE VAI RECEBER COMPRANDO HOJE?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Assim que o pagamento for confirmado, você recebe acesso imediato no e-mail e WhatsApp e já começa a vender no mesmo dia, mesmo que não tenha experiência prévia.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg md:text-xl mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
