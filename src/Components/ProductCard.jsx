import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { CartContext } from "../contexts/CartContext";
// import { AddToCartButton } from "./AddToCartButton";

const ProductCard = ({ data }) => {
  const {
    addToWishList,
    isItemPresentinWishlistHandler,
    removeItemFromWishlist,
  } = useContext(CartContext);
  const {
    _id,
    title,
    brand,
    price,
    categoryName,
    trending,
    rating,
    size,
    images,
    qty,
  } = data;
  return (
    <div
      className="transform duration-200 hover:scale-105 cursor-pointer rounded-lg hover:shadow-sm"
      key={_id}
    >
      <NavLink to={`/productDetails/${_id}`}>
        <img src={images?.[0]?.src} alt={title} className="rounded-lg" />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium text-left">{title}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold text-black">₹ {price}</p>
          </div>
        </div>
      </NavLink>
      <div className="absolute w-[90%] top-3 right-5">
        <div className="flex justify-between mx-auto">
          {trending ? (
            <span className=" inline-flex items-center text-sm font-bold text-black/[0.7] border border-black/[0.7] px-2 rounded-lg ">
              Trending
            </span>
          ) : (
            <div className="text-sm font-bold flex flex-row px-2 bg-black/[0.05] rounded-full items-center justify-center">
              <span>
                <AiFillStar size={20} color="gold" />
              </span>
              <span className="px-1">{rating}</span>
            </div>
          )}
          <div>
            {!isItemPresentinWishlistHandler(data) ? (
              <button onClick={() => addToWishList(data)}>
                <IoMdHeartEmpty size={24} color={"red"} />
              </button>
            ) : (
              <button onClick={() => removeItemFromWishlist(data)}>
                <IoHeart size={24} color={"red"} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
