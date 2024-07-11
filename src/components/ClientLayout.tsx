// src/components/ClientLayout.tsx
'use client';

import { IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header/";
import { GsapProvider } from "@/lib/utils/GsapContext";
import Footer from "./Footer";

const plex_sans = IBM_Plex_Sans({
  subsets: ["cyrillic", "cyrillic-ext", "greek", "latin"],
  weight: ["400", "500", "600", "700"],
});


export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={plex_sans.className}>
      <Header />
      <GsapProvider>
        {children}
      </GsapProvider>
      <Footer />
    </div>
  );
}
