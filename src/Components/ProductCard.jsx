import React from "react";
import { NavLink } from "react-router-dom";
import ProductImg from "../assets/images/p1.png";
import { IoHeart } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="transform duration-200 hover:scale-105 cursor-pointer">
      <NavLink>
        <img src={ProductImg} alt="shoes" className="rounded-lg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">Product Name</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold text-black">₹2000</p>
            <p className="line-through text-base font-semibold">₹3000</p>
            <p className="ml-auto text-base font-medium text-green-500">
              10% off
            </p>
          </div>
        </div>
        <div className="absolute w-[90%] top-3 right-3">
          <div className="flex justify-between mx-auto">
            <div className="flex items-center bg-white px-4 rounded-full gap-2">
              <AiFillStar color="gold"/>
              <p className="tex-sm"> 4.5</p>
            </div>
            <div>
              <button>
                <IoHeart size={24} color={"red"} />
              </button>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
