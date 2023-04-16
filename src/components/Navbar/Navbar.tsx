import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import prismaLogo from "../../assets/logo-dark.svg";

const menuItems = ["Product", "Docs", "Developer", "Use Cases", "Company"];

type Props = {
  isDesktopSize: boolean;
};

export function Navbar({ isDesktopSize }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: isDesktopSize ? "1rem 0" : "1.5rem 2rem",
        borderBottom: isDesktopSize ? "none" : "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
          maxWidth: "75rem",
        }}
      >
        <img src={prismaLogo} />

        {isDesktopSize ? (
          <DesktopMenu menuItems={menuItems} />
        ) : (
          <MobileMenu menuItems={menuItems} />
        )}
      </div>
    </div>
  );

  // return (
  //   <Box
  //     sx={{
  //       backgroundColor: "white",
  //       py: { xs: 3, lg: 2 },
  //       borderBottom: { xs: "1px solid #e2e8f0", lg: "none" },
  //     }}
  //   >
  //     <Container
  //       sx={{
  //         display: "flex",
  //         justifyContent: "space-between",
  //         alignItems: "center",
  //       }}
  //       maxWidth="xl"
  //     >
  //       <Box component="img" src={prismaLogo} />

  //       <DesktopMenu menuItems={menuItems} />
  //       <MobileMenu menuItems={menuItems} />
  //     </Container>
  //   </Box>
  // )
}
