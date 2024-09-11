'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { IconButton, Stack } from '@mui/material';
// --- icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// --- constants
import { HOVER_TRANSITION } from '@/lib/constants';

/**
 * Individual Footer section for social media icon links
 */
const MediaLinks = () => {
  return (
    <Stack
      direction='row'
      spacing={0.7}
    >
      <IconButton
        component="a"
        href="https://www.facebook.com"
        aria-label="Facebook"
        title="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        sx={style.btn}
      >
        <FacebookOutlinedIcon
          sx={style.icon}
        />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.instagram.com"
        aria-label="Instagram"
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        sx={style.btn}
      >
        <InstagramIcon
          sx={style.icon}
        />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.youtube.com"
        aria-label="YouTube"
        title="YouTube"
        target="_blank"
        rel="noopener noreferrer"
        sx={style.btn}
      >
        <YouTubeIcon
          sx={style.icon}
        />
      </IconButton>
      <IconButton
        component="a"
        href="https://www.twitter.com"
        aria-label="Twitter"
        title="Twitter"
        target="_blank"
        rel="noopener noreferrer"
        sx={style.btn}
      >
        <TwitterIcon
          sx={style.icon}
        />
      </IconButton>
    </Stack>

  )
}

export default MediaLinks;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  btn: {
    padding: 0
  },
  icon: {
    color: 'grey.400',
    width: { xs: 25, md: 30 },
    height: { xs: 25, md: 30 },
    transition: `color ${HOVER_TRANSITION}`,
    '&:hover': {
      color: 'white.main'
    }
  }
}