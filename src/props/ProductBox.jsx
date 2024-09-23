import React from "react";

function ProductBox({name, description, price, points, hello}) {

    // const {name, description, price, points} = props;

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Description: {description}</h1>
      <h1>Price: {price}</h1>
      <hr />
      <ul>
        {
            points.map((point, index) => {
                return <li key={index}>{point}</li>;
            })
        }
      </ul>
      <button onClick={hello}>Hello Props</button>
    </>
  );
}

export default ProductBox;
