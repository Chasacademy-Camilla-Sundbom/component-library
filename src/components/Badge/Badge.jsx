export const Badge = ({ color, size, icon }) => (
  <span
    style={{
      backgroundColor: color,
      fontSize: size,
      borderRadius: "50%",
      padding: ".25rem",
    }}
  >
    <i className={`${icon}`} />
  </span>
);
