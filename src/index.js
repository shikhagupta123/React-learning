import React from "react";
import ReactDOM from "react-dom";
//for javascript in jsx
const name = "Shikha";
const last = "Gupta";

// for styling
const img = "https://picsum.photos/id/237/200/300";
// for inline style
const customeStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black",
  borderWidth: "relative"
};

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

    {/*JSX attributes and styling react elements */}
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hey there we are styling with css
    </h1>
    <span> I'm differently styled</span>
    <ul id="list">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
    <div>
      <h2> favourite food images </h2>
      <img
        className="food"
        src="https://media.istockphoto.com/photos/front-view-of-real-edible-ice-cream-cone-with-3-different-scoops-of-picture-id1148364081?k=6&m=1148364081&s=612x612&w=0&h=IKINTaNTbayJ4hOATlh_vRP2TpSFerEO0ww3BLbYaao="
        alt="ice cream"
      />
      <img
        className="food"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEvr2EQ-NjGbkKAa7MUGLo6IrugYkqK5izw&usqp=CAU"
        alt="rajma chawal"
      />
      <img
        className="food"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeBdkjgGn1oG7uvs0QteXIpHu_kNCY0LEepg&usqp=CAU"
        alt="dhokla"
      />
      <img src={img} alt=" lorem picsum" />

      {/*Here we are appling inline styling */}
      <h1 style={customeStyle}>
        Inline styling for this h1 tag by puting a javascript object in style
        attribute
      </h1>
      <p style={{ color: "purple", fontStyle: "italic" }}>
        hey there this p tag is also inline styled by creating a javascript
        object inside a jsx's javascript braces
      </p>
    </div>
  </div>,
  document.getElementById("root")
);
