import React from "react";
import Layout from "../../components/Layout";
const Project = ({ params }) => {
  console.log("params:", params);
  return (
    <Layout>
      <div>
        <h3>Single Project</h3>
      </div>
    </Layout>
  );
};

export default Project;
