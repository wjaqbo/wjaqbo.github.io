import Image from "next/image";
import React from "react";

import Link from "next/link";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex h-full flex-col justify-between overflow-hidden rounded bg-slate-800 shadow-md transition">
      <header>
        <div className="relative h-56 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="animate-fadeIn object-cover"
          />
        </div>
        <div className="p-4 ">
          <h2 className="text-lg font-bold">{title}</h2>
          <p className="text-sm">by {creator}</p>
        </div>
      </header>
      <div className="flex h-full flex-col justify-between text-sm text-white">
        <p className="p-4">{summary}</p>
        <div className="p-4 text-right">
          <Link
            href={`/meals/${slug}`}
            className="text-md inline-block rounded-md border-orange-500 bg-orange-600 px-4 py-2 font-bold text-white"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </article>
  );
}
