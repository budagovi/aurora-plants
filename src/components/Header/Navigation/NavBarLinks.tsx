'use client'

// -- mui
import {
  Button,
  IconButton,
  List,
  ListItem,
  SxProps
} from "@mui/material";
// -- icons
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// -- next api
import Link from "next/link";
import { usePathname } from "next/navigation";
// --- types
import type { SxPropsMap } from "@/lib/types";
// --- constants
import { hoverTransition, NAV_DRAWER_BREAKPOINT } from "@/lib/constants";
// --- components
import LinkItem from "./LinkItem";

/**
 *  List of navigation links for desktop version
 */
const NavBarLinks = () => {

  const pathname = usePathname();
  const isRoot = pathname === '/';

  // route-dependent styling for icon-buttons
  const iconStyle: SxProps = {
    width: 30,
    height: 30,
    transition: `color ${hoverTransition}`,
    color: isRoot ? 'white.main' : 'primary.main',
    '&:hover': {
      color: isRoot ? 'grey.300' : 'primary.light',
    }
  }

  return (
    <List sx={style.list}>

      <LinkItem
        linkTo='/store'
        text='store'
        icon={<PersonRoundedIcon />}
      />

      <LinkItem
        linkTo='/about'
        text='about'
        icon={<PersonRoundedIcon />}
      />

      <LinkItem
        linkTo='/contact'
        text='contact us'
        icon={<PersonRoundedIcon />}
      />

      <ListItem sx={style.listItem}>
        <IconButton sx={style.btn} >
          <ShoppingCartRoundedIcon sx={iconStyle} />
        </IconButton>
      </ListItem>

      <ListItem sx={style.listItem}>
        <IconButton sx={style.btn}>
          <PersonRoundedIcon sx={iconStyle} />
        </IconButton>
      </ListItem>

      <ListItem sx={style.listItem}>
        <Button
          variant="contained"
          href='/sign-in'
          LinkComponent={Link}
          color={isRoot ? 'white' : 'primary'}
          sx={{ fontWeight: isRoot ? 700 : 500, textTransform: 'none' }}
        >
          Sign in
        </Button>
      </ListItem>

    </List >
  )
}

export default NavBarLinks;

// -=-=-=- style -=-=-=-

const style: SxPropsMap = {

  list: {
    display: 'flex',
    gap: {
      xs: 0.3,
      sm: 0.4,
      md: 0.5,
    },
    [`@media (max-width: ${NAV_DRAWER_BREAKPOINT}px)`]: {
      display: 'none',
    },
  },

  listItem: {
    width: 'auto',
    paddingInline: 0
  },

  btn: {
    padding: 0
  }
}