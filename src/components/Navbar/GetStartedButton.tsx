import { Button } from "@mui/material";

export function GetStartedButton() {
  const isMuiComponent = false;

  if (isMuiComponent) {
    return (
      <Button
        variant="contained"
        sx={{
          py: 1,
          px: 3,
          boxShadow: "none",
          fontFamily: "Barlow",
          fontWeight: 700,
        }}
      >
        Get Started
      </Button>
    );
  }

  return (
    <button
      style={{
        padding: "0.75rem 1.5rem",
        fontFamily: "Inter, sans-serif",
        fontWeight: 700,
        fontSize: "0.875rem",
        borderRadius: "5px",
        backgroundColor: "rgb(90, 103, 216)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
      }}
    >
      Get Started
    </button>
  );
}
