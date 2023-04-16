import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  menuItems: string[];
};

export function MobileMenu({ menuItems }: Props) {
  const isMuiComponent = false;

  if (isMuiComponent) {
    return (
      <>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <IconButton sx={{ height: 60, width: 60 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "transparent",
            border: "none",
            borderRadius: "50%",
            height: "2.5rem",
            width: "2.5rem",
          }}
        >
          <MenuIcon sx={{ height: 30, width: 30 }} />
        </button>
      </div>
    </>
  );
}
