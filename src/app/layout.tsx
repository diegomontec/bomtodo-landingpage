import type { Metadata } from "next";
import "./globals.css";

import { Playfair_Display, Inter, Poppins } from "next/font/google";

export const titulo = Playfair_Display({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-titulo"
});

export const descricao = Inter({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-descricao"
});

export const button = Poppins({
  weight: "200",
  subsets: ["latin"],
  variable: "--font-button"
});

export const metadata: Metadata = {
  title: 'Inspiratto',
  description: '',
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
