import React, { useContext } from "react";
import Wrapper from "../../Components/Wrapper";
import CartItems from "../../Components/CartItems";
import Footer from "../../Components/Footer";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";

const Cart = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const emptyCart = () => {
    try {
      for (let i = 0; i < cart?.length; i++) {
        removeItemFromCart(cart[i]);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerStyle={{ top: "10%" }}
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <div className="w-full md:py-20 top-[70px] relative ">
        <Wrapper>
          {/* heading start */}
          <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
            <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight ">
              Shopping Cart
            </div>
          </div>
          {/* heading end */}
          {/* cart */}
          {cart.length <= 0 ? (
            <div className="flex flex-col items-center mb-28">
              <p className="text-base font-semibold">
                Once you start shopping it will show up here
              </p>
              <img
                src="https://cdn.dribbble.com/users/992274/screenshots/7253747/media/2472c5eeb70f997c4f5d3046923fb9c3.jpg"
                alt=""
                className="aspect-auto w-96"
              />
              <NavLink to="/products">
                <button className="w-full py-2 md:py-4 my-4 md:my-10 px-7 md:px-10 rounded-lg bg-black text-white text-lg font-medium transistion-transform active:scale-95 mb-3 hover:opacity-75">
                  Explore
                </button>
              </NavLink>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* cart items start */}
              <div className="flex-[2]">
                <div className="text-lg font-bold">
                  Cart Items ({cart.length})
                </div>
                {cart?.map((item) => (
                  <CartItems item={item} key={item._id} />
                ))}
              </div>
              {/* cart items end */}
              {/* summary starts */}
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>
                <div className="p-5 my-5  rounded-lg">
                  <div className="flex justify-between">
                    <div className="text-base md:text-lg font-semibold text-black mb-1">
                      Subtotal (x
                      {cart?.reduce((total, { qty }) => total + qty, 0)})
                    </div>
                    <div className="text-base md:text-lg font-medium text-black">
                      {cart.length <= 0
                        ? "-------"
                        : cart
                            .reduce(
                              (total, { price, qty }) => total + price * qty,
                              0
                            )
                            .toFixed(2)}
                    </div>
                  </div>
                  <div className="text-base font-medium flex justify-between">
                    Estimated delivery and handling*
                    <div className="">₹250</div>
                  </div>
                  <div className="flex justify-between border-t py-5 mt-5">
                    <div className="text-lg font-bold">Total</div>
                    <div className="text-black font-bold">
                      ₹
                      {cart.length <= 0
                        ? "-------"
                        : cart
                            .reduce(
                              (total, { price, qty }) =>
                                total + price * qty + 250,
                              0
                            )
                            .toFixed(2)}
                    </div>
                  </div>
                  <div className="border-y py-5 mt-5">
                    <div className="text-lg font-bold mb-3">Shipping to</div>
                    <div className="flex flex-col w-full">
                      <h1 className="text-lg font-semibold">
                        {currentUser.firstName} {currentUser.lastName}
                      </h1>
                      <address>{currentUser.address}</address>
                    </div>
                  </div>

                  <NavLink to="/">
                    <button
                      className="w-full py-4 my-4 md:my-10 rounded-full bg-black text-white text-lg font-medium transistion-transform active:scale-95 mb-3 hover:opacity-75"
                      onClick={emptyCart}
                    >
                      Checkout
                    </button>
                  </NavLink>
                </div>
              </div>
              {/* summary ends */}
            </div>
          )}
        </Wrapper>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
