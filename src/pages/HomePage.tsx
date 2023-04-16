import { useMediaQuery } from "@mui/material";
import { AdvertisingSection } from "../components/Advertising/AdvertisingBar";
import { ContentSection } from "../components/Hero/HeroSection";
import { Navbar } from "../components/Navbar/Navbar";
import defaultTheme from "../data/defaultTheme";

export function HomePage() {
  const isDesktopScreenSize = useMediaQuery(defaultTheme.breakpoints.up("lg"));

  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(90, 103, 216)" }}>
      <AdvertisingSection isDesktopSize={isDesktopScreenSize} />
      <Navbar isDesktopSize={isDesktopScreenSize} />
      <ContentSection isDesktopSize={isDesktopScreenSize} />
    </div>
  );

  // return (
  //   <Box sx={{ height: "100vh", backgroundColor: "primary.main" }}>
  //     <AdvertisingSection />
  //     <Navbar />
  //     <ContentSection />
  //   </Box>
  // );
}
