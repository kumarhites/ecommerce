import React from "react";
import Wrapper from "../../Components/Wrapper";
import ProductDetailsCarousel from "../../Components/ProductDetailsCarousel";
import RelatedProducts from "../../Components/RelatedProducts";

const ProductDetails = () => {
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
            <ProductDetailsCarousel />
          </div>
          {/* left column ends */}

          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <div className="text-[34px] font-semibold mb-1">Jordan&apos;s</div>

            {/* product subtitle */}
            <div className="text-lg font-semibold">Men&apos;s golf shoes</div>
            <div className="text-sm font-semibold mb-5">⭐⭐⭐⭐⭐</div>

            {/* product price */}
            <div className="flex gap-3">
              <div className="text-md font-medium text-black">MRP: ₹2000</div>
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
                <div className="text-md font-semibold">Select size</div>
              </div>
              {/* heading ends */}
              {/* size selection  starts*/}
              <div className="grid grid-cols-3 gap-2">
                {sizes.map(({ id, size }) => (
                  <div
                    key={id}
                    className="border rounded-lg text-center py-3 font-medium hover:border-black cursor-pointer"
                  >
                    UK {size}
                  </div>
                ))}
              </div>
              {/* size selection ends */}
            </div>

            {/* add to cart button start*/}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium duration-200 transistion-transform active:scale-90 mb-3 hover:opacity-75">
              Add to Cart
            </button>
            {/* add to cart button ends */}

            {/* add to wishlist starts */}
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transistion-transform active:scale-90 duration-200 mb-3 hover:opacity-">
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
        <RelatedProducts />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
