import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Framework = () => {
  return (
    <div className="card" style={{ width: "18rem;" }}>
      <StaticImage
        src="../images/framework/cucumber.png"
        alt="Framework cucumber"
      />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

export default Framework;
