import axios from "axios";
import React, { useEffect, useState } from "react";

function EffectSample() {

  const [products, setProducts] = useState([]);

  console.log("Effect Sample Rendered");

  useEffect(() => {

    axios.get("https://northwind.vercel.app/api/products")
      .then((response) => {
        setProducts(response.data);
      });

  }, [])


  return <>
    <h1>Effect Sample</h1>
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>

  </>
}

export default EffectSample;
