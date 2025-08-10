import Image from "next/image";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import OurTeam from "@/components/OurTeam";
import Events from "@/components/Events";
import ContactUs from "@/components/ContactUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <div id="home" className="-mt-20">
        <Hero videoId="7QWq4AtsRKc" />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="team">
        <OurTeam />
      </div>
      <div id="events">
        <Events />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}
