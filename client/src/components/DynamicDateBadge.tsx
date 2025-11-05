import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export default function DynamicDateBadge() {
  const [currentDate, setCurrentDate] = useState("");
  
  useEffect(() => {
    const formattedDate = format(new Date(), "dd 'de' MMMM", { locale: ptBR });
    setCurrentDate(formattedDate);
  }, []);
  
  return (
    <div className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground px-6 py-3 rounded-md font-heading font-bold text-sm md:text-base animate-pulse shadow-lg">
      <Flame className="w-5 h-5" />
      <span>OFERTA VÁLIDA ATÉ HOJE, {currentDate.toUpperCase()}</span>
    </div>
  );
}
