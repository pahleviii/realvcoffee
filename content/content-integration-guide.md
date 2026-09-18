# 🔗 Content Integration Guide — RealV Coffee

Panduan praktis untuk mengintegrasikan semua content ke dalam website & platform.

---

## 1. Integrasi Menu Descriptions ke Website

### Step 1: Update `data/menu.json`

Current format:
```json
{
  "id": "realv-signature",
  "name": "RealV Signature",
  "description": "Espresso, palm sugar, and silky oat milk.",
  "price": 28000,
  "category": "Signature",
  "badge": "Our favourite",
  "image": "..."
}
```

Recommended update:
```json
{
  "id": "realv-signature",
  "name": "RealV Signature",
  "description": "Espresso, palm sugar, dan silky oat milk. Kombinasi yang udah di-fine-tune berkali-kali sampai pas persis. Coba ini dulu kalau bingung.",
  "shortDescription": "Espresso, palm sugar, silky oat milk",
  "price": 28000,
  "category": "Signature",
  "badge": "Our favourite",
  "image": "...",
  "tags": ["popular", "bestseller"]
}
```

### Step 2: Update `MenuCard.tsx`

Current:
```tsx
<p className="mt-2 min-h-10 text-sm leading-5 text-[#806f63]">{item.description}</p>
```

This already displays the description, so just update the JSON!

---

## 2. Integrasi Landing Page Copy

### Step 1: Update `app/page.tsx` (Hero Section)

Replace current copy:
```tsx
<h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#2c1b13] sm:text-7xl">
  Your daily cup, <span className="italic text-[#9a5b37]">done right.</span>
</h1>
<p className="mt-7 max-w-md text-base leading-7 text-[#806f63] sm:text-lg">
  Thoughtfully sourced beans, comforting flavours, and a little corner that feels like yours.
</p>
```

Dengan versi lokal:
```tsx
<h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.04] tracking-[-0.035em] text-[#2c1b13] sm:text-7xl">
  Ngopi Santai, <span className="italic text-[#9a5b37]">Rasa Beneran.</span>
</h1>
<p className="mt-7 max-w-md text-base leading-7 text-[#806f63] sm:text-lg">
  Kopi enak, suasana nyaman, tanpa drama. RealV Coffee siap nemenin harimu — pesan online, tinggal ambil di toko.
</p>
```

### Step 2: Update "Why Us" Section

Current code:
```tsx
{[
  ["01", "Good beans", "We work with small, thoughtful producers..."],
  ["02", "Made fresh", "Every cup is brewed to order..."],
  ["03", "Feel at home", "Stay for a while..."],
].map(([number, title, copy]) => (...))}
```

Sudah perfect dengan copy dari `landing-page-copy.md` — tinggal replace title & copy!

---

## 3. Buat Halaman About Us

### Create `app/about/page.tsx`

```tsx
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
      <Link href="/" className="mb-8 flex items-center gap-1.5 text-sm font-semibold text-[#9b897b] hover:text-[#6d3f27]">
        <ArrowLeft size={16} /> Back home
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
        </div>

        <p className="mt-8 font-serif text-2xl font-semibold italic text-[#6d3f27]">
          RealV Coffee. Ngopi yang beneran (real), buat kamu yang beneran butuh jeda.
        </p>
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
```

### Update `components/Header.tsx` untuk add About link

Current:
```tsx
const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our menu" },
  { href: "/location", label: "Visit us" },
];
```

Update to:
```tsx
const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Our menu" },
  { href: "/location", label: "Visit us" },
  { href: "/about", label: "About" },
];
```

### Update `components/Footer.tsx` untuk add About link

Current:
```tsx
<div className="flex flex-col items-start gap-3 text-sm text-[#604a3a]">
  <Link href="/menu" className="hover:text-[#b77442]">Menu</Link>
  <Link href="/location" className="hover:text-[#b77442]">Location & hours</Link>
  <Link href="/order" className="hover:text-[#b77442]">Your order</Link>
</div>
```

