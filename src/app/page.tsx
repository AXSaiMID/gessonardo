import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Craft from "@/components/Craft";
import Works from "@/components/Works";
import Group from "@/components/Group";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Craft />
      <Works />
      <Group />
      <Contact />
      <Footer />
    </main>
  );
}
