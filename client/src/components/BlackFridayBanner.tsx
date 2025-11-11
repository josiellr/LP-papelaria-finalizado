import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function BlackFridayBanner() {
  const [currentDay, setCurrentDay] = useState("");
  
  useEffect(() => {
    const day = format(new Date(), "dd 'DE' MMMM", { locale: ptBR });
    setCurrentDay(day.toUpperCase());
  }, []);
  
  return (
    <div className="w-full bg-destructive text-destructive-foreground py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-2 font-heading font-bold text-xs md:text-sm">
          <Flame className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          <span className="text-center leading-tight">
            OFERTA ESPECIAL DE BLACK FRIDAY<br />APLICADA SOMENTE ATÉ {currentDay}
          </span>
        </div>
      </div>
    </div>
  );
}
