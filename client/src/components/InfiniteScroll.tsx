import { useEffect, useRef, useState } from "react";

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
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = scrollContainer.scrollLeft;
    const scrollSpeed = 1;
    let animationId: number;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed;
        
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => {
      setIsPaused(true);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };

    const handleMouseLeave = () => {
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 500);
    };

    const handleTouchStart = () => {
      setIsPaused(true);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };

    const handleTouchEnd = () => {
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 1000);
    };

    const handleScroll = () => {
      scrollAmount = scrollContainer.scrollLeft;
      setIsPaused(true);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      pauseTimeoutRef.current = setTimeout(() => {
        setIsPaused(false);
      }, 1500);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      cancelAnimationFrame(animationId);
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isPaused]);

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth cursor-grab active:cursor-grabbing"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
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
