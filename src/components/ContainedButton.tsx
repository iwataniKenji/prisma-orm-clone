import { Button } from "@mui/material";

type Props = {
  children: string;
};

export function ContainedButton({ children }: Props) {
  return (
    <Button
      variant="contained"
      sx={{
        py: 1,
        px: 3,
        boxShadow: "none",
        fontFamily: "Barlow",
        fontWeight: 700,
      }}
    >
      {children}
    </Button>
  );
}
