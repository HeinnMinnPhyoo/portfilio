import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import Hero from "@/src/sections/hero/Hero";
import About from "@/src/sections/about/About";
import Skills from "@/src/sections/skills/Skills";
import Experience from "@/src/sections/experience/Experience";
import Projects from "@/src/sections/projects/Projects";
import Contact from "@/src/sections/contact/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
