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
      className="navbar"
      style={{
        padding: isDesktopSize ? "0.75rem 2rem" : "1.75rem 2rem",
        borderBottom: isDesktopSize ? "none" : "1px solid #e2e8f0",
      }}
    >
      <div className="navbar-centralized">
        <img src={prismaLogo} />

        {isDesktopSize ? (
          <DesktopMenu menuItems={menuItems} />
        ) : (
          <MobileMenu menuItems={menuItems} />
        )}
      </div>
    </div>
  );
}
