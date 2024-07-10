import Hero from "@/components/Homepage/Hero";
import MovingText from "@/components/ui/MovingText";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between mx-auto overflow-hidden">
      <Hero />
      <MovingText />
    </main>
  );
}
