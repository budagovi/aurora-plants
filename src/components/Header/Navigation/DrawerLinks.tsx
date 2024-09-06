// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui 
import {
  List,
  ListItemButton,
  Typography,
  ListItemIcon,
  Divider
} from '@mui/material';
// -- icons
import StoreIcon from '@mui/icons-material/Store';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import LogoutIcon from '@mui/icons-material/Logout';
// --- next api
import Link from 'next/link';
// --- components
import LinkItem from './LinkItem';

/**
 *  List of navigation links for Drawer Navigation (mobileversion)
 */
const DrawerLinks = () => {

  return (

    <List sx={style.list}>

      <LinkItem
        linkTo='/store'
        text='store'
        icon={<StoreIcon />}
        forDrawer
      />

      <LinkItem
        linkTo='/about'
        text='about'
        icon={<AssignmentIcon />}
        forDrawer
      />

      <LinkItem
        linkTo='/contact'
        text='contact'
        icon={<MarkunreadIcon />}
        forDrawer
      />

      <Divider sx={style.divider} />

      <LinkItem
        linkTo='/cart'
        text='shopping cart'
        icon={<ShoppingCartRoundedIcon />}
        forDrawer
      />

      <LinkItem
        linkTo='/profile'
        text='account'
        icon={<PersonRoundedIcon />}
        forDrawer
      />

      <Divider sx={style.divider} />

      <LinkItem
        linkTo='/sign-in'
        text='sign in'
        icon={<PersonRoundedIcon />}
        forDrawer
      />

      {/* LOGOUT FUNCTIONALITY  ---------------------------- */}
      <ListItemButton
        sx={style.listItem}
        href='/cart'
        LinkComponent={Link}
      >
        <Typography
          sx={style.linkText}
          variant="body2"
          component='span'
        >
          Log Out
        </Typography>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
      </ListItemButton>
      {/* LOGOUT FUNCTIONALITY  ---------------------------- */}

    </List>
  )
}

export default DrawerLinks;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  list: {
    display: 'flex',
    flexDirection: 'column',
    paddingBlock: 4,
    gap: {
      xs: 0.2,
      md: 0.3,
    }
  },

  listButton: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    }
  },

  listIcon: {
    width: 28,
    height: 28,
    color: 'primary.main',
    transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      color: 'primary.light',
    }
  },

  divider: {
    backgroundColor: 'primary.main',
    width: '90%',
    margin: '0 auto'
  }
}