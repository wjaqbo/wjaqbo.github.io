import React from "react";

import menu from "@/data/menu-blowfish.json";

export default function Menu() {
  return (
    <section className="mx-auto max-w-screen-xl pb-24 dark:bg-green-900 dark:text-white">
      <h2 className="pt-16 text-center text-4xl font-bold uppercase">Menu</h2>
      <ul className="grid">
        {menu.map((category) => (
          <li key={category.categoryId}>
            <h3
              id={category.categoryId.toString()}
              className="border-b pb-2 pl-4 pt-20 text-lg font-semibold uppercase dark:text-white lg:pl-12"
            >
              {category.title}
            </h3>
            <ul className="grid gap-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
              {category.listItems.map((item) => (
                <li className="m-4 flex justify-between gap-1" key={item.name}>
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
