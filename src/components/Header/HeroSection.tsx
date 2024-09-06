// --- types
import { textShadow } from '@/lib/constants';
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { Button, Stack, Typography } from '@mui/material';

/**
 * Hero Section Component (appears only on root page)
 */
const HeroSection = () => {
  return (
    <Stack
      direction='column'
      sx={style.wrapper}
    >
      <Typography
        sx={style.secondaryText}
        variant='body2'
      >
        welcome to the aurora plants
      </Typography>

      <Typography
        sx={style.primaryText}
        variant='h1'
      >
        {"Let's Bring The Spring To Your home"}
      </Typography>

      <Button
        sx={style.btn}
        variant='contained'
        size='large'
        color='white'
      >
        shop now
      </Button>
    </Stack>
  )
}

export default HeroSection;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    flex: 0.85,
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'common.white',
    textShadow: textShadow
  },

  secondaryText: {
    textTransform: 'uppercase',
  },

  primaryText: {
    textTransform: 'capitalize',
    fontWeight: 400,
    maxWidth: {
      xs: 580,
      md: 700,
      lg: 740
    },
  },

  btn: {
    alignSelf: 'center',
    textTransform: 'lowercase'
  }
}