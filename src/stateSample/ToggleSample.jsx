import React, { useState } from "react";

function ToggleSample() {
  const [toggle, settoggle] = useState(false);

  return (
    <>
      <button onClick={() => settoggle(!toggle)}>Toggle</button>
      {toggle ? <h1>Toggle is true</h1> : <h1>Toggle is false</h1>}
    </>
  );
}

export default ToggleSample;
