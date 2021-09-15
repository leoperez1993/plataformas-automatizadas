import * as React from "react";
import Navbar from "../../components/navbar";
import FrameworkData from "../../../resources/framework/framework.yaml";

const Platforms = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div class="p-5 mt-4 bg-secondary bg-opacity-25 rounded-3">
          <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">{FrameworkData.titulo}</h1>
            <p class="col-md-8 fs-4">{FrameworkData.descripcion}</p>
          </div>
        </div>

        <div class="row align-items-md-stretch">
          {FrameworkData.frameworks.map((data) => {
            return (
              <div class="mt-4 col-md-6">
                <div class="h-100 p-5 text-white bg-dark rounded-3">
                  <h2>{data.framework}</h2>
                  <p>{data.descripcion}</p>
                  <a
                    class="btn btn-outline-light"
                    target="_blank"
                    rel="noreferrer"
                    href={data.link}
                  >
                    <i class="bi bi-plus-lg"></i>
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
