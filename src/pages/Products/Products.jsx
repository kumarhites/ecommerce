import React, { useState } from "react";
import Wrapper from "../../Components/Wrapper";
import ProductCard from "../../Components/ProductCard";
import Sidebar from "../../Components/Sidebar";
import { RiFilter2Fill } from "react-icons/ri";

const Products = () => {
  const [showFilters, setShowFilters] = useState("hidden")
  const handleMobileFilters = () => {
    if(showFilters === "hidden"){
      setShowFilters("block")
    }else{
      setShowFilters("hidden")
    }
  }
  return (
    <div className="">
      <aside className={`fixed hidden w-0 md:w-64 top-[50px] md:top-[60px] max-h-full border-r px-8 overflow-y-scroll pb-16 md:block ${showFilters}`}>
        <Sidebar />
      </aside>
      <div className="fixed top-[50px] md:hidden px-10-10 right-5 z-10 w-full">
        <div class="text-black text-base font-medium mr-2 px-2.5 py-2.5 rounded-full float-right cursor-pointer shadow-md hover:bg-black/[0.05]">
          <RiFilter2Fill size={24} className="cursor-pointer rounded-full" onClick={handleMobileFilters}/>
        </div>
      </div>
      <main className="grid gap-11 md:left-80 md:pl-72 pt-[120px] px-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  );
};

export default Products;
