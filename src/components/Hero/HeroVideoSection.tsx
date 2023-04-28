type Props = {
  isDesktopSize: boolean;
};

export function HeroVideoSection({ isDesktopSize }: Props) {
  return (
    <div
      className="hero-video"
      style={{
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
}
