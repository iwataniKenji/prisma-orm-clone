import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { HeroColoredText } from "./HeroColoredText";
import CallMadeIcon from "@mui/icons-material/CallMade";
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
            <Typography
              sx={{
                fontSize: { xs: 40, md: 60 },
                mb: 5,
                fontWeight: 700,
                fontFamily: "Barlow",
                lineHeight: "1.2",
              }}
            >
              Next-generation <HeroColoredText>Node.js</HeroColoredText> and{" "}
              <HeroColoredText>Typescript</HeroColoredText> ORM
            </Typography>
            <Typography sx={{ fontSize: 24, mb: 4, color: "rgb(74, 85, 104)" }}>
              Prisma unlocks a new level of{" "}
              <strong>developer experience </strong>
              when working with databases thanks to its intuitive data model,
              automated migrations, type-safety & auto-completion.
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  py: "0.75rem",
                  px: "1.25rem",
                  boxShadow: "none",
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Quickstart
              </Button>
              <Button
                variant="outlined"
                sx={{
                  py: "0.75rem",
                  px: "1.25rem",
                  boxShadow: "none",
                  fontFamily: "Barlow",
                  fontWeight: 700,
                  fontSize: 16,
                }}
                endIcon={<CallMadeIcon />}
              >
                Playground
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} lg={6} sx={{ height: { xs: 400, lg: 350 } }}>
            <Card
              sx={{
                boxShadow: "none",
                height: "100%",
                width: { xs: "100%", lg: "90%" },
                mx: { xs: 0, lg: "auto" },
                borderRadius: 2,
              }}
            >
              <iframe
                height="100%"
                width="100%"
                frameBorder="0"
                src="https://www.youtube.com/embed/EEDGwLB55bI"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
              />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
