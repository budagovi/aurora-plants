// --- types
import type { Components, Theme } from "@mui/material";
// --- breakpoints
import breakpoints from "./breakpoints";

const components: Components<Omit<Theme, "components">> = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        paddingLeft: '0',
        paddingRight: '0',
        [`@media (min-width:${breakpoints.values.sm}px)`]: {
          paddingLeft: '0',
          paddingRight: '0',
        },
      },
    }
  },
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: 0,
      },

    }
  },
}

export default components;