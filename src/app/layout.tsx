import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T4DXBPNJ');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4DXBPNJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
      </body>
    </html>
  );
}
