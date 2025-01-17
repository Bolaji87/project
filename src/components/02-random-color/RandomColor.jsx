import React, { useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const randomColorUtility = (length) => Math.floor(Math.random() * length);

  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    console.log(hexColor);
  };
  console.log(typeOfColor);
  const handleCreateRandomRgbColor = () => {};

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX colour</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB colour</button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Colour
      </button>
    </div>
  );
};

export default RandomColor;