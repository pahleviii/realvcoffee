import Link from "next/link";
import { ArrowRight, Clock3, Coffee, MapPin, Sparkles } from "lucide-react";
import MenuCard from "@/components/MenuCard";
import menu from "@/data/menu.json";

const popularItems = menu.slice(0, 3);

export default function Home() {
  return (
    <>
      <section className="hero-glow coffee-grain overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 sm:px-8 md:grid-cols-[1.02fr_0.98fr] md:pb-28 md:pt-24">
          <div>
            <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#b77442]">
              <Sparkles size={15} /> Coffee made personal
            </p>
            <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#2c1b13] sm:text-7xl">
              Your daily cup, <span className="italic text-[#9a5b37]">done right.</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#806f63] sm:text-lg">
              Thoughtfully sourced beans, comforting flavours, and a little corner that feels like yours.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/menu" className="flex h-12 items-center gap-2 rounded-full bg-[#2c1b13] px-6 text-sm font-bold text-white transition hover:bg-[#6d3f27]">
                Explore the menu <ArrowRight size={17} />
              </Link>
              <Link href="/location" className="flex h-12 items-center rounded-full border border-[#dacabc] px-6 text-sm font-bold text-[#6d3f27] transition hover:border-[#6d3f27] hover:bg-[#fffdf9]">
                Find us
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-[#9b897b]">
              <span className="flex items-center gap-1.5"><Clock3 size={14} /> Open daily, 08:00–20:00</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> Karang Pilang, Surabaya</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[470px]">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#e8d5c1]/55 blur-2xl" />
            <div
              className="relative aspect-[0.9] overflow-hidden rounded-[2.5rem] bg-[#b48a68] bg-cover bg-center shadow-2xl shadow-[#6d3f27]/15"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85")' }}
              role="img"
              aria-label="A fresh cup of coffee on a wooden table"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#2c1b13]/55 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#f2d7b9]">Today&apos;s mood</p>
                  <p className="mt-1 font-serif text-2xl italic">Slow mornings</p>
                </div>
                <Coffee size={28} strokeWidth={1.4} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]">Made for you</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-[#2c1b13]">A few favourites</h2>
          </div>
          <Link href="/menu" className="hidden items-center gap-1 text-sm font-bold text-[#6d3f27] hover:text-[#b77442] sm:flex">
            See full menu <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {popularItems.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
        <Link href="/menu" className="mt-7 flex items-center justify-center gap-1 text-sm font-bold text-[#6d3f27] sm:hidden">
          See full menu <ArrowRight size={16} />
        </Link>
      </section>

      <section className="bg-[#2c1b13] text-[#fffaf4]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-3 md:gap-12">
          {[
            ["01", "Good beans", "We work with small, thoughtful producers and let their coffee shine."],
            ["02", "Made fresh", "Every cup is brewed to order, with patience and a little bit of care."],
            ["03", "Feel at home", "Stay for a while. There is always room for one more at our table."],
          ].map(([number, title, copy]) => (
            <div key={number} className="border-t border-white/20 pt-5">
              <p className="text-xs font-bold tracking-[0.2em] text-[#d8a477]">{number}</p>
              <h3 className="mt-4 font-serif text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#cdb9a9]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
