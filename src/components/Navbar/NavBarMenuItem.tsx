type Props = {
  children: string;
};

export function NavBarMenuItem({ children }: Props) {
  return (
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
