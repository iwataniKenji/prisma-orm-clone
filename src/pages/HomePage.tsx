import { Box } from "@mui/material";
import { AdvertisingSection } from "../components/Advertising/AdvertisingBar";
import { ContentSection } from "../components/Hero/HeroSection";
import { Navbar } from "../components/Navbar/Navbar";

export function HomePage() {
  const isMuiComponent = false;

  if (isMuiComponent) {
    return (
      <Box sx={{ height: "100vh", backgroundColor: "primary.main" }}>
        <AdvertisingSection />
        <Navbar />
        <ContentSection />
      </Box>
    );
  }

  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(90, 103, 216)" }}>
      <AdvertisingSection />
      <Navbar />
      <ContentSection />
    </div>
  );
}
