import scroll1 from "@assets/scroll-1.png";
import scroll2 from "@assets/scroll-2.png";
import scroll3 from "@assets/scroll-3.png";
import scroll6 from "@assets/scroll-6.png";
import scroll7 from "@assets/scroll-7.png";
import scroll8 from "@assets/scroll-8.png";
import scroll9 from "@assets/scroll-9.png";
import scroll10 from "@assets/scroll-10.png";
import scroll11 from "@assets/scroll-11.png";
import scroll12 from "@assets/scroll-12.png";
import scroll13 from "@assets/scroll-13.png";

const imageLinks = [
  scroll1,
  scroll2,
  scroll3,
  scroll6,
  scroll7,
  scroll8,
  scroll9,
  "https://i.ibb.co/rGh3cd5S/1.webp",
  scroll10,
  scroll11,
  scroll12,
  scroll13,
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
                <img
                  src={imgLink}
                  alt={`Exemplo de kit de festas ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
            {imageLinks.map((imgLink, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-60 md:w-80 lg:w-96 aspect-[3/2] rounded-md bg-muted"
                data-testid={`scroll-image-duplicate-${index}`}
              >
                <img
                  src={imgLink}
                  alt={`Exemplo de kit de festas ${index + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  loading="lazy"
                />
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
