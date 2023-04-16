import { Box, Container, Typography } from "@mui/material";

const textSx = {
  color: "rgb(226, 232, 240)",
  fontSize: { xs: 14, lg: 18 },
  display: "inline",
};

export function AdvertisingSection() {
  const isMuiComponent = false;

  if (isMuiComponent) {
    return (
      <Box sx={{ backgroundColor: "rgb(26, 32, 44)", py: 2 }}>
        <Container sx={{ mx: "auto", textAlign: "center" }} maxWidth="xl">
          <Typography sx={textSx}>
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
          <Typography sx={textSx}> ➜ </Typography>
          <Typography sx={{ ...textSx, textDecoration: "underline" }}>
            Sign up for Early Access
          </Typography>
        </Container>
      </Box>
    );
  }

  // same code but with native HTML elements
  return (
    <div style={{ backgroundColor: "rgb(26, 32, 44)", padding: "16px 0" }}>
      <div
        style={{ margin: "0 auto", textAlign: "center", maxWidth: "1200px" }}
      >
        <a
          style={{
            color: "rgb(226, 232, 240)",
            fontSize: 18,
            display: "inline",
            fontFamily: "'Inter', sans-serif",
            textDecoration: "none",
          }}
          href="#"
        >
          Up to 1000x faster database queries with{" "}
          <strong
            style={{
              color: "rgb(113, 232, 223)",
              fontWeight: 700,
            }}
          >
            Accelerate
          </strong>{" "}
          ➜{" "}
          <p style={{ display: "inline", textDecoration: "underline" }}>
            Sign up for Early Access
          </p>
        </a>
      </div>
    </div>
  );
}
