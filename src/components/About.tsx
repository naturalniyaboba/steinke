import { MapPin, Globe2 } from "lucide-react";
import ownerPhoto from "@/assets/owner-photo.jpg";

export const About = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Über Steinke Immobilien
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          </div>

          {/* Owner Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
            <div className="md:w-1/3">
              <img 
                src={ownerPhoto} 
                alt="Inhaberin Steinke Immobilien" 
                className="rounded-2xl shadow-lg w-full object-cover aspect-square"
              />
            </div>
            <div className="md:w-2/3 space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Ihre Ansprechpartnerin</h3>
              <p className="text-xl text-foreground/80 leading-relaxed">
                Mit langjähriger Erfahrung und Leidenschaft für Immobilien begleite ich Sie persönlich 
                auf dem Weg zu Ihrer Traumimmobilie. Vertrauen, Kompetenz und individuelle Betreuung 
                stehen bei mir an erster Stelle.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-xl leading-relaxed">
              Fasziniert von dem Facettenreichtum der Immobilienbranche, möchten wir auch Sie begeistern 
              und bieten Ihnen eine freundliche, sachkompetente und wirklich hilfreiche Begleitung auf dem 
              gemeinsamen Weg zu Ihrer individuellen Wunschimmobilie.
            </p>
            
            <p className="text-lg leading-relaxed">
              Unsere Dienstleistung sehen wir in erster Linie darin, dass wir Menschen mit Menschen und 
              Immobilien zusammenbringen. Mit dem Schwerpunkt auf Wohnimmobilien sind wir im Großraum 
              Leipzig tätig.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="flex gap-4 p-6 bg-card rounded-lg shadow-card">
                <MapPin className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Regional</h3>
                  <p className="text-muted-foreground">
                    Spezialisiert auf den Großraum Leipzig mit umfassender Marktkenntnis
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 p-6 bg-card rounded-lg shadow-card">
                <Globe2 className="w-12 h-12 text-accent flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">International</h3>
                  <p className="text-muted-foreground">
                    Immobilien auf dem spanischen Festland und der sonnigen Insel Teneriffa
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border border-border/50">
              <p className="text-2xl font-semibold text-center text-foreground">
                Wir lieben Immobilien und freuen uns, Sie und Ihr Anliegen kennenzulernen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
