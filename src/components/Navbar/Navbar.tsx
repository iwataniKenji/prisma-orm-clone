import { Box, Container, IconButton } from "@mui/material";
import { NavBarMenuItem } from "./NavBarMenuItem";
import { ContainedButton } from "../ContainedButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import prismaLogo from "../../assets/logo-dark.svg";

const menuItems = ["Product", "Docs", "Developer", "Use Cases", "Company"];

export function Navbar() {
  return (
    <Box sx={{ backgroundColor: "white", py: 2 }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box component="img" src={prismaLogo} />

        <Box sx={{ display: "flex", gap: 6 }}>
          {menuItems.map((title) => (
            <NavBarMenuItem key={title}>{title}</NavBarMenuItem>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
          <ContainedButton>Get Started</ContainedButton>
          <IconButton>
            <GitHubIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
