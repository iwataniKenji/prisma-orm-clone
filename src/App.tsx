import { Box } from "@mui/material";
import { Navbar } from "./Navbar";
import { ContentSection } from "./ContentSection";
import { AdvertisingSection } from "./AdvertisingSection";

function App() {
  return (
    <Box>
      <AdvertisingSection />
      <Navbar />
      <ContentSection />
    </Box>
  );
}

export default App;
