import React from "react";

function OneWayBinding() {
  var name = "Çağatay";
  var surname = "Yıldız";
  var age = 18;
  var onlineStatus = false;
  var points = [2, 5, 6, 7, 1, 3, 1];

  let avgPoints = points.reduce((a, b) => a + b, 0) / points.length;


  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Surname: {surname.toUpperCase()}</h1>
      <h1>Age: {age}</h1>
      {onlineStatus == true ? <h1>Online</h1> : <h1>Offline</h1>}
      <h1>Points Count: {points.length}</h1>
      <h1>Average Points: {avgPoints.toFixed(2)}</h1>

      <ul>
        {points.map((item) => (
          <li>{item}</li>
        ))}
      </ul>

    </>

  );
}

export default OneWayBinding;
