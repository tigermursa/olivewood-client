import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopBrands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:  window.innerWidth <= 768 ? 2 : 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 6000, // Autoplay speed in milliseconds (adjust as needed)
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  const imageUrls = [
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-3.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-4.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-2.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-1.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-3.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-1.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-3.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-4.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-2.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-1.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-3.png",
    "https://wphix.com/html/blackwood-prv/blackwood/assets/img/brand/brand-1.png",
  ];

  return (
    <div className="flex flex-col justify-center mx-auto mt-20 mb-20 pc-width" >
      <div className="mx-auto text-3xl font-extrabold mb-5 ">our top brands</div>
      <Slider {...settings}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="">
            <img
              src={imageUrl}
              alt={`Brand ${index + 1}`}
              style={{ width: "150px" }}
              className="mx-auto border"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrands;
