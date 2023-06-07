import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../Components/Wrapper";
import { NavLink } from "react-router-dom";
import ProductDetailsCarousel from "../../Components/ProductDetailsCarousel";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Toaster, toast } from "react-hot-toast";
// import RelatedProducts from "../../Components/RelatedProducts"

const ProductDetails = () => {
  const { token } = useContext(AuthContext);
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const [buttonState, setButtonState] = useState(false);
  const {
    addToCart,
    isItemPresentInCartHandler,
    isItemPresentinWishlistHandler,
    addToWishList,
  } = useContext(CartContext);

  const product = products.find(({ _id }) => _id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="#888888"
            d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
          >
            <animateTransform
              attributeName="transform"
              dur="0.75s"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 12;360 12 12"
            ></animateTransform>
          </path>
        </svg>
      </div>
    );
  }

  const {
    _id,
    id: aliasId,
    title,
    price,
    brand,
    categoryName,
    images,
    size,
  } = product;

  const handleAddToCart = () => {
    if (!token) {
      toast.error("Please login to continue");
      return;
    }
    const isItemPresentInCart = isItemPresentInCartHandler(product);

    if (isItemPresentInCart) {
      // If the item is already present in the cart, navigate to the cart page
      // You can replace the NavLink with the appropriate navigation method
      window.location.href = "/cart";
    } else {
      // Add the item to the cart
      addToCart(product);
      setButtonState(true);
    }
  };

  const handleAddToWishlist = () => {
    if (!token) {
      toast.error("Please login to continue");
      return;
    }
    addToWishList(product);
  };

  return (
    <div className="w-full md:py-20">
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
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={images} key={aliasId} />
          </div>
          {/* left column ends */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-lg font-semibold -mb-1">{brand}</div>
            <div className="text-[34px] font-semibold">{title}</div>

            {/* product subtitle */}
            <div className="text-base font-semibold mb-5">{categoryName}</div>

            {/* product price */}
            <div className="flex gap-3">
              <div className="text-md font-medium text-black">
                MRP: ₹{price}
              </div>
              <div className="text-md font-medium text-black/[0.5] line-through">
                ₹13000
              </div>
            </div>
            {/* <div className="text-md font-medium text-green-500 mb-1">
              10% off
            </div> */}
            <div className="text-md font-medium text-black/[0.5] mb-5">
              incl. of all taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-10">
              Size: UK {size}
            </div>

            <div>
              <div className="text-lg font-bold my-3">Product Details</div>
              <div className="text-md mb-5">
                Introducing the sensational {product.title}, a true masterpiece
                of footwear innovation that will elevate your style and take
                your fashion game to extraordinary heights! Prepare to be
                captivated by the sheer brilliance and unparalleled
                craftsmanship of this remarkable creation.
              </div>
              <div className="text-md mb-5">
                Feast your eyes on the sleek and modern design that seamlessly
                blends timeless aesthetics with contemporary trends. The
                striking silhouette of our shoe exudes confidence and charisma,
                instantly turning heads wherever you go. Every curve and line
                has been carefully sculpted to create a harmonious balance
                between style and functionality. Step into a world of unrivaled
                comfort with the plush interior of our shoe. The luxuriously
                soft and breathable materials caress your feet, providing a
                heavenly sensation with every step. It's like walking on clouds,
                ensuring that you feel refreshed and energized throughout the
                day. But it's not just about comfort and style; our shoe is
                engineered for peak performance. The cutting-edge technology
                incorporated into its design ensures optimal support, stability,
                and flexibility. Whether you're strolling through city streets
                or conquering the dance floor, our shoe will be your reliable
                companion, empowering you to conquer any challenge with grace
                and confidence.
              </div>
            </div>

            {!isItemPresentInCartHandler(product) ? (
              <button
                className="w-full py-4 rounded-full bg-black text-white text-lg font-medium duration-200 transition-transform active:scale-90 mb-3 hover:opacity-75"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="inline-flex justify-center w-full py-4 rounded-full bg-black text-white text-lg font-medium duration-200 transition-transform active:scale-90 mb-3 hover:opacity-75">
                <NavLink to="/cart">Go to Cart</NavLink>
              </div>
            )}

            {!isItemPresentinWishlistHandler(product) ? (
              <button
                className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-90 duration-200 mb-3"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </button>
            ) : (
              <NavLink to="/wishlist">
                <button className="inline-flex justify-center w-full py-4 rounded-full border border-black text-black text-lg font-medium duration-200 transition-transform active:scale-90 mb-3 hover:opacity-75">
                  Go to wishlist
                </button>
              </NavLink>
            )}
          </div>
          {/* right column ends */}
          {/* <RelatedProducts /> */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
