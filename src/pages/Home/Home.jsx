import React, { useContext } from "react";
import Banner from "../../Components/Banner";
import Wrapper from "../../Components/Wrapper";
import { SiNike, SiReebok, SiPuma, SiJordan } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import ProductCard from "../../Components/ProductCard";
import GenderCard from "../../Components/GenderCard";
import Footer from "../../Components/Footer";
import mens from "../../assets/images/mens.jpg";
import womens from "../../assets/images/women.jpg";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";

const Home = () => {
  const { isLoading, trending } = useContext(ProductsContext);
  console.log(trending);
  return (
    <>
      <Banner />
      <Wrapper>
        {/* heading and paragraph starts */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-2xl md:text-4xl my-5 pt-5 font-semibold">
            Brands
          </div>
          <div>
            <ul className="flex flex-wrap justify-around">
              <li className="text-4xl md:text-5xl">
                <SiNike />
                <p className="text-base font-semibold">Nike</p>
              </li>
              <li className="text-4xl md:text-5xl">
                <SiPuma />
                <p className="text-base font-semibold">Puma</p>
              </li>
              <li className="text-4xl md:text-5xl">
                <CgAdidas />
                <p className="text-base font-semibold">Adidas</p>
              </li>
              <li className="text-4xl md:text-5xl">
                <SiReebok />
                <p className="text-base font-semibold">Reebok</p>
              </li>
              <li className="text-4xl md:text-5xl">
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
            trending.map(({ _id, title, price, trending, images: [{ src }] }) => (
              <ProductCard id={_id} title={title} price={price} image={src} trending={trending} key={_id}/>
            ))}
        </div>
        <h1 className="font-semibold text-3xl">Who are you shopping for?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-14 px-5 md:px-0">
          <GenderCard image={mens} gender={"Men"} />
          <GenderCard image={womens} gender={"Women"} />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
