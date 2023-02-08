import React, { useState } from "react";

export const Modal = ({ show, onClose, size, children }) => {
  const [isShowing, setIsShowing] = useState(show);

  return (
    <>
      {isShowing && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
            backgroundColor: "black",
            opacity: 0.5,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: size,
              margin: "auto",
              marginTop: "2rem",
              borderRadius: "5px",
              backgroundColor: "white",
              padding: "1rem",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};
