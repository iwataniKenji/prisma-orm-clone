import { Box, Container, Typography } from "@mui/material";

export function AdvertisingSection() {
  return (
    <Box sx={{ backgroundColor: "rgb(26, 32, 44)", py: 2 }}>
      <Container sx={{ mx: "auto", textAlign: "center" }} maxWidth="xl">
        <Typography
          sx={{
            color: "rgb(226, 232, 240)",
            fontSize: { xs: 14, lg: 18 },
            display: "inline",
          }}
        >
          Up to 1000x faster database queries with
        </Typography>
        <Typography
          sx={{
            color: "rgb(113, 232, 223)",
            fontSize: { xs: 14, lg: 18 },
            fontWeight: 700,
            display: "inline",
          }}
        >
          {" "}
          Accelerate
        </Typography>
        <Typography
          sx={{
            color: "rgb(226, 232, 240)",
            fontSize: { xs: 14, lg: 18 },
            display: "inline",
          }}
        >
          {" "}
          ➜{" "}
        </Typography>
        <Typography
          sx={{
            color: "rgb(226, 232, 240)",
            fontSize: { xs: 14, lg: 18 },
            textDecoration: "underline",
            display: "inline",
          }}
        >
          Sign up for Early Access
        </Typography>
      </Container>
    </Box>
  );
}
