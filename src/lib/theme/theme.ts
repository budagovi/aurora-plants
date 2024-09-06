// Material UI
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// theme components
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";
import typography from "./typography";



/**
 * Customizing Theme
*/

const theme = createTheme({
  breakpoints,
  components,
  palette,
  typography,
  spacing: 16
});

export default responsiveFontSizes(theme);