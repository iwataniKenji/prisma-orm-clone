type Props = {
  isDesktopSize: boolean;
};

export function AdvertisingSection({ isDesktopSize }: Props) {
  return (
    <div className="advertising-bar">
      <div className="advertising-bar-centralized">
        <a
          className="advertising-anchor"
          style={{ fontSize: isDesktopSize ? "1.125rem" : "0.875rem" }}
          href="#"
        >
          Up to 1000x faster database queries with{" "}
          <span className="advertising-colored-text">Accelerate</span> ➜{" "}
          <p className="advertising-signup">Sign up for Early Access</p>
        </a>
      </div>
    </div>
  );
}
