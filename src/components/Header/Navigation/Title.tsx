'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Button, Typography, Box } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- hooks
import { useIsRootPage } from '@/lib/hooks/useIsRootPage';

/**
 * Logo holder for navbar
 */
const Title = () => {

  const isRoot = useIsRootPage();

  return (
    <Box
      sx={style.wrapper}
    >
      <Button
        href="/"
        LinkComponent={Link}
        sx={style.btn}
        disableRipple
      >
        <Typography
          variant='h2'
          component='span'
          color={isRoot ? 'white.main' : 'primary.main'}
          sx={style.text}
        >
          Aurora Plants
        </Typography>
      </Button>
    </Box >
  )
}

export default Title;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    flex: 1,
    justifyContent: 'left',
  },

  btn: {
    padding: 0,
    '&:hover': {
      background: 'none'
    }
  },

  text: {
    fontWeight: 500,
    textTransform: 'capitalize',
  }
}