import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// todo: remove mock functionality - replace with real testimonials
const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Comecei há 2 meses e já fiz mais de R$3.000! Os moldes são lindos e super fáceis de editar.",
    initials: "MS",
    image: "https://i.ibb.co/Rpvst2m/image-1762384554262.png"
  },
  {
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Nunca tinha mexido com papelaria e consegui fazer minha primeira venda no mesmo dia que comprei!",
    initials: "AC"
  },
  {
    name: "Juliana Santos",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "O curso de Canva foi essencial. Agora faço festas personalizadas que vendem muito bem!",
    initials: "JS"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              DEPOIMENTOS
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Veja o que nossos clientes estão dizendo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-sm md:text-base text-muted-foreground italic">
                    "{testimonial.text}"
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
