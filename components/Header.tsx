"use client";

import Link from "next/link";
import { Coffee, Menu, ShoppingBag, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useOrder } from "./OrderProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our menu" },
  { href: "/location", label: "Visit us" },
];

export default function Header() {
  const pathname = usePathname();
  const { itemCount } = useOrder();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#eadfd2]/80 bg-[#fbf8f3]/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2c1b13] text-[#f8e8d5] transition group-hover:bg-[#6d3f27]">
            <Coffee size={20} strokeWidth={1.7} />
          </span>
          <span className="font-serif text-[22px] font-semibold tracking-tight text-[#2c1b13]">
            RealV<span className="text-[#b77442]">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition ${
                pathname === link.href ? "text-[#6d3f27]" : "text-[#806f63] hover:text-[#2c1b13]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/order"
            aria-label={`Your order, ${itemCount} items`}
            className="relative flex h-11 items-center gap-2 rounded-full border border-[#dacabc] px-4 text-sm font-semibold text-[#2c1b13] transition hover:border-[#6d3f27] hover:bg-[#f3e9de]"
          >
            <ShoppingBag size={18} strokeWidth={1.8} />
            <span className="hidden sm:inline">Your order</span>
            {itemCount > 0 && (
              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#b77442] px-1 text-[11px] font-bold text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#2c1b13] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-[#eadfd2] px-5 py-4 md:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-semibold ${
                  pathname === link.href ? "bg-[#f0e2d4] text-[#6d3f27]" : "text-[#806f63]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
