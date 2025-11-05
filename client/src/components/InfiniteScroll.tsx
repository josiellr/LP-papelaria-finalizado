import { useEffect, useRef } from "react";

const imageLinks = [
  "", // Adicione o link da imagem 1 aqui
  "", // Adicione o link da imagem 2 aqui
  "", // Adicione o link da imagem 3 aqui
  "", // Adicione o link da imagem 4 aqui
  "", // Adicione o link da imagem 5 aqui
  "", // Adicione o link da imagem 6 aqui
  "", // Adicione o link da imagem 7 aqui
  "", // Adicione o link da imagem 8 aqui
  "", // Adicione o link da imagem 9 aqui
  "", // Adicione o link da imagem 10 aqui
  "", // Adicione o link da imagem 11 aqui
  "", // Adicione o link da imagem 12 aqui
  "", // Adicione o link da imagem 13 aqui
];

export default function InfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    const animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          data-testid="infinite-scroll-container"
        >
          {imageLinks.map((imgLink, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-60 md:w-80 lg:w-96 aspect-[3/2] rounded-md overflow-hidden bg-muted hover-elevate transition-transform duration-300"
              data-testid={`scroll-image-${index}`}
            >
              {imgLink ? (
                <img
                  src={imgLink}
                  alt={`Exemplo de kit de festas ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-sm md:text-base">Imagem {index + 1}</span>
                </div>
              )}
            </div>
          ))}
          {imageLinks.map((imgLink, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-60 md:w-80 lg:w-96 aspect-[3/2] rounded-md overflow-hidden bg-muted hover-elevate transition-transform duration-300"
              data-testid={`scroll-image-duplicate-${index}`}
            >
              {imgLink ? (
                <img
                  src={imgLink}
                  alt={`Exemplo de kit de festas ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-sm md:text-base">Imagem {index + 1}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
