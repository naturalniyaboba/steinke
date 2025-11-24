import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ContentProtection } from "@/components/ContentProtection";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";

const Index = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);

  return (
    <div className="min-h-screen select-none">
      <ContentProtection />
      <Header onContactClick={openContactForm} />
      <main>
        <section id="home">
          <Hero onContactClick={openContactForm} />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact onContactClick={openContactForm} />
        </section>
      </main>
      <Footer />
      <ContactFormDialog open={isContactFormOpen} onOpenChange={setIsContactFormOpen} />
    </div>
  );
};

export default Index;
