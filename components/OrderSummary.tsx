"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/lib/generateWhatsAppMessage";
import { useOrder } from "./OrderProvider";

export default function OrderSummary() {
  const { items, total, updateQuantity, removeItem } = useOrder();

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#dacabc] bg-[#fffdf9] px-6 py-14 text-center">
        <p className="font-serif text-2xl font-semibold text-[#2c1b13]">Your order is empty</p>
        <p className="mt-2 text-sm text-[#806f63]">Add something delicious from our menu to get started.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[#eadfd2] bg-[#fffdf9] p-5 sm:p-6">
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3 border-b border-[#f0e6dc] pb-5 last:border-0 last:pb-0">
            <div
              className="h-16 w-16 shrink-0 rounded-xl bg-cover bg-center"
              style={{ backgroundImage: `url("${item.image}")` }}
              role="img"
              aria-label={item.name}
            />
            <div className="min-w-0 flex-1">
              <div className="flex justify-between gap-2">
                <h3 className="font-semibold text-[#2c1b13]">{item.name}</h3>
                <p className="text-sm font-bold text-[#6d3f27]">{formatPrice(item.price * item.quantity)}</p>
              </div>
              <p className="mt-1 text-xs text-[#9b897b]">{formatPrice(item.price)} each</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center rounded-lg border border-[#eadfd2]">
                  <button
                    type="button"
                    aria-label={`Decrease ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-7 w-8 items-center justify-center text-[#806f63] hover:text-[#2c1b13]"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-7 text-center text-xs font-bold">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.name}`}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-7 w-8 items-center justify-center text-[#806f63] hover:text-[#2c1b13]"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                  className="p-1 text-[#b3a093] transition hover:text-[#a64a3d]"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-[#eadfd2] pt-5">
        <span className="font-semibold text-[#806f63]">Subtotal</span>
        <span className="text-xl font-bold text-[#2c1b13]">{formatPrice(total)}</span>
      </div>
    </div>
  );
}
