import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O que vou receber com a minha compra?",
    answer: 'Você receberá acesso imediato e vitalício ao Kit de Festas Lucrativas, que inclui mais de 430 modelos prontos para editar no Canva Free. Além disso, você receberá sem custo adicional nossos 3 bônus exclusivos: o curso expresso "Canva do Zero ao Lucro", o Planner de Vendas de Papelaria e o Pacote de Mensagens e Modelos de Divulgação.'
  },
  {
    question: "Posso recortar com tesoura?",
    answer: "Sim! Todos os arquivos são otimizados para corte manual com tesoura ou estilete. Você não precisa de máquina de corte profissional."
  },
  {
    question: "Como vou receber o acesso ao material?",
    answer: "Assim que o pagamento for confirmado, você receberá o acesso imediato por e-mail e WhatsApp. Tudo é digital e instantâneo."
  },
  {
    question: "Que papel devo usar?",
    answer: "Recomendamos papel fotográfico ou papel couché para melhores resultados. O curso inclui orientações completas sobre tipos de papel e impressão."
  },
  {
    question: "Vou ter que pagar algo a mais?",
    answer: "Não! O pagamento é único e você tem acesso vitalício a todo o conteúdo e atualizações futuras, sem custos adicionais."
  },
  {
    question: "Qualquer dúvida a mais chame no WhatsApp",
    answer: "Nossa equipe está disponível no WhatsApp +55 74 9922-7606 para tirar todas as suas dúvidas!"
  }
];

export default function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm md:text-base text-muted-foreground uppercase tracking-wide mb-2">
              AS principais dúvidas...
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl">
              PERGUNTAS FREQUENTES
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-md px-6 hover-elevate"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold text-base md:text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
