import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";

const Impressum = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onContactClick={() => setIsContactFormOpen(true)} />
      <main className="container mx-auto px-4 pt-32 pb-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <div>
            <p className="text-lg leading-relaxed">
              <strong>Steinke Immobilien</strong><br />
              Nonnenstraße 7<br />
              04229 Leipzig
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              <strong>Kontakt:</strong><br />
              Tel: 0341 – 86 266 507<br />
              Mobil: 0157- 38718034<br />
              E-Mail: <a href="mailto:info@steinke-immobilien.com" className="text-primary hover:underline">info@steinke-immobilien.com</a>
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              <strong>Vertretungsberechtigter:</strong><br />
              Svetlana Steinke<br />
              IdNr: 90815237361
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              <strong>Berufsbezeichnung:</strong><br />
              Immobilienmakler IHK
            </p>
          </div>

          <div>
            <p className="text-lg leading-relaxed">
              <strong>Aufsichts- / Erlaubnisbehörde nach §34 c GewO:</strong><br />
              Stadt Leipzig, Sicherheitsbehörde Amt 32, 04092 Leipzig
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ContactFormDialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
    </div>
  );
};

export default Impressum;
