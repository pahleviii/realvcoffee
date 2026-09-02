import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { OrderProvider } from "@/components/OrderProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RealV Coffee — Coffee, made personal",
  description: "Artisanal coffee and warm moments in Karang Pilang, Surabaya Selatan.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <OrderProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </OrderProvider>
      </body>
    </html>
  );
}
