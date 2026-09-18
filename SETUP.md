# 🚀 Setup RealV Coffee Project

## Prerequisites
Pastikan **Node.js** sudah terinstall:
- Download: https://nodejs.org/ (LTS version 20.x+)
- Verify: Buka PowerShell baru, ketik `node --version`

## Quick Start

### 1. Buka Terminal/PowerShell di folder project
```powershell
cd "c:\Users\Reza\Documents\Project\Realv Coffee\realvcoffee"
```

### 2. Install Dependencies
```powershell
npm install
```
(Tunggu sampai selesai, ini bisa 2-5 menit untuk pertama kali)

### 3. Jalankan Development Server
```powershell
npm run dev
```

### 4. Buka Browser
Akses: http://localhost:3000

---

## Build untuk Production
```powershell
npm run build
npm run start
```

## Troubleshooting

### Error: "npm: The term 'npm' is not recognized"
- Node.js belum terinstall atau belum di-restart setelah install
- Solusi: Download dari nodejs.org, install, restart PowerShell

### Error: "Port 3000 is already in use"
- Ada aplikasi lain menggunakan port 3000
- Solusi: Buka PowerShell lain, atau ubah port:
  ```powershell
  npm run dev -- -p 3001
  ```

### "Cannot find module" errors
- Dependencies belum terinstall
- Solusi: Jalankan `npm install` lagi

---

## Available Scripts
```powershell
npm run dev      # Start development server
npm run build    # Build untuk production
npm run start    # Run production server
npm run lint     # Run ESLint
```

---

## Environment Variables
File `.env` sudah dibuat dengan default WhatsApp number.
Ubah ke nomor toko asli:
```
NEXT_PUBLIC_STORE_WHATSAPP_NUMBER=628XXX...
```

---

## Project Structure
```
realvcoffee/
├── app/                 # Next.js pages
│   ├── page.tsx        # Home
│   ├── menu/           # Menu page
│   ├── location/       # Location page
│   └── order/          # Order page
├── components/         # React components
├── data/              # JSON data (menu.json)
├── lib/               # Utility functions
├── public/            # Static files
├── package.json       # Dependencies
└── tsconfig.json      # TypeScript config
```

---

**Need Help?** Refer to `DEVELOPMENT_SUGGESTIONS.md` untuk roadmap pengembangan!
