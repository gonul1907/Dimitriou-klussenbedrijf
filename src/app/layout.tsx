import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dimitriou Klussenbedrijf | Vakmanschap in Bouw & Renovatie",
  description:
    "Dimitriou Klussenbedrijf verzorgt hoogwaardige renovaties, badkamers, schilderwerk, timmerwerk, vloeren en allround kluswerk in Nederland. Vraag vandaag nog een gratis offerte aan.",
  keywords:
    "klussenbedrijf, renovatie, badkamer, schilderwerk, timmerwerk, vloeren, afwerking, verbouwing, Nederland",
  openGraph: {
    title: "Dimitriou Klussenbedrijf | Vakmanschap in Bouw & Renovatie",
    description:
      "Hoogwaardige renovaties, afwerking en allround kluswerk in Nederland.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
