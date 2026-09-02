"use client";

import Link from "next/link";
import { ArrowLeft, ClipboardPenLine } from "lucide-react";
import { useState } from "react";
import OrderSummary from "@/components/OrderSummary";
import WhatsAppOrderButton from "@/components/WhatsAppOrderButton";

export default function OrderPage() {
  const [customerName, setCustomerName] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [notes, setNotes] = useState("");

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <Link href="/menu" className="mb-8 flex items-center gap-1.5 text-sm font-semibold text-[#9b897b] hover:text-[#6d3f27]">
        <ArrowLeft size={16} /> Continue browsing
      </Link>
      <div className="mb-10">
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]"><ClipboardPenLine size={15} /> Almost there</p>
        <h1 className="mt-2 font-serif text-5xl font-semibold tracking-tight text-[#2c1b13]">Your order</h1>
        <p className="mt-3 text-[#806f63]">We&apos;ll send the details straight to our baristas.</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <OrderSummary />
        <div className="rounded-2xl border border-[#eadfd2] bg-[#fffdf9] p-5 sm:p-7">
          <h2 className="font-serif text-2xl font-semibold text-[#2c1b13]">A few details</h2>
          <div className="mt-6 space-y-5">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#604a3a]">Your name <span className="text-[#b77442]">*</span></span>
              <input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="What should we call you?" className="h-12 w-full rounded-xl border border-[#dacabc] bg-[#fffdf9] px-4 text-sm text-[#2c1b13] outline-none transition placeholder:text-[#b3a093] focus:border-[#9a5b37] focus:ring-2 focus:ring-[#e8d5c1]" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#604a3a]">Pickup time <span className="text-[#b77442]">*</span></span>
              <span className="relative block">
                <input type="time" value={pickupTime} onChange={(event) => setPickupTime(event.target.value)} min="08:00" max="20:00" required className="h-12 w-full rounded-xl border border-[#dacabc] bg-[#fffdf9] px-4 text-sm text-[#2c1b13] outline-none focus:border-[#9a5b37] focus:ring-2 focus:ring-[#e8d5c1]" />
              </span>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#604a3a]">Notes <span className="font-normal text-[#9b897b]">(optional)</span></span>
              <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} placeholder="Less ice, extra hot, ..." className="w-full resize-none rounded-xl border border-[#dacabc] bg-[#fffdf9] px-4 py-3 text-sm text-[#2c1b13] outline-none placeholder:text-[#b3a093] focus:border-[#9a5b37] focus:ring-2 focus:ring-[#e8d5c1]" />
            </label>
          </div>
          <div className="mt-7">
            <WhatsAppOrderButton customerName={customerName} pickupTime={pickupTime} notes={notes} />
            <p className="mt-3 text-center text-xs leading-5 text-[#9b897b]">This will open WhatsApp with your order ready to send.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
