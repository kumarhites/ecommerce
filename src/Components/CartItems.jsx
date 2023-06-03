import React, { useEffect, useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import productImg from "../assets/images/p1.png";
import { RiAddLine } from "react-icons/ri";
import { CgMathMinus } from "react-icons/cg";

const CartItems = () => {
  const [disabled, setDisabled] = useState(false);
  const sizes = [
    { id: 1, size: 6 },
    { id: 2, size: 7 },
    { id: 3, size: 7.5 },
    { id: 4, size: 8 },
    { id: 5, size: 8.5 },
    { id: 6, size: 9 },
    { id: 7, size: 9.5 },
    { id: 8, size: 10 },
    { id: 9, size: 10.5 },
    { id: 10, size: 11 },
    { id: 11, size: 12 },
  ];
  const [qty, setQty] = useState(1);
  const handleQtyIncrease = () => {
    setDisabled(false);
    const newQty = qty + 1;
    setQty(newQty);
  };
  const handleQtyDecrease = () => {
    if (qty <= 1) {
      setDisabled(true);
      return;
    }
    const newQty = qty - 1;
    setQty(newQty);
  };
  useEffect(() => {
    handleQtyDecrease();
  },[]);
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      {/* image */}
      <div className="shrink-0 aspect-square w-[80px] md:w-[102px]">
        <img src={productImg} alt="" className="rounded-lg" />
      </div>
      {/* image ends */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            Jordan's
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            Men's golf shoes
          </div>
          <div className="text-lg md:text-md font-bold text-black/[0.7] mt-2 flex flex-col">
            ₹2000
          </div>
        </div>
        {/* product subtitle */}
        <div className="text-md font-medium text-black/[0.6] hidden md:block">
          Men's Golf Shoes
        </div>
        {/* selector */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md font-semibold">
            <div className=" flex items-center gap-1">
              <div className="font-semibold">Size:</div>
              <select name="" id="" className="hover:text-black">
                {sizes.map(({ id, size }) => (
                  <React.Fragment key={id}>
                    <option value={size}>{`UK ${size}`}</option>
                  </React.Fragment>
                ))}
              </select>
              <div className="text-sm mx-4 flex items-center">
                {disabled ? (
                  <button
                    className="bg-black/[0.09] p-1 rounded-full border border-red-400 cursor-not-allowed text-red-400"
                    onClick={handleQtyDecrease}
                    disabled
                  >
                    <CgMathMinus />
                  </button>
                ) : (
                  <button
                    className="transition-transform duration-200 active:scale-90 hover:bg-black/[0.07] p-1 rounded-full border border-black/[0.5]"
                    onClick={handleQtyDecrease}
                  >
                    <CgMathMinus />
                  </button>
                )}
                <input
                  type="text"
                  value={qty}
                  className="w-10 text-center bg-white"
                  disabled
                />
                <button
                  className="transition-transform duration-200 active:scale-90 hover:bg-black/[0.07] p-1 rounded-full border border-black/[0.5]"
                  onClick={handleQtyIncrease}
                >
                  <RiAddLine />
                </button>
              </div>
            </div>
          </div>
          <RiDeleteBin6Fill className="transition-transform duration-200 active:scale-75 cursor-pointer text-red-400 hover:text-red-500 text-[16px] md:text-[20px]" />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
