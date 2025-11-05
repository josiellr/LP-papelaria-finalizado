const imageLinks = [
  "https://i.ibb.co/wbtJpJT/image.png",
  "https://i.ibb.co/4ZtcxyV/image.png",
  "https://i.ibb.co/cS8sP5z/image.png",
  "https://i.ibb.co/GgkTqx5/image.png",
  "https://i.ibb.co/PZTYnjm/image.png",
  "https://i.ibb.co/3yTf7V4/image.png",
  "https://i.ibb.co/mrqFD0f/image.png",
  "https://i.ibb.co/nMzXmP9/image.png",
  "https://i.ibb.co/F4DdQQX/image.png",
  "https://i.ibb.co/7tzyHCH/image.png",
  "https://i.ibb.co/2Y7kPjr/image.png",
  "https://i.ibb.co/Wpn5gXD/image.png",
  "https://i.ibb.co/B27r1WF/image.png",
];

export default function InfiniteScroll() {
  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
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
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm md:text-base">Imagem {index + 1}</span>
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
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm md:text-base">Imagem {index + 1}</span>
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
