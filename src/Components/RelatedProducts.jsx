import React from "react";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ product, products }) => {
  // const { products } = useContext(ProductsContext);
  const {
    id: aliasId,
  } = product;

  let numbers = [];
  let excludedNumber = aliasId; // Specify the number you want to exclude

  // Generate three unique random numbers excluding the given number
  while (numbers.length < 3) {
    let random_number = Math.floor(Math.random() * products.length) + 1; // Adjust the range as per your requirement
    if (random_number !== excludedNumber && !numbers.includes(random_number)) {
      numbers.push(random_number);
    }
  }

  let relatedProducts = products.filter((product) =>
    numbers.includes(parseInt(product.id))
  );

  return (
    <div className="flex mt-5 flex-col">
      <div className="text-2xl font-semibold my-7">Related products</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {relatedProducts.map((data) => (
          <ProductCard data={data} key={data._id}/>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
