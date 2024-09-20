// --- types
import type { Components, Theme } from "@mui/material";
// --- theme components
import breakpoints from "./breakpoints";
import { colors } from "./palette";
// --- constants
import { HOVER_TRANSITION } from "../constants";

const components: Components<Omit<Theme, "components">> = {

  // -=-=-=-=-=-=-=- Toolbar -=-=-=-=-=-=-=-
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

  // -=-=-=-=-=-=-=- Button -=-=-=-=-=-=-=-
  MuiButton: {
    styleOverrides: {
      root: {
        minWidth: 0,
      },

    }
  },

  // -=-=-=-=-=-=-=- Filled Input -=-=-=-=-=-=-=-
  MuiFilledInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: colors.greyshGreen.main,
        border: '1px solid transparent',
        transition: `border-color ${HOVER_TRANSITION}`,
        borderRadius: 4,
        boxShadow: theme.shadows[3],
        '&:hover': {
          backgroundColor: colors.greyshGreen.main,
          borderColor: 'black'
        },
        '&.Mui-focused': {
          backgroundColor: colors.greyshGreen.light
        },
        '&::before': {
          display: 'none'
        },
        '&::after': {
          display: 'none'
        },
        '& .MuiInputLabel-root': {
          color: 'red'
        }
      }),
    }
  },

  // -=-=-=-=-=-=-=- Checkbox Input -=-=-=-=-=-=-=-
  MuiCheckbox: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 0,
        paddingRight: 1,
        '& + span': {
          fontWeight: 500,
          color: theme.palette.grey[600],
          fontSize: theme.typography.subtitle1.fontSize,
        },
        '&.MuiCheckbox-sizeMedium': {
          paddingRight: 2,
          '& + span': {
            fontSize: theme.typography.body2.fontSize
          },
        },
        '&.MuiCheckbox-sizeLarge': {
          paddingRight: 2.5,
          '& + span': {
            fontWeight: 700,
            fontSize: theme.typography.body1.fontSize
          },
        }
      })
    }
  },


  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        margin: 0
      }
    }
  }
}

export default components;