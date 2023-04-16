import { Box, Container, IconButton } from "@mui/material";
import { NavBarMenuItem } from "./NavBarMenuItem";
import { ContainedButton } from "../ContainedButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import prismaLogo from "../../assets/logo-dark.svg";

const menuItems = ["Product", "Docs", "Developer", "Use Cases", "Company"];

export function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        py: { xs: 3, lg: 2 },
        borderBottom: { xs: "1px solid #e2e8f0", lg: "none" },
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box component="img" src={prismaLogo} />

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
          <ContainedButton>Get Started</ContainedButton>
          <IconButton>
            <GitHubIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <IconButton sx={{ height: 60, width: 60 }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
