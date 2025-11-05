import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-xl md:text-2xl mb-4">DÚVIDAS?</h3>
            <a 
              href="https://wa.me/5574992276606" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
              data-testid="link-whatsapp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>📲 +55 74 9922-7606</span>
            </a>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Termos de uso
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Política de Privacidade
            </a>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>Copyright © 2025 – App de papelaria personalizada | Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
