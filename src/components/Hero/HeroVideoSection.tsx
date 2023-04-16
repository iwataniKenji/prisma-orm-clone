type Props = {
  isDesktopSize: boolean;
};

export function HeroVideoSection({ isDesktopSize }: Props) {
  return (
    <div
      style={{
        height: "100%",
        width: isDesktopSize ? "90%" : "100%",
        margin: isDesktopSize ? "0 auto" : "0",
      }}
    >
      <iframe
        style={{ borderRadius: "8px" }}
        height="100%"
        width="100%"
        frameBorder="0"
        src="https://www.youtube.com/embed/EEDGwLB55bI"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
      />
    </div>
  );

  // return (
  //   <Card
  //     sx={{
  //       boxShadow: "none",
  //       height: "100%",
  //       width: { xs: "100%", lg: "90%" },
  //       mx: { xs: 0, lg: "auto" },
  //       borderRadius: 2,
  //     }}
  //   >
  //     <iframe
  //       height="100%"
  //       width="100%"
  //       frameBorder="0"
  //       src="https://www.youtube.com/embed/EEDGwLB55bI"
  //       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay"
  //     />
  //   </Card>
  // );
}
