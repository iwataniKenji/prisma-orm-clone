import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "red",
      }}
    >
      <Typography>Título</Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>Product</Typography>
        <Typography>Docs</Typography>
        <Typography>Developer</Typography>
        <Typography>Use Cases</Typography>
        <Typography>Company</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button variant="contained">Get Started</Button>
        <GitHubIcon />
      </Box>
    </Box>
  );
}
