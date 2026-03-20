import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStack } from "@/components/sections/tech-stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
    </main>
  );
}
