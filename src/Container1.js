import React from "react";
import c1 from "../src/Images/c1.png";
import c2 from "../src/Images/c2.png";
import c3 from "../src/Images/c3.png";
import intro from "../src/Images/intro.png";
const Container1 = () => {
  return (
    <>
      <div className="container1">
        <div className="div1">
          <h1>Powering the digital business simply</h1>
          <p>
            We provides you with user management functionality that results in
            faster development, faster revenue, more users.
          </p>
          <button className="btn-get">
            <a href="">Get Started</a>
          </button>
          <div className="companies">
            <img src={c1} alt="Company1" />
            <img src={c2} alt="Company2" />
            <img src={c3} alt="Company3" />
          </div>
        </div>
        <div className="div2">
          <img className="introImg" src={intro} alt="Intro" />
        </div>
      </div>
    </>
  );
};

export default Container1;
