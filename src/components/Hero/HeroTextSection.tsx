import { Box, Button, Typography } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";

const buttonSx = {
  py: "0.75rem",
  px: "1.25rem",
  boxShadow: "none",
  fontFamily: "Barlow",
  fontWeight: 700,
  fontSize: 16,
};

const textSx = {
  fontSize: { xs: 40, md: 60 },
  mb: 5,
  fontWeight: 700,
  fontFamily: "Barlow",
  lineHeight: "1.2",
  display: "inline",
};

export function HeroTextSection() {
  return (
    <>
      <Typography sx={textSx}>
        Next-generation{" "}
        <Typography sx={{ ...textSx, color: "primary.main" }}>
          Node.js
        </Typography>{" "}
        and{" "}
        <Typography sx={{ ...textSx, color: "primary.main" }}>
          Typescript
        </Typography>{" "}
        ORM
      </Typography>
      <Typography sx={{ fontSize: 24, my: 4, color: "rgb(74, 85, 104)" }}>
        Prisma unlocks a new level of <strong>developer experience </strong>
        when working with databases thanks to its intuitive data model,
        automated migrations, type-safety & auto-completion.
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button variant="contained" sx={buttonSx}>
          Quickstart
        </Button>
        <Button variant="outlined" sx={buttonSx} endIcon={<CallMadeIcon />}>
          Playground
        </Button>
      </Box>
    </>
  );
}
