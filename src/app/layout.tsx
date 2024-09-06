// style
import "../globals.css";
// react api
import { ReactNode } from "react";
// types
import type { Metadata } from "next";
// components
import ThemeRegistry from "@/lib/theme/ThemeRegistry";
import Header from "@/components/Header/Header";

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
      <body>
        <ThemeRegistry>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

export default RootLayout;