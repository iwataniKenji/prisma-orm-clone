import GitHubIcon from "@mui/icons-material/GitHub";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  menuItems: string[];
};

export function DesktopMenu({ menuItems }: Props) {
  return (
    <>
      <div className="navbar-menu">
        {menuItems.map((title) => {
          const hasIcon = title !== "Docs";

          return (
            <div key={title} className="navbar-menu-item">
              <p>{title}</p>
              {hasIcon && <KeyboardArrowDownIcon />}
            </div>
          );
        })}
      </div>

      <div className="navbar-right">
        <button className="get-started-button">Get Started</button>
        <button className="github-button">
          <GitHubIcon sx={{ color: "black" }} />
        </button>
      </div>
    </>
  );
}
