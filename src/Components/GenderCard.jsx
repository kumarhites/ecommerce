import React from "react";
import { NavLink } from "react-router-dom";

const ProductCard = ({ image, gender }) => {
  return (
    <div className="cursor-pointer relative shadow-xl">
      <NavLink>
        <img src={image} alt="shoes" className="rounded-lg overflow-hidden" />
        <div className="p-4 z-10 text-black/[0.9] absolute bottom-0 bg-gradient-to-t from-black/[0.7] to-black/[0.07] w-full rounded-b-lg">
          <h2 className="text-lg md:text-xl font-medium text-white shadow-md">
            {gender}
          </h2>
        </div>
      </NavLink>
    </div>
  );
};

export default ProductCard;
