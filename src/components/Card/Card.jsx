export const Card = ({ href, imgAlt, imgSrc }) => (
  <a href={href}>
    <img src={imgSrc} alt={imgAlt} />
    <div style={{ padding: "1rem" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>{imgAlt}</div>
    </div>
  </a>
);