Update to:
```tsx
<div className="flex flex-col items-start gap-3 text-sm text-[#604a3a]">
  <Link href="/menu" className="hover:text-[#b77442]">Menu</Link>
  <Link href="/location" className="hover:text-[#b77442]">Location & hours</Link>
  <Link href="/about" className="hover:text-[#b77442]">About us</Link>
  <Link href="/order" className="hover:text-[#b77442]">Your order</Link>
</div>
```

---

## 4. Update Brand Metadata

### Update `app/layout.tsx`

Current:
```tsx
export const metadata: Metadata = {
  title: "RealV Coffee — Coffee, made personal",
  description: "Artisanal coffee and warm moments in Karang Pilang, Surabaya Selatan.",
};
```

Better version (dengan Indonesian tone):
```tsx
export const metadata: Metadata = {
  title: "RealV Coffee — Ngopi Santai, Rasa Beneran",
  description: "Kopi enak, suasana nyaman, tanpa drama. Buka tiap hari 08.00–20.00 di Karang Pilang, Surabaya Selatan.",
  openGraph: {
    title: "RealV Coffee",
    description: "Kopi enak, suasana nyaman, tanpa drama. Pesan online atau mampir langsung.",
    images: ["https://..."], // Update dengan foto hero
    type: "website",
  },
};
```

---

## 5. Social Media Integration

### Option A: Automated Posting (Hardest)
- Use Buffer, Later, or Hootsuite API
- Create schedule from `social-media-captions.md`

### Option B: Manual but Organized (Recommended)
1. Copy calendar dari `social-media-captions.md` ke Google Calendar/Notion
2. Set reminder 1 hari sebelum posting
3. Prepare caption & photo, post manually

### Option C: Team Workflow
1. Create shared Google Docs dengan semua captions
2. Assign team member untuk each day
3. Use template: `[Date] [Platform] [Caption] [Photo] [Posted?]`

---

## 6. Email Campaigns

### Welcome Email (Buat dulu saat launching)
**Subject:** Akhirnya ada tempat ngopi yang beneran di Karang Pilang! ☕

**Body:**
```
Halo! 👋

RealV Coffee officially buka! 

[Pakai brand story dari brand-story.md]

📍 Lokasi: Karang Pilang, Surabaya Selatan
🕗 Buka: Tiap hari 08.00–20.00
🌐 Pesan online: [website link]

Jangan lupa follow Instagram kami @realvcoffee untuk update menu & promo terbaru.

Nanti kita tunggu kamu di toko 😊

Cheers,
RealV Coffee Team
```

---

## 7. Checklist Implementasi

- [ ] Update `data/menu.json` dengan descriptions dari `menu-descriptions.md`
- [ ] Update `app/page.tsx` hero section dengan copy dari `landing-page-copy.md`
- [ ] Create `app/about/page.tsx` dengan brand story
- [ ] Update Header & Footer dengan About link
- [ ] Update metadata di `app/layout.tsx`
- [ ] Setup social media captions schedule
- [ ] Create email template (welcome, promo)
- [ ] Test semua pages berjalan dengan baik
- [ ] Deploy ke production

---

## 8. Maintenance & Updates

### Monthly Checklist
- [ ] Review social media engagement metrics
- [ ] Update menu descriptions kalau ada item baru
- [ ] Add customer testimonials ke website
- [ ] Update seasonal promotions

### Quarterly Checklist
- [ ] Refresh landing page copy (A/B test)
- [ ] Add new social media content calendar
- [ ] Review brand story, update kalau ada milestone baru

---

## 💡 Pro Tips

1. **A/B Test Headlines:** Try different captions on Instagram, see which gets more engagement
2. **Seasonal Updates:** Change social media captions sesuai season (back to school, holiday, etc)
3. **User Generated Content:** Encourage customers to tag @realvcoffee, repost best ones
4. **Email List Building:** Add email signup di order page buat newsletter
5. **Analytics:** Track which content performs best, double down on winners

Happy launching! 🚀☕
