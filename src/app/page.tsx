import Image from "next/image";
import menu from "@/menu-blowfish.json";

export default function Home() {
  return (
    <main className="w-full">
      <section className="bg-green-700 text-white p-20 flex justify-center items-center flex-col">
        <h2 data-aos={"fade-right"} className="font-bold text-4xl">
          SUSHI BAR
        </h2>
        <Image
          data-aos="fade-right"
          src="/images/logo-white.png"
          width={200}
          height={200}
          alt=""
        />
        <p data-aos={"fade-left"} className="max-w-4xl text-center mt-4">
          Add text to make your restarurant special. Simple text Add text to
          make your restarurant special. Simple textAdd text to make your
          restarurant special. Simple text
        </p>
      </section>
      <section
        className="flex justify-between overflow-hidden"
        data-aos="fade-in"
      >
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          width={500}
          height={400}
          loading="lazy"
        />
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          width={500}
          height={400}
          loading="lazy"
        />
        <Image
          src="/images/sushi-pic.jpg"
          alt="sushi"
          width={500}
          height={400}
          loading="lazy"
        />
      </section>
      <section>
        <div className="flex justify-center items-center p-12 bg-green-900">
          <h2 className="font-bold text-5xl text-white">MENU</h2>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-24 mt-24 lg:px-8">
          {menu.map((category) => (
            <li key={category.categoryId}>
              <h3
                data-aos={"fade-right"}
                className="text-center m-4 text-green-700 uppercase text-lg font-semibold"
              >
                {category.title}
              </h3>
              <ul>
                {category.listItems.map((item) => (
                  <li
                    data-aos={"fade-up"}
                    className="flex m-4 my-8 justify-between"
                    key={item.name}
                  >
                    <div>
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm leading-6">{item.desc}</p>
                    </div>
                    <div className="font-semibold">{item.price}</div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
