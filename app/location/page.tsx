import Link from "next/link";
import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

export default function LocationPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]"><MapPin size={15} /> Come say hello</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight tracking-tight text-[#2c1b13] sm:text-6xl">A warm seat<br /><span className="italic text-[#9a5b37]">awaits you.</span></h1>
          <p className="mt-6 max-w-md text-base leading-7 text-[#806f63]">Find us in Karang Pilang, Surabaya Selatan. Come for the coffee, stay for the conversation.</p>
          <div className="mt-9 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e2d4] text-[#6d3f27]"><MapPin size={18} /></span>
              <div><p className="font-semibold text-[#2c1b13]">RealV Coffee House</p><p className="mt-1 text-sm leading-5 text-[#806f63]">Karang Pilang<br />Surabaya Selatan, Jawa Timur</p><a href="https://maps.google.com/?q=Karang+Pilang+Surabaya" className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-[#b77442] hover:text-[#6d3f27]">Open in Maps <ArrowUpRight size={14} /></a></div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e2d4] text-[#6d3f27]"><Clock3 size={18} /></span>
              <div><p className="font-semibold text-[#2c1b13]">Opening hours</p><p className="mt-1 text-sm leading-6 text-[#806f63]">Every day<br /><span className="font-semibold text-[#604a3a]">08:00 – 20:00</span></p></div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e2d4] text-[#6d3f27]"><Phone size={18} /></span>
              <div><p className="font-semibold text-[#2c1b13]">Get in touch</p><p className="mt-1 text-sm text-[#806f63]">+62 812 3456 7890</p></div>
            </div>
          </div>
        </div>
        <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-[#dfe9df] shadow-xl shadow-[#6d3f27]/10 sm:min-h-[570px]">
          <iframe title="RealV Coffee location map" src="https://www.google.com/maps?q=Karang%20Pilang%20Surabaya&output=embed" className="absolute inset-0 h-full w-full border-0" loading="lazy" />
        </div>
      </div>
      <div className="mt-20 rounded-2xl bg-[#e9ddcf] px-6 py-10 text-center sm:px-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]">Not in Surabaya?</p>
        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#2c1b13]">Bring RealV home.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#806f63]">Follow along for brewing tips, new beans, and the occasional reason to plan your next visit.</p>
        <Link href="https://instagram.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#2c1b13] px-5 py-3 text-sm font-bold text-white hover:bg-[#6d3f27]">Follow @realvcoffee <ArrowUpRight size={15} /></Link>
      </div>
    </div>
  );
}
