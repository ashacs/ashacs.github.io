import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./index.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";

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
      <body>
        <div id="root" className="root">
          <Header />
          <Main>{children}</Main>
        </div>
      </body>
    </html>
  );
}
