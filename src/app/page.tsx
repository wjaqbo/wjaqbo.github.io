import { Hero, Slider, Menu, Specials } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <Hero className="bg-cyan-600" />
      <Slider />
      <Specials className="bg-lime-500" />
      <Menu />
      <Hero className="bg-emerald-600" />
      <Specials className="bg-lime-500" />
    </main>
  );
}
