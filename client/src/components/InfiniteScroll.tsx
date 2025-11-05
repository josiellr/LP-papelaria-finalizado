import { useEffect, useRef } from "react";
import image1 from "@assets/image_1762302662743.png";
import image2 from "@assets/scroll-1.png";
import image3 from "@assets/scroll-2.png";
import image4 from "@assets/scroll-3.png";
import image5 from "@assets/scroll-6.png";
import image6 from "@assets/scroll-7.png";
import image7 from "@assets/scroll-8.png";
import image8 from "@assets/scroll-9.png";
import image9 from "@assets/scroll-10.png";
import image10 from "@assets/scroll-11.png";
import image11 from "@assets/scroll-12.png";
import image12 from "@assets/scroll-13.png";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function InfiniteScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      scrollAmount += scrollSpeed;
      
      // Reset scroll when we've scrolled past half the content (for seamless loop)
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
          className="flex gap-6 md:gap-8 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          data-testid="infinite-scroll-container"
        >
          {/* First set of images */}
          {images.map((img, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-64 md:w-80 h-80 md:h-96 rounded-md overflow-hidden hover-elevate transition-transform duration-300"
              data-testid={`scroll-image-${index}`}
            >
              <img
                src={img}
                alt={`Exemplo de kit de festas ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((img, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-64 md:w-80 h-80 md:h-96 rounded-md overflow-hidden hover-elevate transition-transform duration-300"
              data-testid={`scroll-image-duplicate-${index}`}
            >
              <img
                src={img}
                alt={`Exemplo de kit de festas ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
