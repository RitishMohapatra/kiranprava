import React from "react";
import Layout from "../components/Layout";
import Pricing from "../components/Pricing";

const ProductsPage = () => {
  return (
    <Layout>
      <div className="bg-surface">
        <Pricing />
      </div>
    </Layout>
  );
};

export default ProductsPage;
