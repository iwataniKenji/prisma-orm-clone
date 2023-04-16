import { HeroTextSection } from "./HeroTextSection";
import { HeroVideoSection } from "./HeroVideoSection";
import heroBackground from "../../assets/hero-lines.svg";

type Props = {
  isDesktopSize: boolean;
};

export function ContentSection({ isDesktopSize }: Props) {
  return (
    <div
      style={{
        padding: isDesktopSize ? "6.5rem 1rem" : "4rem 1rem",
        backgroundColor: "rgb(247, 250, 252)",
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div style={{ maxWidth: "75rem", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            alignItems: "center",
            justifyContent: "space-between",
            gridTemplateColumns: isDesktopSize ? "1fr 1fr" : "1fr",
            width: "100%",
          }}
        >
          <div style={{ marginBottom: 48 }}>
            <HeroTextSection isDesktopSize={isDesktopSize} />
          </div>
          <div style={{ height: 350 }}>
            <HeroVideoSection isDesktopSize={isDesktopSize} />
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <Box
  //     sx={{
  //       px: 2,
  //       py: { xs: 4, md: 13 },
  //       backgroundColor: "rgb(247, 250, 252)",
  //       backgroundImage: `url(${heroBackground})`,
  //     }}
  //   >
  //     <Container maxWidth="xl">
  //       <Grid container sx={{ display: "flex", alignItems: "center" }}>
  //         <Grid item xs={12} lg={6} mb={6}>
  //           <HeroTextSection />
  //         </Grid>

  //         <Grid item xs={12} lg={6} sx={{ height: { xs: 400, lg: 350 } }}>
  //           <HeroVideoSection />
  //         </Grid>
  //       </Grid>
  //     </Container>
  //   </Box>
  // );
}
