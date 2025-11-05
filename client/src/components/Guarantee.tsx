import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import guaranteeBadge from "@assets/image_1762384554262.png";

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 mb-6">
                <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 text-primary" />
              </div>
              
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                GARANTIA DE 7 DIAS: SEU RISCO É ZERO
              </h2>
              
              <div className="mb-6 flex justify-center">
                <img 
                  src={guaranteeBadge} 
                  alt="Selo de garantia de 15 dias" 
                  className="w-full max-w-[280px] md:max-w-[350px]"
                  data-testid="img-guarantee-badge"
                />
              </div>
              
              <div className="space-y-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                <p>
                  Sua satisfação é <span className="font-bold text-foreground">100% garantida</span>. Você tem <span className="font-bold text-foreground">7 dias inteiros</span> para acessar todos os materiais, testar os modelos e comprovar o potencial de ganhos.
                </p>
                
                <p>
                  Se, por algum motivo, você não estiver totalmente satisfeito, basta solicitar que reembolsaremos <span className="font-bold text-foreground">100% do seu investimento.</span>
                </p>
                
                <p className="font-semibold text-foreground text-lg md:text-xl pt-4">
                  Sem perguntas, sem complicações. O risco é inteiramente nosso.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
