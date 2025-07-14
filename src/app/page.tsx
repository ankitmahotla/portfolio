import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <About />
      <Skills />
      <Experience />
      <Education />
    </main>
  );
}
