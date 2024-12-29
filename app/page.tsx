import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import CaseStudies from "./components/sections/CaseStudies";
import Development from "./components/sections/Development";
import Design from "./components/sections/Design";
import Steps from "./components/sections/Steps";
import Solutions from "./components/sections/Solutions";
import Blog from "./components/sections/Blog";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CaseStudies />
      <Development />
      <Design />
      <Steps />
      <Blog />
      <Solutions />
      <Footer />
    </>
  );
}
