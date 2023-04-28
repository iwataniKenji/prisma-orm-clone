import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  menuItems: string[];
};

export function MobileMenu({ menuItems }: Props) {
  return (
    <>
      <div className="navbar-menu-mobile">
        <button className="navbar-hamburger">
          <MenuIcon sx={{ height: 30, width: 30 }} />
        </button>
      </div>
    </>
  );
}
