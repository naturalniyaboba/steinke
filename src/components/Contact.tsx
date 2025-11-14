import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    content: "+49 (0) 341 XXX XXXX",
    link: "tel:+493410000000",
  },
  {
    icon: Mail,
    title: "E-Mail",
    content: "info@steinke-immobilien.com",
    link: "mailto:info@steinke-immobilien.com",
  },
  {
    icon: MapPin,
    title: "Standort",
    content: "Großraum Leipzig",
    link: null,
  },
];

export const Contact = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Kontaktieren Sie uns
            </h2>
            <p className="text-xl text-muted-foreground">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-elegant transition-all duration-300 border-border/50"
              >
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-accent mb-4">
                    <info.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                  {info.link ? (
                    <a 
                      href={info.link} 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary to-primary/80 border-0 shadow-elegant">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Bereit für Ihre Traumimmobilie?
              </h3>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam den Weg zu Ihrer perfekten Immobilie finden. 
                Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch.
              </p>
              <Button 
                size="lg" 
                variant="accent" 
                className="text-lg px-12"
              >
                Jetzt Kontakt aufnehmen
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
