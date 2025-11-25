const imageLinks = [
  "",  // Card 1 - Adicione o link da imagem aqui
  "",  // Card 2 - Adicione o link da imagem aqui
  "",  // Card 3 - Adicione o link da imagem aqui
  "",  // Card 4 - Adicione o link da imagem aqui
  "",  // Card 5 - Adicione o link da imagem aqui
  "",  // Card 6 - Adicione o link da imagem aqui
  "",  // Card 7 - Adicione o link da imagem aqui
  "",  // Card 8 - Adicione o link da imagem aqui
  "",  // Card 9 - Adicione o link da imagem aqui
  "",  // Card 10 - Adicione o link da imagem aqui
  "",  // Card 11 - Adicione o link da imagem aqui
  "",  // Card 12 - Adicione o link da imagem aqui
];

export default function InfiniteScroll() {
  return (
    <section className="pt-4 pb-12 md:pt-6 md:pb-16 bg-background overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
        `}
      </style>
      <div className="relative">
        <div
          className="flex gap-4 md:gap-6"
          data-testid="infinite-scroll-container"
        >
          <div className="flex gap-4 md:gap-6 animate-scroll">
            {imageLinks.map((imgLink, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-60 md:w-80 lg:w-96 aspect-[3/2] rounded-md bg-muted"
                data-testid={`scroll-image-${index}`}
              >
                {imgLink ? (
                  <img
                    src={imgLink}
                    alt={`Exemplo de kit de festas ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-card border border-border rounded-md">
                    <span className="text-sm md:text-base font-medium">Card {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
            {imageLinks.map((imgLink, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-60 md:w-80 lg:w-96 aspect-[3/2] rounded-md bg-muted"
                data-testid={`scroll-image-duplicate-${index}`}
              >
                {imgLink ? (
                  <img
                    src={imgLink}
                    alt={`Exemplo de kit de festas ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-card border border-border rounded-md">
                    <span className="text-sm md:text-base font-medium">Card {index + 1}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-0 left-0 h-full w-24 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 h-full w-24 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
