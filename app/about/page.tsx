import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <Link href="/" className="mb-8 flex items-center gap-1.5 text-sm font-semibold text-[#9b897b] hover:text-[#6d3f27]">
        <ArrowLeft size={16} /> Kembali ke home
      </Link>

      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#b77442]">Tentang Kami</p>
        <h1 className="mt-3 font-serif text-5xl font-semibold text-[#2c1b13] sm:text-6xl">
          RealV Coffee
        </h1>
        
        <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-[#806f63]">
          <p>
            Ngopi itu bukan cuma soal kafein, tapi soal momen.
          </p>
          
          <p>
            RealV Coffee lahir dari hal sederhana: keinginan punya tempat ngopi yang nggak ribet, tapi tetap enak. Nggak perlu suasana yang terlalu "wah", cukup kopi yang jujur rasanya, tempat yang nyaman buat ngobrol atau kerja santai, dan pelayanan yang bikin kamu betah balik lagi.
          </p>
          
          <p>
            Kami percaya kopi terbaik itu yang bisa dinikmati siapa aja — nggak peduli kamu penikmat kopi hardcore yang hafal notes rasa, atau cuma butuh secangkir buat mulai hari. Di RealV Coffee, semua orang punya tempat.
          </p>
          
          <p>
            Berlokasi di Karang Pilang, Surabaya Selatan, kami buka setiap hari jam 08.00–20.00 — siap nemenin harimu, dari pagi sampai malam.
          </p>

          <p className="pt-4 font-serif text-2xl font-semibold italic text-[#6d3f27]">
            RealV Coffee. Ngopi yang beneran (real), buat kamu yang beneran butuh jeda.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-[#f0e2d4] p-8">
        <h2 className="font-serif text-3xl font-semibold text-[#2c1b13]">Nilai-Nilai Kami</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            ["Jujur", "Kopi apa adanya, nggak ada yang ditambah-tambahin"],
            ["Nyaman", "Tempat yang hangat buat berbagi momen"],
            ["Ramah", "Pelayanan yang bikin betah"],
            ["Konsisten", "Selalu ada dan siap nemenin harimu"],
          ].map(([value, description]) => (
            <div key={value}>
              <h3 className="font-semibold text-[#6d3f27]">{value}</h3>
              <p className="mt-1 text-sm text-[#806f63]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
