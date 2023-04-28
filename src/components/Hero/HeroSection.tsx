import { HeroTextSection } from "./HeroTextSection";
import { HeroVideoSection } from "./HeroVideoSection";

type Props = {
  isDesktopSize: boolean;
};

export function HeroSection({ isDesktopSize }: Props) {
  return (
    <div
      className="hero"
      style={{
        padding: isDesktopSize ? "6.5rem 1rem" : "2rem 1rem",
      }}
    >
      <div className="hero-centralized">
        <div
          className="hero-content"
          style={{
            gridTemplateColumns: isDesktopSize ? "1fr 1fr" : "1fr",
          }}
        >
          <div className="text-container">
            <HeroTextSection isDesktopSize={isDesktopSize} />
          </div>
          <div className="video-container">
            <HeroVideoSection isDesktopSize={isDesktopSize} />
          </div>
        </div>
      </div>
    </div>
  );
}
