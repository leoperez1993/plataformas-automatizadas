import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Plataformas Automatizadas
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link active" to="/platform">
            Nuestras Plataformas
          </Link>

          <Link className="nav-link" to="/framework">
            Frameworks
          </Link>

          <Link className="nav-link" to="/referent">
            Referentes
          </Link>

          <Link className="nav-link" to="/code">
            Códigos
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
