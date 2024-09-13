// --- types
import type { SxPropsMap } from '@/lib/types';
// --- UI
import MaxWidthBox from '@/UI/MaxWidthBox';
// --- mui
import { Box, Typography } from '@mui/material';
// --- components
import LinksSection from './LinksSection';
import MediaLinks from './MediaLinks';
// --- icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';

/**
 * Grid wrapper of footer-related components
 */
const Footer = () => {
  return (
    <Box
      sx={style.wrapper}
      component='footer'
    >
      <MaxWidthBox
        sx={style.contentWrapper}
      >

        <LinksSection
          title='get in touch'
          list={[
            { element: <><EmailOutlinedIcon fontSize='small' />aurora-store@example.com</> },
            { element: <><HeadsetMicOutlinedIcon fontSize='small' />+123 456 789</> },
            { element: <><PlaceOutlinedIcon fontSize='small' />City, Example Street</> }
          ]}
        />

        <LinksSection
          title='quick links'
          list={[
            { element: 'store', linkTo: 'store' },
            { element: 'contact us', linkTo: 'contact' },
            { element: 'about us', linkTo: 'about' },
            { element: 'sign in', linkTo: 'sign-in' },
          ]}
        />

        <LinksSection
          title='information'
          list={[
            { element: 'terms and conditions', linkTo: '/' },
            { element: 'privacy policy', linkTo: '/' }
          ]}
        />

        <LinksSection
          title='follow us'
          list={[]}
        >
          <MediaLinks />
        </LinksSection>

      </MaxWidthBox>

      <Typography variant='subtitle2' sx={style.copyright}>
        <CopyrightIcon />
        Copyright Aurora Plants 2024. All rights reserved
      </Typography>

    </Box>
  )
}

export default Footer;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    backgroundColor: 'primary.main',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 2,
    padding: '4rem 0 1rem'
  },

  contentWrapper: {
    gap: {
      xs: 1.5,
      sm: 1
    },
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, 1fr)',
      md: 'repeat(4, 1fr)'
    },
    justifyItems: {
      xs: 'center',
      sm: 'center',
      md: 'center'
    }
  },

  copyright: {
    display: 'flex',
    alignItems: 'center',
    gap: 0.4,
    color: 'grey.500',
    '& > svg': {
      width: 20,
      height: 20
    }
  }

}