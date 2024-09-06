'use client'
// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui 
import { IconButton, Drawer } from '@mui/material';
// -- icons
import MenuIcon from '@mui/icons-material/Menu';
// --- react api
import { useState, useEffect } from 'react';
// --- constants
import { NAV_DRAWER_BREAKPOINT } from '@/lib/constants'
// --- components
import DrawerLinks from './DrawerLinks';

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

  return (
    <>

      {/* -=-=-=-=- Trigger Button -=-=-=-=- */}

      <IconButton
        onClick={toggleDrawer(true)}
        sx={style.trigger}
      >
        <MenuIcon sx={style.icon} fontSize='large' />
      </IconButton>

      {/* -=-=-=-=- Drawer -=-=-=-=- */}

      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        anchor='right'
        sx={style.drawer}
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
    color: 'primary.main'
  },

  drawer: {
    '&:root': {
      background: 'red'
    }
  }
}