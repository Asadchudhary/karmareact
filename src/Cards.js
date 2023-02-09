import React from "react";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="card1">
        <img src={props.imgsrc} alt="Card1" className="cardImages" />
        <h1 className="cardHeading">{props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default Cards;
