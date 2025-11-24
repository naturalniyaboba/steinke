import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AGB = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            Unsere Allgemeinen Geschäftsbedingungen (AGB) sind die Grundlage unserer Zusammenarbeit und ermöglichen uns, Ihrem Wunsch entsprechende Immobilienangebote zu übermitteln. Jegliches, auch mündliches Anfordern unserer Dienstleistungen bedeutet Abforderung unseres Angebotes zur Erbringung einer kostenpflichtigen Maklerleistung. Als Makler sind wir berechtigt, auch für den anderen Vertragsteil entgeltlich tätig zu werden.
          </p>

          <p className="text-lg leading-relaxed">
            Mit einer Vermittlungsaufgabe bieten wir dem Empfänger das Objekt und zugleich unsere Dienste als Makler auf Grundlage gemäß § 34 c GewO an. Der Inhalt ist vertraulich zu behandeln und nur für den Empfänger bestimmt. Die Weitergabe an Dritte, auch auszugsweise, bedarf unserer schriftlichen Zustimmung. Alle Angebote sind freibleibend und unverbindlich, Änderungen, Zwischenvermietungen oder Verkäufe vorbehalten. Eine Gewähr, dass ein Objekt bei Zugang einer Vermittlungsaufgabe noch verfügbar ist, kann nicht übernommen werden.
          </p>

          <p className="text-lg leading-relaxed">
            Die gemachten Angaben stammen vom Auftraggeber bzw. aus den uns vom Auftraggeber überlassenen Unterlagen. Trotz größter Sorgfalt bei der Zusammenstellung können wir für die Richtigkeit der Angaben keine Haftung übernehmen.
          </p>

          <p className="text-lg leading-relaxed">
            Eine Provision beim Verkauf ist nur dann zu zahlen, wenn ein notarieller Vertrag über das angebotene Objekt beurkundet wird, auch wenn wir beim Vertragsabschluss nicht mitwirken. Die Provision ist bei Beurkundung verdient und fällig und an uns zu zahlen.
          </p>

          <p className="text-lg leading-relaxed">
            Bei Nachweis oder Vermittlung von Wohnungsmietverträgen beträgt die Provision 2 Nettomonatsmieten zzgl. der jeweils geltenden Mehrwertsteuer, bei gewerblichen Mietverträgen 3 Nettomonatsmieten zzgl. der jeweils geltenden Mehrwertsteuer. Diese Provision ist beim Abschluss des nachgewiesenen oder vermittelten Mietvertrages fällig und zahlbar.
          </p>

          <p className="text-lg leading-relaxed">
            Die Provisionszahlung kann bar oder unbar (Überweisung oder Lastschriftverfahren durch Einzugsermächtigung) geleistet werden. Sollte der/die Auftraggeber/in Zahlungsverzug geraten, sind Steinke Immobilien die dadurch entstanden Kosten (Porto-, Mahn- und Verwaltungsgebühren, Inkasso- und/oder Anwaltskosten) zu erstatten.
          </p>

          <p className="text-lg leading-relaxed">
            Von unseren allgemeinen Geschäftsbedingungen abweichende Vereinbarungen bedürfen der Schriftform. Handelt der/die Auftraggeber/in als oder für einen Kaufmann, wird als Gerichtsstand Leipzig vereinbart. Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
