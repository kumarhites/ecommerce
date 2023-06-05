import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../index.css";

const ProductDetailsCarousel = ({ images }) => {
  return (
    <div
      className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[30px] mt-12">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        {images.map(({ id, src }) => (
          <img src={src} alt={id} key={id}/>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
