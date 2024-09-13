// --- mui
import { Box, BoxProps, SxProps, Theme } from "@mui/material";
// --- types
import type { SxPropsMap } from "@/lib/types";

interface IProps extends BoxProps {
  contentWrapper?: boolean
}

/**
 * Component for managing the main content container's maximum with
 */
const MaxWidthBox = ({ children, sx, component = 'div', contentWrapper }: IProps) => {
  return (
    <Box
      sx={[
        style.wrapper,
        sx,
        contentWrapper ? style.contentWrapper : undefined
      ] as SxProps<Theme>}
      component={component}
    >
      {children}
    </Box>
  )
}

export default MaxWidthBox;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    width: 'min(100%, 1550px)',
    paddingInline: {
      xs: 0.5,
      md: 1
    }
  },

  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px auto',
    gap: {
      xs: 2,
      sm: 3,
      md: 3.5,
      lg: 4
    },
    paddingBlock: {
      xs: 1,
      md: 1.5,
      lg: 1.75
    }
  }
}