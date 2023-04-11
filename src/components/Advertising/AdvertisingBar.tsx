import { Box, Container, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function AdvertisingSection() {
  return (
    <Box sx={{ backgroundColor: "rgb(26, 32, 44)", py: 2 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
        maxWidth="xl"
      >
        <Typography sx={{ color: "rgb(226, 232, 240)", fontSize: 18 }}>
          Up to 1000x faster database queries with
        </Typography>
        <Typography sx={{ color: "rgb(113, 232, 223)", fontSize: 18 }}>
          Accelerate
        </Typography>
        <ArrowForwardIcon sx={{ color: "rgb(226, 232, 240)" }} />
        <Typography
          sx={{
            color: "rgb(226, 232, 240)",
            fontSize: 18,
            textDecoration: "underline",
          }}
        >
          Sign up for Early Access
        </Typography>
      </Container>
    </Box>
  );
}
