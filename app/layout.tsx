import type { Metadata } from "next";
import { Hind_Siliguri, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ecomtara - আপনার ব্যবসার সেরা ই-কমার্স পার্টনার",
  description: "Ecomtara এর মাধ্যমে আজই আপনার অনলাইন স্টোর শুরু করুন। এটি একটি অল-ইন-ওয়ান ই-কমার্স SaaS প্ল্যাটফর্ম।",
  keywords: ["e-commerce", "SaaS", "Bangladesh", "Online Store", "Ecomtara"],
};
const hindSiliguri = Hind_Siliguri({
  weight: ['400', '600', '700'],
  subsets: ['bengali'],
  variable: '--font-hind',
});
const notoBengali = Noto_Sans_Bengali({
  weight: ['300', '400', '600'],
  subsets: ['bengali'],
  variable: '--font-noto',
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} ${notoBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col">
        <Navbar />
        {children}
        <FooterCTA />
      </body>
    </html>
  );
}
