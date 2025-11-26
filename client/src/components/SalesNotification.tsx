import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface Sale {
  name: string;
  location: string;
  package: string;
  timeAgo: string;
}

const femaleNames = [
  "Ana Silva",
  "Maria Santos",
  "Juliana Costa",
  "Carla Oliveira",
  "Beatriz Lima",
  "Fernanda Rodrigues",
  "Patricia Alves",
  "Camila Ferreira",
  "Mariana Souza",
  "Larissa Mendes",
  "Gabriela Martins",
  "Amanda Ribeiro",
  "Letícia Barros",
  "Renata Cardoso",
  "Vanessa Araújo",
  "Priscila Dias",
  "Daniela Cunha",
  "Adriana Rocha",
  "Luciana Teixeira",
  "Carolina Nunes",
  "Tatiana Freitas",
  "Simone Castro",
  "Roberta Monteiro",
  "Aline Pereira",
  "Cristina Gomes"
];

const locations = [
  "São Paulo, SP",
  "Rio de Janeiro, RJ",
  "Belo Horizonte, MG",
  "Brasília, DF",
  "Salvador, BA",
  "Curitiba, PR",
  "Fortaleza, CE",
  "Recife, PE",
  "Porto Alegre, RS",
  "Manaus, AM",
  "Goiânia, GO",
  "Campinas, SP",
  "São Luís, MA",
  "Maceió, AL",
  "Natal, RN",
  "João Pessoa, PB",
  "Florianópolis, SC",
  "Vitória, ES",
  "Aracaju, SE"
];

const timeOptions = [
  "há 2 minutos",
  "há 5 minutos",
  "há 8 minutos",
  "há 12 minutos",
  "há 15 minutos",
  "há 18 minutos",
  "há 23 minutos",
  "há 30 minutos",
  "há 35 minutos",
  "há 42 minutos"
];

let notificationCounter = 0;

const generateRandomSale = (): Sale => {
  notificationCounter++;
  const isPremium = notificationCounter % 5 !== 0;
  
  return {
    name: femaleNames[Math.floor(Math.random() * femaleNames.length)],
    location: locations[Math.floor(Math.random() * locations.length)],
    package: isPremium ? "Pacote Premium (R$17)" : "Pacote Básico (R$10)",
    timeAgo: timeOptions[Math.floor(Math.random() * timeOptions.length)]
  };
};

export default function SalesNotification() {
  const [currentSale, setCurrentSale] = useState<Sale | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const sale = generateRandomSale();
      setCurrentSale(sale);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 6000);
    };

    const initialDelay = setTimeout(() => {
      showNotification();
      
      const interval = setInterval(() => {
        showNotification();
      }, 15000);

      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialDelay);
  }, []);

  if (!currentSale || !isVisible) return null;

  return (
    <div 
      className="fixed top-6 right-6 z-50 animate-in slide-in-from-right-5 duration-500"
      data-testid="notification-sale"
    >
      <Card className="p-4 shadow-2xl border-2 border-green-500/20 bg-card max-w-sm">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-foreground mb-1">
              Nova compra realizada!
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{currentSale.name}</span> de{" "}
              <span className="font-medium text-foreground">{currentSale.location}</span>
            </p>
            <p className="text-sm text-muted-foreground">
              comprou o <span className="font-medium text-foreground">{currentSale.package}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {currentSale.timeAgo}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
