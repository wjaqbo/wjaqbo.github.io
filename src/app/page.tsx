import { Hero, Slider, Menu, Navigation } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <Hero />
      <Slider />
      <Hero className="bg-lime-500" />
      <Menu />
      <Hero className="bg-emerald-600" />
    </main>
  );
}
