'use client'

// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui 
import { IconButton, Drawer, SxProps } from '@mui/material';
// -- icons
import MenuIcon from '@mui/icons-material/Menu';
// --- react api
import { useState, useEffect } from 'react';
// --- constants
import { HOVER_TRANSITION, NAV_DRAWER_BREAKPOINT } from '@/lib/constants'
// --- components
import DrawerLinks from './DrawerLinks';
// --- hooks
import { useIsRootPage } from '@/lib/hooks/useIsRootPage';

/**
 * Drawer Component with custom drawer functionality
 */
const DrawerNavigation = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setIsOpen(newOpen);
  };

  const closeDrawerOnResize = () => {
    if (window.innerWidth >= NAV_DRAWER_BREAKPOINT) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener on window resize
    window.addEventListener('resize', closeDrawerOnResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', closeDrawerOnResize);
    };
  }, []);

  const isRoot = useIsRootPage();

  return (
    <>

      {/* -=-=-=-=- Trigger Button -=-=-=-=- */}

      <IconButton
        onClick={toggleDrawer(true)}
        sx={style.trigger}
      >
        <MenuIcon
          sx={{
            ...style.icon,
            color: isRoot ? 'white.main' : 'primary.main',
            '&:hover': {
              color: isRoot ? 'grey.300' : 'primary.light',
            }
          }}
          fontSize='large' />
      </IconButton>

      {/* -=-=-=-=- Drawer -=-=-=-=- */}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        anchor='right'
      >
        <DrawerLinks />
      </Drawer>
    </>
  )
}

export default DrawerNavigation;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  trigger: {
    display: 'none',
    [`@media (max-width: ${NAV_DRAWER_BREAKPOINT}px)`]: {
      display: 'inline-flex',
    }
  },

  icon: {
    width: 30,
    height: 30,
    transition: `color ${HOVER_TRANSITION}`,
  },
}