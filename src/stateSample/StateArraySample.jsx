import React, { useState } from "react";

function StateArraySample() {
  const [numbers, setNumbers] = useState([3, 5, 11, 2]);

  const addRandom = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNumbers([...numbers, randomNumber]);
  };    

  return (
    <>
      <h1>Numbers Length: {numbers.length}</h1>
      
      <hr />
      <button onClick={() => setNumbers([])}>Clear</button>
      <button onClick={addRandom}>Add Random</button>
      <hr />
      <ul>
        {numbers.map((number, index) => {
          return <li key={index}>{number}</li>;
        })}
      </ul>
     
    </>
  );
}

export default StateArraySample;
