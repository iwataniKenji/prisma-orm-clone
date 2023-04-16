import { Box, Container, Grid } from "@mui/material";
import { HeroTextSection } from "./HeroTextSection";
import { HeroVideoSection } from "./HeroVideoSection";
import heroBackground from "../../assets/hero-lines.svg";

export function ContentSection() {
  return (
    <Box
      sx={{
        px: 2,
        py: { xs: 4, md: 13 },
        backgroundColor: "rgb(247, 250, 252)",
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <Container sx={{ display: "flex" }} maxWidth="xl">
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={12} lg={6} mb={6}>
            <HeroTextSection />
          </Grid>

          <Grid item xs={12} lg={6} sx={{ height: { xs: 400, lg: 350 } }}>
            <HeroVideoSection />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
