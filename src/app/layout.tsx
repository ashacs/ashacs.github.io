import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Asha Camper Singh",
  description: "You found my personal website! Feel free to say hello 👋",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://ashacs.me" />
        <link
          href="https://fonts.googleapis.com/css?family=Rubik"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="root" className="root">
          {children}
        </div>
      </body>
    </html>
  );
}
