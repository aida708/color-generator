import React from "react";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

export default function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}
