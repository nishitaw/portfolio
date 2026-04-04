import AetherFlowHero from "@/components/ui/aether-flow-hero";
import Navbar from "@/components/ui/navbar";
import About from "@/components/ui/about";
import Experience from "@/components/ui/experience";
import Projects from "@/components/ui/projects";
import Skills from "@/components/ui/skills";
import Contact from "@/components/ui/contact";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <section id="home">
        <AetherFlowHero />
      </section>
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
