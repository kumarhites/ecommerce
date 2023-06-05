import React, { useContext, useEffect, useState } from "react";
import Wrapper from "../../Components/Wrapper";
import ProductDetailsCarousel from "../../Components/ProductDetailsCarousel";
// import RelatedProducts from "../../Components/RelatedProducts";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState();
  const [sizeError, setSizeError] = useState(false)
  const { id } = useParams();
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

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
  } = product;

  const handleAddToCart = () => {
    if(!selectedSize){
      setSizeError(true);
      return;
    }
    addToCart(product, selectedSize)
  }

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

  return (
    <div className="w-full md:py-20">
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
            <div className="text-lg font-semibold">{brand}</div>
            <div className="text-[34px] font-semibold mb-1">{title}</div>

            {/* product subtitle */}
            <div className="text-base font-semibold mb-5">{categoryName}</div>

            {/* product price */}
            <div className="flex gap-3">
              <div className="text-md font-medium text-black">
                MRP: ₹{price}
              </div>
              <div className="text-md font-medium text-black/[0.5] line-through">
                ₹2500
              </div>
            </div>
            <div className="text-md font-medium text-green-500 mb-1">
              10% off
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              incl. of all taxes
            </div>

            {/* product size range start */}
            <div className="mb-10">
              {/* heading start */}
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">
                  Select size
                </div>
              </div>
              {/* heading ends */}
              {/* size selection starts */}
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(({ id, size }) => (
                  <div
                    key={id}
                    className={`border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer ${selectedSize === size ? "border-black" : ""}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                  >
                    UK {size}
                  </div>
                ))}
                
              </div>
              {sizeError ? (<span className="text-sm font-semibold text-red-600">Select a  size!</span>) : ("")}
              {/* size selection ends */}
            </div>
            {/* add to cart button start */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium duration-200 transition-transform active:scale-90 mb-3 hover:opacity-75"
              onClick={() => handleAddToCart()}
            >
              Add to Cart
            </button>
            {/* add to cart button ends */}

            {/* add to wishlist starts */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-90 duration-200 mb-3 hover:opacity-">
              Add to Wishlist
            </button>
            {/* add to wishlist ends */}

            <div>
              <div className="text-lg font-bold my-5">Product Details</div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati odio architecto inventore incidunt laborum itaque hic
                commodi, provident, et blanditiis similique voluptates ex nulla
                alias deleniti sunt facere? Soluta distinctio ut facere
                voluptatum rem sunt autem, earum labore consequatur, dolore
                deserunt esse suscipit debitis perferendis porro quos dolorem.
                Beatae, possimus?
              </div>
              <div className="text-md mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati odio architecto inventore incidunt laborum itaque hic
                commodi, provident, et blanditiis similique voluptates ex nulla
                alias deleniti sunt facere? Soluta distinctio ut facere
                voluptatum rem sunt autem, earum labore consequatur, dolore
                deserunt esse suscipit debitis perferendis porro quos dolorem.
                Beatae, possimus?
              </div>
            </div>
          </div>
          {/* right column ends */}
        </div>
        {/* <RelatedProducts /> */}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
