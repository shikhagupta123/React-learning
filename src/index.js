import React from "react";
import ReactDOM from "react-dom";

const name = "Shikha";
const last = "Gupta";
var n = 9;
ReactDOM.render(
  <div>
    {/*JX*/}
    <h1>My favourite food</h1>
    <ul>
      <li>ice cream</li>
      <li>rajma chawal</li>
      <li>dhokla</li>
    </ul>
    {/*Javascript expression in JSX*/}
    <h1>Hey {`${name} ${last}`}!!</h1>
    <p>your lucky number is {Math.floor(Math.random() * 10)}</p>
    <p>copyright by {name}</p>
    <p>copyright {new Date().getFullYear()} </p>
  </div>,
  document.getElementById("root")
);
