'use client'

// -- mui
import {
  Button,
  IconButton,
  List,
  ListItem,
  SxProps,
  Theme
} from "@mui/material";
// -- icons
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
// -- next api
import Link from "next/link";
// --- types
import type { SxPropsMap } from "@/lib/types";
// --- constants
import { HOVER_TRANSITION, NAV_DRAWER_BREAKPOINT } from "@/lib/constants";
import { authRoutes } from "@/lib/auth/routes";
// --- components
import LinkItem from "./LinkItem";
// --- hooks
import { useIsRouteMatch } from "@/hooks/useIsRouteMatch";

/**
 *  List of navigation links for desktop version
 */
const NavBarLinks = () => {

  const isRootOrAuth = useIsRouteMatch(['/', ...authRoutes]);

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
          <ShoppingCartRoundedIcon
            sx={[
              style.icon,
              isRootOrAuth && style.iconRootPage
            ] as SxProps<Theme>}
          />
        </IconButton>
      </ListItem>

      <ListItem sx={style.listItem}>
        <IconButton sx={style.btn}>
          <PersonRoundedIcon
            sx={[
              style.icon,
              isRootOrAuth && style.iconRootPage
            ] as SxProps<Theme>}
          />
        </IconButton>
      </ListItem>

      <ListItem sx={style.listItem}>
        <Button
          variant="contained"
          href='/sign-in'
          LinkComponent={Link}
          color={isRootOrAuth ? 'white' : 'primary'}
          sx={{ fontWeight: isRootOrAuth ? 700 : 500, textTransform: 'none' }}
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
  },

  icon: {
    width: 30,
    height: 30,
    transition: `color ${HOVER_TRANSITION}`,
    color: 'primary.main',
    '&:hover': {
      color: 'primary.light',
    }
  },

  iconRootPage: {
    color: 'white.main',
    '&:hover': {
      color: 'grey.300',
    }
  }
}