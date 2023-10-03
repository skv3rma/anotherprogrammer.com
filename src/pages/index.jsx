import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { header, btn } from "./index.module.css";

export default function Home({ data }) {
  console.log("data:", data);
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>

          <Link className={btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfoPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
