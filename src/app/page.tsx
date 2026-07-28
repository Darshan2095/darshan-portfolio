import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import DeveloperStats from "@/components/DeveloperStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <DeveloperStats />
      <Contact />
    </main>
  );
}