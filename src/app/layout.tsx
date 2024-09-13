// --- style
import "../globals.css";
// --- react api
import { ReactNode } from "react";
// --- types
import type { Metadata } from "next";
// --- theme
import ThemeRegistry from "@/lib/theme/ThemeRegistry";
// --- components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Aurora Plants",
  description: "Online Plants Shopping Platform",
};

interface IProps {
  children: ReactNode
}

const RootLayout = ({ children }: Readonly<IProps>) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default RootLayout;