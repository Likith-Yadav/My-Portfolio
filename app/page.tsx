import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <Skills />
        <div className="gap-0">
          <Projects />
        </div>
      </div>
    </main>
  );
}
