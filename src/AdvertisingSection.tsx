import { Box, Link, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function AdvertisingSection() {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography>
        Up to 1000x faster database queries with Accelerate{" "}
      </Typography>
      <ArrowForwardIcon />
      <Link href="#">Sign up for Early Access</Link>
    </Box>
  );
}
