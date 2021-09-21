import * as React from "react";
import Navbar from "../../components/navbar";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";

const PlatformInfo = ({ data }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </div>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
    }
  }
`;

export default PlatformInfo;
