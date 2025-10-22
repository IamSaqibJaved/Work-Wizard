import Image from "next/image";
import Hero from "@/components/Hero";
import Guarantees from "@/components/Guarantees";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
// import OurTeam from "@/components/OurTeam";
// import Events from "@/components/Events";
import ContactUs from "@/components/ContactUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Reveal from "@/components/utils/Reveal";

export default function Home() {
  return (
    <div className="font-sans">
      <main>
        <section id="home" aria-label="Hero Section">
          <Hero 
            titleTop="Work"
            titleBottom="Wizard"
            subtitle="Transform your workflow with intelligent automation and professional project management tools"
            ctaLabel="Start Your Project"
            ctaHref="#contact"
          />
        </section>
        
        <section id="guarantees" aria-label="Our Guarantees">
          <Reveal direction="up" delayMs={100}>
            <Guarantees />
          </Reveal>
        </section>
        
        <section id="about" aria-label="About Us">
          <Reveal direction="up" delayMs={150}>
            <AboutUs />
          </Reveal>
        </section>
        
        <section id="services" aria-label="Our Services">
          <Reveal direction="up" delayMs={150}>
            <Services />
          </Reveal>
        </section>
        
        <section id="portfolio" aria-label="Our Portfolio">
          <Reveal direction="up" delayMs={200}>
            <Portfolio />
          </Reveal>
        </section>
        
        <section id="testimonials" aria-label="Client Testimonials">
          <Reveal direction="up" delayMs={200}>
            <Testimonials />
          </Reveal>
        </section>
        
        <section id="contact" aria-label="Contact Us">
          <Reveal direction="up" delayMs={200}>
            <ContactUs />
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}
