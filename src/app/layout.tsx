import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inspiratto by BomTodo",
  description: "Desc",
  viewport: "width=device-width, initial-scale=1",

  title: "Inspiratto by Bom Todo",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
