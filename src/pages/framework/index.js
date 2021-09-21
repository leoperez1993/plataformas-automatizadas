import * as React from "react";
import Navbar from "../../components/navbar";
import FrameworkData from "../../../resources/framework/framework.yaml";

const Platforms = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="p-5 mt-4 bg-secondary bg-opacity-25 rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{FrameworkData.titulo}</h1>
            <p className="col-md-8 fs-4">{FrameworkData.descripcion}</p>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          {FrameworkData.frameworks.map((data) => {
            return (
              <div className="mt-4 col-md-6">
                <div className="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>{data.framework}</h2>
                  <p>{data.descripcion}</p>
                  <a
                    className="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                    href={data.link}
                  >
                    <i className="bi bi-plus-lg"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Platforms;
