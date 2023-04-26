import CallMadeIcon from "@mui/icons-material/CallMade";

type Props = {
  isDesktopSize: boolean;
};

export function HeroTextSection({ isDesktopSize }: Props) {
  return (
    <>
      <p
        style={{
          fontSize: isDesktopSize ? "3.75rem" : "2.5rem",
          marginBottom: "2.5rem",
          fontWeight: 700,
          fontFamily: "Barlow",
          lineHeight: "1.2",
          display: "inline",
        }}
      >
        Next-generation{" "}
        <span style={{ color: "rgb(90, 103, 216)" }}>Node.js</span> and{" "}
        <span style={{ color: "rgb(90, 103, 216)" }}>Typescript</span> ORM
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontFamily: "'Inter', sans-serif",
          lineHeight: "1.5",
          margin: "2rem 0",
          color: "rgb(74, 85, 104)",
        }}
      >
        Prisma unlocks a new level of{" "}
        <span style={{ fontWeight: 700 }}>developer experience </span>
        when working with databases thanks to its intuitive data model,
        automated migrations, type-safety & auto-completion.
      </p>

      <div style={{ display: "flex", gap: "1rem" }}>
        <button
          style={{
            padding: "0.75rem 1.25rem",
            fontFamily: "Barlow",
            fontWeight: 700,
            fontSize: "1.25rem",
            borderRadius: 5,
            backgroundColor: "rgb(90, 103, 216)",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Quickstart
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0.75rem 1.25rem",
            fontFamily: "Barlow",
            fontWeight: 700,
            fontSize: "1.25rem",
            borderRadius: "5px",
            backgroundColor: "#fff",
            color: "rgb(90, 103, 216)",
            border: "1px solid rgb(90, 103, 216)",
            cursor: "pointer",
          }}
        >
          Playground
          <CallMadeIcon />
        </button>
      </div>
    </>
  );

  // const buttonSx = {
  //   py: "0.6rem",
  //   px: "1.25rem",
  //   boxShadow: "none",
  //   fontFamily: "Barlow",
  //   fontWeight: 700,
  //   fontSize: 18,
  // };

  // const textSx = {
  //   fontSize: { xs: 40, md: 60 },
  //   mb: 5,
  //   fontWeight: 700,
  //   fontFamily: "Barlow",
  //   lineHeight: "1.2",
  //   display: "inline",
  // };

  // return (
  //   <>
  //     <Typography sx={textSx}>
  //       Next-generation{" "}
  //       <Typography sx={{ ...textSx, color: "primary.main" }}>
  //         Node.js
  //       </Typography>{" "}
  //       and{" "}
  //       <Typography sx={{ ...textSx, color: "primary.main" }}>
  //         Typescript
  //       </Typography>{" "}
  //       ORM
  //     </Typography>
  //     <Typography sx={{ fontSize: 24, my: 4, color: "rgb(74, 85, 104)" }}>
  //       Prisma unlocks a new level of <strong>developer experience </strong>
  //       when working with databases thanks to its intuitive data model,
  //       automated migrations, type-safety & auto-completion.
  //     </Typography>

  //     <Box sx={{ display: "flex", gap: 2 }}>
  //       <Button variant="contained" sx={buttonSx}>
  //         Quickstart
  //       </Button>
  //       <Button variant="outlined" sx={buttonSx} endIcon={<CallMadeIcon />}>
  //         Playground
  //       </Button>
  //     </Box>
  //   </>
  // );
}
