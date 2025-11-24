import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-bold text-xl">Steinke Immobilien</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              Ihr zuverlässiger Partner für In- und Auslandsimmobilien. Spezialisiert auf den Großraum Leipzig und
              internationale Märkte.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Großraum Leipzig</li>
              <li>info@steinke-immobilien.com</li>
              <li>+49 (0) 157 387 180 34</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <Link 
              to="/impressum" 
              className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
            >
              Impressum
            </Link>
            <Link 
              to="/datenschutz" 
              className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
            >
              Datenschutz
            </Link>
            <Link 
              to="/agb" 
              className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
            >
              AGB
            </Link>
          </div>
          <p className="text-center text-primary-foreground/60">
            &copy; {currentYear} Steinke Immobilien. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};
