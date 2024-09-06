'use client'

// -- mui
import { Stack, SxProps } from "@mui/material";
// --- components
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation/Navigation";
import HeroSection from "./HeroSection";
// --- next api
import { usePathname } from "next/navigation";

/**
 * Wrapper component for Header segment children components
 */
const Header = () => {

  const pathname = usePathname();
  const isRoot = pathname === '/';

  // -=-=-=- style -=-=-=-

  const wrapperStyle: SxProps = {
    minHeight: isRoot ? '100dvh' : 0,
    ...(isRoot && {
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url('./assets/hero-section-image.jpg')",
      backgroundPosition: 'bottom right',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    })
  }

  return (
    <Stack
      direction='column'
      component='header'
      alignItems='center'
      sx={wrapperStyle}
    >

      <AnnouncementBar />
      <Navigation />
      {isRoot && <HeroSection />}
    </Stack>
  )
}

export default Header;