"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Carousel = ({children}) => {    
    return (
        <div>
          <Slider {...settings}>
            {children}
          </Slider>
        </div>
    );
}

export default Carousel;