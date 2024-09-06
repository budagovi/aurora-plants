// --- font
import { Nunito } from "next/font/google";
// --- types
import type { TypographyOptions } from "@mui/material/styles/createTypography";

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap'
})

/**
 * Custom Font
 */
const typography: TypographyOptions = {
  fontFamily: nunito.style.fontFamily,
  h1: {
    fontSize: 72,
  },
  h2: {
    fontSize: 40
  },
  h3: {
    fontSize: 36
  },
  h4: {
    fontSize: 32
  },
  h5: {
    fontSize: 24
  },
  h6: {
    fontSize: 20
  },
  body1: {
    fontSize: 18
  },
  body2: {
    fontSize: 16
  },
  subtitle1: {
    fontSize: 14
  },
  subtitle2: {
    fontSize: 12
  }
}

export default typography;