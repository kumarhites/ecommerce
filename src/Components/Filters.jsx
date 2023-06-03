import React from "react";

const Filters = () => {
  return (
    // <aside className="flex flex-col w-60 md:w-72  px-5 py-8 overflow-y-auto bg-white border-r-2 text-black">
    <>
      <div>
        <p className="text-lg font-semibold">Search</p>
        <input
          type="search"
          name="search"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[0.5px] focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 px-2"
          placeholder="Search"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6 border-t pt-2">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Filters</p>
          <button className="flex rounded-md bg-black/[0.5] px-3 py-px text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black/[0.3]">
            Clear filters
          </button>
        </div>
        <div className="mt-3 border-t pt-2">
          <p className="text-base font-semibold">Sort by price</p>
          <div className="flex justify-between">
            <label htmlFor="sort1" className="text-sm">
              <input type="radio" name="sort" id="sort1" className="mx-2" />
              Low to High
            </label>
            <label htmlFor="sort2" className="text-sm">
              <input type="radio" name="sort" id="sort2" className="mx-2" />
              High to Low
            </label>
          </div>
        </div>
        <div className="mt-3 border-t pt-2">
          <p className="text-base font-semibold">Sort by rating</p>
          <div className="flex justify-between text-sm font-medium">
            <p>1.0</p>
            <p>5.0</p>
          </div>
          <input
            type="range"
            name="range"
            id="range"
            min="1"
            max="5"
            className="w-full cursor-pointer appearance-none bg-slate-300 rounded-full h-1"
          />
        </div>
        <div className="mt-3 border-t pt-2">
          <p className="text-base font-semibold">Brands</p>
          <div className="flex flex-col w-full gap-1 mt-2">
            <label
              htmlFor="nike"
              className="cursor-pointer hover:bg-black/[0.05] py-2 rounded-lg font-semibold"
            >
              <input
                type="checkbox"
                name="nike"
                id="nike"
                className="mx-2 rounded-full"
              />
              Nike
            </label>
            <label
              htmlFor="Vans"
              className="cursor-pointer hover:bg-black/[0.05] py-2 rounded-lg font-semibold"
            >
              <input
                type="checkbox"
                name="Vans"
                id="Vans"
                className="mx-2 rounded-full"
              />
              Vans
            </label>
            <label
              htmlFor="Adidas"
              className="cursor-pointer hover:bg-black/[0.05] py-2 rounded-lg font-semibold"
            >
              <input
                type="checkbox"
                name="Adidas"
                id="Adidas"
                className="mx-2 rounded-full"
              />
              Adidas
            </label>
            <label
              htmlFor="Reebok"
              className="cursor-pointer hover:bg-black/[0.05] py-2 rounded-lg font-semibold"
            >
              <input
                type="checkbox"
                name="Reebok"
                id="Reebok"
                className="mx-2 rounded-full"
              />
              Reebok
            </label>
            <label
              htmlFor="Converse"
              className="cursor-pointer hover:bg-black/[0.05] py-2 rounded-lg font-semibold"
            >
              <input
                type="checkbox"
                name="Converse"
                id="Converse"
                className="mx-2 rounded-full"
              />
              Converse
            </label>
          </div>
        </div>
      </div>
    </>
    // </aside>
  );
};

export default Filters;
