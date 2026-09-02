"use client";

import { Check, Plus } from "lucide-react";
import { useState } from "react";
import { formatPrice } from "@/lib/generateWhatsAppMessage";
import { useOrder, type MenuItem } from "./OrderProvider";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useOrder();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1300);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#eadfd2] bg-[#fffdf9] shadow-[0_6px_22px_rgba(74,44,25,0.04)] transition hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(74,44,25,0.1)]">
      <div className="relative h-52 overflow-hidden bg-[#dbc0a5]">
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url("${item.image}")` }}
          role="img"
          aria-label={item.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {item.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-[#fffdf9]/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#6d3f27]">
            {item.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-[21px] font-semibold text-[#2c1b13]">{item.name}</h3>
          <p className="shrink-0 text-sm font-bold text-[#b77442]">{formatPrice(item.price)}</p>
        </div>
        <p className="mt-2 min-h-10 text-sm leading-5 text-[#806f63]">{item.description}</p>
        <button
          type="button"
          onClick={handleAdd}
          className={`mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-bold transition ${
            added
              ? "bg-[#dce6d9] text-[#456147]"
              : "bg-[#f0e2d4] text-[#6d3f27] hover:bg-[#6d3f27] hover:text-white"
          }`}
        >
          {added ? <><Check size={16} /> Added to order</> : <><Plus size={17} /> Add to order</>}
        </button>
      </div>
    </article>
  );
}
