import React from "react";

function JsxEvents() {
  const hello = () => {
    alert("Hello JSX Events");
  };

  const inputChange = (e) => {
    console.log(e);
  };

  const showHide = () => {
    var post = document.getElementById("post");

    if (post.style.display === "none") {
      post.style.display = "block";
    } else {
      post.style.display = "none";
    }
  };

  return  <>
      <button onClick={hello}>Hello JSX</button>
      <button onClick={() => hello()}>Hello JSX-2</button>
      <hr />
      <input type="text" onChange={(e) => inputChange(e.target.value)} />
      <hr />
      <input
        type="radio"
        value={1}
        name="radio"
        onChange={(e) => console.log(e.target.value)}
      />
      <input
        type="radio"
        value={2}
        name="radio"
        onChange={(e) => console.log(e.target.value)}
      />
      <hr />
      <input type="file" onChange={(e) => console.log(e.target)} />
      <hr />
      <p id="post">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit
        dolore dicta optio nemo amet accusamus tempore? Dolorem iste natus
        facere minima iusto neque dolor repellendus atque itaque voluptas?
        Molestiae, officia.
      </p>
      <button onClick={showHide}>Show-Hide</button>
    </>

}

export default JsxEvents;
