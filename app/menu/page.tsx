"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import CategoryTabs from "@/components/CategoryTabs";
import MenuCard from "@/components/MenuCard";
import { useOrder } from "@/components/OrderProvider";
import menu from "@/data/menu.json";

const categories = ["All", ...Array.from(new Set(menu.map((item) => item.category)))];

export default function MenuPage() {
  const [category, setCategory] = useState("All");
  const { itemCount } = useOrder();
  const filtered = useMemo(
    () => category === "All" ? menu : menu.filter((item) => item.category === category),
    [category],
  );

  return (
    <div className="mx-auto max-w-6xl px-5 pb-20 pt-14 sm:px-8 sm:pt-20">
      <Link href="/" className="mb-8 flex items-center gap-1.5 text-sm font-semibold text-[#9b897b] hover:text-[#6d3f27]">
        <ArrowLeft size={16} /> Back home
      </Link>
      <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]">The good stuff</p>
          <h1 className="mt-2 font-serif text-5xl font-semibold tracking-tight text-[#2c1b13]">Our menu</h1>
          <p className="mt-4 max-w-lg text-base leading-7 text-[#806f63]">
            From our signature pours to something sweet on the side, there is always a good reason to stay for one more.
          </p>
        </div>
        {itemCount > 0 && (
          <Link href="/order" className="flex items-center gap-2 self-start rounded-full bg-[#f0e2d4] px-4 py-2.5 text-sm font-bold text-[#6d3f27] sm:self-auto">
            <ShoppingBag size={17} /> {itemCount} {itemCount === 1 ? "item" : "items"} in order
          </Link>
        )}
      </div>
      <div className="mt-10">
        <CategoryTabs categories={categories} activeCategory={category} onChange={setCategory} />
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => <MenuCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
