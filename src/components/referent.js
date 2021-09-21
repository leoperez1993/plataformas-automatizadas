import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Referent = ({ nombre, descripcion, img, site }) => {
  return (
    <>
      <div className="col-sm-6 col-lg-4">
        <GatsbyImage className="rounded-circle" image={img} />
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        <p>
          <a
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
            href={site}
          >
            <i class="bi bi-box-arrow-up-right"></i>
          </a>
        </p>
      </div>
    </>
  );
};

export default Referent;
