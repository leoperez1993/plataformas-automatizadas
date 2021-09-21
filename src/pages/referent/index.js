import * as React from "react";
import Navbar from "../../components/navbar";
import Referent from "../../components/referent";
import { getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Referents = ({ data }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="mt-4 container marketing">
        <div className="row">
          {data.allMdx.nodes.map((node) => (
            <Referent
              nombre={node.frontmatter.nombre}
              descripcion={node.frontmatter.descripcion}
              img={getImage(node.frontmatter.hero_image)}
              site={node.frontmatter.site}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { tipo: { eq: "referent" } } }) {
      nodes {
        frontmatter {
          nombre
          descripcion
          hero_image {
            childImageSharp {
              gatsbyImageData(height: 180, width: 180)
            }
          }
          site
        }
      }
    }
  }
`;

export default Referents;
