import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Korentin",
  description: "Portfolio de Korentin Kolaczek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
      <Navbar />
      <main className="container mx-auto px-2 sm:px-6 lg:px-8">
          {children}
      </main>
      </body>
    </html>
  );
}
