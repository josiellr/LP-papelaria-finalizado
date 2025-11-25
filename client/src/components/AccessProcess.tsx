import { CheckCircle, Mail, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AccessProcess() {
  const steps = [
    {
      number: "1",
      icon: CheckCircle,
      title: "Pagamento Aprovado ✅",
      description: "Assim que você finalizar a compra, nosso sistema identifica o pagamento automaticamente."
    },
    {
      number: "2",
      icon: Mail,
      title: "Verifique seu E-mail 📩",
      description: "Você receberá imediatamente um e-mail com seu login e senha exclusivos para acessar nossa plataforma segura."
    },
    {
      number: "3",
      icon: Rocket,
      title: "Comece a Lucrar 🚀",
      description: "Pronto! Basta entrar na Área de Membros, baixar seus kits e começar a produzir suas primeiras encomendas hoje mesmo."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
              COMO VOU RECEBER MEU ACESSO?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              O processo é automático e leva menos de 2 minutos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-access-step-${index}`}>
                <CardContent className="p-6 md:p-8 text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-2xl md:text-3xl text-primary">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-lg overflow-hidden shadow-2xl border">
            <img
              src="https://i.ibb.co/YDPtgdF/area-membros.png"
              alt="Área de Membros - Plataforma de acesso aos kits"
              className="w-full h-auto"
              data-testid="img-member-area"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
