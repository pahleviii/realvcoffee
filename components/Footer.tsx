import Link from "next/link";
import { ArrowUpRight, Coffee, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#eadfd2] bg-[#f4ede5]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-semibold">
            <Coffee size={22} className="text-[#6d3f27]" /> RealV<span className="text-[#b77442]">.</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-[#806f63]">
            Good coffee, made slowly and shared warmly. See you at our little corner in Karang Pilang.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#b77442]">Explore</p>
          <div className="flex flex-col items-start gap-3 text-sm text-[#604a3a]">
            <Link href="/menu" className="hover:text-[#b77442]">Menu</Link>
            <Link href="/location" className="hover:text-[#b77442]">Location & hours</Link>
            <Link href="/order" className="hover:text-[#b77442]">Your order</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#b77442]">Say hello</p>
          <a href="https://instagram.com" className="flex items-center gap-2 text-sm text-[#604a3a] hover:text-[#b77442]">
            <Instagram size={17} /> @realvcoffee <ArrowUpRight size={14} />
          </a>
          <p className="mt-3 text-sm text-[#806f63]">hello@realvcoffee.com</p>
        </div>
      </div>
      <div className="mx-auto max-w-6xl border-t border-[#e3d7cb] px-5 py-5 text-xs text-[#9b897b] sm:px-8">
        © {new Date().getFullYear()} RealV Coffee. Brewed with care.
      </div>
    </footer>
  );
}
