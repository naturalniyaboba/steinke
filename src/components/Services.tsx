import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Key, TrendingUp, Users, Shield, Clock, ExternalLink } from "lucide-react";
import rentalImage from "@/assets/rental-service.jpg";
import salesImage from "@/assets/sales-service-gründerzeit.jpg";
import consultationImage from "@/assets/consultation.jpg";

const services = [
  {
    icon: Home,
    title: "Vermietung",
    description: "Umfassende Vermarktungstätigkeit bei der Suche nach dem richtigen Mieter für Ihre Wohn- und Gewerbeimmobilie.",
    image: rentalImage,
  },
  {
    icon: Key,
    title: "Verkauf",
    description: "Wir betreuen Sie im gesamten Kaufprozess und stehen Ihnen als zuverlässiger Vertreter auch über die Vertragsunterzeichnung hinaus zur Seite.",
    image: salesImage,
  },
  {
    icon: Users,
    title: "Beratung",
    description: "Professionelle und freundliche Beratung für alle Ihre Immobilienfragen - national und international.",
    image: consultationImage,
  },
];

const benefits = [
  {
    icon: Shield,
    title: "Kein Risiko",
    description: "Maklerprovision nur bei erfolgreichem Verkauf oder Vermietung",
  },
  {
    icon: TrendingUp,
    title: "Marktkenntnis",
    description: "Expertise im Großraum Leipzig und internationalen Märkten",
  },
  {
    icon: Clock,
    title: "Persönlich",
    description: "Individuelle Betreuung während des gesamten Prozesses",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Kaufen - Verkaufen, Mieten - Vermieten. Wir sind Ihr kompetenter Partner.
          </p>
          <Button 
            variant="default" 
            size="lg"
            className="mt-4"
            onClick={() => window.open('https://www.steinke-immobilien.com/', '_blank')}
          >
            Unsere Angebote ansehen
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group hover:shadow-elegant transition-all duration-300 border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <service.icon className="w-12 h-12 text-accent mb-2" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-muted/30 rounded-2xl p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ihre Vorteile bei uns
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent">
                  <benefit.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-semibold">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
