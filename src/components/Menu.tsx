import React from "react";

import menu from "@/menu-blowfish.json";

export default function Menu() {
  return (
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
  );
}
