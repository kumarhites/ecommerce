import React, { useContext, useState } from "react";
import Wrapper from "../../Components/Wrapper";
import ProductCard from "../../Components/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import Sidebar from "../../Components/Sidebar";

const Products = () => {
  const { products } = useContext(ProductsContext);
  const categories = [
    { id: 1, category: "Lifestyle" },
    { id: 2, category: "Running" },
    { id: 3, category: "Gym and Training" },
    { id: 4, category: "Football" },
  ];
  const brands = [
    { id: 1, brandName: "Nike" },
    { id: 2, brandName: "Vans" },
    { id: 3, brandName: "Adidas" },
    { id: 4, brandName: "Reebok" },
    { id: 5, brandName: "Converse" },
  ];
  // const [rangeValue, setRangeValue] = useState(1);
  // const handleRangeInput = (e) => {
  //   setRangeValue(e.target.value);
  // };

  return (
    <>
      <div className="w-full md:py-20">
        <Wrapper>
          {/* heading start */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight top-[25px] relative">
              <input
                type="search"
                name=""
                id=""
                className="mb-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[0.5px] focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-2"
                placeholder="Search here..."
              />
            </div>
          </div>
          {/* heading ends */}
          {/* sidebar starts */}
          <div className="flex flex-col lg:flex-row gap-12 py-8">
            <Sidebar categories={categories} brands={brands} />
            {/* sidebar items end */}
            {/* summary starts */}
            <div className="flex-[2]">
              <div className="grid md:grid-cols-3 gap-4">
                {products.map(({_id, title, price, brand, trending, rating, images:[{src}]}) => (
                  <ProductCard id={_id} title={title} price={price} trending={trending} brand={brand} image={src} rating={rating}/>
                ))}
              </div>
            </div>
            {/* summary ends */}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Products;
