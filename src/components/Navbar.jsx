import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  console.log("data:", data);
  return (
    <nav>
      <h1>AP</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
};

export default Navbar;
