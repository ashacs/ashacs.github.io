import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Literata, EB_Garamond, Source_Sans_3 } from "next/font/google";
import dynamic from "next/dynamic";
import "./index.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

const literata = Literata({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-literata",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Asha Camper Singh",
  description: "You found my personal website! Feel free to say hello 👋",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://ashacs.me" />
      </head>
      <body className={`${literata.variable} ${ebGaramond.variable} ${sourceSans3.variable}`}>
        <div id="root" className="root">
          <Header />
          <Main>{children}</Main>
        </div>
      </body>
    </html>
  );
}
