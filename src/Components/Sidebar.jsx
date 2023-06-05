import React, {useState} from "react";
import {AiFillStar} from "react-icons/ai"

const Sidebar = ({categories, brands}) => {

  const [rangeValue, setRangeValue] = useState(1);
  const handleRangeInput = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <>
      <div className="flex-[0.5] ">
        <div className="sticky top-[100px]">
          <div className="flex justify-between mb-3">
            <div className="text-lg font-bold">Filters</div>
            <div className="text-lg font-bold">
              <button className="justify-center rounded-md bg-black/[0.7] px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/[0.5]">
                Clear all filters
              </button>
            </div>
          </div>
          {/* ctaegory selection */}
          <div className="border-t py-5">
            <p className="text-base font-semibold">Select a category</p>
            {categories.map(({ id, category }) => (
              <>
                <div className="mt-1" key={id}>
                  <div className="flex items-center">
                    <input
                      id={category}
                      name={category}
                      type="checkbox"
                      value={category}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                    />
                    <label
                      for={category}
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      {category}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* Brands selection */}
          <div className="border-t py-5 mt-3">
            <p className="text-base font-semibold">Shop by Brand</p>
            {brands.map(({ id, brandName }) => (
              <>
                <div className="mt-1" key={id}>
                  <div className="flex items-center">
                    <input
                      id={brandName}
                      name={brandName}
                      type="checkbox"
                      value={brandName}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                    />
                    <label
                      for={brandName}
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      {brandName}
                    </label>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* filter by gender */}
          <div className="border-t py-5">
            <p className="text-base font-semibold">Gender</p>
            <div className="mt-3">
              <div className="flex flex-col">
                <div className="flex md:items-center">
                  <input
                    id="men"
                    name="men"
                    type="checkbox"
                    value="men"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    for="men"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Men
                  </label>
                </div>
                <div className="flex md:items-center mt-1">
                  <input
                    id="women"
                    name="women"
                    type="checkbox"
                    value="women"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    for="women"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Women
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* sort by price */}
          <div className="border-t py-5">
            <p className="text-base font-semibold">Sort By Price</p>
            <div className="mt-3">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <input
                    id="sortByPriceLTH"
                    name="sortByPrice"
                    type="radio"
                    value="LTH"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    htmlFor="sortByPriceLTH"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Low to High
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="sortByPriceHTL"
                    name="sortByPrice"
                    type="radio"
                    value="HTL"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    htmlFor="sortByPriceHTL"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    High to Low
                  </label>
                </div>
              </div>
            </div>
          </div>
          {/* sort by rating */}
          <div className="border-t border-b py-5">
            <p className="text-base font-semibold">Sort By Rating</p>
            <div className="flex items-center">
              <p className="text-base font-semibold">{rangeValue}</p>
              <span className="px-2">
                <AiFillStar color="gold" />
              </span>
            </div>
            <div className="mt-1">
              <input
                id="minmax-range"
                type="range"
                min="1"
                max="5"
                step="1"
                value={rangeValue}
                onChange={(e) => handleRangeInput(e)}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
