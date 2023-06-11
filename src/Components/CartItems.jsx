import React, { useContext, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { RiAddLine } from "react-icons/ri";
import { CgMathMinus } from "react-icons/cg";
import { CartContext } from "../contexts/CartContext";

const CartItems = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const { cartCountHandler, removeItemFromCart } = useContext(CartContext);
  const {
    brand,
    gender,
    price,
    qty,
    size,
    title,
    images: [{ src }],
  } = item;

  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image */}
      <div className="shrink-0 aspect-square w-[100px] md:w-[130px]">
        <img src={src} alt={title} className="rounded-lg" />
      </div>
      {/* image ends */}
      <div className="w-full flex flex-col">
        <div className="text-sm md:text-base font-semibold text-black/[0.8] flex gap-2">
          {brand}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {title}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {gender}'s Shoes
          </div>
          <div className="text-lg md:text-md font-bold text-black mt-2 flex flex-col">
            ₹ {price}
          </div>
        </div>
        {/* product subtitle */}
        <div className="text-md font-medium text-black/[0.6] hidden md:block">
          {gender}'s Shoes
        </div>
        {/* selector */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md font-semibold">
            <div className=" flex items-center gap-1">
              <div className="font-semibold">Size: {size}</div>
              <div className="text-sm mx-4 flex items-center">
                <button
                  className={`transition-transform duration-200 active:scale-90 hover:bg-black/[0.07] p-1 rounded-full border border-black/[0.5] ${
                    disabled ? "cursor-not-allowed" : ""
                  } `}
                  onClick={() => {
                    cartCountHandler(item, "decrement");
                  }}
                >
                  <CgMathMinus />
                </button>

                <input
                  type="text"
                  value={qty}
                  className="w-10 text-center bg-white"
                  disabled
                />
                <button
                  className="transition-transform duration-200 active:scale-90 hover:bg-black/[0.07] p-1 rounded-full border border-black/[0.5]"
                  onClick={() => {
                    setDisabled(false);
                    cartCountHandler(item, "increment");
                  }}
                >
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
          <div
            className="transition-transform duration-200 active:scale-75 cursor-pointer text-red-500 hover:text-red-600 text-[16px] md:text-[20px] p-3 hover:bg-black/[0.07] rounded-full"
            onClick={() => removeItemFromCart(item)}
          >
            <AiOutlineDelete size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
