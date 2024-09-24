import React, { useState } from "react";

function StateSample() {


  console.log("StateSample component is rendered");

  //counter değişkenimin adı
  //setcounter ise counter değişkenini değiştirmek için kullanacağım fonksiyon
  //useState(0) ise counter değişkeninin başlangıç değeri
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1 id="title">Counter: {counter}</h1>
      <button onClick={() => setCounter(50)}>Increase</button>
    </>
  );
}

export default StateSample;
