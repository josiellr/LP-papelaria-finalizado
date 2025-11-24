export default function WhatYouGet() {
  const boxTemplates = [
    // Placeholder - usuário enviará as imagens reais depois
    "https://via.placeholder.com/512x800/ff69b4/ffffff?text=Molde+1",
    "https://via.placeholder.com/512x800/ffd700/ffffff?text=Molde+2",
    "https://via.placeholder.com/512x800/ff69b4/ffffff?text=Molde+3",
    "https://via.placeholder.com/512x800/ffd700/ffffff?text=Molde+4",
    "https://via.placeholder.com/512x800/ff69b4/ffffff?text=Molde+5",
    "https://via.placeholder.com/512x800/ffd700/ffffff?text=Molde+6",
  ];

  const themeTemplates = [
    // Placeholder - usuário enviará as imagens reais depois
    "https://via.placeholder.com/1200x720/ff69b4/ffffff?text=Tema+1",
    "https://via.placeholder.com/1200x720/ffd700/ffffff?text=Tema+2",
    "https://via.placeholder.com/1200x720/ff69b4/ffffff?text=Tema+3",
    "https://via.placeholder.com/1200x720/ffd700/ffffff?text=Tema+4",
    "https://via.placeholder.com/1200x720/ff69b4/ffffff?text=Tema+5",
    "https://via.placeholder.com/1200x720/ffd700/ffffff?text=Tema+6",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes scroll-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
          .animate-scroll-left {
            animation: scroll-left 40s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        `}
      </style>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              O QUE VAI RECEBER COMPRANDO HOJE?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Assim que o pagamento for confirmado, você recebe acesso imediato no e-mail e WhatsApp e já começa a vender no mesmo dia, mesmo que não tenha experiência prévia.
            </p>
          </div>

          {/* Seção 1: Moldes de Caixinhas */}
          <div className="mb-16 md:mb-20">
            <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
              MOLDES DE CAIXINHAS PARA PERSONALIZAR NO CANVA GRÁTIS
            </h3>
            
            <div className="relative overflow-hidden">
              <div className="flex gap-4 md:gap-6" data-testid="scroll-boxes-container">
                <div className="flex gap-4 md:gap-6 animate-scroll-left">
                  {boxTemplates.map((img, index) => (
                    <div
                      key={`box-first-${index}`}
                      className="flex-shrink-0 w-48 md:w-64 aspect-[512/800] rounded-md bg-muted overflow-hidden"
                      data-testid={`scroll-box-${index}`}
                    >
                      <img
                        src={img}
                        alt={`Molde de caixinha ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {boxTemplates.map((img, index) => (
                    <div
                      key={`box-second-${index}`}
                      className="flex-shrink-0 w-48 md:w-64 aspect-[512/800] rounded-md bg-muted overflow-hidden"
                      data-testid={`scroll-box-duplicate-${index}`}
                    >
                      <img
                        src={img}
                        alt={`Molde de caixinha ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 left-0 h-full w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
          </div>

          {/* Seção 2: Temas e Fontes */}
          <div className="mb-8">
            <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
              MAIS DE 1.137 TEMAS PRONTOS PARA UTILIZAR E 237 FONTES PERSONALIZADAS
            </h3>
            
            <div className="relative overflow-hidden">
              <div className="flex gap-4 md:gap-6" data-testid="scroll-themes-container">
                <div className="flex gap-4 md:gap-6 animate-scroll-right">
                  {themeTemplates.map((img, index) => (
                    <div
                      key={`theme-first-${index}`}
                      className="flex-shrink-0 w-80 md:w-96 lg:w-[500px] aspect-[1200/720] rounded-md bg-muted overflow-hidden"
                      data-testid={`scroll-theme-${index}`}
                    >
                      <img
                        src={img}
                        alt={`Tema pronto ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {themeTemplates.map((img, index) => (
                    <div
                      key={`theme-second-${index}`}
                      className="flex-shrink-0 w-80 md:w-96 lg:w-[500px] aspect-[1200/720] rounded-md bg-muted overflow-hidden"
                      data-testid={`scroll-theme-duplicate-${index}`}
                    >
                      <img
                        src={img}
                        alt={`Tema pronto ${index + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 left-0 h-full w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
