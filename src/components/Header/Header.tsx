'use client'

// -- mui
import { Stack, SxProps, Theme } from "@mui/material";
// --- components
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation/Navigation";
import HeroSection from "./HeroSection";
// --- custom hooks
import { useIsRouteMatch } from "@/hooks/useIsRouteMatch";
// --- types
import { SxPropsMap } from "@/lib/types";

/**
 * Wrapper component for Header segment children components
 */
const Header = () => {

  const isRoot = useIsRouteMatch();

  return (
    <Stack
      component='header'
      sx={[style.wrapper, isRoot && style.rootPageWrapper] as SxProps<Theme>}
    >
      <AnnouncementBar />
      <Navigation />
      {isRoot && <HeroSection />}
    </Stack>
  )
}

export default Header;


// -=-=-=- style -=-=-=-

const style: SxPropsMap = {
  wrapper: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  rootPageWrapper: {
    minHeight: '100dvh',
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('./assets/hero-section-image.jpg')",
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}