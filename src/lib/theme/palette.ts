// --- types
import type { PaletteOptions } from "@mui/material";

// generate color shades: https://mui.com/material-ui/customization/color/
export const colors = {
  white: {
    dark: '#e2e4e7',
    main: '#f7f8fa',
    light: '#f8f9fb',
    contrastText: '#1b3c35'
  },
  black: {
    dark: '#1b1b1b',
    main: '#272727',
    light: '#525252',
    contrastText: '#f7f8fa'
  },
  green: {
    dark: '#122a25',
    main: '#1b3c35',
    light: '#48635d',
    contrastText: '#f7f8fa'
  },
  greyshGreen: {
    dark: '#9a9d9b',
    main: '#dce1de',
    light: '#e3e7e4',
    contrastText: '#272727'
  },
  background: '#f7f8fa',
  TransparentGreyshGreen: '#dce1de66'
}

/**
 * Custom Color Palette
 */
const palette: PaletteOptions = {
  mode: 'light',
  white: colors.white,
  primary: colors.green,
  secondary: colors.greyshGreen,
  background: {
    paper: colors.background,
    default: colors.background,
  },
  action: {
    hover: colors.TransparentGreyshGreen
  },
  common: {
    white: colors.white.main,
    black: colors.black.main
  }
}

export default palette;