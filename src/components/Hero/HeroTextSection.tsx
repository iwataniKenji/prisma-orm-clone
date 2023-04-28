import CallMadeIcon from "@mui/icons-material/CallMade";

type Props = {
  isDesktopSize: boolean;
};

export function HeroTextSection({ isDesktopSize }: Props) {
  return (
    <>
      <p
        className="hero-title"
        style={{ fontSize: isDesktopSize ? "3.75rem" : "2.5rem" }}
      >
        Next-generation <span>Node.js</span> and <span>Typescript</span> ORM
      </p>
      <p className="hero-subtitle">
        Prisma unlocks a new level of <span>developer experience </span>
        when working with databases thanks to its intuitive data model,
        automated migrations, type-safety & auto-completion.
      </p>

      <div className="hero-buttons-container">
        <button className="contained-button">Quickstart</button>
        <button className="inline-button">
          Playground
          <CallMadeIcon />
        </button>
      </div>
    </>
  );
}
