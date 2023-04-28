import { useMediaQuery } from "@mui/material";
import { AdvertisingSection } from "../components/Advertising/AdvertisingBar";
import { HeroSection } from "../components/Hero/HeroSection";
import { Navbar } from "../components/Navbar/Navbar";
import defaultTheme from "../data/defaultTheme";

export function HomePage() {
  const isDesktopScreenSize = useMediaQuery(defaultTheme.breakpoints.up("lg"));

  return (
    <div className="home-page">
      <AdvertisingSection isDesktopSize={isDesktopScreenSize} />
      <Navbar isDesktopSize={isDesktopScreenSize} />
      <HeroSection isDesktopSize={isDesktopScreenSize} />
    </div>
  );
}
