import { Card, CardContent } from "@/components/ui/card";
import { Users, TrendingUp } from "lucide-react";

const profiles = [
  {
    icon: Users,
    title: "Mulheres, mães, artesãs e pessoas que querem uma renda extra.",
    emoji: "👩"
  },
  {
    icon: TrendingUp,
    title: "Quem quer começar a lucrar hoje mesmo com investimento mínimo.",
    emoji: "💸"
  }
];

export default function IdealFor() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/8 via-background to-accent/8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              IDEAL PARA
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {profiles.map((profile, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-profile-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl md:text-6xl mb-4">{profile.emoji}</div>
                  <p className="text-base md:text-lg font-medium leading-relaxed">
                    {profile.title}
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
