// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { ButtonBase, Grid, SxProps, Theme, Typography } from '@mui/material';
// --- next api
import Link from 'next/link';
// --- constants
import { HOVER_TRANSITION } from '@/lib/constants';
// -- icons
import EastIcon from '@mui/icons-material/East';

export interface IProps {
  bgImgUrl: string
  linkTo: string,
  text: string
}

/**
 * Individual item of categories grid
 */
const CategoriesItem = ({ bgImgUrl, linkTo, text }: IProps) => {
  return (
    <Grid item sx={{ ...style.item, backgroundImage: bgImgUrl }}>
      <ButtonBase
        sx={style.btn}
        href={linkTo}
        LinkComponent={Link}
      >
        <Typography
          variant='h4'
          component='span'
          sx={style.text}
        >
          {text}
          <EastIcon sx={style.icon} />
        </Typography>
      </ButtonBase>
    </Grid>
  )
}

export default CategoriesItem;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  item: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    transition: HOVER_TRANSITION,
    boxShadow: 10,
    '&:hover': {
      boxShadow: 15,
    },
  },

  btn: {
    width: '100%',
    height: '100%',
    background: 'rgba(6, 34, 7, 0.333)',
    transition: `background ${HOVER_TRANSITION}`,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: {
      xs: 0.5,
      sm: 0.8,
      md: 2
    },
    '&:hover': {
      background: 'rgba(6, 34, 11, 0.479)',
      '& > span': {
        transform: 'scale(1.05)',
        gap: 0.7,
        '&::after': {
          width: '100%'
        }
      },
    },
  },

  text: {
    textTransform: 'capitalize',
    fontWeight: 700,
    color: 'white.main',
    display: 'flex',
    alignItems: 'center',
    gap: 0.3,
    transition: HOVER_TRANSITION,
    transformOrigin: 'bottom left',
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      width: 0,
      height: 2,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'white.main',
      transition: `width ${HOVER_TRANSITION}`,
    },
  },
} 