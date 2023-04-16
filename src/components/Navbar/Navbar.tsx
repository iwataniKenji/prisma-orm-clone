import { Box, Container } from "@mui/material";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import prismaLogo from "../../assets/logo-dark.svg";

const menuItems = ["Product", "Docs", "Developer", "Use Cases", "Company"];

export function Navbar() {
  const isMuiComponent = false;

  if (isMuiComponent) {
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

          <DesktopMenu menuItems={menuItems} />
          <MobileMenu menuItems={menuItems} />
        </Container>
      </Box>
    );
  }

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "16px 0",
        borderBottom: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "1200px",
        }}
      >
        <img src={prismaLogo} />

        <DesktopMenu menuItems={menuItems} />
        <MobileMenu menuItems={menuItems} />
      </div>
    </div>
  );
}
