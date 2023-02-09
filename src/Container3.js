import React from "react";

import Cards from "./Cards";
import CardApi from "./CardApi";
const Container3 = () => {
  return (
    <div className="container3">
      {CardApi.map((CardData, index) => {
        return (
          <Cards
            key={index}
            imgsrc={CardData.imgsrc}
            heading={CardData.heading}
            para={CardData.para}
          />
        );
      })}
    </div>
  );
};

export default Container3;
