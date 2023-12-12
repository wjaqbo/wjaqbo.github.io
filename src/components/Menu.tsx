import React from "react";

import menu from "@/menu-blowfish.json";

export default function Menu() {
  return (
    <section className="dark:bg-green-900 dark:text-white">
      <div className="flex items-center justify-center bg-green-900 p-12">
        <h2 className="text-4xl font-bold text-white">MENU</h2>
      </div>
      <ul className="mt-24 grid gap-24 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
        {menu.map((category) => (
          <li key={category.categoryId}>
            <h3
              data-aos={"fade-right"}
              className="m-4 text-center text-lg font-semibold uppercase text-green-700 dark:text-white"
            >
              {category.title}
            </h3>
            <ul>
              {category.listItems.map((item) => (
                <li
                  data-aos={"fade-up"}
                  className="m-4 my-8 flex justify-between gap-1"
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
