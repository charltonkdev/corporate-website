import About from "@/components/Homepage/About";
import Hero from "@/components/Homepage/Hero";
import MovingText from "@/components/ui/MovingText";
import Services from "@/components/Homepage/Services"

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between mx-auto overflow-hidden">
      <Hero />
      <MovingText />
      <About />
      <Services />
    </main>
  );
}
