import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import Tools from "../components/Tools";
import Work from "../components/Work";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        color: "#13231A",
        background: "#F6F8F4",
        width: "100%",
      }}
    >
      <Header />
      <Hero />
      <Services />
      <Process />
      <Tools />
      <Work />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
