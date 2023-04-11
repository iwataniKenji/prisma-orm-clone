import { Box, Button, Card, Container, Typography } from "@mui/material";
import { HeroColoredText } from "./HeroColoredText";
import CallMadeIcon from "@mui/icons-material/CallMade";
import heroBackground from "../../assets/hero-lines.svg";

export function ContentSection() {
  return (
    <Box
      sx={{
        py: 13,
        backgroundColor: "rgb(247, 250, 252)",
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <Container sx={{ display: "flex" }} maxWidth="xl">
        <Box sx={{ width: "50%" }}>
          <Typography
            sx={{
              fontSize: 60,
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
            Prisma unlocks a new level of <strong>developer experience </strong>
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
        </Box>
        <Card sx={{ width: "50%", boxShadow: "none" }}>
          <iframe
            height="100%"
            width="100%"
            frameBorder="0"
            src="https://www.youtube.com/embed/EEDGwLB55bI"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
          />
        </Card>
      </Container>
    </Box>
  );
}
