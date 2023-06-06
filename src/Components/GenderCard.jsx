import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../contexts/FilterContext";

const ProductCard = ({ image, gender }) => {
  const { dispatch } = useContext(FilterContext);
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer relative shadow-xl border border-red-600"
      onClick={() => {
        dispatch({ type: "GET_GENDER", payload: "women" });
        navigate("/products");
      }}
    >
      <img src={image} alt="shoes" className="rounded-lg overflow-hidden" />
      <div className="p-4 z-10 text-black/[0.9] absolute bottom-0 bg-gradient-to-t from-black/[0.7] to-black/[0.07] w-full rounded-b-lg">
        <h2 className="text-lg md:text-xl font-medium text-white shadow-md">
          {gender}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
