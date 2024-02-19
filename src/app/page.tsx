import { Hero, Slider, Menu, Specials } from "@/components";

const imagesTop = [
  "/images/bg-img1.jpg",
  "/images/bg-img2.jpg",
  "/images/bg-img3.jpg",
  "/images/bg-img4.jpg",
  "/images/bg-img5.jpg",
  "/images/bg-img6.jpg",
  "/images/bg-img7.jpg",
  "/images/bg-img8.jpg",
];

const imagesBottom = [
  "/images/sushi-pic-5.jpg",
  "/images/sushi-pic-6.jpg",
  "/images/sushi-pic-2.jpg",
  "/images/sushi-pic-3.jpg",
  "/images/sushi-pic-4.jpg",
  "/images/sushi-pic.jpg",
];

export default function Home() {
  return (
    <main className="w-full">
      <Slider images={imagesTop} />
      <Hero className="bg-teal-600" />
      <Specials className="bg-emerald-500" />
      <Menu />
      <Hero className="bg-teal-600" />
      <Slider images={imagesBottom} />
      <Specials className="bg-lime-500" />
    </main>
  );
}
