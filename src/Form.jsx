import React, { useState } from "react";

//set-up a color state value and a form with an 2 input fields(color,text)
export default function Form({ addColor }) {
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  return (
    // set up a form with an 2 input fields: color, text
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        ></input>

        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}
