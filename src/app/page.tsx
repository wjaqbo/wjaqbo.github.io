import { Hero, Slider, Menu, Navigation } from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Slider />
      <Hero />
      <Menu />
      <Hero />
    </main>
  );
}
