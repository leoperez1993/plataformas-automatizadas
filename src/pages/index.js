import * as React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import Navbar from "../components/navbar";

const IndexPage = () => {
  return (
    <>
      <title> CES - Plataformas Automatizadas</title>
      <Navbar></Navbar>
      <div className="container mt-5">
        <ul className="list-group">
          <li className="list-group-item active" aria-current="true">
            CES
          </li>
          <li className="list-group-item">Que vamos </li>
          <li className="list-group-item">a ver</li>
          <li className="list-group-item">en esta</li>
          <li className="list-group-item">pagina</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </>
  );
};

export default IndexPage;
