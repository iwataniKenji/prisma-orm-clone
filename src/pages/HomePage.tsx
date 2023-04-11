import { Box } from "@mui/material";
import { AdvertisingSection } from "../components/Advertising/AdvertisingBar";
import { ContentSection } from "../components/Hero/HeroSection";
import { Navbar } from "../components/Navbar/Navbar";

export function HomePage() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "primary.main" }}>
      <AdvertisingSection />
      <Navbar />
      <ContentSection />
    </Box>
  );
}
