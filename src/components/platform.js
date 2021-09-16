import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "../css/platform.css";

const Platform = ({ title, description, author, link, image }) => {
  return (
    <>
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">{title}</h2>
          <p className="lead">{description}</p>
          <p className="lead">
            <strong>Autor:</strong> {author}
          </p>
          <Link class="btn btn-outline-dark" to={link}>
            <i class="bi bi-book"></i>
          </Link>
        </div>
        <div className="col-md-5">
          <GatsbyImage image={image} />
        </div>
      </div>
    </>
  );
};

export default Platform;
