import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-property.jpg";
import { Home, ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxus Immobilie" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center justify-center gap-2 text-accent mb-4">
            <Home className="w-8 h-8" />
            <span className="text-lg font-semibold tracking-wider uppercase">Steinke Immobilien</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Herzlich willkommen bei Steinke Immobilien
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Ihr erster und zuverlässiger Ansprechpartner für In- und Auslandsimmobilien. 
            Wir begleiten Sie professionell auf dem Weg zu Ihrer Wunschimmobilie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button size="lg" variant="hero" className="text-lg px-8" onClick={scrollToServices}>
              Immobilien entdecken
              <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 border-2 border-primary/20 hover:border-primary/40" onClick={() => setIsContactFormOpen(true)}>
              Beratung anfragen
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>

      <ContactFormDialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
    </section>
  );
};
