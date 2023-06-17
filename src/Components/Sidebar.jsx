import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { FilterContext } from "../contexts/FilterContext";

const Sidebar = ({ categories, brands }) => {
  const {
    sortInput,
    dispatch,
    categoryInput,
    genderInput,
    filterProducts,
    ratingInput,
    brandInput,
  } = useContext(FilterContext);

  return (
    <>
      <div className="flex-[0.5]">
        <div className="sticky top-[100px]">
          <div className="flex justify-between mb-3">
            <div className="text-lg font-bold flex justify-between">
              <div>
                <p>Filters</p>{" "}
              </div>
              <div className="hidden md:block">
                <HiAdjustmentsVertical size={24} />
              </div>
            </div>
            <div className="text-lg font-bold">
              <button
                className="justify-center rounded-md bg-black/[0.7] px-2 py-1 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/[0.5]"
                onClick={() =>
                  dispatch({ type: "CLEAR_FILTER", payload: filterProducts })
                }
              >
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
                      readOnly
                      value={category}
                      checked={categoryInput.includes(category)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                      onClick={() =>
                        dispatch({
                          type: "GET_CATEGORY_DETAILS",
                          payload: category,
                        })
                      }
                    />
                    <label
                      htmlFor={category}
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
                      checked={brandInput.includes(brandName)}
                      readOnly
                      onClick={() =>
                        dispatch({
                          type: "GET_BRAND_DETAILS",
                          payload: brandName,
                        })
                      }
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                    />
                    <label
                      htmlFor={brandName}
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
                    // onClick={""}
                    id="men"
                    name="men"
                    type="checkbox"
                    value="men"
                    readOnly
                    checked={genderInput.includes("men")}
                    onClick={() =>
                      dispatch({ type: "GET_GENDER", payload: "men" })
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    htmlFor="men"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Men
                  </label>
                </div>
                <div className="flex md:items-center mt-1">
                  <input
                    // onClick={""}
                    id="women"
                    name="women"
                    type="checkbox"
                    value="women"
                    readOnly
                    checked={genderInput.includes("women")}
                    onClick={() =>
                      dispatch({ type: "GET_GENDER", payload: "women" })
                    }
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-full hover:bg-black/[0.05]"
                  />
                  <label
                    htmlFor="women"
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
                    checked={sortInput?.includes("LTH")}
                    onChange={() =>
                      dispatch({ type: "SORT_FILTER", payload: "LTH" })
                    }
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
                    checked={sortInput?.includes("HTL")}
                    onChange={() =>
                      dispatch({ type: "SORT_FILTER", payload: "HTL" })
                    }
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
              <span className="pr-2">
                <AiFillStar
                  size={20}
                  color="gold"
                  className="transition-transform duration-300"
                />
              </span>
              <p className="text-base font-semibold">{ratingInput}</p>
            </div>
            <div className="mt-1">
              <input
                id="minmax-range"
                type="range"
                min="1"
                max="5"
                step="1"
                value={ratingInput}
                onChange={(e) =>
                  dispatch({
                    type: "RATING_FILTER",
                    payload: e.target.value,
                  })
                }
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
