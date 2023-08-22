import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BigCarousel.css"; // Import custom CSS styles
import AOS from "aos";
import "aos/dist/aos.css";

const BigCarousel = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false} // Hide the small images at the bottom
        showArrows={true} // Hide default arrows
        autoPlay={false} // Autoplay the carousel
        infiniteLoop={true} // Infinite looping of slides
        interval={5000} // Set autoplay interval (in milliseconds)
      >
        <div className="carousel-slide">
          <img
            src="https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80"
            alt="Image 1"
            className="carousel-image"
          />
          <div className="flex flex-col">
            <p className="carousel-text">Liveable Luxury</p>
            <p className="carousel-text2">Combining Extraordinary </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            alt="Image 2"
            className="carousel-image"
          />

          <div className="flex flex-col">
            <p className="carousel-text">Liveable Luxury</p>
            <p className="carousel-text2">Combining Extraordinary </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://plus.unsplash.com/premium_photo-1681031465676-995faaaac5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1144&q=80"
            alt="Image 2"
            className="carousel-image"
          />

          <div className="flex flex-col">
            <p className="carousel-text">Liveable Luxury</p>
            <p className="carousel-text2">Combining Extraordinary </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.unsplash.com/photo-1531114181037-5e61a592cf2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Image 2"
            className="carousel-image"
          />

          <div className="flex flex-col">
            <p className="carousel-text">Liveable Luxury</p>
            <p className="carousel-text2">Combining Extraordinary </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2118&q=80"
            alt="Image 2"
            className="carousel-image"
          />

          <div className="flex flex-col">
            <p className="carousel-text">Liveable Luxury</p>
            <p className="carousel-text2">Combining Extraordinary </p>
          </div>
        </div>
        {/* Add more images and text as needed */}
      </Carousel>
    </div>
  );
};

export default BigCarousel;
