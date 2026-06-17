import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { TechExpertise } from "./components/TechExpertise";
import { Leadership } from "./components/Leadership";
import { Testimonials } from "./components/Testimonials";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      {/* Accessibility: jump straight to content */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      {/* Signature ambient background */}
      <div className="aurora-field" aria-hidden>
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="blob blob-c" />
      </div>
      <div className="grid-overlay" aria-hidden />

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <TechExpertise />
        <Leadership />
        <Testimonials />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
