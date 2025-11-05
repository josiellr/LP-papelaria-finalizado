import { Card, CardContent } from "@/components/ui/card";
import guaranteeImage from "@assets/image_1762384190703.png";

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
                GARANTIA DE 7 DIAS: SEU RISCO É ZERO
              </h2>
              
              <div className="mb-6 flex justify-center">
                <img 
                  src={guaranteeImage} 
                  alt="Garantia de 7 dias com seu risco zero" 
                  className="w-full max-w-[200px] md:max-w-[250px] rounded-lg"
                  data-testid="img-guarantee"
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
