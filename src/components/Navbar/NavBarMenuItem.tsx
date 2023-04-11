import { Typography } from "@mui/material";

type Props = {
  children: string;
};

export function NavBarMenuItem({ children }: Props) {
  return (
    <Typography
      sx={{
        color: "rgb(45, 55, 72)",
        fontSize: 16,
        fontWeight: 600,
      }}
    >
      {children}
    </Typography>
  );
}
