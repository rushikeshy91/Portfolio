import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
    </main>
  );
}
