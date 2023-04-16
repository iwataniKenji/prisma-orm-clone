import { Typography } from "@mui/material";

type Props = {
  children: string;
};

export function HeroColoredText({ children }: Props) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 40, md: 60 },
        mb: 5,
        fontWeight: 700,
        fontFamily: "Barlow",
        lineHeight: "1.2",
        display: "inline",
        color: "primary.main",
      }}
    >
      {children}
    </Typography>
  );
}
