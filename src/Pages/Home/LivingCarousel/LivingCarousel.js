
import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./LivingCarousel.css";

import slide1 from '../../../Images/premium-villa.jpg';
import slide2 from '../../../Images/rajatower.jpg';
import slide3 from '../../../Images/water-lodge.jpg';
import slide4 from '../../../Images/mad-house.jpg';
import slide5 from '../../../Images/presidential-villa.jpg';

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
    return (
      <div className="main-carousel">
        <Slider {...settings}>
          <div className="single-slide">
            <img src={slide1} alt="" />
            <h2>Premium Villa</h2>
          </div>
          <div className="single-slide">
            <img src={slide2} alt="" />
            <h2>Raja Tower</h2>
          </div>
          <div className="single-slide">
            <img src={slide3} alt="" />
            <h2>Water Lodge</h2>
          </div>
          <div className="single-slide">
            <img src={slide4} alt="" />
            <h2>Ancient Mud House</h2>
          </div>
          <div className="single-slide">
            <img src={slide5} alt="" />
            <h2>Presidential Villa</h2>
          </div>
        </Slider>
      </div>
    );
    }
}