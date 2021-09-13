import * as React from "react";
import Navbar from "../../components/navbar";
import FrameworkData from "../../../resources/framework/framework.yaml";

const Platforms = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="mt-5">{FrameworkData.titulo}</h1>
        <ul class="mt-5 list-group list-group-flush">
          {FrameworkData.frameworks.map((data) => {
            return <li class="list-group-item">{data.framework}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Platforms;
