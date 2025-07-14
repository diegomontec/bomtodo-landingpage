import type { Metadata } from "next";
import "./globals.css";

import { Inter, Poppins } from "next/font/google";

const titulo = Poppins({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-titulo",
});

const button = Poppins({
  weight: "800",
  subsets: ["latin"],
  variable: "--font-button",
});

const descricao = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-descricao",
});

export const metadata: Metadata = {
  title: "Inspiratto",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${titulo.variable} ${descricao.variable} ${button.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
