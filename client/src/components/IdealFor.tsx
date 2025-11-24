import { Card, CardContent } from "@/components/ui/card";

const profiles = [
  {
    emoji: "💰",
    title: "Buscam uma Renda Extra Real",
    description: "Que precisam ajudar nas despesas de casa sem precisar deixar os filhos ou a família de lado."
  },
  {
    emoji: "🌟",
    title: "Estão Cansadas da Rotina Atual",
    description: "Que se sentem desvalorizadas no trabalho e buscam uma oportunidade prazerosa para virar o jogo."
  },
  {
    emoji: "❤️",
    title: "Amam a Família e o Artesanato",
    description: "Mães, tias e avós que querem economizar produzindo festas de luxo para quem amam, gastando pouco."
  }
];

export default function IdealFor() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/8 via-background to-accent/8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-2">
              IDEAL PARA MULHERES QUE:
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {profiles.map((profile, index) => (
              <Card 
                key={index} 
                className="hover-elevate transition-all duration-300 border-2" 
                data-testid={`card-profile-${index}`}
              >
                <CardContent className="p-6 md:p-8 text-center flex flex-col items-center">
                  <div className="text-6xl md:text-7xl mb-4 md:mb-6">
                    {profile.emoji}
                  </div>
                  <h3 className="font-heading font-bold text-2xl md:text-2xl lg:text-3xl mb-3 md:mb-4 text-primary">
                    {profile.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {profile.description}
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
