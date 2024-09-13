'use client'

// --- mui
import { IconButton, Stack } from '@mui/material';
// --- icons
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// --- constants
import { HOVER_TRANSITION } from '@/lib/constants';
// --- types
import type { SxPropsMap } from '@/lib/types';

const socialMediaLinks = [
  { href: 'https://www.facebook.com', label: 'Facebook', icon: FacebookOutlinedIcon },
  { href: 'https://www.instagram.com', label: 'Instagram', icon: InstagramIcon },
  { href: 'https://www.youtube.com', label: 'YouTube', icon: YouTubeIcon },
  { href: 'https://www.twitter.com', label: 'Twitter', icon: TwitterIcon },
];

/**
 * Individual Footer section for social media icon links
 */
const MediaLinks = () => {
  return (
    <Stack direction="row" spacing={0.7}>
      {socialMediaLinks.map(({ href, label, icon: Icon }, index) => (
        <IconButton
          component="a"
          href={href}
          aria-label={label}
          title={label}
          target="_blank"
          rel="noopener noreferrer"
          sx={style.btn}
          key={index}
        >
          <Icon sx={style.icon} />
        </IconButton>
      ))}
    </Stack>
  );
};

export default MediaLinks;

// -=-=-=- style -=-=-=-
const style: SxPropsMap = {
  btn: {
    padding: 0,
  },
  icon: {
    color: 'grey.400',
    width: { xs: 25, md: 30 },
    height: { xs: 25, md: 30 },
    transition: `color ${HOVER_TRANSITION}`,
    '&:hover': {
      color: 'white.main',
    },
  },
};
