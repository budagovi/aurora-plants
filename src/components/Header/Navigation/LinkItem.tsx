'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- constants
import { hoverTransition } from '@/lib/constants';
// --- mui
import {
  ListItemButton,
  ListItemIcon,
  SxProps,
  Typography
} from '@mui/material';
// --- next api
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// --- react api
import { ReactNode } from 'react';

interface IProps {
  linkTo: string,
  text: string,
  icon?: ReactNode,
  forDrawer?: boolean
}

/**
 * Component for navigation list.  
 * Returns specific list item with certain styling, according whether it is for navbar or drawer navigation
 */
const LinkItem = ({ linkTo, text, icon, forDrawer }: IProps) => {

  const pathname = usePathname();
  const isRoot = pathname === '/';

  // component for drawer navigation 
  if (forDrawer) {
    return (
      <ListItemButton
        sx={style.drawerListItem}
        href={linkTo}
        LinkComponent={Link}
      >
        <Typography
          sx={style.drawerLinkText}
          variant="body2"
          component='span'
        >
          {text}
        </Typography>
        <ListItemIcon sx={style.iconWrapper}>
          {icon}
        </ListItemIcon>
      </ListItemButton>
    )
  }

  // component for navbar
  return (
    <ListItemButton
      href={linkTo}
      LinkComponent={Link}
      sx={{
        ...style.navbarListItem,
        '&:hover > span': {
          color: isRoot ? 'grey.300' : 'primary.dark'
        }
      }}
    >
      <Typography
        sx={style.navbarLinkText}
        variant="body2"
        component='span'
        color={isRoot ? 'white.main' : 'primary.main'}
      >
        {text}
      </Typography>
    </ListItemButton>
  )
}

export default LinkItem;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  // styling link item for drawer navigation

  drawerListItem: {
    width: 'auto',
    padding: '0.4rem 1rem 0.4rem 2rem',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: 0.5
  },

  drawerLinkText: {
    textWrap: 'nowrap',
    color: 'primary.main',
    fontWeight: 700,
    textTransform: 'capitalize'
  },

  iconWrapper: {
    minWidth: 0,
    '& svg': {
      color: 'primary.main', width: 30, height: 30
    }
  },

  // styling link item for navbar navigation

  navbarListItem: {
    width: 'auto',
    paddingInline: 1,
    '&:hover': {
      background: 'none',
      '& > span': {
        transition: `color ${hoverTransition}`
      }
    }
  },

  navbarLinkText: {
    textWrap: 'nowrap',
    fontWeight: 700,
    textTransform: 'capitalize'
  },

}