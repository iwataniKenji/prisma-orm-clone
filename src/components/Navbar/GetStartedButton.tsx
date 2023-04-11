import { Button } from "@mui/material";

export function GetStartedButton() {
  return (
    <Button
      variant="contained"
      sx={{
        py: 1,
        px: 3,
        boxShadow: "none",
        fontWeight: 700,
      }}
    >
      Get Started
    </Button>
  );
}
