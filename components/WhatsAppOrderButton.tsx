"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppMessage, type OrderDetails } from "@/lib/generateWhatsAppMessage";
import { useOrder } from "./OrderProvider";

export default function WhatsAppOrderButton({
  customerName,
  pickupTime,
  notes,
}: OrderDetails) {
  const { items } = useOrder();
  const number = process.env.NEXT_PUBLIC_STORE_WHATSAPP_NUMBER || "6281234567890";

  const sendOrder = () => {
    if (!items.length) return;
    const message = generateWhatsAppMessage(items, { customerName, pickupTime, notes });
    window.open(`https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={sendOrder}
      disabled={!items.length || !customerName?.trim() || !pickupTime}
      className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#4f704f] px-5 font-bold text-white transition hover:bg-[#3f5d40] disabled:cursor-not-allowed disabled:opacity-45"
    >
      <MessageCircle size={20} />
      Pesan via WhatsApp
    </button>
  );
}
