import React from "react";
const { hex, weight } = color;
export default function SingleColor({ index, color }) {
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={}
    >
      <p className="percent-value">{weight}</p>
      <p className="color-value"> #{hex}</p>
    </article>
  );
}
