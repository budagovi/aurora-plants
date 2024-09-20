'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- constants
import { HOVER_TRANSITION } from '@/lib/constants';
import { authRoutes } from '@/lib/auth/routes';
// --- mui
import {
  ListItemButton,
  ListItemIcon,
  Typography
} from '@mui/material';
// --- next api
import Link from 'next/link';
// --- hooks
import { useIsRouteMatch } from '@/hooks/useIsRouteMatch';
// --- react api
import { ReactNode } from 'react';

interface IProps {
  linkTo: string,
  text: string,
  icon?: ReactNode,
  isDrawerItem?: boolean
}

/**
 * Component for navigation list.  
 * Returns specific list item with certain styling, according whether it is for navbar or drawer navigation
 */
const LinkItem = ({ linkTo, text, icon, isDrawerItem }: IProps) => {

  const isRootOrAuth = useIsRouteMatch(['/', ...authRoutes]);

  // component for drawer navigation 
  if (isDrawerItem) {
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
          color: isRootOrAuth ? 'grey.300' : 'primary.dark'
        }
      }}
    >
      <Typography
        sx={style.navbarLinkText}
        variant="body2"
        component='span'
        color={isRootOrAuth ? 'white.main' : 'primary.main'}
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
    whiteSpace: 'nowrap',
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
        transition: `color ${HOVER_TRANSITION}`
      }
    }
  },

  navbarLinkText: {
    whiteSpace: 'nowrap',
    fontWeight: 700,
    textTransform: 'capitalize'
  },

}