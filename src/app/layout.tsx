// --- style
import "../globals.css";
// --- react api
import { ReactNode } from "react";
// --- types
import type { Metadata } from "next";
import type { SxPropsMap } from "@/lib/types";
// --- theme
import ThemeRegistry from "@/lib/theme/ThemeRegistry";
// --- components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Stack } from "@mui/material";

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
      <Stack
        component='body'
        direction='column'
        sx={style.body}
      >
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </Stack>
    </html>
  );
}

export default RootLayout;


const style: SxPropsMap = {
  body: {
    minHeight: '100dvh',
    position: 'relative' // for auth segments' background
  }
}