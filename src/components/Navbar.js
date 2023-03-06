import React from "react";
import trollFace from "../images/Troll-Face.png";

function Navbar() {
  return (
    <header className="nav">
      <img src={trollFace} alt="troll" className="nav--image" />
      <h2 className="nav--title">Meme Generator</h2>
      <h4 className="nav--project">React Course - Project3</h4>
    </header>
  );
}

export default Navbar;
