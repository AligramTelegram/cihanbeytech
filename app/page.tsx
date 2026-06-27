import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
