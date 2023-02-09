import React from "react";
import earning from "../src/Images/earning.png";
import stats from "../src/Images/stats.png";
import graph from "../src/Images/graph.png";
const Container5 = () => {
  return (
    <div className="container5">
      <div className="con4div2">
        <h1>Rank Your Website</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem.
        </p>
        <a href="#">Learn More</a>
      </div>
      <div className="con4div1">
        <img src={earning} alt="" className="img1" />
        <img src={stats} alt="" className="img2" />
        <img src={graph} alt="" className="img3" />
      </div>
    </div>
  );
};

export default Container5;
