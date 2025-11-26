export default function WhatYouGet() {
  const boxTemplates = [
    "https://i.ibb.co/Kjg2K6V2/2.webp",  // Card 1
    "https://i.ibb.co/zhNf00kJ/3.webp",  // Card 2
    "https://i.ibb.co/PzJZ1ZW1/4.webp",  // Card 3
    "https://i.ibb.co/6cZnQtZj/5.webp",  // Card 4
    "https://i.ibb.co/kV1Qp7CZ/6.webp",  // Card 5
    "https://i.ibb.co/KxKfckJ2/7.webp",  // Card 6
    "https://i.ibb.co/HLgcxTSF/8.webp",  // Card 7
    "https://i.ibb.co/ksgW4VWz/9.webp",  // Card 8
    "https://i.ibb.co/r2ytBHSK/10.webp", // Card 9
    "https://i.ibb.co/rGh3cd5S/1.webp",  // Card 10
    "https://i.ibb.co/wZssCf3B/11.webp", // Card 11
    "https://i.ibb.co/Q3CkwcC5/12.webp", // Card 12
  ];

  const themeTemplates = [
    "https://i.ibb.co/LFJV5gx/1-1.webp",     // Card 1
    "https://i.ibb.co/cSL3xsqN/1-2.webp",    // Card 2
    "https://i.ibb.co/h12w3t19/1-3.webp",    // Card 3
    "https://i.ibb.co/wFCxj31Z/1-4.webp",    // Card 4
    "https://i.ibb.co/Q7CH1D8C/1-5.webp",    // Card 5
    "https://i.ibb.co/j94HywJ0/1-6.webp",    // Card 6
    "https://i.ibb.co/2YcQLNXG/1-7.webp",    // Card 7
    "https://i.ibb.co/DHgc02CY/1-8.webp",    // Card 8
    "https://i.ibb.co/TDhH7Wy7/1-9.webp",    // Card 9
    "https://i.ibb.co/sJQvWYjb/1-10.webp",   // Card 10
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
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">Tipos de moldes incluídos:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Bandeirola Modelo 1", "Bandeirola Modelo 2", "Flâmula",
                  "Sacolinha Modelo 1", "Sacolinha Modelo 2", "Caixa Bala",
                  "Caixa Cone", "Caixa Cubo", "Caixa Hexagonal", "Caixa Meia Bala",
                  "Caixa Milk", "Porta Bis", "Caixa Pirâmide", "Caixa Sushi",
                  "Forminhas para Doces", "Rótulo Cofrinho", "Rótulo Garrafinha",
                  "Rótulo Lata de Leite", "Adesivo Latinha Mint to Be",
                  "Rótulo Mini Pringles", "Rótulo Tubete", "Chapéu de Festa",
                  "Plaquinha Divertida", "Porta Bombom", "Cachepô", "E muito mais..."
                ].map((item, index) => (
                  <span
                    key={index}
                    className="inline-block px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                    data-testid={`badge-mold-${index}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
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
                      {img ? (
                        <img
                          src={img}
                          alt={`Tema pronto ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-card border border-border">
                          <span className="text-sm md:text-base font-medium">Tema {index + 1}</span>
                        </div>
                      )}
                    </div>
                  ))}
                  {themeTemplates.map((img, index) => (
                    <div
                      key={`theme-second-${index}`}
                      className="flex-shrink-0 w-80 md:w-96 lg:w-[500px] aspect-[1200/720] rounded-md bg-muted overflow-hidden"
                      data-testid={`scroll-theme-duplicate-${index}`}
                    >
                      {img ? (
                        <img
                          src={img}
                          alt={`Tema pronto ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-card border border-border">
                          <span className="text-sm md:text-base font-medium">Tema {index + 1}</span>
                        </div>
                      )}
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
