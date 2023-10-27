"use client";

import Image from "next/image";
import Categories from "./components/categories";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src="/banner-home01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw" //fica embaçado se não colocar
        alt="Até 55% de desconto esse mês!"
      />


      <div className="mt-8">
        <Categories />
      </div>
    </div>
  );
}