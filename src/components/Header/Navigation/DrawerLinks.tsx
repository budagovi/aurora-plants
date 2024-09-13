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
        isDrawerItem
      />

      <LinkItem
        linkTo='/about'
        text='about'
        icon={<AssignmentIcon />}
        isDrawerItem
      />

      <LinkItem
        linkTo='/contact'
        text='contact'
        icon={<MarkunreadIcon />}
        isDrawerItem
      />

      <Divider sx={style.divider} />

      <LinkItem
        linkTo='/cart'
        text='shopping cart'
        icon={<ShoppingCartRoundedIcon />}
        isDrawerItem
      />

      <LinkItem
        linkTo='/profile'
        text='account'
        icon={<PersonRoundedIcon />}
        isDrawerItem
      />

      <Divider sx={style.divider} />

      <LinkItem
        linkTo='/sign-in'
        text='sign in'
        icon={<PersonRoundedIcon />}
        isDrawerItem
      />

      {/* LOGOUT FUNCTIONALITY  ---------------------------- */}
      <ListItemButton
        href='/cart'
        LinkComponent={Link}
      >
        <Typography
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

  divider: {
    backgroundColor: 'primary.main',
    width: '90%',
    margin: '0 auto'
  }
}