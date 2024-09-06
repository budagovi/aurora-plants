// --- types
import type { SxPropsMap } from '@/lib/types';
// --- mui
import { AppBar, Toolbar } from '@mui/material';
// --- components
import Title from './Title';
import NavBarLinks from './NavBarLinks';
import DrawerNavigation from './DrawerNavigation';
// --- ui
import MaxWidthBox from "@/UI/MaxWidthBox";

/**
 * Wrapper component for navigation-related components
 */
const Navigation = () => {
  return (
    <MaxWidthBox>
      <AppBar
        sx={style.appbar}
        elevation={0}
      >
        <Toolbar
          disableGutters
        >
          <Title />
          <NavBarLinks />
          <DrawerNavigation />
        </Toolbar>
      </AppBar>
    </MaxWidthBox>
  )
}

export default Navigation;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  appbar: {
    position: "static",
    backgroundColor: 'transparent'
  }
}