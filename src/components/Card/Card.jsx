import React from "react";

export default function Card({ href, imgAlt, imgSrc }) {
  return (
    <div>
      <a href={href}>
        <img src={imgSrc} alt={imgAlt} />
      </a>
    </div>
  );
}
