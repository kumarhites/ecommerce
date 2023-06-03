import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = () => {
  return (
    <div className="flex mt-5 flex-col">
        <div className="text-2xl font-semibold my-7">Related products</div>
      <div className="grid grid-cols-3 gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default RelatedProducts;
