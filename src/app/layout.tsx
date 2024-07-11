// src/app/layout.tsx
import type { Metadata } from "next";
import ClientLayout from "@/components/ClientLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate 01",
  description: "Informative website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased"> 
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
