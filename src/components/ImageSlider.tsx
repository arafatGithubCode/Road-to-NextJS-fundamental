"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="https://media.istockphoto.com/id/1357529193/photo/3d-rendering-of-a-cozy-living-room.jpg?s=612x612&w=is&k=20&c=GIdsHDI_HNatSTvgFLWf9W2-EGPUqjHWebqV0V2aEFE=" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1093686266/photo/furniture-on-flea-market-germany.webp?b=1&s=170667a&w=0&k=20&c=TtFiwGdIv5jGB3lQTwD-P8VPEi0iHuxzDLtkAXJlA3o=" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/1304422715/photo/beautiful-decorative-yellow-colored-handcrafted-wooden-hanging-garden-balcony-chairs.webp?b=1&s=170667a&w=0&k=20&c=aBKYG18FzjZEqiDso81q54EiEiOmME6iSwKr7-83f2g=" />
          </div>
          <div>
            <img src="https://media.istockphoto.com/id/168396361/photo/front-view-of-warehouse-and-cargo-shelf-xxxxxlarge.webp?b=1&s=170667a&w=0&k=20&c=m8rAIhLlKlh8SbVXtraumR9A1behhR-ACIcAFDVpfh4=" />
          </div>
        </Slider>
      </div>
    </>
  );
}
