import { Hero, Slider, Menu, Navigation } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Navigation />
      <Hero />
      <Slider />
      <Menu />
    </main>
  );
}
