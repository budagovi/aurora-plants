// --- types
import type { SxPropsMap } from "@/lib/types";
// --- mui
import { Stack, Box } from "@mui/material";
// --- next api
import Image from "next/image";
// --- react api
import { ReactNode } from "react";

interface IProps {
  children: ReactNode
}


const AuthLayout = ({ children }: IProps) => {
  return (
    <Stack
      direction='column'
      sx={style.wrapper}
    >
      <Box sx={style.backgroundImage}>
        <Image
          src='/assets/auth-background.jpg'
          alt='Background Image'
          fill // fill the container
          priority // to load the image faster
        />
      </Box>
      <Box sx={style.content}>
        {children}
      </Box>
    </Stack>
  );
}

export default AuthLayout;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    flexGrow: 1
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100dvh',
    zIndex: -1,
    '& > img': {
      objectFit: 'cover',
      filter: 'blur(3px)'
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#00000053',
      zIndex: 1,
    },
  },

  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 3,
    paddingBottom: 5
  }
}