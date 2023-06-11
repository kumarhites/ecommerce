import React, { useContext, useEffect } from "react";
import Banner from "../../Components/Banner";
import Wrapper from "../../Components/Wrapper";
import { SiNike, SiReebok, SiPuma, SiJordan } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import ProductCard from "../../Components/ProductCard";
import GenderCard from "../../Components/GenderCard";
import Footer from "../../Components/Footer";
import mens from "../../assets/images/mens.jpg";
import womens from "../../assets/images/women.jpg";
import { ProductsContext } from "../../contexts/ProductsContext";
import { FilterContext } from "../../contexts/FilterContext";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const Home = () => {
  const { trending, products } = useContext(ProductsContext);
  const { dispatch } = useContext(FilterContext);
  const navigate = useNavigate();
  //toast test

  useEffect(() => {
    dispatch({ type: "CLEAR_FILTER", payload: products });
  }, [dispatch, products]);
  // console.log(trending);
  return (
    <>
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
      <Banner />
      <Wrapper>
        {/* heading and paragraph starts */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-2xl md:text-4xl my-5 pt-5 font-semibold">
            Top Brands
          </div>
          {/* toast test */}

          <div>
            <ul className="flex flex-wrap justify-around ">
              <li
                className="text-4xl md:text-5xl cursor-pointer"
                onClick={() => {
                  dispatch({ type: "GET_BRAND_DETAILS", payload: "Nike" });
                  navigate("/products");
                }}
              >
                <SiNike />
                <p className="text-base font-semibold">Nike</p>
              </li>
              <li
                className="text-4xl md:text-5xl cursor-pointer"
                onClick={() => {
                  dispatch({ type: "GET_BRAND_DETAILS", payload: "Puma" });
                  navigate("/products");
                }}
              >
                <SiPuma />
                <p className="text-base font-semibold">Puma</p>
              </li>
              <li
                className="text-4xl md:text-5xl cursor-pointer"
                onClick={() => {
                  dispatch({ type: "GET_BRAND_DETAILS", payload: "Adidas" });
                  navigate("/products");
                }}
              >
                <CgAdidas />
                <p className="text-base font-semibold">Adidas</p>
              </li>
              <li
                className="text-4xl md:text-5xl cursor-pointer"
                onClick={() => {
                  dispatch({ type: "GET_BRAND_DETAILS", payload: "Reebok" });
                  navigate("/products");
                }}
              >
                <SiReebok />
                <p className="text-base font-semibold">Reebok</p>
              </li>
              <li
                className="text-4xl md:text-5xl cursor-pointer"
                onClick={() => {
                  dispatch({ type: "GET_BRAND_DETAILS", payload: "Jordan" });
                  navigate("/products");
                }}
              >
                <SiJordan />
                <p className="text-base font-semibold">Jordan</p>
              </li>
            </ul>
          </div>
        </div>
        {/* heading and paragraph ends */}
        <h1 className="font-semibold text-3xl">Trending</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {trending &&
            trending.map((trending) => (
              <ProductCard data={trending} key={trending._id} />
            ))}
        </div>
        <h1 className="font-semibold text-3xl">Who are you shopping for?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-14 px-5 md:px-0">
          <div
            onClick={() => {
              dispatch({ type: "GET_GENDER", payload: "men" });
              navigate("/products");
            }}
          >
            <GenderCard image={mens} gender={"Men"} />
          </div>

          <div
            onClick={() => {
              dispatch({ type: "GET_GENDER", payload: "women" });
              navigate("/products");
            }}
          >
            <GenderCard image={womens} gender={"Women"} />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
