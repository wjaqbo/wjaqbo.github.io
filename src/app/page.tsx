import { Hero, Slider, Menu, Specials } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <Hero className="bg-teal-600" />
      <Specials className="bg-emerald-500" />
      <Menu />
      <Hero className="bg-teal-600" />
      <Slider />
      <Specials className="bg-lime-500" />
    </main>
  );
}
