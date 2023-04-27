import React from "react";

const Button = ({ size, color, disabled, children, onClick }) => {
  const style = {
    size: {
      small: "px-3 py-6 text-sm",
      medium: "px-4 py-8 text-base",
      large: "px-5 py-9 text-lg",
      xl: "px-5 py-9 text-lg",
    },
    color: {
      primary: "bg-red-500",
      secondary: "bg-blue-600",
    },
    disabled: "opacity-30",
  };

  const sizeStyle = style.size[size];
  const colorStyle = style.color[color];
  const disabledStyle = disabled ? style.disabled : "";

  return (
    <button
      className={`${sizeStyle} ${colorStyle} ${disabledStyle}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? "Disabled!" : children}
    </button>
  );
};

export default Button;
