import React from "react";
import earning from "../src/Images/earning.png";
import stats from "../src/Images/stats.png";
import graph from "../src/Images/graph.png";
const Container4 = () => {
  return (
    <div className="container4">
      <div className="con4div1">
        <img src={earning} alt="" className="img1" />
        <img src={stats} alt="" className="img2" />
        <img src={graph} alt="" className="img3" />
      </div>
      <div className="con4div2">
        <h1>Small detail, big impact</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem.
        </p>
        <a href="">Learn More</a>
      </div>
    </div>
  );
};

export default Container4;
