import React from "react";

export const Alert = ({ color, icon, onDismiss, children }) => (
  <div style={{ backgroundColor: color, padding: "1rem", marginBottom: "1rem" }}>
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ marginRight: "1rem" }}>
        <i className={icon} />
      </div>
      <div>{children}</div>
    </div>
    {onDismiss && (
      <button style={{ marginLeft: "auto" }} onClick={onDismiss}>
        <i className="fas fa-times" />
      </button>
    )}
  </div>
);
