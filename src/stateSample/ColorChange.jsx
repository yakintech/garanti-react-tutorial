import React, { useState } from "react";

function ColorChange() {
    
  const [color, setcolor] = useState("red");

  return (
    <>
      <button onClick={() => setcolor("yellow")}>Change</button>
      <div style={{ width: 200, height: 200, backgroundColor: color }}></div>
    </>
  );
}

export default ColorChange;
