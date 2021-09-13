import * as React from "react";
import Navbar from "../../components/navbar";
import ReferentsData from "../../../resources/referent/referents.yaml";

const Referents = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <h1 className="mt-5">{ReferentsData.titulo}</h1>
        <ul class="mt-5 list-group list-group-flush">
          {ReferentsData.referentes.map((data) => {
            return (
              <>
                <li class="list-group-item">{data.referente}</li>
                <ul>
                  <li>Link:</li>
                  <li>Escribir algo</li>
                </ul>
                <br></br>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Referents;
