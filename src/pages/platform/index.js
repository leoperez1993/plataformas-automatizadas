import * as React from "react";
import Navbar from "../../components/navbar";
import Platform from "../../components/platform";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

const Platforms = ({ data }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container marketing">
        {data.allMdx.nodes.map((node) => (
          <Platform
            title={node.frontmatter.title}
            description={node.frontmatter.description}
            author={node.frontmatter.author}
            link={node.slug}
            image={getImage(node.frontmatter.hero_image)}
          ></Platform>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  {
    allMdx(filter: { slug: { ne: "info-framework" } }) {
      nodes {
        frontmatter {
          title
          description
          author
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default Platforms;
