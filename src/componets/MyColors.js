import React from "react";

import { Inputs2 } from "./Inputs2";
import { useState } from "react";

function MyColors() {
  const [colors, setColors] = useState([]);

  const addColorAtIndex = (newColor, index) => {
    // Todo: Add 'newColor' to 'colors' at the designated 'index'
    // and update state
    const updateColor = [
      ...colors.slice(0, index),
      newColor,
      ...colors.slice(index),
    ];
    setColors(updateColor);
  };

  const renderedColors = colors.map((color, i) => {
    return <li key={i}>{color}</li>;
  });

  return (
    <div>
      <Inputs2 onSubmit={addColorAtIndex} max={colors.length} />
      <ul>{renderedColors}</ul>
    </div>
  );
}

export default MyColors;
