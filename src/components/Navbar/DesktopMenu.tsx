import { Box, IconButton } from "@mui/material";
import { NavBarMenuItem } from "./NavBarMenuItem";
import { GetStartedButton } from "./GetStartedButton";
import GitHubIcon from "@mui/icons-material/GitHub";

type Props = {
  menuItems: string[];
};

export function DesktopMenu({ menuItems }: Props) {
  const isMuiComponent = false;

  if (isMuiComponent) {
    return (
      <>
        <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 6 }}>
          {menuItems.map((title) => (
            <NavBarMenuItem key={title}>{title}</NavBarMenuItem>
          ))}
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            gap: 6,
          }}
        >
          <GetStartedButton />
          <IconButton>
            <GitHubIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </>
    );
  }

  return (
    <>
      <div style={{ display: "flex", gap: "3rem" }}>
        {menuItems.map((title) => (
          <NavBarMenuItem key={title}>{title}</NavBarMenuItem>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "3rem",
        }}
      >
        <GetStartedButton />
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
          <GitHubIcon sx={{ color: "black" }} />
        </button>
      </div>
    </>
  );
}
