import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Download, Edit, DollarSign } from "lucide-react";

const steps = [
  {
    number: "1️⃣",
    icon: ShoppingCart,
    title: "Compra o Kit",
    description: "Processo rápido e seguro"
  },
  {
    number: "2️⃣",
    icon: Download,
    title: "Baixa os moldes",
    description: "Envia direto para o Canva Grátis"
  },
  {
    number: "3️⃣",
    icon: Edit,
    title: "Edita o nome, idade da criança",
    description: "Personalização simples e rápida"
  },
  {
    number: "4️⃣",
    icon: DollarSign,
    title: "Imprime e começa a vender",
    description: "E agora... Ganha Dinheiro!"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
              COMO FUNCIONA?
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center" data-testid={`card-step-${index}`}>
                <CardContent className="p-6">
                  <div className="text-4xl md:text-5xl mb-3">{step.number}</div>
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm md:text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-base md:text-lg font-medium text-muted-foreground max-w-3xl mx-auto">
              Sem necessidade de experiência, impressora profissional ou máquina de corte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
