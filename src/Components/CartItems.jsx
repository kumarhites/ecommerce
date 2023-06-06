import React, { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RiAddLine } from "react-icons/ri";
import { CgMathMinus } from "react-icons/cg";
import { CartContext } from "../contexts/CartContext";

const CartItems = ({ item }) => {
  const [disabled, setDisabled] = useState(false);
  const { cartCountHandler, removeItemFromCart, error } =
    useContext(CartContext);
  const {
    brand,
    categoryName,
    _id,
    price,
    qty,
    rating,
    size,
    title,
    images: [{ src }],
  } = item;

  // const sizes = [
  //   { id: 1, size: 6 },
  //   { id: 2, size: 7 },
  //   { id: 3, size: 7.5 },
  //   { id: 4, size: 8 },
  //   { id: 5, size: 8.5 },
  //   { id: 6, size: 9 },
  //   { id: 7, size: 9.5 },
  //   { id: 8, size: 10 },
  //   { id: 9, size: 10.5 },
  //   { id: 10, size: 11 },
  //   { id: 11, size: 12 },
  // ];
  // const [qty, setQty] = useState(1);
  // const handleQtyIncrease = () => {
  //   setDisabled(false);
  //   const newQty = qty + 1;
  //   setQty(newQty);
  // };
  // const handleQtyDecrease = () => {
  //   if (qty <= 1) {
  //     setDisabled(true);
  //     return;
  //   }
  //   const newQty = qty - 1;
  //   setQty(newQty);
  // };
  // useEffect(() => {
  //   handleQtyDecrease();
  // },[]);
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
            {categoryName}
          </div>
          <div className="text-lg md:text-md font-bold text-black mt-2 flex flex-col">
            ₹ {price}
          </div>
        </div>
        {/* product subtitle */}
        <div className="text-md font-medium text-black/[0.6] hidden md:block">
          {categoryName}
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
              {/* {true ? (<span className="text-red-500">Qty cannot be less than 1</span>): ("")} */}
            </div>
          </div>
          <div
            className="transition-transform duration-200 active:scale-75 cursor-pointer text-red-400 hover:text-red-500 text-[16px] md:text-[20px] p-3 hover:bg-black/[0.07] rounded-full"
            onClick={() => removeItemFromCart(item)}
          >
            <RiDeleteBin6Fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
