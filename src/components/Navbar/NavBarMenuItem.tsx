import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type Props = {
  hasIcon: boolean;
  children: string;
};

export function NavBarMenuItem({ hasIcon, children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{
          color: "rgb(45, 55, 72)",
          fontSize: "1rem",
          fontWeight: 600,
          fontFamily: "Inter, sans-serif",
          margin: 0,
        }}
      >
        {children}
      </p>
      {hasIcon && <KeyboardArrowDownIcon />}
    </div>
  );

  // return (
  //   <Typography
  //     sx={{
  //       color: "rgb(45, 55, 72)",
  //       fontSize: 16,
  //       fontWeight: 600,
  //     }}
  //   >
  //     {children}
  //   </Typography>
  // );
}
