export const Button = ({ size, color, disabled, children, onClick }) => (
  <button
    style={{
      fontSize: size,
      backgroundColor: color,
      disabled: disabled,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
