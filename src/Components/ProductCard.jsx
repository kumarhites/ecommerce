import React from "react";
import { NavLink } from "react-router-dom";
import ProductImg from "../assets/images/p1.png";

const ProductCard = () => {
  return (
    <div className="">
      <NavLink>
        <img src={ProductImg} alt="shoes" className="rounded-lg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold text-black">₹20000</p>
            <p className="line-through text-base font-semibold">₹30000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
