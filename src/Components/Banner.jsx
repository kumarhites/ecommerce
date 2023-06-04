import React from "react";
import { NavLink } from "react-router-dom";
import BannerImg from "../assets/images/banner.png";

function Banner() {
  return (
    <div className="md:mt-6 relative top-[50px] md:top-[60px] text-[20px] w-[90vw] max-w-[1360px] mx-auto rounded-lg flex justify-center items-center overflow-hidden bg-blue-400 flex-wrap">
      <div className="flex flex-col p-16 gap-5">
        <h1 className="text-white text-3xl md:text-5xl font-semibold">
          Get your perfect <br />
          <span className="text-5xl md:text-7xl font-primary font-normal">
            KICKS.
          </span>
        </h1>
        <NavLink
          to="/products"
          className="rounded-md max-w-max bg-blue-600 px-5 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 hover:text-white hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Shop Now
        </NavLink>
      </div>
      <div className="">
        <img
          src={BannerImg}
          alt=""
          className="aspect-[16/10] md:aspect-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

export default Banner;
