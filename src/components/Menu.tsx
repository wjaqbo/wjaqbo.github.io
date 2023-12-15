import React from "react";

import menu from "@/menu-blowfish.json";

export default function Menu() {
  return (
    <section className="dark:bg-green-900 dark:text-white">
      <ul className="grid gap-10 py-24">
        {menu.map((category) => (
          <li key={category.categoryId}>
            <h3
              id={category.categoryId.toString()}
              data-aos={"fade-right"}
              className="m-4 text-center text-lg font-semibold uppercase text-green-700 dark:text-white"
            >
              {category.title}
            </h3>
            <ul className="grid gap-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
              {category.listItems.map((item) => (
                <li
                  data-aos={"fade-up"}
                  className="m-4 flex justify-between gap-1"
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
