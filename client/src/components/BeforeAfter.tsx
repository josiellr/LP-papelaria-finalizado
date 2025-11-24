export default function BeforeAfter() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center">
            ANTES E DEPOIS
          </h2>
          
          <div className="w-full rounded-md overflow-hidden shadow-lg">
            <img 
              src="https://i.ibb.co/Gf9ZNqtF/antes-depois.png" 
              alt="Antes e Depois - Transformação com Kit de Festas Lucrativas" 
              className="w-full h-auto object-cover"
              data-testid="img-before-after"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
