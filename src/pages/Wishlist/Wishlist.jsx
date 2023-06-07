import React, { useContext } from "react";
import ProductCard from "../../Components/ProductCard";
import Wrapper from "../../Components/Wrapper";
import { CartContext } from "../../contexts/CartContext";
import { BsHeartbreakFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Wishlist = () => {
  const { wishlist } = useContext(CartContext);

  return (
    // <div className="relative top-[100px]">
    //   <Wrapper>
    //     <div className="flex flex-col lg:flex-row gap-12 py-8">
    //       <div className="flex-[2]">
    //         <div className="grid md:grid-cols-3 gap-8">
    //           {wishlist.map((product) => (
    //             <ProductCard data={product} key={product._id} state={true} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </Wrapper>
    // </div>
    <div className="w-full md:py-20 top-[70px] relative">
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "5%" }}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Wrapper>
        {/* heading start */}
        <div className="text-center max-w-[800px] mx-auto mt-2 md:mt-0 ">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
            Your Wishlist ({wishlist.length})
          </div>
          {wishlist.length <= 0 ? (
            <>
              <div className="w-full flex items-center justify-center mt-5">
                <BsHeartbreakFill className="text-red-500" size={80} />
              </div>
              <NavLink to="/products">
                <button className="py-2 md:py-4 my-4 md:my-10 px-7 md:px-10 rounded-lg bg-black text-white text-lg font-medium transistion-transform active:scale-95 mb-3 hover:opacity-75">
                  Explore
                </button>
              </NavLink>
            </>
          ) : (
            <>
              <div className="flex flex-col lg:flex-row gap-12 py-8">
                <div className="flex-[2]">
                  <div className="grid md:grid-cols-3 gap-8">
                    {wishlist.map((product) => (
                      <ProductCard data={product} key={product._id} />
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Wishlist;
